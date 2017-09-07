import React from 'react';
import FaArrowUp from 'react-icons/lib/fa/arrow-up';
import FaArrowDown from 'react-icons/lib/fa/arrow-down';

const Voter = ({ score, top=0, right=15 }) => (
  <div style={{
    position: 'absolute',
    top: `${top}px`,
    right: `${right}px`,
    textAlign: 'center',
    padding: '5px'
  }}>
    <FaArrowUp />
    <br />
    {score}
    <br />
    <FaArrowDown />
  </div>
);

export default Voter;