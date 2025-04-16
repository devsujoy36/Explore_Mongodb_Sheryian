const mongoose = require('mongoose');

mongoose.connect(`mongodb://127.0.0.1:27017/exploremongodb`);

const userSchema = mongoose.Schema({
    name: String,
    username: String,
    email: String,
    password: String,
})

module.exports = mongoose.model("user", userSchema)


/**
 * First you need to import mongoose
 * then you create a connection 
 * then create the userSchema
 * then module.exports = mongoose.model("user", userSchema) 
*/



