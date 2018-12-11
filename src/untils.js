const vscode = require('vscode')
const os = require('os')
let newline = os.platform() === 'win32' ? '\r\n' : '\r'
let config = vscode.workspace.getConfiguration("vcomment")
const { formatDate } = require('./date')

module.exports = {
  Insert: (editor, result = []) => {
    return new Promise((resolve, reject) => {
      if (vscode.window !== undefined && editor !== undefined) {
        let active = editor.selection.active
        result.map((text, index) => { 
          let insertPosition = new vscode.Position(active.line + index, active.character)
          let content = index === result.length - 1 ? text : text + newline
          editor.insertSnippet(new vscode.SnippetString(content), insertPosition)
        })
      }
      resolve()
    })
  },
  getParams: (editor) => {
    let result = []
    if (vscode.window !== undefined && editor !== undefined) {
      // 设置评论的主体
      result.push('/**')
      let func = (config && config.func) || {}
      result.push(`* ${func.prefix ? func.prefix + ' ' : ''}${func.default}`)
      result.push(`* ${config.author.prefix} ${config.author.name}`)
      let date = formatDate(new Date(), config.date.format)
      result.push(`* ${config.date.prefix} ${date}`)

      // 获取函数代码块内容
      let active = editor.selection.active
      let positionStart = new vscode.Position(active.line, active.character)
      let positionEnd = new vscode.Position(editor.document.lineCount, 0)
      let content = editor.document.getText(new vscode.Range(positionStart, positionEnd)) || ''
      content = content.slice(content.indexOf('(') + 1, content.indexOf(')'))
      if (content && content.trim()) {
        let arr = content.split(',')
        arr.map((value) => {
          let val = value ? value.trim() : value
          let index = val.indexOf('=')
          if (!!~index) {
            val = val.slice(0, index)
            val && (val = val.trim())
          }
          result.push(`* ${config.param.prefix} ${val} ${config.param.intro}`)
        })
      }
      // if (!!~content.indexOf('return')) {
      //   result.push(`* ${config.returns.prefix}`)
      // }
      result.push('*/')
    }
    return result
  },
  getDate (date, fmt) {

  }
}
