
const Logs = require('../models/logs')

module.exports.index = async (req,res) => {
    try{
        const logs = await Logs.find()
        res.render('Index', {logs} )
       
    }catch(error){
        console.log(error.message)
        
    }   
}

module.exports.show = async (req,res) => {
    const log = await Logs.findById(req.params.id)
    res.render('Show', {log}) 
}


module.exports.new = (req, res) => {
    res.render('new')
}

module.exports.create = async (req, res) => {
    req.body.shipIsBroken = (req.body.shipIsBroken === 'on') 
    try {
        await Logs.create(req.body)
    } catch(err) {
        console.log(err.message)
    }
    res.redirect('/logs')
}

module.exports.edit = async (req,res) => {
    try {
        const log = await Logs.findById(req.params.id)
        res.render('Edit', {log})
    }catch(error){
        console.log(error.message)
        res.send('Broken page')
    }
}

module.exports.update = async (req,res) => {
    req.body.shipIsBroken = (req.body.shipIsBroken === 'on');
    try{
        await Logs.findByIdAndUpdate(req.params.id,{...req.body}, {new:true})
        res.redirect(`/logs`)
    }catch(error){
        console.log(error.message)
    }
}

module.exports.delete = async (req, res) => {
    try {
        await Logs.findByIdAndDelete(req.params.id)
    } catch(err) {
        console.log(err.message)
    }
    res.redirect('/logs')
}



