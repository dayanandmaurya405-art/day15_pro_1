const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
        unique: true
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    city: {
        type: String,
        default: "Gorkhapur"
    },
    age: {
        type: Number
    }
}, {
    timestamps: true
});

module.exports = mongoose.model("Student", studentSchema);