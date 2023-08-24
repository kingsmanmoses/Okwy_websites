import React from 'react';
import { hardwarePage } from '../Data';
import Detailed from '../Detailed';

const Hard = () => {
  return (
    <>
      <Detailed {...hardwarePage} />
    </>
  );
};

export default Hard;
