const { Schema } = require("mongoose");
const mongoose = require("mongoose");

const COLLECTION_NAME = "News";

const newSchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        address: {
            type: String,
            required: true
        },
        phone: {
            type: String,
            required: true
        },
        identity: {
            type: String,
            required: true
        },
        role: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true,
        collection: COLLECTION_NAME,
    }
);

module.exports = mongoose.model(COLLECTION_NAME, newSchema);