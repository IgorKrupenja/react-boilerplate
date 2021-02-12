# React boilerplate

This just a small React starter boilerplate I use for personal projects. Yes, [Create React App](https://github.com/facebook/create-react-app) is awesome but I wanted to create something with a bit more functionality, especially Firebase support.

## Usage

1. `git clone git@github.com:igor-krupenja/react-boilerplate.git; rm -rf react-boilerplate/.git`. This will clone the repo and remove `.git` folder so that the folder can be initialised as a new project.
2. Add an environment config file (e.g. `.env.development`) to repo root with your Firebase config, e.g. (dummy data):

```env
FIREBASE_API_KEY="AIzaSyD_GYhIIBfdFHvUDFpuIHQdSK7nio-dLM"
FIREBASE_AUTH_DOMAIN="zaino-12345.firebaseapp.com"
FIREBASE_DATABASE_URL="https://zaino-12345.firebaseio.com"
FIREBASE_PROJECT_ID="zaino-12345"
FIREBASE_STORAGE_BUCKET="zaino-12345.appspot.com"
FIREBASE_MESSAGING_SENDER_ID="55797789077"
FIREBASE_APP_ID="1:570956282077:web:07ebe6d7e2b2ef01494f74"
FIREBASE_MEASUREMENT_ID="G-P4N3TPO1XY"
```

## Highlights

- Support `.env` files for separate development and production configurations
- Core Redux config
- Built-in Firebase config with a couple helper functions and working Firebase Auth example (uses Redux)
- React Router support
- Webpack dev server with HMR for CSS and React components
- SCSS and SVG support
- React Bootstrap support

## Acknowledgements

Text animation shamelessly adapted from [this gem](https://codepen.io/kh-mamun/pen/NdwZdW) by Mamun Khandaker
