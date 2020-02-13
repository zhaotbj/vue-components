# UI组件的使用
```javascript
npm install atg-ui --save

// main.js
// 全局注册
import atgUi from 'atg-ui'
import 'atg-ui/dist/atg-ui.css'
Vue.use(atgUi)

// 局部注册
// components 

import {HmButton} from 'atg-ui'
Vue.component(HmButton.name, HmButton)
```

### 文件目录
```
├── dist npm发布的打包文件
├── examples 本地调试组件例子
├── packages npm包文件
├── vue.config.js webpack配置
```
### 配置ui组件库
```javascript
// vue.config.js
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

```
## package.json 配置
 打包  npm run lib
```json
 "private": false,
	"main":"dist/atg-ui.umd.min.js",
	"author":{
		"name":"今天又免费的午餐吗"
	},
  "scripts": {
		"lib":"vue-cli-service build --target lib packages/index.js"
  },
```

## 上传npm

配置完依赖包登录npm，前提npm的源必须是npm而不是淘宝的源。不然会上传不成功
### 查看npm的源

nrm ls
### 登录
npm login
### 发布
npm publish