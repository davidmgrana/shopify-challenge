# Dev Challenge Shopify


This repository contains the complete and functioning code for the following challenge: [Dev Challenge](https://buildwithframe.notion.site/Dev-Challenge-Shopify-Theme-b2e3f058b49242109252edb5b06a21a7)


### Tech Stack

- [TypeScript](https://www.typescriptlang.org/)
- [Tailwindcss](https://tailwindcss.com/)
- [Liquid](https://shopify.dev/api/liquid)
- [Esbuild](https://esbuild.github.io/)
- [Prettier](https://prettier.io/)
- [Eslint](https://eslint.org/)
- [Ts-node](https://typestrong.org/ts-node/)
- [Preact](https://preactjs.com/)

### Installation & Usage
- Clone the repository to your machine.
- Inside the command console, enter: 
```bash
npm install
```
- Once the dependencies are installed, enter:
```bash
npm run compile:ts
# to compile the .liquid file.
```
- Then enter the command: 
```bash
node esbuild.js
# to compile and create the js file from Preact.
```
- Lastly, enter: 
```bash
npm run dev
# to start the project.
```
