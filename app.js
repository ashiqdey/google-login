const express = require('express');
const dotenv = require('dotenv')
const passport = require('passport')
dotenv.config()

var app = express();
const PORT = process.env.PORT;



// Passport config
require('./config/passport')(passport)



// Middleware
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))

app.set('view engine', 'ejs');


// Passport middleware
app.use(passport.initialize())


app.use(require("./routes/index"))
app.use('/auth', require('./routes/auth'))





app.listen(PORT, console.log(`listening at ${PORT}`))
