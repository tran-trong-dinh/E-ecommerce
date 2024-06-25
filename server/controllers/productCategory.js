const productCategory = require("../models/productCategory");
const asyncHandler = require("express-async-handler");

const createCategory = asyncHandler(async (req, res) => {
  const respone = await productCategory.create(req.body);
  return res.status(200).json({
    success: respone ? true : false,
    category: respone ? respone : "Can not create category",
  });
});
const getCategories = asyncHandler(async (req, res) => {
  const respone = await productCategory.find(req.body).select("title _id");
  return res.status(200).json({
    success: respone ? true : false,
    productCategories: respone ? respone : "Can not get categories",
  });
});
const updateCategory = asyncHandler(async (req, res) => {
  const { pcid } = req.params;
  const respone = await productCategory.findByIdAndUpdate(pcid, req.body, {
    new: true,
  });
  return res.status(200).json({
    success: respone ? true : false,
    updateCategorycategory: respone ? respone : "Can not update category",
  });
});
const deleteCategory = asyncHandler(async (req, res) => {
  const { pcid } = req.params;
  const respone = await productCategory.findByIdAndDelete(pcid);
  return res.status(200).json({
    success: respone ? true : false,
    deleteCategory: respone ? respone : "Can not delete category",
  });
});
module.exports = {
  createCategory,
  getCategories,
  updateCategory,
  deleteCategory,
};
