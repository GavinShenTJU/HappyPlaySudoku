package com.gavinshen.game.handler;

import com.google.protobuf.GeneratedMessageV3;
import io.netty.channel.ChannelHandlerContext;

public interface IHandler<TCmd extends GeneratedMessageV3> {
    void doHandler(ChannelHandlerContext ctx, TCmd cmd);
}
