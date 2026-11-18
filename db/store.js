const fs = require('fs');
const util = require('util');
const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);
const { randomUUID } = require('crypto');

class Store {

    read (){
        return readFileAsync('db/db.json', 'utf8');
    }

    write (note){
        return writeFileAsync('db/db.json', JSON.stringify (note));
    }

    getNotes (){
        return this.read().then((notes)=>{
            let parsedNotes;
            try{
                parsedNotes = [].concat(JSON.parse(notes));
            }catch (err){
                console.log(err);
                parsedNotes = []
            }
            
            return parsedNotes;
        })
    }

    addNote (note){
        this.getNotes().then((notes)=>{
            note.id = randomUUID();
            notes.push(note);
            this.write(notes);
        })
        return this.getNotes();
    }
    
    removeNote(id){
        return this.getNotes().then((notes)=>{
            let remainingNotes = notes.filter(note => note.id !== id);
            return this.write(remainingNotes);
        })
    }
}

module.exports = new Store();