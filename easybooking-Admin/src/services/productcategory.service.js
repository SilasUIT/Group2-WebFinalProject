const mongoose = require("mongoose");
const slugify = require("slugify");
const ptcategoryModel = require("../model/productcategory.model");
const path=require('path');
const addItem = async (body) => {
  body.slug=slugify(body.name, { lower: true });
   await ptcategoryModel.create(body);
};
const getItems = async (status, keyword) => {
  let query = {};
  if (status === 'all') {
    query = {};
  } else if (status) {
    query.status = status;
  }
  if (keyword) {
    query.$or = [
      { name: new RegExp(keyword, 'i') },
      { description: new RegExp(keyword, 'i') }
    ];
  }
  return await ptcategoryModel.find(query);
};

const getItemById = async (id) => {
  return await ptcategoryModel.findById(id).exec();
};

const deleteItem = async (id) => {
  return await ptcategoryModel.deleteOne({ _id: new mongoose.Types.ObjectId(id) });
};

const updateItem = async (id, body) => {
  if (body.name) {
    body.slug = slugify(body.name, { lower: true });
  }
  await ptcategoryModel.findByIdAndUpdate(
    { _id: new mongoose.Types.ObjectId(id) },
    { $set: body }
  );
};
const getStatusCounts = async () => {
  const items = await ptcategoryModel.find({});
  const statusCounts = {
    All: items.length,
    Active: items.filter((item) => item.status === 'active').length,
    Inactive: items.filter((item) => item.status === 'inactive').length,
  };
  return statusCounts;
};
module.exports = {
  addItem,
  getItems,
  deleteItem,
  getItemById,
  updateItem,
  getStatusCounts,
};
