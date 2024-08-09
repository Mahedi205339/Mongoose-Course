const mongoose = require("mongoose");
const User = require("./Users");

mongoose.connect("mongodb://localhost/testdb")


run()
async function run() {
    const user = new User({ name: " kyle", age: 23 })
    await user.save()
    console.log(user);
}

