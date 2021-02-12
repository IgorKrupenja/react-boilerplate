import 'normalize.css/normalize.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { firebase } from './firebase/firebase';
import AppRouter from './routes/AppRouter';
import { setUserDetails } from './state/slices/user';
import store from './state/store';
import './styles/styles.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

const app = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

const renderApp = () => {
  ReactDOM.render(app, document.getElementById('app'));
};

firebase.auth().onAuthStateChanged(async user => {
  if (user) {
    // on log in
    // using store.dispatch as useDispatch cannot be used outside of functional components
    store.dispatch(
      setUserDetails({
        uid: user.uid,
        // types for these are string | null but null seems to apply to anonymous sign in only
        // as app does not support anonymous sign anyway, casting as strings
        name: user.displayName as string,
        email: user.email as string,
        // if user has not set an photo in Google account,
        // Google conveniently provides an image with name's first letter
        photoUrl: user.photoURL as string,
      })
    );
    renderApp();
  } else {
    // on log out
    renderApp();
  }
});
