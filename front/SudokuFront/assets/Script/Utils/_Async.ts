// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
/**
 * 用于异步调用，回调方式
 */
export default class ModelAsync {
    public static serial(...oFunQ) {
        if (!oFunQ ||
            oFunQ.length <= 0) {
            return;
        }

        // 回调函数
        let funCb = () => {
            if (!oFunQ ||
                oFunQ.length <= 0) {
                return;
            }

            // 函数对象出队
            let funCurr = oFunQ.shift();

            if (!funCurr) {
                funCb();
                return;
            }

            // 将回调函数作为参数
            funCurr(funCb);
        };

        funCb();
    }
}