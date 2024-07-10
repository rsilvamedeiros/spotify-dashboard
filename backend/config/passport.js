const SpotifyStrategy = require('passport-spotify').Strategy;
const passport = require('passport');
const keys = require('./keys');
const User = require('../models/User');

passport.use(
    new SpotifyStrategy(
        {
            clientID: keys.spotifyClientID,
            clientSecret: keys.spotifyClientSecret,
            callbackURL: keys.spotifyCallbackURL,
        },
        async (accessToken, refreshToken, expires_in, profile, done) => {
            try {
                let user = await User.findOne({ spotifyId: profile.id });

                if (!user) {
                    user = new User({
                        spotifyId: profile.id,
                        displayName: profile.displayName,
                        email: profile.emails[0].value,
                        accessToken,
                        refreshToken,
                    });
                    await user.save();
                } else {
                    user.accessToken = accessToken;
                    user.refreshToken = refreshToken;
                    await user.save();
                }

                const payload = {
                    id: user.id,
                    displayName: user.displayName,
                    email: user.email,
                };

                done(null, payload);
            } catch (err) {
                console.error(err);
                done(err, null);
            }
        }
    )
);

passport.serializeUser((user, done) => {
    done(null, user);
});

passport.deserializeUser((obj, done) => {
    done(null, obj);
});
