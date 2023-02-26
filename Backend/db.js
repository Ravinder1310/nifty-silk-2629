<<<<<<< HEAD
const mongoose = require"mongoose";
mongoose.set'strictQuery', true;

const connection = mongoose.connect"mongodb+srv://deepak:deepak@cluster0.v8v1xak.mongodb.net/ajio?retryWrites=true&w=majority";
=======
const mongoose = require("mongoose");
require('dotenv').config()
mongoose.set('strictQuery', true);

const connection = mongoose.connect(process.env.mongo_URL);
>>>>>>> dbca2b790d3a818d575f5b4712e2fd789324c99c

module.exports={
    connection
};