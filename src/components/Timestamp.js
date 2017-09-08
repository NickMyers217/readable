import React from 'react';
import * as moment from 'moment';

const Timestamp = ({ time }) => (
  <span>
  {moment(time).format('MMMM Do YYYY, h:mm:ss a')}
  </span>
);

export default Timestamp;