const chalk = require('chalk')
const getNotes = require('./notes.js')

const msg = getNotes()
console.log(msg)

console.log(chalk.green.inverse.bold('Success!'))

//const add = require('./utils.js')
//const sum = add(4, -2)
//console.log(sum)