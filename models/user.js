const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    id: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    name :{ type: String, required: true }
});


module.exports = mongoose.model("User", UserSchema);
