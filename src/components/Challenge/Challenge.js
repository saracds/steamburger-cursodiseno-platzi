import React from 'react';
import Cta from '../Cta/Cta';
import './Challenge.css';

function Challenge(props) {
  const content = props.content;
 
  const uiConfig = {
    'cta': 'cuaternary',
    'icon': 'primary'
  }

  const List = (() => {
    return content.social.map((item, index) => {
      return(
        <li key={index} className='Challenge-social-item'>
          <Cta type={uiConfig.cta} icon={item.icon} iconType={uiConfig.icon}/>
        </li>
      )
    })
  })();

  return (
    <div className='Challenge'>
      <h4 className='Challenge-title'>
        {content.title}
      </h4>
      <p className= 'Challenge-content p--light'>
        {content.subtitle}
      </p>
      <ul className='Challenge-icons'>
        {List}
      </ul>
    </div>
  );
}

export default Challenge;