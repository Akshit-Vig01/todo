const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://akshitvig48:2444666666@luci.gorswty.mongodb.net/?retryWrites=true&w=majority&appName=luci")

const todoSchema = mongoose.Schema({

    title: String,
    description: String,
    completed: Boolean

})
const todo = mongoose.model('todos', todoSchema);

module.exports = {
    todo
}