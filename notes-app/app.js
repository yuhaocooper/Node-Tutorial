const notesExport = require('./notes')
const chalk = require('chalk')

const msg = notesExport()
console.log(msg)

const chalkMsg = chalk.red('Hello', chalk.bold.bgYellow('Hell'))
console.log(chalkMsg)