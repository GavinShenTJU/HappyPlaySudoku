// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import DropDown from "./DropDown/DropDown";
import ModelAsyc from "./Utils/_Async";
import ModelConfig from "./Utils/_Config"
import ModelUtil from "./Utils/_Util"
import ModelMsgSender from "./Utils/_MsgSender"
import { sudokumsg } from "./Lib/SudokuMsg";

const { ccclass, property } = cc._decorator;

@ccclass
export default class GameStart extends cc.Component {


    config: ModelConfig = new ModelConfig();

    onLoad() {



        let ob = { userId: 123 };



        let request = sudokumsg.UserGetChessCmd.create(ob);
        let buf = sudokumsg.UserGetChessCmd.encode(request).finish();
        cc.log(buf);
        this.node.on("touchstart", this.onTouch, this);
    }
    // start() {
    // }
    // update (dt) {}

    onTouch() {
        //let self = this;
        let strServerAddr = ModelUtil.getQueryStr("serverAddr") || this.config.serverAddress;
        ModelAsyc.serial(
            //
            //000，连接服务器
            (funCb000) => {
                console.log(`连接到服务器 = ${strServerAddr}`);
                ModelMsgSender.init(`ws://${strServerAddr}/websocket`);

                ModelMsgSender.connect((bSuccess) => {
                    if (bSuccess) {
                        funCb000();//继续往下执行
                    }
                });

                //定时重试连接
                setInterval(() => {
                    if (ModelMsgSender.isDisconnected) {
                        ModelMsgSender.connect(null);
                    }
                }, 2000);
            },

            //
            //001, 校验参数
            (funCb001) => {
                console.log(`校验参数`);
                if (this.doCheckParams()) {
                    funCb001();
                }
                else {
                    this.doFailedCheckParams();
                }
            },

            //
            //002,
            (funCb002) => {
                console.log(`获取棋盘`);
                this.doStart();
                funCb002();
            }
        );
    }

    /**
     * 参数校验
     * @returns 是否通过 
     */
    doCheckParams(): boolean {
        console.log(1);
        return true;
    }

    /**
     * 参数校验不通过，需要处理的一些事情
     */
    doFailedCheckParams() {
        console.log(2);
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
