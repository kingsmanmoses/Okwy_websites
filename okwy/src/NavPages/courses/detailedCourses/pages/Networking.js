import React from 'react';
import { networkingPage } from '../Data';
import Detailed from '../Detailed';

const Networking = () => {
  return (
    <>
      <Detailed {...networkingPage} />
    </>
  );
};

export default Networking;
