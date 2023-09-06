import React from 'react';
import {Navigate} from 'react-router-dom';

const RequireSeller = ({children}) => {
  const isAuth = localStorage.getItem('user_token');
  if (isAuth !== 'seller_id') {
    return <Navigate to="/Login" replace="true" />;
  }
  return children;
};

export default RequireSeller;