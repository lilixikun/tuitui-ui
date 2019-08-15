# tuitui-ui
自定义前端UI样式库

## Node.js+ Npm +Npx
#### Npx是执行Node.js插件的工具，它可以执行npm包中包含的命名
#### Npx-v
如果发现没有npx，可以执行 npm i npx -g
项目目录下执行 npm init生成pack.json 文件

## postcss
它可以被理解为一个平台，可以让一些插件在上面跑 它提供了一个解析器，可以将CSS解析成抽象语法树 通过PostCSS这个平台，我们能够开发一些插件，来处理CSS。热门插件如autoprefixer
### npm install -g postcss-cli 
### 执行 npx postcss src/tuitui-ui.css -o dist/tuitui-ui.css 测试一下 
可以看到在根目录下生成了一个dits目录,里面就是生成的tuitui-ui. 但是命名行里面会提醒你，没有使用任何插件，最后生成的文件基本没有处理,只是在文件的最后加了个sourceMapping。
## 对@Import的处理
这里要使用"postcss-import"插件，这个插件可以把@Import的处理方式引入的本地路径转变成这个路径里的css语句。这样处理后，所以的文件样式就会被集中到目标文件里,@Import只剩下一个远程的路径,项目本地的@Import就没有了。

安装插件
### npm install postcss-import

执行命名

### npx postcss src/tuitui-ui.css -o dist/tuitui-ui.css -u postcss-import --no-map
"-u postcss-import"是表示在使用 postcss处理文件时使用postcss-import插件 --no-map去掉文件后面的sourceMapping信息

## 对兼容性处理 Autoprefixer 

### npm i autoprefixer@9.6.1 -D
安装后使用插件
### npx postcss src/tuitui-ui.css -o dist/tuitui-ui.css -u postcss-import autoprefixer --no-map

## 压缩css
安装插件
### npm i cssnano@4.1.10 -D
执行命名
### npx postcss src/tuitui-ui.css -o dist/tuitui-ui.min.css -u postcss-import autoprefixer cssnano --no-map





