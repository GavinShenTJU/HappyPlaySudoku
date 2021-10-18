// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import DropDown from "./DropDown/DropDown";

const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Label)
    label: cc.Label = null;

    @property
    text: string = 'hello';

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        this.node.on("touchstart", this.onTouch, this);
    }

    onTouch() {
        let node: cc.Node = (cc.find('Canvas/难度选择').getChildByName('下拉列表'));
        let dropDown: DropDown = node.getComponent(DropDown);


        console.log(dropDown.selectedIndex);
        //dropDown.node.active=false;
    }

    // update (dt) {}
}
