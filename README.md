# github pages

* 创建 
```
yarn create vite xs-idea-vue --template vue
```

* 仓库
```
git init
git remote add origin https://github.com/xsidea/web.git
```

* 扩展库
```
yarn add gh-pages -D
```

* vite.config.js
```
base: '/web/', // 部署到github上的路径
```
* package.json
```
"predeploy": "vite build",
"deploy": "gh-pages -d dist -r https://github.com/xsidea/web.git -b pages"
```
 