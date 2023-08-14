module.exports = {
  beforeCompile: (context) => {
    context.outputChannel.appendLine(Object.keys(context));
    context.vscode.window.showErrorMessage('12134');
    return { a: 'lowcode' };
  },
  afterCompile: (context) => {
    context.outputChannel.appendLine(Object.keys(context));
  },
};
