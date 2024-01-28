const { default: mongoose } = require("mongoose");

const dbConnect = () => {
  mongoose
    .connect(process.env.MONGODB_URL)
    .then(() => {
      console.log("Connected to the database!");
    })
    .catch((error) => {
      console.log(error);
      process.exit();
    });
};
module.exports = dbConnect;
