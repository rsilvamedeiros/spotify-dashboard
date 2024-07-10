const jwt = require('jsonwebtoken');
const keys = require('../config/keys');

exports.spotifyCallback = (req, res) => {
    const payload = {
        user: req.user,
    };

    jwt.sign(
        payload,
        keys.jwtSecret,
        { expiresIn: 3600 },
        (err, token) => {
            if (err) throw err;
            res.redirect(`http://localhost:3000/dashboard?token=${token}`);
        }
    );
};

exports.getUser = (req, res) => {
    res.json(req.user);
};

exports.logout = (req, res) => {
    req.logout();
    res.redirect('/');
};
