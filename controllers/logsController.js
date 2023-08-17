const e = require('express')
const Logs = require('../models/logs')

module.exports.index = async (req,res) => {
    const logs = await Logs.find()
    res.render('Index', {logs} )
}

module.exports.new = (req, res) => {
    res.render('New')
}

module.exports.create = async (req,res) => {
    if (req.body.shipIsBroken === 'on') {
        req.body.shipIsBroken = true
    } else {
        req.body.shipIsBroken = false
    }
    try{
        await Logs.create(req.body)
        res.redirect('/logs')
    }catch(error){
        console.error(error)
        res.status(404).send('Server Error')
    }
    


}

module.exports.show = async (req,res) => {
    const log = await Logs.findById(req.params.id)
    res.render('Show', {log})
}
