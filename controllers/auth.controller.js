const UserModel = require("../models/user.model");
const jwt = require("jsonwebtoken");
const { signUpErrors } = require("../utils/errors.utils");
const { signInErrors } = require("../utils/errors.utils");

const maxAge = 3 * 24 * 60 * 60 * 350;

const createToken = (id) => {
  return jwt.sign({ id }, process.env.TOKEN_SECRET);
};

module.exports.signUp = async (req, res) => {
  const { pseudo, email, password } = req.body;
  const picture = "./uploads/profil/random-user.png";

  try {
    const user = await UserModel.create({ pseudo, email, password, picture });
    res.status(201).json({ user: user._id });
  } catch (err) {
    const errors = signUpErrors(err);
    res.status(400).send({ errors });
  }
};

module.exports.signIn = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await UserModel.login(email, password);
    const token = createToken(user._id);
    res.cookie("jwt", token, { httpOnly: true, maxAge: maxAge });
    res.status(200).json({ user: user._id });
  } catch (err) {
    const errors = signInErrors(err);
    res.status(400).json({ errors });
  }
};

module.exports.logOut = (req, res) => {
  res.cookie("jwt", "", { maxAge: 1 });
  res.redirect("/");
};
