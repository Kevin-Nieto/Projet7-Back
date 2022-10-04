const UserModel = require("../models/user.model");
const { uploadErrors } = require("../utils/errors.utils");
const fs = require("fs");
require("dotenv").config({ path: "./config/.env" });

module.exports.uploadProfil = async (req, res) => {
  const MIME_TYPES = {
    "image/jpg": "jpg",
    "image/jpeg": "jpg",
    "image/png": "png",
  };
  try {
    if (!MIME_TYPES) {
      throw Error("invalid file");
    }
    if (req.file.size > 800000) throw Error("max size");
  } catch (err) {
    const errors = uploadErrors(err);
    return res.status(201).json({ errors });
  }

  try {
    const uModel = await UserModel.findById(req.body.userId);
    const fileName = req.file.filename;
    const updateFileName = uModel.pseudo + ".jpg";
    fs.rename(
      process.env.UPLOAD_URL + fileName,
      process.env.UPLOAD_URL + updateFileName,
      function (err) {
        if (err) throw err;
      }
    );
    uModel.set("picture", "./uploads/profil/" + updateFileName);
    uModel.save();
    res.send(uModel._id);
  } catch (e) {
    res.status(400).send(e);
  }
};
