import React from 'react';
import { solarPage } from '../Data';
import Detailed from '../Detailed';

const Solar = () => {
  return (
    <>
      <Detailed {...solarPage} />
    </>
  );
};

export default Solar;
