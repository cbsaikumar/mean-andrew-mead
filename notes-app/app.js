import chalk from 'chalk';
import yargs from 'yargs';
import * as notes from './notes';

// console.log(chalk.blueBright.bgWhite.inverse('Hello World'));

// const input = process.argv;

// console.log(input);

yargs.version('1.1.0');

yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv)=>{
        notes.addNote(argv.title, argv.body);
    }
})

yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title:{
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv)=>{
        notes.removeNote(argv.title);
        console.log(chalk.bold.greenBright('Note removed!'));
    }
})

yargs.command({
    command: 'list',
    describe: 'List your notes',
    handler: ()=>{
        notes.listNotes().forEach(note => {
            console.log(chalk.bgGreen.white.bold(note.title))
            console.log(chalk.bold(note.body))
        });
    }
})

yargs.command({
    command: 'read',
    describe: 'Read a note',
    builder: {
        title:{
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv)=>{
        if(!notes.readNote(argv.title)) console.log(chalk.bold.bgRedBright('No note was found!'));
        else{
            console.log(chalk.italic.white.bgBlackBright.inverse(notes.readNote(argv.title).title));
            console.log(chalk.bold.greenBright(notes.readNote(argv.title).body));
            console.log(chalk.bold.greenBright('Note read done!'));
        }
    }
})

yargs.parse();
