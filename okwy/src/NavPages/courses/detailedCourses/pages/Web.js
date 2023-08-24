import React from 'react';
import { webPage } from '../Data';
import Detailed from '../Detailed';

const Web = () => {
  return (
    <>
      <Detailed {...webPage} />
    </>
  );
};

export default Web;
