
//glob.sync，函数的第一个参数是pattern，就是要匹配的文件的的模式，第二个参数是可选的option对象，最重要的是这个函数的返回值，
//是一个string类型的数组！string就是所有满足pattern的文件名。

const path = require("path");
const glob = require("glob")

module.exports = {
    mode: "development", //打包为开发模式

    /**
     * 方式一
     * entry:["./demo/accordion",   "./demo/action-sheet.js"]
    */
    entry: glob.sync('./demo/js/*.js'),
    output: {
        //输出路径和文件名，使用path模块resolve方法将输出路径解析为绝对路径
        path: path.resolve(__dirname, "./dist"), //将js文件打包到dist/js的目录
        filename: "tuitui-ui.js"
    }
}
