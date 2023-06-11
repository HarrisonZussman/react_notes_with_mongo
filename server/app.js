const express = require("express");
const app = express();
const mongoose = require("mongoose");
const mongodb = require("mongodb");
app.use(express.json());
const cors = require("cors");
app.use(cors());

const mongoUrl = "mongodb+srv://harrisonfzussman:vHLD0zvGZJHXJ0vC@cluster0.s7nt6yt.mongodb.net/?retryWrites=true&w=majority";

mongoose
    .connect(mongoUrl, {
        useNewUrlParser: true
    })
    .then(() => {
        console.log("connected to database");
    })
    .catch(e => console.log(e));

require("./userDetails")

const User = mongoose.model("UserInfo")
app.post("/register", async (req, res) => {
    const { fname, lname, email, password } = req.body
    try {
        await User.create({
            fname,
            lname,
            email,
            password,
        });
        res.send({ status: "ok" })
    } catch (error) {
        res.send({ status: "Something went wrong try again" })
    }
    app.listen(5000, () => {
        console.log("server started");
    })
});

// });
// if (data == "Harrison") {
//     res.send({ status: "ok" })
// } else {
//     res.send({ status: "User Not Found" })
// }
