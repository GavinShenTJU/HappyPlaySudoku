package com.gavinshen.game.handler;

import com.gavinshen.game.business.GameCore;
import com.gavinshen.game.msg.SudokuMsg;
import io.netty.channel.ChannelHandlerContext;

import java.util.List;

public class UserGetChessHandler implements IHandler<SudokuMsg.UserGetChessCmd> {

    @Override
    public void doHandler(ChannelHandlerContext ctx, SudokuMsg.UserGetChessCmd cmd) {
        if (null == ctx || null == cmd) {
            return;
        }

        // 从指令对象中获取用户 Id 和英雄形象
        int userId = cmd.getUserId();
        int orderNum = cmd.getOrderNum();
        SudokuMsg.ChallengeLevel challLevel = cmd.getChallLevel();


        // 构建结果并发送
        SudokuMsg.UserGetChessResult.Builder resultBuilder = SudokuMsg.UserGetChessResult.newBuilder();
        resultBuilder.setUserId(userId);
        List<Integer> integers = GameCore.genUserChessResult(orderNum, challLevel);
        if (integers == null) {
            return;
        }

        resultBuilder.addAllChessArray(integers);
        SudokuMsg.UserGetChessResult newResult = resultBuilder.build();
        ctx.writeAndFlush(newResult);
    }
}
