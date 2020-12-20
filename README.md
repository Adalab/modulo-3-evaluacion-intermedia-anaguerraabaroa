# **Pokemon**

Half Module 3 Exercise of the Adalab Digital Frontend Development Bootcamp.

This is a responsive save Pokemon on your Pokedex app developed with `HTML5` , `CSS3` and `React`.

## **Quick start guide**

Instructions to start this project:

### **Pre-requirements**

This project is run with React. Start guide [**here**](https://github.com/facebook/create-react-app).

### **Installation**

Once React has been installed:

1. Clone repository
2. Open a terminal
3. Run `npm install` on the terminal to install local dependencies

### **Run project**

Run `npm start` on the terminal.

This command has to be run everytime the project is started in order to:

1. Open the project on the browser using a local server.
2. Refresh browser everytime files contained in `/src` folder are updated.
3. Compiled files contained in `/src` folder and copy them in `/public` folder in order to be prepared for production environment.

### **Deployment**

1. Run these commands to update changes on the project:

```
git add -A
git commit -m "Message commit"
git push
```

2. Run `npm run build` to create `/docs` folder and the production environment version.

3. Run again commands on step 1 to update changes on the project.

4. Project **[URL](https://anaguerraabaroa.github.io/Pokemon/)** is also available on GitHub Pages.

## **Development technologies**

- [**`HTML5`**](https://html.spec.whatwg.org/)
- [**`CSS3`**](https://www.w3.org/Style/CSS/)
- [**`React`**](https://es.reactjs.org/)

## **Exercise development requirements**

- React app
- Component structure
- Paint a Pokemon list with information from pokemons.json file
- Paint a Pokemon card using props information
- Save favourites Pokemon on Pokedex and change background colour
- Reset Pokedex

## **Folder Structure**

```
Pokemon
├── docs
├── node_modules
├── public
├── src
│   ├── components
│   │   ├── App.js
│   │   ├── Footer.js
│   │   ├── Header.js
│   │   ├── PokeFavourites.js
│   │   ├── PokeList.js
│   │   └── Pokemon.js
│   ├── data
│   │    └── pokemons.json
│   ├── images
│   │    ├── logo.png
│   │    ├── pokeball.png
│   │    ├── pokemon_desktop.jpg
│   │    ├── pokemon_mobile.jpg
│   │    └── pokemon_tablet.jpg
│   └── scss
│       ├── core
│       │   ├── _reset.scss
│       │   └── _variables.scss
│       ├── layout
│       │   ├── _footer.scss
│       │   ├── _header.scss
│       │   ├── _pokeFavourites.scss
│       │   ├── _pokeList.scss
│       │   └── _pokemon.scss
│       ├── pages
│       │   └── index.scss
│       └── App.scss
├── .gitignore
├── debug.log
├── package-lock.json
├── package.json
└── README.md
```

## **Components and functions**

### **App component**

- **Handle app:** function App()
- **Handle favourites:** const handleFavourites
- **Handle reset:** const handleClick

### **Header component**

- **Render header:** const Header

### **PokeList component**

- **Render list of Pokemon:** const PokeList

### **Pokemon component**

- **Render Pokemon card and add favourites Pokemon class**: const Pokemon

### **PokemonFavourites component**

- **Handle favourites Pokemon and save them on Pokedex**: const PokeFavourites

### **Footer component**

- **Render footer:** const Footer

## **Result**

![Mobile version](./src/images/pokemon_mobile.jpg) ![Tablet version](./src/images/pokemon_tablet.jpg) ![Desktop version](./src/images/pokemon_desktop.jpg)
