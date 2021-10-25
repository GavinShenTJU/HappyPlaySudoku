// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

export default interface IBaseMsg {
    msgCode: string;
    msgBody: any;
}

export default class BaseMsg implements IBaseMsg {
    msgCode: string;
    msgBody: any;

    constructor(msgCode: string, msgBody: any) {
        this.msgCode = msgCode;
        this.msgBody = msgBody;
    }
}