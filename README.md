# HappyPlaySudoku
好玩的数独小游戏，hello

1.代码管理： github，项目名称：HappyPlaySudoku

2.前端：cocos creator javascript - 场景

   后端：java idea

3.项目功能：

- 主功能区：难度选择(n阶，难度：4级)，开始按钮，重置按钮，清除按钮
- 游戏区： n阶棋盘
- 数字选择区：1~n^2数字选择，完成按钮
- 其他：暂不需要

4.前后端交互：

- 采用长链接，webscoket，netty框架
- 前后端交互的消息：
  - 创建棋盘消息
- 填数字交互：先选位置，然后选择数字
- 点击完成按钮后，前端校验。
