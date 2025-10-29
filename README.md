# 🎴 Playing Card  

**Playing Card** est une application web développée avec **Angular**.  
Elle permet de créer, afficher, modifier et supprimer des cartes personnalisées.  

---

## 🚀 Fonctionnalités

- **Page Home (`/home`)**  
  - Affiche la liste de toutes les cartes créées.  
  - Permet de cliquer sur une carte pour la modifier.  
  - Bouton **Add Monster** pour accéder à la création d’une nouvelle carte.  

- **Page Monster (`/monster`)**  
  - Création d’une nouvelle carte.  
  - Accès à une carte existante via `/monster/:id` pour la modifier ou la supprimer.  
  - Bouton **Back** pour revenir sur la page d’accueil.  

---

## 🛠️ Technologies utilisées

- [Angular CLI](https://angular.dev/tools/cli) (v20.2.2)  
- TypeScript  
- HTML / SCSS  
- Angular Router  

---

## ⚙️ Installation & lancement (mode développement)

1. Cloner le projet
```bash
git clone https://github.com/PortfolioChilderic/playing-card.git
cd playing-card
```
2. Installer les dépendances
```bash
npm install
```

3. Lancer le serveur local
```bash
ng serve
```

4. Puis ouvrir
👉 http://localhost:4200

---

## 🐳 Lancement avec Docker

L’application peut être lancée sans installer Node ni Angular, uniquement avec Docker.Deux options sont possibles : via docker build ou via docker compose.

---

### 🧩 Option 1 — Docker simple

1. Construire l’image
```bash
docker build -t playing-card:latest .
```

2. Construire l’image
```bash
docker run --rm -p 8080:80 playing-card:latest
```

3. Accéder à l’application :
👉 http://localhost:8080

---

### ⚙️ Option 2 — Docker Compose

Si vous préférez une commande unique, utilisez Docker Compose (fichier docker-compose.yml inclus).

1. Lancer le projet
```bash
docker compose up --build
```

2. Ouvrir l’application
👉 http://localhost:8080

3. Arrêter le conteneur
```bash
docker compose down
```