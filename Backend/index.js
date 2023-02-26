<<<<<<< HEAD
const express = require"express"
const connection = require"./db";



const app = express;
app.useexpress.json;

    

app.get"/",req,res=>{
    res.send"Home Page"
}
=======
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
app.use(cors({origin:"*"}))

    
app.get("/",(req,res)=>{
    res.send("Home Page")
})
>>>>>>> dbca2b790d3a818d575f5b4712e2fd789324c99c

app.use("/users", userRoute)
app.use("/mens", mensRoute)
app.use("/womens", womenRoute)
app.use("/kids", kidRoute)
app.use("/cart", cartRoute)


<<<<<<< HEAD
app.listen4500,async=>{
=======
app.listen(process.env.port,async()=>{
>>>>>>> dbca2b790d3a818d575f5b4712e2fd789324c99c
    try {
        await connection;
        console.log"connected to DB";
    } catch error {
        console.logerror;
    }
    
<<<<<<< HEAD
    console.log"Server is running at port 4500";
}
=======
    console.log(`Server is running at port ${process.env.port}`);
})
>>>>>>> dbca2b790d3a818d575f5b4712e2fd789324c99c
