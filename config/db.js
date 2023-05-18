const { connect } = require("mongoose");
const { DB_URL } = require("./index");

const connectDB = async () => {
  try {
    await connect(DB_URL);
    console.log("DB Connected");
  } catch (e) {
    console.log("Error while connecting to the DB:", e);
    process.exit(1);
  }
};

module.exports = { connectDB };
