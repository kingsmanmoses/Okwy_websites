import React from 'react';
import { graphicsPage } from '../Data';
import Detailed from '../Detailed';

const Graphics = () => {
  return (
    <>
      <Detailed {...graphicsPage} />
    </>
  );
};

export default Graphics;
