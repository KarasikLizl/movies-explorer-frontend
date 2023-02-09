import React from 'react';

function CommonHeader({text}) {
  return (
    <div className='commonHeader'>
      <h3 className='commonHeader__text'>{text}</h3>
    </div>
  )
}

export default CommonHeader