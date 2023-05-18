const { connect } = require("mongoose");
const { config } = require("dotenv");

const connectDB = async () => {
  try {
    await connect(process.env.DB_URL);
    console.log("DB Connected");
  } catch (e) {
    console.log("Error while connecting to the DB:", e);
    process.exit(1);
  }
};

module.exports = { connectDB };
