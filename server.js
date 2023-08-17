const express = require('express');

// require('dotenv').config()

// const mongoConfig = require('./config');
// mongoConfig() 
const app = express()

const PORT = 8080;

const jsxEngine = require('jsx-view-engine')
app.set('view engine', 'jsx')
app.engine('jsx', jsxEngine())

app.get('/', (req,res)=>{
    res.render('new');
})

app.listen(PORT, () => {
    console.log('Listening on port: ' + PORT)
})