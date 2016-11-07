# redux-basic-todo

####Redux

Make components
Design actions
Implement reduce
Connect Components //  create a store to connect it to our react components

Tutorial from

https://www.sitepoint.com/how-to-build-a-todo-app-using-react-redux-and-immutable-js/

Repo

https://github.com/sitepoint-editors/immutable-redux-todo/tree/master/src

Library container to manage application state, provided:

State is kept in a single store
Changes come from actions not mutations

The Redux store core is a function - a **reducer** - that takes current application state and an action and combines them to create a new application state.

React components will be responsible to sending actions to our store and in turn our store will tell the components when they need to re-render.

ImmutableJS
Redux doesn’t allow us to mutate the application state, it can be helpful to enforce this by modeling application state with immutable data structures.

ImmutableJS offers us a number of immutable data structures with mutative interfaces.

Setup
Create package.json with npm init

npm install --save react react-dom redux react-redux immutable
npm install --save-dev webpack babel-loader babel-preset-es2015 babel-preset-react



Using JSX and ES2015, compile code with Babel and we’re going to do this as part of the module bundling process with Webpack.

First we’ll create our Webpack configuration in webpack.config.js.

module.exports = {
  entry: './src/app.js',
  output: {
    path: __dirname,
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: { presets: [ 'es2015', 'react' ] }
      }
    ]
  }
};

extend package.json by adding an npm script to compile our code with source maps.

"scripts": {
  "build": "webpack --debug"
}

run npm run build to compile code.
