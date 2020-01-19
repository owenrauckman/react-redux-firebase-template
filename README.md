# React Redux Firebase Template

Use this application to quickly get started building a React app with firebase. It uses the following dependencies to get you off the ground quickly. This project is also built using hooks so your React experience is simple and enjoyable 😎

- React
- Redux (state management)
- Firebase -> Firestore (DBaaS)
- react-redux-firebase (bind redux to firebase)
- Reach Router (application routing)
- Emotion (styles)

# Project Structure

## Overview

The example app in this template allows a user to login, view a list of records they own, view an individual record, and update the play count for a given record. Use these components as a reference to get your project off the ground!

## UI Components

UI pieces are separated into the _pages_ and _components_ folders. Each component should have its own folder so that styles, tests, or other helper functions specific to that component are stored in one spot. Pages should have minimal (if any) logic and mainly contain routing information, or higher order state. Try to keep your components small.

## State Management

This app uses redux alongside firebase. [react-redux-firebase](https://github.com/prescottprue/react-redux-firebase) and [redux-firestore](https://github.com/prescottprue/redux-firestore) conveniently bind firebase requests to redux using hooks. However, as your application gets larger, you will likely want to abstract your app-specific state to avoid constant prop drilling. For a given page that needs state management, make a corresponding folder for it inside of the redux folder. Each of these should have actions, initialState, reducers, and types and can be imported and combined in the main reducer in store.js. This will keep your logic broken out into logical pieces and prevent you from making huge, complex files.

## Firebase

This should plug and play with firebase right away--add your firebase config data (found in the dashboard after creating a new Firestore) to src/config/index.js and get to work! Don't forget to add rules to the firebase console to lock down your data before deploying your side-project to the world 🌍.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Depoyment
Sign up for [Netlify](https://www.netlify.com/), connect it to your GitHub, click a button, and done. Simple as that! 

---

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Learn More

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration
