const { Schema } = require("mongoose");
mongoose = require("mongoose");
const COLLECTION_NAME = "productcategory";

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
    slug:{
      type: String,
    },
    special: {
      type: Boolean, 
      default: true, 
    },
  },
  {
    timestamps: true,
    collection: COLLECTION_NAME,
  }
);

module.exports = mongoose.model(COLLECTION_NAME, newSchema);