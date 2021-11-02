# create-lama-codeur-nuxt

## NuxtJS hooks example

Cas pratique d'utilisation des hooks NuxtJS !

Énoncé : vous êtes dans une position de freelance. Un de vos clients a des problèmes de
performances quant à la génération de son site statique.
Il vous contacte afin de réduire au maximum le temps d'exécution de sa CI.

Les caractéristiques du site sont les suivantes :
- Le site est entièrement statique.
- Le site dispose de 20 pages.
- Chacune de ces pages met 0.5 seconde à se générer et fait de 1 à 3 appels à l'API.
- Pour des raisons de SEO, le site est régénéré pour chacune des 1000 plus grandes villes 
de la zone France, Suisse et Belgique. Cette régénération permet de variabiliser les URL et le
contenu des pages (seul le nom de la ville et celui de la région géographique sont utilisés ;
seul 1 à 3 occurrences par page diffèrent).
- Le module communautaire @nuxtjs/sitemap est utilisé.

Fonctionnement actuel de la régénération : le site internet est placé dans un répertoire _city.
L'application dispose d'une page d'accueil "index.vue" récupérant la liste des 1000 villes et
les affiche sous forme de liens vers le site internet. Ex : /paris/ ; /bruxelles/ ; ...
Le crawler NuxtJS est utilisé pour faire la génération des pages → il commence par la page 
d'accueil, puis parcourt les 1000 points d'entrées 1 par 1.
→ Le crawler parcourt 1000 * 20 pages = 20 000 pages.
→ Sachant que la génération d'une page met 0.5 seconde, le temps total est d'environ 2h45.

Votre client vous demande de réaliser un POC.
Vous n'avez le droit qu'aux hooks NuxtJS pour résoudre ce problème.
Vous avez 4 heures :D

## Build Setup

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```

For detailed explanation on how things work, check out the [documentation](https://nuxtjs.org).

## Special Directories

You can create the following extra directories, some of which have special behaviors. Only `pages` is required; you can delete them if you don't want to use their functionality.

### `assets`

The assets directory contains your uncompiled assets such as Stylus or Sass files, images, or fonts.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/assets).

### `components`

The components directory contains your Vue.js components. Components make up the different parts of your page and can be reused and imported into your pages, layouts and even other components.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/components).

### `layouts`

Layouts are a great help when you want to change the look and feel of your Nuxt app, whether you want to include a sidebar or have distinct layouts for mobile and desktop.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/layouts).


### `pages`

This directory contains your application views and routes. Nuxt will read all the `*.vue` files inside this directory and setup Vue Router automatically.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/get-started/routing).

### `plugins`

The plugins directory contains JavaScript plugins that you want to run before instantiating the root Vue.js Application. This is the place to add Vue plugins and to inject functions or constants. Every time you need to use `Vue.use()`, you should create a file in `plugins/` and add its path to plugins in `nuxt.config.js`.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/plugins).

### `static`

This directory contains your static files. Each file inside this directory is mapped to `/`.

Example: `/static/robots.txt` is mapped as `/robots.txt`.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/static).

### `store`

This directory contains your Vuex store files. Creating a file in this directory automatically activates Vuex.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/store).
