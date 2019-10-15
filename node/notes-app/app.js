const chalk = require('chalk')
const yargs = require('yargs')
const noteUtils = require('./notes.js')

// Customize yargs version
yargs.version('1.1.0')

// Create add command 
yargs.command({
    command: 'add',
    describe: 'Add a new note.',
    builder: {
        title: {
            describe: 'Note title.',
            demandOption: true,
            type: 'string'
        },
        body: {
            decribe: 'Note body.',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        noteUtils.addNote(argv.title, argv.body)
    }
})

// Create remove command 
yargs.command({
    command: 'remove',
    describe: 'Remove note.',
    builder: {
        title: {
            describe: 'Note title.',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        noteUtils.removeNote(argv.title)
    }
})

// Create list command 
yargs.command({
    command: 'list',
    describe: 'List your notes.',
    handler() {
        console.log('Listing out all notes!')
    }
})

// Create read command
yargs.command({
    command: 'read',
    describe: 'Read a note',
    handler() {
        console.log('Reading a note!')
    }
})

yargs.parse()