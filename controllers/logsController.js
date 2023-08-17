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
    res.send(req.body)


    }
