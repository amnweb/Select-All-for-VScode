// The module 'vscode' contains the VS Code extensibility API
const vscode = require('vscode');

/**
 * This method is called when extension is activated.
 * Your extension is activated the very first time the command is executed.
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
    console.log('Congratulations, extension "Select All" is now active!');

    let disposable = vscode.commands.registerCommand('extension.select-all', function () {
        vscode.window.showInformationMessage('Select All Extension');
    });

    context.subscriptions.push(disposable);
}
/**
 * This method is called when extension is deactivated.
 */
function deactivate() {
    // Clean up any resources or disposables here if needed
}

module.exports = {
    activate,
    deactivate
};