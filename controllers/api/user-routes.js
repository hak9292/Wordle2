const router = require('express').Router();
const { User } = require('../../models');


// Sign UP
router.post('/', async (req, res) => {
    try {
        const userData = await User.create({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
        });

        req.session.save(() => {
            req.session.loggedIn = true;
            res.status(200).json(userData);
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err).send;
    }
});

//Login
router.post('/login', async (req, res) => {
    try {
        // look in database to find the user matching this username
        const userData = await User.findOne({
            where: {
                username: req.body.username,
            },
        });

        console.log(userData);
        if (!userData) {
            res.status(400).json({ message: 'Incorrect username or password'});
            return;
        }
        
        const correctPassword = await userData.checkPassword(req.body.password);

        console.log(correctPassword);
        if (!correctPassword) {
            res.status(400).json({ message : 'Incorrect username or password'});
            return;
        }

        //if both username and password are correct, start session
        req.session.save(() => {
            req.session.loggedIn = true;

            res.status(200).json({ user : userData, message : 'Successful login'});
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err).send;
    }
});

// Log out / destroy session
router.post('/logout', (req, res) => {
    if (req.session.loggedIn) {
        req.session.destroy(() => {
            res.status(204).end();
        });
    } else {
        res.status(404).end();
    }
});

module.exports = router;