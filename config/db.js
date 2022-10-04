const mongoose = require("mongoose");

// Connection à la base de donnée

mongoose
  .connect(
    "mongodb+srv://" +
      process.env.DB_USER_PASS +
      "@cluster0.87sk1.mongodb.net/final-project"
  )
  .then(() => {
    console.log("Connexion à MongoDB réussie !");
  })
  .catch((error) => console.log(error));
