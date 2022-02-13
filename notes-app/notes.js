const fs = require('fs')
const chalk = require('chalk')

const addNote = (title, body) => {
    const notes = loadNotes()
    const duplicateNote = notes.find((note) =>  note.title === title)

    debugger

    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.green.inverse('New note added!'))
    } else {
        console.log(chalk.red.inverse('Note title taken!'))
    }
}

const removeNote = (title) => {
    const notes = loadNotes()
    console.log('hello')
    const newNotes = notes.filter(note => note.title !== title)
    if (newNotes.length == notes.length){
        console.log(chalk.bgRed('No note found!'))
    } else{
        console.log(chalk.bgGreen('Note removed!'))
    }
    saveNotes(newNotes)
}

const listNotes = () => {
    const notes = loadNotes()
    console.log(chalk.red("Your notes"))
    notes.forEach( (note) => console.log(chalk.green(note.title)))
}

const readNote = (title) => {
    const notes = loadNotes()
    const note = notes.find((note) => note.title === title)
    
    if (note) {
        console.log(chalk.green(note.title))
        console.log(note.body)
    }
    else {
        console.log(chalk.red("Note not found!"))
    }
}


const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = () => {
    try{
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch(e) {
        return []
    }
}



module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}