
//import mongoose
const mongoose = require("mongoose");


//route handler
const commentSchema = new mongoose.Schema({
    //kis post pr comment kr rhe ho
    post : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Post"  //reference to the post model
    },
    //kon comment kr rha hai
    user : {
        type : String,
        required : true
    },
    //kya comment kr rha hai
    body : {
        type : String,
        required : true,
    }
});


//export
module.exports = mongoose.model("Comment", commentSchema);