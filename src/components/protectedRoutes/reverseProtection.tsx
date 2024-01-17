import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ReverseProtectedRoutes = (props: any) => {
  const { Component } = props;
  const navigate = useNavigate();

  useEffect(() => {
    let login = localStorage.getItem('user');

    if (login) {
      navigate('/');
    }
  });

  return (
    <>
      <Component />
    </>
  );
};

export default ReverseProtectedRoutes;
