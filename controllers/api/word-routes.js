const router = require('express').Router();
const sequelize = require('sequelize');
const { Words } = require('../../models');


// get random word in the list
router.get('/getWord', async (req, res) => {
    try {
        const currentWord = await Words.findOne({ 
            order: sequelize.literal('rand()')
        });
        res.status(200).json(currentWord);
        
    } catch (err) {
        console.log(err);
        res.status(500).json ({ message: 'Error retrieving word'});
    }
});

module.exports = router;