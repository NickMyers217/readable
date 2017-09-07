import React from 'react';
import IoIosPlusOutline from 'react-icons/lib/io/ios-plus-outline';
import IoAndroidDelete from 'react-icons/lib/io/android-delete';
import IoAndroidCreate from 'react-icons/lib/io/android-create';

const Button = ({ type, tooltip, children, marginRight=0, marginLeft=0 }) => (
  <button
    type='button'
    className={`btn btn-${type} ml-${marginLeft} mr-${marginRight}`}
    data-toggle='tooltip'
    data-placement='top'
    title={tooltip}>
    {children}
  </button>
);

export const EditButton = ({ size=25, tooltip }) => (
  <Button type='success' tooltip={tooltip} marginRight={2}>
    <IoAndroidCreate size={size} />
  </Button>
);

export const DeleteButton = ({ size=25, tooltip }) => (
  <Button type='danger' tooltip={tooltip}>
    <IoAndroidDelete size={size} />
  </Button>
);

export const CreateButton = ({ size=30, tooltip }) => (
  <Button type='primary' tooltip={tooltip}>
    <IoIosPlusOutline size={size} />
  </Button>
);
