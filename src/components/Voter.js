import React from 'react';
import FaArrowUp from 'react-icons/lib/fa/arrow-up';
import FaArrowDown from 'react-icons/lib/fa/arrow-down';

const Voter = ({ score, onUpvote, onDownvote, top=0, right=15 }) => (
  <div style={{
    position: 'absolute',
    top: `${top}px`,
    right: `${right}px`,
    textAlign: 'center',
    padding: '5px'
  }}>
    <FaArrowUp onClick={onUpvote} />
    <br />
    {score}
    <br />
    <FaArrowDown onClick={onDownvote} />
  </div>
);

export default Voter;