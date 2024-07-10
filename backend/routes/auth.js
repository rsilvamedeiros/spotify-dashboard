const express = require('express');
const passport = require('passport');
const authController = require('../controllers/authController');
const auth = require('../middleware/auth');

const router = express.Router();

router.get(
    '/spotify',
    passport.authenticate('spotify', {
        scope: ['user-read-email', 'user-read-private'],
    })
);

router.get(
    '/spotify/callback',
    passport.authenticate('spotify', { failureRedirect: '/' }),
    authController.spotifyCallback
);

router.get('/user', auth, authController.getUser);

router.get('/logout', authController.logout);

module.exports = router;
