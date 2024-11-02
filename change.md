# 修改记录

> 原项目的***三分钟***开箱即用显然是不可能的，本人折腾这东西至少半天也就是六小时了。

## 1

`.github\workflows\gen.yml`（文件名自选，这里是gen，代表***生成***），github自动化配置文件，需要加入`permissions: write-all`，参见`template\main.yml`模板。没有这行不能更新部署，原版只有template模板文件夹的`yml`文件示例有这行，`.github`文件夹里面的没有。

## 2

同样是`.github\workflows\gen.yml`，触发分支需要改成实际使用的分支，如果是fork的那么是`source`，如果是import导入的可能是`main`，具体看实际情况，配置和模板文件所在分支。

```yaml
on:
  push:
    branches:
      - main
```

自动化生成的静态网页可以放在同一个分支，也可以单独开一个分支，比如本仓库的`pages`分支。具体会放在哪个分支取决于`src\.vuepress\custom.js`文件的`pushBranch: "pages"`写的是什么。

## 3

博客页面右侧，有一个“总览”的按钮，默认链接是写死的根目录`'/'`，也就是域名后面没有路由。

如果博客网址是`abc.github.io`还好，如果是`abc.github.io/blog`这种，会跳转到`abc.github.io`，这大部分时候不是我们想要的。按下面修改可以把链接改成实际博客地址，用的是相对路径，也就是`custom.js`文件写的`base: "/Issue-Blog/"`，这里我用的是`Issue-Blog`作为库名和路由路径。

```vue
name: '总览',
count,
desc: `共发布了 ${count} 篇文章。`,
link: this.$site.base
```

## 4

原版使用`github-v4`评论，不登录看不到评论，修改为`github-v3`可以解决（二者各有优劣），这里应该是有很多方法的，我给出我摸索的办法。

1. 删除`pnpm-lock.yaml`锁文件
2. 修改`package.json`文件，把`@vssue/api-github-v4`改成`@vssue/api-github-v3`
3. 修改`src\.vuepress\config.js`，把`platform: "github-v4"`改成`platform: "github"`

这样可以在不必设置本地开发环境的情况下，修改依赖，不然得把库clone下来折腾pnpm。

如果想重新使用v4，两个文件改回去就行了，锁文件不用管。

## 5

其他还有一些小坑，比如按教程配置`custom.js`，用户名和库名要区分大小写，如果主库（`<your-github-name>.github.io`）配置了自定义域名，`customDomain: ""`可以不填

