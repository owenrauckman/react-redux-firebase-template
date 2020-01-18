import React from 'react';
import { navigate } from '@reach/router';

const Home = () => {
  return (
    <div
      onClick={() => {
        navigate(`/dashboard`);
      }}
    >
      See Your Todos
    </div>
  );
};

export default Home;
