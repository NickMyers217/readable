import React from 'react';

const Modal = ({ id, title, children }) => (
  <div className='modal fade' id={id} tabIndex='-1' role='dialog' aria-hidden='true'>
    <div className='modal-dialog modal-lg' role='document'>
      <div className='modal-content'>
        <div className='modal-header'>
          <h5 className='modal-title'>{title}</h5>
          <button type='button' className='close' data-dismiss='modal' aria-label='Close'>
            <span aria-hidden='true'>&times;</span>
          </button>
        </div>
        {children}
      </div>
    </div>
  </div>
);

export default Modal;