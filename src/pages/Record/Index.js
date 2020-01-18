import React, { Fragment } from 'react';
import Record from '../../components/Record/Index';

const RecordPage = props => {
  return (
    <Fragment>
      <Record {...props} />
    </Fragment>
  );
};

export default RecordPage;
