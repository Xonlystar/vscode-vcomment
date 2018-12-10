# vcomment插件使用配置指南
## 配置参数
默认的配置如下，更改默认配置有两种方法
- 1、可在设置界面找到：`拓展` -> `vcomment配置`然后修改对应的内容即可。
- 2、在setting.json中自定义修改对应的字段项。
```json
"vcomment": {
  "func": {
    "show": true,
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
配置的各项说明如下：
- func 函数注释的描述配置
- author 作者配置
- date 日期配置
- param 函数的参数配置
### 支持的文件类型
目前，插入注释支持以下语言/文件格式：
- vue
- javascript
## 用法
使用组合“Shift + Alt + D”，这将为当前选定的行添加注释。
## 计划的功能
- 注释添加返回值return情况
- 支持更多的语言
- 在已经是注释的行上使用命令时，请勿添加注释标记
