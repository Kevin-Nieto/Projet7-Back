module.exports.signUpErrors = (err) => {
  let errors = { pseudo: "", email: "", password: "" };

  if (err.message.includes("pseudo")) errors.pseudo = "Pseudo déjà pris !";

  if (err.message.includes("email"))
    errors.email = "Email incorrect ou déjà pris !";

  if (err.message.includes("password"))
    errors.password = "Le mot de passe doit faire 6 caractères minimum";

  return errors;
};

module.exports.signInErrors = (err) => {
  let errors = { email: "", password: "" };

  if (err.message.includes("email")) errors.email = "Email inconnu !";

  if (err.message.includes("password"))
    errors.password = "Mot de passe incorect !";

  return errors;
};

module.exports.uploadErrors = (err) => {
  let errors = { format: "", maxSize: "" };

  if (err.message.includes("invalid file"))
    errors.format = "Format incompatible";

  if (err.message.includes("max size"))
    errors.maxSize = "Le fichier dépasse 800ko";

  return errors;
};
