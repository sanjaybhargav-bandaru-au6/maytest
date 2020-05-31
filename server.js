const express = require('express')
const dotenv = require('dotenv')
const hbs = require('hbs');
const path = require('path')
const methodOverride = require("method-override");
const session = require("express-session");
const compRoute = require('./routes/companies_routes')

const app = express()

dotenv.config();
var PORT = process.env.PORT ||4040
require('./db')

app.use(express.json());
app.use(express.urlencoded({ extended:false }))

app.use(
    session({
        secret: "random1234",
        resave: false,
        name: "loginapp",
        saveUninitialized: false,
        cookie: {
            maxAge: 1000 * 60 * 30,
            httpOnly: true,
            secure: false,
            sameSite: "strict"
        }
    })
);

//set view engine
app.set('view engine','hbs');
app.set('views',path.join(__dirname,'views','pages'))

//set defaults engine
app.set('view options',{layout:'../layouts/defaults'})


//set partials
hbs.registerPartials(path.join(__dirname,'./' ,'views','partials'))
 
app.use(compRoute)

app.listen(PORT,()=>{
    console.log(`server started at ${PORT}`)
})