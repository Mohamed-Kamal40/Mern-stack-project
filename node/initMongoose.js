const mongoose = require("mongoose");

module.exports = async () => {
  await mongoose.connect("mongodb://localhost:27017/reactProject", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  const db = mongoose.connection;
  db.once("open", () => {
    console.log("mongoose connection start");
  });
  db.on("error", (err) => {
    console.log("Mongoose Error: " + err);
    process.exit(1);
  });
};
