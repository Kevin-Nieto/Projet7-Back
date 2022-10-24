const mongoose = require("mongoose");

// Connection à la base de donnée

mongoose
  .connect("mongodb+srv://" + process.env.DB_USER_PASS_URL)
  .then(() => {
    console.log("Connexion à MongoDB réussie !");
  })
  .catch((error) => console.log(error));
