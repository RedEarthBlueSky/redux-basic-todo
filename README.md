# redux-basic-todo

Redux
A tiny library that is a container for our application state, To manage any kind of application state, provided:

State is kept in a single store
Changes come from actions not mutations

The Redux store core is a function - a reducer - that takes current application state and an action and combines them to create a new application state.

React components will be responsible to sending actions to our store and in turn our store will tell the components when they need to re-render.

ImmutableJS
Redux doesn’t allow us to mutate the application state, it can be helpful to enforce this by modeling application state with immutable data structures.

ImmutableJS offers us a number of immutable data structures with mutative interfaces.

Setup
Create package.json with npm init

npm install --save react react-dom redux react-redux immutable
npm install --save-dev webpack babel-loader babel-preset-es2015 babel-preset-react
