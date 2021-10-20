// import all the things we need  
const GoogleStrategy = require('passport-google-oauth20').Strategy
const { google_config } = require("./config");


module.exports = function (passport) {
  passport.use(
    new GoogleStrategy(
      google_config,
      async (accessToken, refreshToken, profile, done) => {

        //get the user data from google 
        const newUser = {
          name: profile.displayName,
          image: profile.photos[0].value,
          email: profile.emails[0].value
        }


        console.log("24 newUser", newUser);

        try {

          let user = 100;

          if (user) {
            //If user present in our database.
            done(null, user)
          } else {
            // if user is not preset in our database save user data to database.
            //user = await User.create(newUser)
            done(null, user)
          }
        } catch (err) {
          console.error(err)
        }
      }
    )
  )
}
