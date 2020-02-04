const path = require('path')
module.exports = {
    pages:{
    //    修改项目的入口文件
        index:{
            entry:"examples/main.js",
            template:"public/index.html",
            filename:"index.html"
        }
    },
    // 扩展webpack配置， 是packages加入编译
    chainWebpack:config=>{
        config.module.rule('js').include.add(path.resolve(__dirname,'packages')).end()
        .use('babel').loader('babel-loader').tap(options=>{
            // 修改它的选项
            return options
        })
    },
    devServer: {
        overlay: {
            warnings: false,
            errors: false
        }
    },
    lintOnSave: false
}