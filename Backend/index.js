const express = require("express")
const connection = require("./db");



const app = express();
app.use(express.json());

    

app.get("/",(req,res)=>{
    res.send("Home Page")
})



app.listen(process.env.port,async()=>{
    try {
        await connection;
        console.log("connected to DB");
    } catch (error) {
        console.log(error);
    }
    
    console.log(`Server is running at port 4500 ${process.env.port}`);
})