const mongoose = require("mongoose");
mongoose.set('strictQuery', true);

const connection = mongoose.connect(process.env.mongo_URL);

module.exports={
    connection
};