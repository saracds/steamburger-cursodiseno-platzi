import React from 'react';
import Icon from '../Icon/Icon';
import './Cta.css';

function Cta(props) {
  const cssClass = 'Cta';
  const content = props.icon ? <Icon icon={props.icon} type={props.iconType} /> : props.label;
  
  return (
    <button className={`Cta Cta--${props.type}`}>
      {content}
    </button>
  );
}

export default Cta;