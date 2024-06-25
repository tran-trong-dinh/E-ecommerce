const BlogCategory = require("../models/BlogCategory");
const asyncHandler = require("express-async-handler");

const createCategory = asyncHandler(async (req, res) => {
  const respone = await BlogCategory.create(req.body);
  return res.status(200).json({
    success: respone ? true : false,
    BlogCategory: respone ? respone : "Can not create BlogCategory",
  });
});
const getCategories = asyncHandler(async (req, res) => {
  const respone = await BlogCategory.find(req.body).select("title _id");
  return res.status(200).json({
    success: respone ? true : false,
    blogCategories: respone ? respone : "Can not get blog blogCategories",
  });
});
const updateCategory = asyncHandler(async (req, res) => {
  const { bcid } = req.params;
  const respone = await BlogCategory.findByIdAndUpdate(bcid, req.body, {
    new: true,
  });
  return res.status(200).json({
    success: respone ? true : false,
    blogCategories: respone ? respone : "Can not update blogCategories",
  });
});
const deleteCategory = asyncHandler(async (req, res) => {
  const { bcid } = req.params;
  const respone = await BlogCategory.findByIdAndDelete(bcid);
  return res.status(200).json({
    success: respone ? true : false,
    blogCategories: respone ? respone : "Can not delete blogCategories",
  });
});
module.exports = {
  createCategory,
  getCategories,
  updateCategory,
  deleteCategory,
};
