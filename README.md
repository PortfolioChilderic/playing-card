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

## ⚙️ Installation & lancement

Cloner le projet :  
```bash
git clone https://github.com/PortfolioChilderic/playing-card.git
cd playing-card
```
Installer les dépendances :
```bash
npm install
```

Lancer le serveur local :
```bash
ng serve
```

Puis ouvrir http://localhost:4200