import React from 'react';
import PulseLoader from 'halogen/PulseLoader';

const style = {
  display: 'flex',
  flex: '0 1 auto',
  flexDirection: 'column',
  flexGrow: 1,
  flexShrink: 0,
  flexBasis: '25%',
  maxWidth: '25%',
  height: '200px',
  alignItems: 'center',
  justifyContent: 'center'
};

const LoadingSpinner = () => (
  <PulseLoader style={style} color="#26A65B" />
);

export default LoadingSpinner;