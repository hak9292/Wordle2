const router = require('express').Router();
const { multiply } = require('lodash');
const sequelize = require('sequelize');
const { Words } = require('../../models');


// get random word in the list
router.get('/getWord', async (req, res) => {
    try {
        const currentWord = await Words.findOne({ 
            order: sequelize.literal('rand()')
        });
        res.status(200).json(currentWord.word);
        
    } catch (err) {
        console.log(err);
        res.status(500).json ({ message: 'Error retrieving word'});
    }
});
router.post('/checkWord', async (req, res) => {
    try {
        console.log(req.body.reqWord);
        const checkWord = await Words.findOne({ where: { word: req.body.reqWord } });
        var result = 0;
        if (checkWord) {
            result = 1;
        }
        res.status(200).json(result);
    } catch (err) {
        console.log(err);
        res.status(500).json ({ message: 'Error retrieving word'});
    }
});
module.exports = router;