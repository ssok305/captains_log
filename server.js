const express = require('express');

require('dotenv').config()

const mongoConfig = require('./config');
mongoConfig() 


const app = express()

const PORT = 8080;

const jsxEngine = require('jsx-view-engine')
app.set('view engine', 'jsx')
app.engine('jsx', jsxEngine())


const methodOverride = require('method-override')
app.use(methodOverride('_method'))
app.use(express.urlencoded({extended: true}))

app.get('/', (req,res)=>{
    res.render('new');
})

app.post('/logs', (req,res)=>{  
    if (req.body.shipIsBroken === 'on') {
        req.body.shipIsBroken = true
    } else {
        req.body.shipIsBroken = false
    }
    res.send(req.body)
 
})

app.listen(PORT, () => {
    console.log('Listening on port: ' + PORT)
})