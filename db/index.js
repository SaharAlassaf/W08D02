const mongoose = require("mongoose");
require("dotenv").config();

const DB = process.env.DB;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

mongoose.connect(`${DB}`, options, () => {
  try {
    console.log("DB READY TO USE");
  } catch (error) {
    console.error(error);
  }
});