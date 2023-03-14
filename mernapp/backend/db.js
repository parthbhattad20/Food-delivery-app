const mongoose = require("mongoose");

const mongoDB = async () =>{
    mongoose.connect("mongodb://localhost:27017/FOODAPP").then(() => {
    console.log("Connected to Database");
}).catch((err) => {
    console.log("Not Connected to Database ERROR! ", err);
},
       

);

}



module.exports = mongoDB;