const mongoose = require("mongoose");
const orderSchema = new mongoose.Schema(
    {
        client: {
            type: mongoose.Types.ObjectId,
            ref: "Client",
            required: "this field can't be empty!"
        },
        store: {
            type: mongoose.Types.ObjectId,
            ref: "Store",
            required: "this field can't be empty!"
        }
    },
    {
        timestamps: true
    }
);
module.exports = mongoose.model("Order", orderSchema);
