const router = require('express').Router();
const { User, Words } = require('../../models');


// get random word in the list
router.get('/', (req, res) => {
    Words.findOne
})