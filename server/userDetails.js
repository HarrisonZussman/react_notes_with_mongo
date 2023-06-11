const mongoose = require("mongoose");

const UserDetailsScehma= new mongoose.Schema(
    {
        fname:String,
        email:String,
        lname:String,
        password:String,
    },
    {
        collection: "UserInfo",
    }
);

mongoose.model("UserInfo", UserDetailsScehma)