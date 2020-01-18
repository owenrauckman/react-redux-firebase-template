import React, { Fragment } from 'react';
import { navigate } from '@reach/router';
import Todos from '../../components/Todos/Index';

const Dashboard = () => {
  return (
    <Fragment>
      <Todos />
      <div
        onClick={() => {
          navigate(`/`);
        }}
      >
        Go Back
      </div>
    </Fragment>
  );
};

export default Dashboard;
