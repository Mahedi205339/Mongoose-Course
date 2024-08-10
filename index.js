// const mongoose = require("mongoose");
// const User = require("./Users");

// mongoose.connect("mongodb://localhost/testdb")


// run()
// async function run() {
//     const user = new User({ name: " kyle", age: 23 })
//     await user.save()
//     console.log(user);
// }

const mongoose = require("mongoose");
const User = require("./Users");

mongoose.connect("mongodb://localhost/testdb")
    .then(() => console.log("Connected to MongoDB"))
    .catch(err => console.error("Could not connect to MongoDB...", err));

run().catch(err => console.error("Error:", err));

async function run() {
    const user = new User({ name: "Kyle", age: 23 });
    await user.save();
    console.log(user);
}


