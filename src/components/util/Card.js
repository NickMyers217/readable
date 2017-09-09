import React from 'react';

const Card = ({ title, subtitle, bodyText, children, footer}) => (
  <div className='card mb-2'>
    <div className='card-body' style={{ position: 'relative' }}>
      <div>
        {title &&
          <h5 className='card-title'>{title}</h5>}
        {subtitle &&
          <h6 className='card-subtitle mb-2 text-muted'>{subtitle}</h6>}
      </div>
      {(title || subtitle) &&
        <hr />}
      {bodyText &&
        <div className='mb-4'>
          <p className='card-text'>
            {bodyText}
          </p>
        </div>}
      {children}
    </div>
    {footer &&
      <div className='card-footer'>{footer}</div>}
  </div>
);

export default Card;