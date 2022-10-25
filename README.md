# Telecharger le repository Projet7-Back et Projet7-Front

Une fois les deux repository téléchargé, placez le dossier "client" à l'intertieur du dossier "Projet7-Back-main" là où les dossiers "config" "controllers" ... sont présent.

## Créez un fichier .env dans le dossier "config"

Dans ce fichier, complété les informations suivantes :

PORT=XXXX (Le port sur lequel notre serveur écoutera)

UPLOAD_URL=x\\xx\\xx\\xx\\Projet7-Back-main\\Projet7-Back-main\\client\\public\\uploads\\profil\\ (Votre chemin d'acces jusqu'au dossier "profil")

UPLOAD_POST_URL=x\\xx\\xx\\xx\\Projet7-Back-main\\Projet7-Back-main\\client\\public\\uploads\\posts\\ (Votre chemin d'acces jusqu'au dossier "posts")

CLIENT_URL=http://localhost:3000

DB_USER_PASS_URL=xxxx:xxxxx@cluster000mongodb.net/data_base_name (votre nom de compte, mot de passe mongoDB, votre cluster et le nom de votre base de donnée)

TOKEN_SECRET= xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx (générez un long code aléatoire pour votre token secret)

## Ensuite créer un fichier .env dans le dossier "client"

Dans ce fichier complété l'information suivante :

REACT_APP_API_URL=http://localhost:xxxx/ (Rentrez le port de votre server, celui que vous avez defini dans l'autre dossier .env "PORT=XXXX")

## Ensuite se rendre dans le dossier Projet7-Back-main avec la console / le terminal

A l'aide de la commande "cd"

Une fois dans le dossier, faite un " npm install " pour installer toutes les dépendences

Vous pouvez lancer le serveur avec la commande "npm start"

Ouvrez un nouveau terminal / console, et rendez vous dans le dossier "Projet7-Back-main/client" avec la commande "cd"

Une fois dans le dossier, faite un " npm install " pour installer toutes les dépendences

Vous pouvez lancer react avec la commande "npm start"

Une fois votre server et react lancé, avec la commande npm start, vous pouvez utiliser le site !
