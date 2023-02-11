const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    action: {
        type: String,
        required: [true, "User field text required"],
    },
});

const User = mongoose.model('user', UserSchema);

module.exports = User;