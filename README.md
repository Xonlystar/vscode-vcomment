# 这是一个注释插件
使用 Shift + Alt + D 开始你的注释
当然你也可以在配置文件里经行自己的配置
```js
"vcomment": {
  "func": {
    "show": true,
    // "prefix": "@func",
    "prefix": "",
    "default": "your description"
  },
  "author": {
    "show": true,
    "prefix": "@author",
    "name": "your name",
  },
  "date": {
    "show": true,
    "prefix": "@date",
    "format": "yyyy/MM/dd"
  },
  "param": {
    "show": true,
    "prefix": "@param {Object}",
    "intro": "your introduction"
  }
}
```
