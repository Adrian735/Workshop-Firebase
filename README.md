# Workshop-Firebase

Dans ce workshop vous créerez une API en Node js dans laquelle vous découvrirez comment utiliser Firebase.

## Installation

#### Installer Node js

- https://kinsta.com/blog/how-to-install-node-js/

#### Installer Postman

il est conseillé d'installer Postman pour tester facilement les différentes routes API.

- https://www.postman.com/

#### Une fois Node js installé, utilisez les commandes:
- Pour installer les dépendances:

```
npm install
```

- Pour lancer:

```
npm start
```

### Exercices

Pour mettre en place l'API nous allons utilisez le freamwork Express de Node js:
- https://expressjs.com/en/starter/basic-routing.html

Utilisez la documentation de firebase pour réaliser les exos suivants: 
- https://firebase.google.com/docs/auth/admin?hl=fr

#### Exo 1 - Register
- Créer une route POST /register qui utilisera l'API Admin de Firebase pour créer un nouvel utilisateur dans Firebase Authentification. (Register.js)

- La route récupérera l'email et le mot de passe de l'utilisateur dans le body de la requête.

#### Exo 2 - Login
- Créer une route POST /login qui utilisera l'API de Firebase pour connecter un utilisateur. (Login.js)

- La route récupérera l'email et le mot de passe de l'utilisateur que l'on souhaite connecter dans le body de la requête.

#### Exo 3- GetJoke
- Créer une route GET /joke qui utilisera l'API Admin de Firebase pour retrouver des données stockées dans la base de donnée en ligne de Firebase. (GetJoke.js)

Récupérer les blagues contenues dans l'objet MyBestJoke.
(Par exemple: MyBestJoke/Joke-1)

#### Exo 4 - PostJoke
- Créer une route POST /joke qui utilisera l'API Admin de Firebase pour insérer des données dans la base de donnée en ligne. (PostJoke.js)

- La route récupérera le contenu de votre blague dans le body de la requête.

Insérez votre meilleur Joke dans l'objet YourJoke/Joke-<Votre prénom>.

#### Exo Bonus - Update and Delete Joke
- Créer les routes UPDATE et DELETE /joke pour modifier et supprimer votre blague précédement insérée dans la DB.

- Note: Merci de ne pas supprimer les données insérées par les autres participants.

#### Authors: Adrian Lorenzi et Quentin Rouvier
