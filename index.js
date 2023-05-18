const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
// const { Server } = require("socket.io");
const cors = require("cors");
const { PORT } = require("./config/index");
const { connectDB } = require("./config/db");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
(async () => {
  // code goes here
  console.log("calling connect db");
  await connectDB();
})();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//IF AT ALL WE NEED SOCKET IO
// const io = new Server(server, {
//   cors: {
//     origin: ["http://localhost:5174", "http://localhost:5173"],
//   },
//   withCredentials: true,
// });

app.use(
  cors({
    origin: ["http://localhost:5174", "http://localhost:5173"],
    credentials: true,
    methods: ["GET", "POST", "PATCH", "DELETE"],
  })
);
app.use(cookieParser());

const userRoutes = require("./API/Routes/user");

app.use("/", (req, res, next) => {
  console.log("Request:", req.method, req.path);
  // if (req.method === "POST") console.log(req.body);
  next();
});

app.use("/user", userRoutes);

app.get("/", (req, res) => {
  res.send("<h1>BIG-f</h1>");
});

server.listen(PORT, () => console.log(`Serving at port ${PORT}`));
