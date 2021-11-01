package com.gavinshen.game.util;

import java.util.ArrayList;
import java.util.List;
import java.util.Random;

public class RandomUtil {

    /**
     * 随机生成范围内n个不重复随机数
     *
     * @param startRange 开始范围(包含)
     * @param endRange   结束返回(不包含)
     * @param totalNum   随机数个数
     * @return
     */
    public static List<Integer> getRandNoRepeat(int startRange, int endRange, int totalNum) {
        int size = endRange - startRange;
        List<Integer> result = new ArrayList<>();
        Random ran = new Random();
        while (result.size() < totalNum) {
            int val = ran.nextInt(size) + startRange;
            if (!result.contains(val)) {
                result.add(val);
            }
        }
        return result;
    }
}
