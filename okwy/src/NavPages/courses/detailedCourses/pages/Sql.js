import React from 'react';
import { sqlPage } from '../Data';
import Detailed from '../Detailed';

const Sql = () => {
  return (
    <>
      <Detailed {...sqlPage} />
    </>
  );
};

export default Sql;
