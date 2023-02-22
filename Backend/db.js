const mongoose = require("mongoose");
mongoose.set('strictQuery', true);

const connection = mongoose.connect("mongodb+srv://deepak:deepak@cluster0.v8v1xak.mongodb.net/ajio?retryWrites=true&w=majority");

module.exports={
    connection
};