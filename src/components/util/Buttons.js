import React from 'react';
import IoIosPlusOutline from 'react-icons/lib/io/ios-plus-outline';
import IoAndroidDelete from 'react-icons/lib/io/android-delete';
import IoAndroidCreate from 'react-icons/lib/io/android-create';
import IoAndroidArrowBack from 'react-icons/lib/io/android-arrow-back';

const Button = ({ type, tooltip, children, modalId, marginRight=0, marginLeft=0, onClick=() => {} }) => (
  <button
    type='button'
    className={`btn btn-${type} ml-${marginLeft} mr-${marginRight}`}
    data-toggle='tooltip'
    data-placement='top'
    title={tooltip}
    data-toggle='modal'
    data-target={`#${modalId}`}
    onClick={(e) => onClick()}>
    {children}
  </button>
);

export const BackButton = () => (
  <Button type='primary' tooltip='Go back'>
    <IoAndroidArrowBack size={25} />
  </Button>
);

export const EditButton = ({ size=25, tooltip, modalId, onClick }) => (
  <Button type='success' tooltip={tooltip} marginRight={2} modalId={modalId} onClick={onClick}>
    <IoAndroidCreate size={size} />
  </Button>
);

export const DeleteButton = ({ size=25, tooltip, onClick }) => (
  <Button type='danger' tooltip={tooltip} onClick={onClick}>
    <IoAndroidDelete size={size} />
  </Button>
);

export const CreateButton = ({ size=30, tooltip, modalId, onClick }) => (
  <Button type='primary' tooltip={tooltip} modalId={modalId} onClick={onClick}>
    <IoIosPlusOutline size={size} />
  </Button>
);
