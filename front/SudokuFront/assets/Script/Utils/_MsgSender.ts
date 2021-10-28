// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import IBaseMsg from "./_BaseMsg";
import { sudokumsg } from "../Lib/SudokuMsg";
import MsgRecognizer from "./_MsgRecognizer";

/**
 * 与服务端WebSocket协议通信
 */
export default class MsgSender {

    static _webSocketUrl: string = "";
    static _goWebSocket: WebSocket = null;

    /**
     * 初始化
     * @param strWebSocketUrl WebSocket 地址
     */
    public static init(strWebSocketUrl: string): void {
        console.log(`初始化消息发送者, webSocketUrl = ${strWebSocketUrl}`);
        this._webSocketUrl = strWebSocketUrl;
    }

    /**
     * 是否已经断开连接
     */
    static get isDisconnected(): boolean {
        return null == this._goWebSocket;
    }

    /**
     * 连接
     * @param funCb 回调函数
     * @returns 
     */
    public static connect(funCb) {
        if (this._goWebSocket) {
            return;
        }
        //创建 WebSocket
        let oWebSocket = new WebSocket(this._webSocketUrl);
        oWebSocket.binaryType = "arraybuffer";

        //打开连接后回调
        oWebSocket.onopen = (oEvent) => {
            console.log(`已连接服务器, webSocketUrl = ${this._webSocketUrl}`);
            this._goWebSocket = oWebSocket;

            // 确保回调函数不为空
            funCb = funCb || function () {
            };

            // 执行回调函数
            funCb(true);
        };

        //打开连接失败后回调
        oWebSocket.onerror = (oEvent) => {
            console.error(`连接服务器失败, webSocketUrl = ${this._webSocketUrl}`);
            this._goWebSocket = null;

            // 确保回调函数不为空
            funCb = funCb || function () {
            };

            // 执行回调函数
            funCb(false);
        };

        //连接被关闭后回调
        oWebSocket.onclose = (oEvent) => {
            console.warn("服务器连接已关闭");
            this._goWebSocket = null;
        }

        //获取的消息
        oWebSocket.onmessage = (oEvent) => {
            // 反序列化为消息对象
            // let oMsg = __makeMsgObj(new Uint8Array(oEvent.data));

            // if (!oMsg) {
            //     return;
            // }

            // console.log(`从服务器端返回数据, ${JSON.stringify(oMsg)}`);
            // // 触发事件函数
            // this.onReceiveMsg(oMsg);
        }
    }

    /**
     * 发送消息
     * @param oMsg 
     * @returns 
     */
    public static sendMsg(oMsg: IBaseMsg) {
        if (!oMsg ||
            !this._goWebSocket) {
            return;
        }

        // 序列化为字节数组
        let oUint8Array: any = this.__makeUint8Arrary(oMsg);
        if (!oUint8Array ||
            oUint8Array.byteLength <= 0) {
            return;
        }

        // 发送字节数组
        this._goWebSocket.send(oUint8Array);
    }

    /**
     * 接收消息对象
     * @param oMsg 消息对象
     */
    public static onReceiveMsg(oMsg: IBaseMsg) {
        console.log(oMsg);
    }

    public static __makeUint8Arrary(oMsg: IBaseMsg): any {
        if (!oMsg ||
            !oMsg.msgCode ||
            !oMsg.msgBody) {
            return null;
        }

        // 获取消息代码
        let strMsgCode: string = oMsg.msgCode;
        let nMsgCode = sudokumsg.MsgCode[strMsgCode];

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
}
