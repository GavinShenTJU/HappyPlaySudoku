// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

export default class ModelConfig {
    private _serverAddress: string = 'localhost:9100';
    public get serverAddress(): string {
        return this._serverAddress;
    }
    public set serverAddress(value: string) {
        this._serverAddress = value;
    }
}