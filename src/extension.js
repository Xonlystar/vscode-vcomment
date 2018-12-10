const vscode = require('vscode')
const { getParams, Insert } = require('./untils')
function activate (context) {
    let disposable = vscode.commands.registerCommand('extension.comment', function () {
        const editor = vscode.window.activeTextEditor
        if (!vscode.window || !editor) {
          return
        }
        let result = getParams(editor)
        Insert(editor, result).then((res) => {
          // vscode.window.showInformationMessage('注释成功!')
        }).catch(err => vscode.window.showInformationMessage(`注释失败，原因：${err}`))
    })

    context.subscriptions.push(disposable)
}
exports.activate = activate

// this method is called when your extension is deactivated
function deactivate () {
}
exports.deactivate = deactivate