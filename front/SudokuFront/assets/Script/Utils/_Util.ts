// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

export default class Util {
    /**
     * 获取查询参数
     * @param strName 参数名称
     * @returns 参数值
     */
    public static getQueryStr(strName: string): string {
        if (!strName) {
            return "";
        }

        // 截取页面参数
        var result = window.location.search.match(new RegExp("[\?\&]" + strName + "=([^\&]+)", "i"));
        if (result == null ||
            result.length < 1) {
            return "";
        }

        return result[1];
    }
}