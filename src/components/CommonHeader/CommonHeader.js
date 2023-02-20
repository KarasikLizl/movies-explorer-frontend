import React from 'react';

function CommonHeader({ text, color: grey }) {
  return (
    <div className={`commonHeader commonHeader_${grey}`}>
      <h3 className='commonHeader__text'>{text}</h3>
    </div>
  );
}

export default CommonHeader;
