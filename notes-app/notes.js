import fs from 'fs';
import chalk from 'chalk';

export const addNote = (title, body) => {
    const currentNotes = loadNotes();
    const duplicates = currentNotes.find(note => note.title === title)
    debugger
    if(!duplicates){
        currentNotes.push({
            title,
            body
        });
        fs.writeFileSync('notes.json', JSON.stringify(currentNotes))
        console.log(chalk.greenBright('Note added!'));
    } else{
        console.log(chalk.greenBright('Title already taken!'))
    }
}

export const readNote = (title) => {
    return loadNotes().find((note)=>note.title === title)
}

export const removeNote = (title) => {
    const currentNotes = loadNotes();
    const newNotes = currentNotes.filter((note) => note.title !== title)
    fs.writeFileSync('notes.json', JSON.stringify(newNotes))
}

export const listNotes = () => {
    return loadNotes()
}

const loadNotes = () => {
    try{    
        return JSON.parse(fs.readFileSync('notes.json').toString());
    } catch(e){
        return [];
    }
}