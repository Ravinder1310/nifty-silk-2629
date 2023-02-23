const fs = require('fs');

const record = (req, res, next) => {
    if(req.method === "PATCH"){
        next()
        const id = req.params.id
        fs.appendFileSync("./records.txt", `The dish with id:${id} has been updated | ${date.getDay()} ${date.getMonth()} ${date.getDate()} ${date.getFullYear()} ${date.getTime()}.\n`)
    }else if(req.method === "DELETE"){
        next()
        const id = req.params.id
        fs.appendFileSync("./records.txt", `The dish with id:${id} has been deleted | ${date.getDay()} ${date.getMonth()} ${date.getDate()} ${date.getFullYear()} ${date.getTime()}. \n`)
    }
}

module.exports={
    record
}