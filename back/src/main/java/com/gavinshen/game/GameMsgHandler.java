package com.gavinshen.game;

import com.gavinshen.game.handler.HandlerFactory;
import com.gavinshen.game.handler.IHandler;
import com.google.protobuf.GeneratedMessageV3;
import io.netty.channel.ChannelHandlerContext;
import io.netty.channel.SimpleChannelInboundHandler;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class GameMsgHandler extends SimpleChannelInboundHandler<Object> {
    /**
     * 日志对象
     */
    static private final Logger LOGGER = LoggerFactory.getLogger(GameMsgHandler.class);

    @Override
    public void channelActive(ChannelHandlerContext ctx) throws Exception {
        super.channelActive(ctx);
    }

    @Override
    public void handlerRemoved(ChannelHandlerContext ctx) throws Exception {
        super.handlerRemoved(ctx);
    }

    @Override
    protected void channelRead0(ChannelHandlerContext ctx, Object msg) throws Exception {
        // 获取消息类
        Class<?> msgClazz = msg.getClass();

        LOGGER.info("收到客户端消息, msgClazz = {}, msg = {}",
                msgClazz.getName(),
                msg);

        // 获取指令处理器
        IHandler<? extends GeneratedMessageV3>
                cmdHandler = HandlerFactory.create(msgClazz);

        if (null == cmdHandler) {
            LOGGER.error(
                    "未找到相对应的指令处理器, msgClazz = {}",
                    msgClazz.getName()
            );
            return;
        }

        // 处理指令
        cmdHandler.doHandler(ctx, cast(msg));
    }

    /**
     * 转型消息对象
     *
     * @param msg    消息对象
     * @param <TCmd> 指令类型
     * @return 指令对象
     */
    private static <TCmd extends GeneratedMessageV3> TCmd cast(Object msg) {
        if (!(msg instanceof GeneratedMessageV3)) {
            return null;
        } else {
            return (TCmd) msg;
        }
    }
}
