const router = require("express").Router();
const authController = require("../controllers/auth.controller");
const userController = require("../controllers/user.controller");
const uploadController = require("../controllers/upload.controller");
const multer = require("multer");
const upload = multer({
  dest: "client/public/uploads/profil",
});

//auth
router.post("/register", authController.signUp);
router.post("/login", authController.signIn);
router.get("/logout", authController.logOut);

// user DB
router.get("/", userController.getAllUsers);
router.get("/:id", userController.getOneUser);
router.delete("/:id", userController.deleteUser);

// upload images
router.post("/upload", upload.single("file"), uploadController.uploadProfil);

module.exports = router;
