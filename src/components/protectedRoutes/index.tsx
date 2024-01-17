import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ProtectedRoutes = (props: any) => {
  const { Component } = props;
  const navigate = useNavigate();

  useEffect(() => {
    let login = localStorage.getItem('user');

    if (!login) {
      navigate('/login');
    }
  });

  return (
    <>
      <Component />
    </>
  );
};

export default ProtectedRoutes;
