const path = require('path');
const router = require('express').Router();
const store = require('../db/store');

router.get('/', (req, res) => {
    store.getNotes().then((notes) => {
        return res.json(notes);
    }).catch((err)=>{
        res.status(500).json(err);
    })
})

router.delete('/:id', (req, res) => {
    store.removeNote(req.params.id).then((notes) => {
        return res.json(notes);
    }).catch((err)=>{
        res.status(500).json(err);
    })
})

router.post('/', (req, res) => {
    store.addNote(req.body).then((notes) => {
        return res.json(notes);
    }).catch((err)=>{
        res.status(500).json(err);
    })
})

module.exports = router;