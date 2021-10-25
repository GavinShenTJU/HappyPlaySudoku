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
}