const express = require("express");
require("dotenv").config();
const dbConnect = require("./config/Dbconnect");
const initRoutes = require("./routes");
const cookieParser = require("cookie-parser");

const app = express();
const port = process.env.PORT || 8888;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
dbConnect();
initRoutes(app);

app.use("/", (req, res) => {
  res.send("Server is running");
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:`, port);
});
