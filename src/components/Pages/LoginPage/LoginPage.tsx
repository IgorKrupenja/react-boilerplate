import React from 'react';
import GoogleButton from 'react-google-button';
import { useDispatch } from 'react-redux';
import { login } from '../../../state/slices/user';
import { Logo } from '../../misc/Logo';
import './style.scss';

export const LoginPage = () => {
  const dispatch = useDispatch();
  document.title = 'React boilerplate';

  return (
    <main className="login-page">
      <Logo />
      <GoogleButton
        // fix width, cannot set in SCSS as component overwrites className styles with inline styles
        style={{ width: '20rem', textAlign: 'start' }}
        type="light"
        onClick={() => dispatch(login())}
      />
    </main>
  );
};
