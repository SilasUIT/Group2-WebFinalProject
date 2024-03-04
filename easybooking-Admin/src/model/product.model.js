const { Schema } = require("mongoose");
const mongoose = require("mongoose");

const COLLECTION_NAME = "products";

const newSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        status: {
            type: String,
            default: "inactive",
            enum: ["active", "inactive"],
        },
        description: String,
        ordering: {
            type: Number,
            min: 1,
            default: 1,
        },
        avatar: {
            type: String,
        },
        slug: {
            type: String,
        },
        special: {
            type: Boolean,
            default: false,
        },
        type: {
            type: String,
        },
        price: {
            type: Number,
        },
        evaluation: {
            type: Number,
        },
        createdAt: {
            type: Date,
            default: Date.now,
        },
    },
    {
        timestamps: true,
        collection: COLLECTION_NAME,
    }
);

module.exports = mongoose.model(COLLECTION_NAME, newSchema);