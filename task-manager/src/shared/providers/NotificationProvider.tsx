import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface Props {
  children: React.ReactNode;
}

const NotificationProvider = ({ children }: Props) => {
  return (
    <>
    <ToastContainer />
    {children}
    </>
  );
};

export default NotificationProvider;
