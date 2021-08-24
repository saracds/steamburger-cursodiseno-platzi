import React from 'react';
import Cta from '../../components/Cta/Cta';
import Icon from '../../components/Icon/Icon';
import './Hero.css';

function Hero(props) {
  const content = props.content;
  
  const uiConfig = {
    'cta': 'secondary',
    'icon': 'terciary'
  }

  return (
    <div className='Hero'>
      <div className='Hero-icon'>
        <Icon icon={content.icon} type={uiConfig.icon} />
      </div>
      <h1 className='Hero-title'>
        {content.title}
      </h1>
      <h2 className='Hero-subtitle'>
        {content.subtitle}
      </h2>
      <div className='Hero-cta'>  
        <a href="#Menu" > <Cta type={uiConfig.cta} label={content.cta} /></a>
      </div>
    </div>
  );
}

export default Hero;