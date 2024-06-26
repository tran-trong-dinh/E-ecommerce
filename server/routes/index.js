const userRouter = require("./user");
const productRouter = require("./product");
const productCategoryRouter = require("./productCategory");
const blogCategory = require("./blogCategory");
const blog = require("./blog");
const { errorHandler, notFound } = require("../middlewares/errHandler");

const initRoutes = (app) => {
  app.use("/api/user", userRouter);
  app.use("/api/product", productRouter);
  app.use("/api/productcategory", productCategoryRouter);
  app.use("/api/blogcategory", blogCategory);
  app.use("/api/blog", blog);

  app.use(notFound);
  app.use(errorHandler);
};
module.exports = initRoutes;
