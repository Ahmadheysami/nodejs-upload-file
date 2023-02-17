const path = require('path');


const express = require('express');
const morgan = require('morgan');
const expressLayout = require('express-ejs-layouts');
const dotEnv = require('dotenv');
const fileUpload = require('express-fileupload')

const app = express()
const { env } = require('process');
// dot env config
dotEnv.config({
    path: "./config/config.env"
})
// morgan
if (env.NODE_ENV == "development") morgan("tiny");

// express file upload
app.use(fileUpload())

// ejs layouts
app.set("layout", path.join(__dirname, "views", "layouts", "mainLayout.ejs"))
// ejs config
app.set("view engine", "ejs")

// routes
app.use(require('./routes/index'))
app.listen(env.PORT, () => console.log(`server running on port ${env.PORT}`))