import React from 'react';
import { Button, Image } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../../state/slices/user';
import { RootState } from '../../../state/store';
import { Logo } from '../../misc/Logo';
import './style.scss';

export const DashboardPage = () => {
  document.title = 'Dashboard | React boilerplate';
  const { name, email, photoUrl } = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();

  return (
    <main className="d-flex flex-column align-items-center justify-content-center h-100 container">
      <Logo />
      <div className="row justify-content-center mb-4">
        <div>Hi, {name}!</div>
        <div className="col-1">
          <Image src={photoUrl} roundedCircle className="img-fluid" />
        </div>
      </div>
      <Button variant="outline-danger" onClick={() => dispatch(logout())}>
        Sign out
      </Button>
    </main>
  );
};
