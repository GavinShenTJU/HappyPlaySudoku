package com.gavinshen.game.business;

import com.gavinshen.game.msg.SudokuMsg;
import com.gavinshen.game.util.RandomUtil;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class GameCore {
    private static final Map<SudokuMsg.ChallengeLevel, Float> _hideConfig = new HashMap<>();
    private static final int hideValue = 0;

    private GameCore() {
    }

    public static void init(Map<SudokuMsg.ChallengeLevel, Float> hideConfig) {
        _hideConfig.putAll(hideConfig);
    }


    private static List<Integer> genChessResult(int orderNum) {
        if (orderNum <= 0) {
            return null;
        }
        ArrayList<Integer> integers = new ArrayList<>();
        for (int i = 0; i < orderNum * orderNum; i++) {
            for (int j = 0; j < orderNum * orderNum; j++) {
                int index = i * orderNum * orderNum + j;
                //添加元素
                integers.add(index, index + 10);
            }
        }
        return integers;
    }

    public static List<Integer> genUserChessResult(int orderNum, SudokuMsg.ChallengeLevel challengeLevel) {
        if (_hideConfig.isEmpty() || !_hideConfig.containsKey(challengeLevel)) {
            return null;
        }

        float hideLevel = _hideConfig.get(challengeLevel);
        List<Integer> integers = genChessResult(orderNum);
        if (integers == null) {
            return null;
        }
        int allSize = integers.size();
        int hideNum = (int) Math.ceil(allSize * hideLevel);
        List<Integer> randNoRepeat = RandomUtil.getRandNoRepeat(0, allSize, hideNum);
        for (Integer index : randNoRepeat) {
            integers.set(index, hideValue);
        }
        return integers;
    }


}
