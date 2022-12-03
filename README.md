# Vue 3 + TypeScript + Vite

This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar)

## Type Support For `.vue` Imports in TS

Since TypeScript cannot handle type information for `.vue` imports, they are shimmed to be a generic Vue component type by default. In most cases this is fine if you don't really care about component prop types outside of templates. However, if you wish to get actual prop types in `.vue` imports (for example to get props validation when using manual `h(...)` calls), you can enable Volar's Take Over mode by following these steps:

1. Run `Extensions: Show Built-in Extensions` from VS Code's command palette, look for `TypeScript and JavaScript Language Features`, then right click and select `Disable (Workspace)`. By default, Take Over mode will enable itself if the default TypeScript extension is disabled.
2. Reload the VS Code window by running `Developer: Reload Window` from the command palette.

You can learn more about Take Over mode [here](https://github.com/johnsoncodehk/volar/discussions/471).

## Setup
Convert a vite project to an electron app with no boilerplate, all electron logic contained in the electron subdirectory.

* `npm create vite@latest` use vite preset template
* `npm install`
* `npm i -D electron@latest` add electron to it as a dev dependency
* create the electron subdirectory
* `npm run dev` then `npm run electron:dev` to run electron app
* Or: `npm run electron:vite`, which does both commands


## Build
`npm run electron:build`
Runs the vite build first, then the electron build
* vite's build is located in the dist subdirectory by default
* electron's build is located in the release subdirectory

## Electron Structure
* `package.json` - Points to the app's main file and lists its details and dependencies.
* `main.js` - Starts the app and creates a browser window to render HTML. This is the app's **main process**.
* `index.html` - A web page to render. This is the app's **renderer process**.
* `preload.js` - A content script that runs before the renderer process loads.

[Electron Tutorial](https://electronjs.org/docs/latest/tutorial/tutorial-prerequisites)