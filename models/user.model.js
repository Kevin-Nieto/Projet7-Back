const mongoose = require("mongoose");
const { isEmail } = require("validator");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema(
  {
    pseudo: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 10,
      unique: true,
      trimp: true,
    },
    email: {
      type: String,
      required: true,
      validate: [isEmail],
      lowercase: true,
      unique: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
      maxlength: 1000,
      minlength: 6,
    },
    likes: {
      type: [String],
    },
    picture: {
      type: String,
    },
    isAdmin: { type: Boolean, default: false }, // Pour définir le ou les comptes administrateurs
  },
  {
    timestamps: true,
  }
);
//Sécurisation du mot de passe avant le "save"
userSchema.pre("save", async function (next) {
  if (this.password.length < 30) {
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } else {
    next();
  }
});

userSchema.statics.login = async function (email, password) {
  const user = await this.findOne({ email });
  if (user) {
    const auth = await bcrypt.compare(password, user.password);
    if (auth) {
      return user;
    }
    throw Error("incorrect password");
  }
  throw Error("incorrect email");
};

const UserModel = mongoose.model("user", userSchema);

module.exports = UserModel;
