const express = require("express")
const connection = require("./db");
const { userRoute } = require("./routes/User.route");
const { mensRoute } = require("./routes/Mens.route");
const { womenRoute } = require("./routes/Women.route");
const { kidRoute } = require("./routes/Kid.route");
const { cartRoute } = require("./routes/Cart.route");
require('dotenv').config()
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors())

    

app.get("/",(req,res)=>{
    res.send("Home Page")
})

app.use("/users", userRoute)
app.use("/mens", mensRoute)
app.use("/womens", womenRoute)
app.use("/kids", kidRoute)
app.use("/cart", cartRoute)


app.listen(process.env.port,async()=>{
    try {
        await connection;
        console.log("connected to DB");
    } catch (error) {
        console.log(error);
    }
    
    console.log(`Server is running at port ${process.env.port}`);
})