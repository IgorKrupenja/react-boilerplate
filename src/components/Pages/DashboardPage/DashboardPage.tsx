import React from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../../../state/slices/user';
import './style.scss';

export const DashboardPage = () => {
  document.title = 'Dashboard | React boilerplate';
  const dispatch = useDispatch();
  return (
    <main className="dashboard-page">
      Log in successful!
      <button className="button--grey account-details__sign-out" onClick={() => dispatch(logout())}>
        Sign out
      </button>
    </main>
  );
};
