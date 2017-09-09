import React from 'react';

import Alert from './Alert';
import LoadingSpinner from './LoadingSpinner';

const AsyncLoader = ({
  isLoading,
  isSuccess,
  isError,
  errorMessage,
  children
}) => (
  <div>
    {isLoading && <LoadingSpinner />}
    {isSuccess && children}
    {isError && <Alert text={errorMessage} type='danger' />}
  </div>
);

export default AsyncLoader;