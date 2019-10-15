const fs = require('fs')
const chalk = require('chalk')

const addNote = (title, body) => {
    const notes = loadNotes()
    const duplicateNotes = notes.filter(note => note.title === title)

    if (duplicateNotes.length === 0) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.green.inverse('New note added!'))
    }else {
        console.log(chalk.red.inverse('Note already exists'))
    }
}

const removeNote = (title) => {
    const notes = loadNotes()
    const notesUpdated = notes.filter( note => note.title !== title)

    if (notes.length > notesUpdated.length) {
        console.log(chalk.green.inverse('Note removed!'))
        saveNotes(notesUpdated)
    } else {
        console.log(chalk.red.inverse('No note found!'))
    }
}

const listNotes = () => {
    const notes = loadNotes()
    console.log(chalk.inverse('Your notes:'))
    notes.forEach( note => {
        console.log(chalk.blue(note.title))
        console.log(chalk.blue(note.body))
    })
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }
}

module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes
}