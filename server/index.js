const express = require("express");
const cors = require("cors");
const path = require("path");
const router = require("./routes");

const app = express();
app.use(express.json());
app.use(cors());
app.use("/api", router);

const createServer = () => {
  try {
    app.listen(5000, (err) => {
      if (err) {
        throw err;
      }
      console.log("Success");
    })
  }
  catch (e) {
    console.error(e);
  }
}

createServer();