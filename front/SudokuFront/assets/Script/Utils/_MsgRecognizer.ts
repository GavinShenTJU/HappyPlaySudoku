// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import { sudokumsg } from "../Lib/SudokuMsg";
import IBaseMsg from "./_BaseMsg";

export default class MsgRecognizer {
    static _ogInnerKV = {};
    static nTmpIndex: number = -1;
    public static init(): void {
        this._ogInnerKV["USER_GET_CHESS_CMD"] = this._ogInnerKV[++this.nTmpIndex] = "UserGetChessCmd";
        this._ogInnerKV[this._ogInnerKV[this.nTmpIndex]] = sudokumsg.UserGetChessCmd;
        this._ogInnerKV["USER_GET_CHESS_RESULT"] = this._ogInnerKV[++this.nTmpIndex] = "UserGetChessResult";
        this._ogInnerKV[this._ogInnerKV[this.nTmpIndex]] = sudokumsg.UserGetChessResult;
    }

    public static recognize(oMsgCode: string): string {
        if (this.nTmpIndex == -1) {
            this.init();
        }

        return this._ogInnerKV[oMsgCode];
    }

    public static initProtoMsg(strMsgType: string): any {
        if (this.nTmpIndex == -1) {
            this.init();
        }

        return this._ogInnerKV[strMsgType];
    }

    /**
    * 将消息序列化为字节数组
    * @param oMsg 
    * @returns 
    */
    public static __makeUint8Arrary(oMsg: IBaseMsg): any {
        if (!oMsg || !oMsg.msgCode || !oMsg.msgBody) {
            return null;
        }

        // 获取消息代码
        let strMsgCode: string = oMsg.msgCode; // "0"
        let nMsgCode = sudokumsg.MsgCode[strMsgCode]; //"sudokumsg.MsgCode[strMsgCode];"

        // 获取消息类型
        let strMsgType: string = MsgRecognizer.recognize(nMsgCode);
        if (!strMsgType) {
            // 如果无法识别为消息类型,
            console.error(`无法识别为消息类型, msgCode = ${strMsgCode} ( ${nMsgCode} )`);
            return null;
        }

        //获取对应的 Protobuf 消息
        let oProtobufMsg = MsgRecognizer.initProtoMsg(strMsgType);
        if (!oProtobufMsg) {
            // 如果对应的 Protobuf 消息为空,
            console.error(`对应的 Protobuf 消息为空, strMsgType = ${strMsgType}`);
            return null;
        }

        let pbMsgCode: number = Number(strMsgCode).valueOf();
        let writer = sudokumsg.SuperUtils.GetWriter();
        //写消息编号
        writer.uint32((pbMsgCode >> 8) & 0xff);
        writer.uint32(pbMsgCode & 0xff);

        let oUnit8Array = oProtobufMsg
            .encode(oMsg.msgBody, writer)
            .finish();

        return oUnit8Array;
    }

    /**
     * 将字节数组反序列化为消息对象
     * @param oUint8Array 字节数组
     * @returns 
     */
    public static __makeMsgObj(oUint8Array: Uint8Array): IBaseMsg {
        if (!oUint8Array || !oUint8Array.length) {
            return null;
        }

        // 获取消息代码
        let nMsgCode: Number = (oUint8Array[0] & 0xFF) << 8
            | (oUint8Array[1] & 0xFF);

        let strMsgCode = nMsgCode.toString();
        let msgCode = sudokumsg.MsgCode[strMsgCode]; //"sudokumsg.MsgCode[strMsgCode];"

        // 获取消息类型
        let strMsgType: string = MsgRecognizer.recognize(msgCode);
        if (!strMsgType) {
            // 如果无法识别为消息类型,
            console.error(`无法识别为消息类型, msgCode = ${strMsgCode} ( ${msgCode} )`);
            return null;
        }

        //获取对应的 Protobuf 消息
        let oProtobufMsg = MsgRecognizer.initProtoMsg(strMsgType);
        if (!oProtobufMsg) {
            // 如果对应的 Protobuf 消息为空,
            console.error(`对应的 Protobuf 消息为空, strMsgType = ${strMsgType}`);
            return null;
        }

        // 反序列化消息体
        let oMsgBody = oProtobufMsg.decode(oUint8Array.slice(2));

        return {
            msgCode: strMsgCode,
            msgBody: oMsgBody,
        }
    }
}