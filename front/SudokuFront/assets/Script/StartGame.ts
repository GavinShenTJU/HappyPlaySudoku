// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import DropDown from "./DropDown/DropDown";
import ModelAsyc from "./Utils/_Async";
import ModelConfig from "./Utils/_Config"

const { ccclass, property } = cc._decorator;

@ccclass
export default class GameStart extends cc.Component {

    @property(cc.Label)
    label: cc.Label = null;

    @property
    text: string = 'hello';

    onLoad() {
        this.node.on("touchstart", this.onTouch, this);
    }

    onTouch() {
        let self = this;
        ModelAsyc.serial(
            (test1) => { self.doCheckParams(); test1(); },
            (test2) => { self.doStart(); test2(); }
        );

        let config: ModelConfig = new ModelConfig();
        console.log(config.serverAddress);
    }

    // update (dt) {}

    doCheckParams() {
        console.log(1);
    }

    doStart() {
        //let startNode: cc.Node = cc.find('Canvas/游戏开始');
        //if (startNode) {
        //let startBtn: cc.Button = startNode.getComponent(cc.Button);
        let node: cc.Node = cc.find('Canvas/难度选择').getChildByName('下拉列表');
        if (node) {
            console.log(node.getComponent(DropDown).selectedIndex);
        }

        let orderNode: cc.Node = cc.find('Canvas/阶数选择').getChildByName('阶数');
        if (orderNode) {
            console.log(orderNode.getComponent(cc.EditBox).string);
        }
        //}
    }
}
