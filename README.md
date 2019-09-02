
## 变更记录
0.0.4
- 【Bug Fix】修复Article组件中图片不居中的问题。

0.0.3
- 【Add】增加展开组件Accordion组件
- 【Add】增加webpack打包js

0.0.2
- 【Add】Panel组件的标题部分添加“查看更多”这种引导链接的样式。
- 【Bug Fix】Search 组件指定 z-index，解决和有定位元素同时使用时的层级错乱问题。

0.0.1
- 【Add】发布组件


## 说明
本插件依赖font-awesome@4.7.0，安装本插件的同时也会安装font-awesome。在使用本UI样式库的时候可以直接引用对应的CSS文件：

import 'font-awesome/css/font-awesome.min.css';
import 'tuitui-ui/css/tuitui-ui.min.css';


同时，本插件已经使用js文件打包了两个css文件，在支持CSS模块的项目里也可以像下面这样直接引用插件：

import 'tuitui-ui';



