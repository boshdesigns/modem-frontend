# modem

## Developer Notes on the project
This is a fairly simple setup using Vue3 and a Router to give it some navigation.

### Project structure:
Assets - All css/image/svgs are within the src/assets folder

Components - src/components contains most reuseable components on the pages

Views - Entry files for all pages.


### General Notes
'main.css' file does contain some global styling as well as imports 'reset.css' file to try and reset and standardise broswer styling.
The reset of the styling is scoped to it's corresponding vue file so to not interfere with other styling you might have going on.



## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```
