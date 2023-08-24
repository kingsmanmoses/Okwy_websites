import React from 'react';
import { cctvPage } from '../Data';
import Detailed from '../Detailed';

const Cctv = () => {
  return (
    <>
      <Detailed {...cctvPage} />
    </>
  );
};

export default Cctv;
