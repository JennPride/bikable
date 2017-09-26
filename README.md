# Bikable

### Introduction

Bikable is an application which displays whether a user should bike to work today or not depending on the current weather conditions and the user's limits and preferences in regards to temperature and rain. This is a beta and has a lot of room for enhancements which I hope to build upon in the future.

### Getting started
This project requires [Node.js](https://nodejs.org/en/)

1. Install dependencies: `npm install`
2. `npm start`

### NPM scripts
`npm start`
> Starts the babel-cli, watches your html and sass files for changes, and starts an express dev server with hot module replacement enabled.

`npm run dist`
> Generates an optimized build in the dist directory. It uses webpack to transpile, bundle, and minify the src as well as many other things, like inline css and inject hash numbers into html for optimal performance and automated cache-busting. For more info, see [Building - Webpack](#building---webpack).
There is an error in the macaddress node module. Add a var to index.js line 34. addressess = {}; => var addressess = {};

`npm test`
> Runs `jest`. Jest configurations are in the `package.json`. It will run in verbose mode with code coverage. You can run `npm test -- -u` if you need to update your snapshots.

`npm run lint`
> Runs `eslint src/js/**/*.js`. This just lints all your src files, including react components.

### Tooling

#### CSS Preprocessing - Sass
This uses a sass loader in webpack so you can just import your scss in your components. Webpack will inject these as style tags in dev mode so you get live reload of css. In production, it will inline `critical.scss` and append `app.scss` into your html for you.


#### ES6 - Babel
This uses Babel for transpiling the build, it also uses `React`, `es2015`, and `stage-0` presets so I can play with the latest ES6 features.  It will strip the Flow types from the code when it compiles to AMD so that there is no issue at runtime in the browser.

#### Building - Webpack
Webpack and dojo used to not play nice together, but then I saw [https://github.com/lobsteropteryx/esri-webpack](https://github.com/lobsteropteryx/esri-webpack) which cleverly handled the esri dependencies as externals and built to AMD.  Now we have Webpack and dojo working together.  This also uses hot module replacement with gulp/browser-sync so if you edit your components, it can swap them out on the fly without reloading the whole page.

#### Testing - Jest 
There are a few beggining test stored in Jest to ensure that the API is working and that the resulting recommendations match what is expected based on logic

