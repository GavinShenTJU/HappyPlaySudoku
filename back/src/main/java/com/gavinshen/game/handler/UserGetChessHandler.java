package com.gavinshen.game.handler;

import com.gavinshen.game.msg.SudokuMsg;
import io.netty.channel.ChannelHandlerContext;

import java.util.ArrayList;

public class UserGetChessHandler implements IHandler<SudokuMsg.UserGetChessCmd> {

    @Override
    public void doHandler(ChannelHandlerContext ctx, SudokuMsg.UserGetChessCmd cmd) {
        if (null == ctx || null == cmd) {
            return;
        }

        // 从指令对象中获取用户 Id 和英雄形象
        int userId = cmd.getUserId();
        int orderNum = cmd.getOrderNum();
        int challLevelValue = cmd.getChallLevelValue();


        // 构建结果并发送
        SudokuMsg.UserGetChessResult.Builder resultBuilder = SudokuMsg.UserGetChessResult.newBuilder();
        resultBuilder.setUserId(userId);
        ArrayList<Integer> integers = new ArrayList<>();
        for (int i = 0; i < orderNum * orderNum; i++) {
            for (int j = 0; j < orderNum * orderNum; j++) {
                int index = i * orderNum * orderNum + j;
                integers.add(index, index + 10);
            }
        }
        resultBuilder.addAllChessArray(integers);

        SudokuMsg.UserGetChessResult newResult = resultBuilder.build();
        ctx.writeAndFlush(newResult);
    }
}
