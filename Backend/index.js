const express = require"express"
const connection = require"./db";



const app = express;
app.useexpress.json;

    

app.get"/",req,res=>{
    res.send"Home Page"
}



app.listen4500,async=>{
    try {
        await connection;
        console.log"connected to DB";
    } catch error {
        console.logerror;
    }
    
    console.log"Server is running at port 4500";
}