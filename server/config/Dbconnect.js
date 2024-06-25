const { default: mongoose } = require("mongoose");

const dbConnect = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    if (conn.connection.readyState === 1) console.log("MongoDb connected");
    else console.log("MongoDb not connected");
  } catch (error) {
    console.log("DB conection failed");
    throw new Error(error);
  }
};
module.exports = dbConnect;
