import React from 'react';
import './Quote.css';

function Quote(props) {
  const content = props.content;


  return (
    <div className='Quote'>
      <h4>{content.title}</h4>
    </div>
  );
}

export default Quote;