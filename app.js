const express = require("express")

const app = express();

app.use(express.json())

app.get("/hi",(req,res)=>{
    res.send({"message":"Hello world"})
});

const port = process.env.port || 3000;

app.listen(port,()=>{console.log("Started!!!")})
