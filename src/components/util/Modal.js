import React from 'react';

const Modal = ({ id, children }) => (
  <div className='modal fade' id={id} tabIndex='-1' role='dialog' aria-hidden='true'>
    <div className='modal-dialog modal-lg' role='document'>
      <div className='modal-content'>
        {children}
      </div>
    </div>
  </div>
);

export default Modal;