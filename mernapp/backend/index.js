const express = require('express');
const app = express();
const port = 8000;
const mongoDB = require('./db')
mongoDB();
app.use(express.json());







app.get("/",(req,res)=>{
    res.send("hello ")
});

app.use("/api",require("./Routes/CreateUser"));

app.listen(port ,()=>{
    console.log('connected')
})
