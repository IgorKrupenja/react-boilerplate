import { createBrowserHistory } from 'history';
import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Router, Switch } from 'react-router-dom';
import { DashboardPage } from '../components/Pages/DashboardPage';
import { LoginPage } from '../components/Pages/LoginPage';
import { RootState } from '../state/store';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

// custom history is needed for login in app.tsx to work
// as history is accessed there not from React component
// but inside firebase.auth().onAuthStateChanged
export const sessionHistory = createBrowserHistory();

const AppRouter = () => {
  const isAuthenticated = useSelector((state: RootState) => !!state.user.uid);

  return (
    <Router history={sessionHistory}>
      <Switch>
        {/* private routes only accessible if user is logged in */}
        <PrivateRoute path="/dashboard">
          <DashboardPage />
        </PrivateRoute>
        {/* exact ensures that invalid route is not shown in address bar on redirect */}
        <PublicRoute path="/" exact>
          <LoginPage />
        </PublicRoute>
        {isAuthenticated ? <Redirect to="/dashboard" /> : <Redirect to="/" />}
      </Switch>
    </Router>
  );
};

export default AppRouter;
