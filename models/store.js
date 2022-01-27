const mongoose = require("mongoose");
const storeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: "this field can't be empty!"
    },
    address: {
        type: String,
        required: "this field can't be empty!"
    },
    phone: {
        type: String,
        required: "this field can't be empty!"
    }
});
module.exports = mongoose.model("Store", storeSchema);
