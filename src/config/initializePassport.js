const localStartegy = require("passport-local");
const User = require("../models/User");
exports.initializingPassport = (passport) => {
  passport.use(
    new localStartegy(async (userName, password, done) => {
      try {
        const user = await User.findOne({ userName });
        if (!user) return done(null, false);
        if (user.password !== password) {
          return done(null, user);
        }
      } catch (error) {
        return done(err, false);
      }
    })
  );
  passport.serializeUser((user, done) => {
    done(null, user.id);
  });
};
