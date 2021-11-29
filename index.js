const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
require("dotenv").config();
require("./db")

const app = express();
app.use(express.json())
app.use(morgan("dev"));
app.use(cors());




const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server on ${PORT}`);
});