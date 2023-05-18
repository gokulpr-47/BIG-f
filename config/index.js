const { config } = require("dotenv");

console.log("NODE_ENV: ", process.env.NODE_ENV);

if (process.env.NODE_ENV !== "prod") {
  config({ path: "./.dev.env" });
} else {
  config({ path: "./.env" });
}

const PORT = process.env.PORT;
const OPENAI_SECRET_KEY = process.env.OPENAISECRETKEY;
const DB_URL = process.env.DB_URL;
const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET;

module.exports = {
  PORT,
  OPENAI_SECRET_KEY,
  DB_URL,
  ACCESS_TOKEN_SECRET,
};
