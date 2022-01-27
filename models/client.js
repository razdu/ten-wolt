const mongoose = require("mongoose");
const clientSchema = new mongoose.Schema({
    name: {
        type: String
    },
    address: {
        type: String
    },
    isVip: {
        type: Boolean,
        default: false
    },
    phone: {
        type: String
    }
});
const client = mongoose.model("Client", clientSchema);
module.exports = client;
