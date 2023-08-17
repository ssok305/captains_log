const mongoose = require('mongoose');

const mongoConfig = async ()=> {
    try{
        const results = await mongoose.connect(process.env.MONGO_URL)
        console.log('Database connected: ', results.connection.host)
    }catch(error){
        console.error('Mongo error: ', error)
    }
}
module.exports = mongoConfig;