# cc1_douaa
# 🛒 Gestion de Commandes - Angular + Express.js + MongoDB

Ce projet est une application web complète permettant de gérer les commandes clients, les produits, et les totaux (HT/TTC). Il s’appuie sur :

- **Frontend** : Angular
- **Backend** : Express.js (Node.js)
- **Base de données** : MongoDB

---

## 🌐 Fonctionnalités principales

### 🎯 Frontend (Angular)
- Affichage de la liste des clients
- Sélection d’un client
- Affichage de la date du jour
- Liste de produits avec :
  - Prix unitaire
  - Quantité modifiable via boutons `+`/`–`
  - Calcul automatique du total par ligne
- Totaux HT et TTC (TVA 20%)

### 🛠️ Backend (Express.js + MongoDB)
- CRUD pour les Clients, Produits, Commandes
- API RESTful avec routes organisées
- Communication avec MongoDB via Mongoose

---

## ⚙️ Structure du projet

/frontend-angular/ ├── src/ │ ├── app/ │ │ ├── components/commande/ │ │ ├── services/ │ │ ├── models/ │ │ └── app.component.* └── angular.json

/backend-express/ ├── models/ ├── routes/ ├── controllers/ ├── server.js └── .env

---

## 🚀 Installation & Lancement

### 1️⃣ Prérequis
- Node.js 
- Angular CLI (`npm install -g @angular/cli`)
- MongoDB local ou Atlas

---

### 2️⃣ Installation Backend

cd backend-express
npm install
Créer un fichier .env :

PORT=5000
MONGO_URI=mongodb://localhost:27017/gestion-commandes
Lancer le serveur :

npm start
3️⃣ Installation Frontend

cd frontend-angular
npm install
ng serve
Ouvre ton navigateur : http://localhost:4200

🧪 Exemples de Requêtes API (Express.js)
GET /api/clients → Liste des clients

POST /api/produits → Ajouter un produit

POST /api/commandes → Ajouter une commande

📦 Technologies utilisées

Frontend	Backend	Base de données
Angular 17	Express.js	MongoDB + Mongoose
TypeScript	Node.js	
Bootstrap/Tailwind (optionnel)	dotenv	
📸 Aperçu de l'interface
📷 (Ajoute ici un screenshot de ta page Angular une fois que tout fonctionne)

🧑‍💻 Auteur
bahaddou douaa


