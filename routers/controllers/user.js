const userModel = require("./../../db/models/user");
const bcrypt = require("bcrypt");

const signup = async (req, res) => {
  const { email, password, role } = req.body;

  const savedEmail = email.toLowerCase();
  const hashedPassword = await bcrypt.hash(password, Number(process.env.SALT));

  const newUser = new userModel({
    email: savedEmail,
    password: hashedPassword,
    role
  });

  newUser
    .save()
    .then((result) => {
      res.status(201).send(result);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
};


module.exports = {signup};
