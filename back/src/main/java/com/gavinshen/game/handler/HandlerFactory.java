package com.gavinshen.game.handler;

import com.gavinshen.game.util.PackageUtil;
import com.google.protobuf.GeneratedMessageV3;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.lang.reflect.Method;
import java.lang.reflect.Modifier;
import java.util.HashMap;
import java.util.Map;
import java.util.Set;

public final class HandlerFactory {
    /**
     * 日志对象
     */
     private static final Logger LOGGER = LoggerFactory.getLogger(HandlerFactory.class);

    /**
     * 处理器字典
     */
     private static final Map<Class<?>, IHandler<? extends GeneratedMessageV3>> _handlerMap = new HashMap<>();

    /**
     * 私有化类默认构造器
     */
    private HandlerFactory() {
    }

    /**
     * 初始化
     */
    public static void init() {
        LOGGER.info("==== 完成 Cmd 和 Handler 的关联 ====");

        // 获取包名称
        final String packageName = HandlerFactory.class.getPackage().getName();
        // 获取所有的 ICmdHandler 子类
        Set<Class<?>> clazzSet = PackageUtil.listSubClazz(
                packageName,
                true,
                IHandler.class
        );

        for (Class<?> clazz : clazzSet) {
            if ((clazz.getModifiers() & Modifier.ABSTRACT) != 0) {
                // 如果是抽象类,
                continue;
            }

            // 获取方法数组
            Method[] methodArray = clazz.getDeclaredMethods();
            // 消息类型
            Class<?> msgType = null;

            for (Method currMethod : methodArray) {
                if (!currMethod.getName().equals("doHandler")) {
                    // 如果不是 handle 方法,
                    continue;
                }

                // 获取函数参数类型
                Class<?>[] paramTypeArray = currMethod.getParameterTypes();

                if (paramTypeArray.length < 2 ||
                        paramTypeArray[1] == GeneratedMessageV3.class || // 这里最好加上这个判断
                        !GeneratedMessageV3.class.isAssignableFrom(paramTypeArray[1])) {
                    continue;
                }

                msgType = paramTypeArray[1];
                break;
            }

            if (null == msgType) {
                continue;
            }

            try {
                // 创建指令处理器
                IHandler<?> newHandler = (IHandler<?>) clazz.newInstance();

                LOGGER.info(
                        "关联 {} <==> {}", msgType.getName(), clazz.getName()
                );

                _handlerMap.put(msgType, newHandler);
            } catch (Exception ex) {
                LOGGER.error(ex.getMessage(), ex);
            }
        }
    }

    /**
     * 创建指令处理器工厂
     *
     * @param msgClazz 消息类
     * @return 指令处理器
     */
    public static IHandler<? extends GeneratedMessageV3> create(Class<?> msgClazz) {
        if (null == msgClazz) {
            return null;
        }

        return _handlerMap.get(msgClazz);
    }
}
