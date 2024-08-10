const mongoose = require("mongoose");
const User = require("./Users");

mongoose.connect("mongodb://localhost/testdb")


run()
async function run() {
    const user = new User({
        name: " kyle",
        age: 23,
        hobbies: ['Fishing', "Traveling", "Soccer"],
        address:{
            street:"lane 2",
            city: "Dhaka"
        }
    })
    user.name = "Sally"
    await user.save()
    console.log(user);
}

