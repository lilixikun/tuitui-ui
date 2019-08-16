/*
 * @Author: kun.xi 
 * @Date: 2019-08-16 14:31:51 
 * @Last Modified by: xikun
 * @Last Modified time: 2019-08-16 14:36:00
 */

/**
 * 1.npm工具只能只能通过js来引入包,不能直接用css引用其他插件
 * 
 * 2.在index.js中引用css文件,这种引用方式只有在像webpack这种可以把css当做js模块来处理的工具才可以使用,如果是其他情况就要手动的
 * 路径去引用css
 *
 */ 

import 'font-awesome/css/font-awesome.min.css';
import './dist/tuitui-ui.min.css';