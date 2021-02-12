import React from 'react';
import GoogleButton from 'react-google-button';
import { useDispatch } from 'react-redux';
import { login } from '../../../state/slices/user';
import './style.scss';

export const LoginPage = () => {
  const dispatch = useDispatch();
  document.title = 'React boilerplate';

  return (
    <main className="login-page">
      <h2 className="login-page__title">
        <span>R</span>
        <span>e</span>
        <span>a</span>
        <span>c</span>
        <span>t</span>
        <span>&nbsp;</span>
        <span>b</span>
        <span>o</span>
        <span>i</span>
        <span>l</span>
        <span>e</span>
        <span>r</span>
        <span>p</span>
        <span>l</span>
        <span>a</span>
        <span>t</span>
        <span>e</span>
      </h2>
      <GoogleButton
        // fix width, cannot set in SCSS as component overwrites class styles with inline styles
        style={{ width: '20rem', textAlign: 'start' }}
        type="light"
        onClick={() => dispatch(login())}
      />
    </main>
  );
};
