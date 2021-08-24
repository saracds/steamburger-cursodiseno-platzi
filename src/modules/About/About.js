import React from 'react';
import './About.css';
import Cta from '../../components/Cta/Cta';
import burger from '../../images/hamburger-about.jpg'

function About({ content }) {

  const uiConfig = {
    'cta': 'secondary',
    'icon': 'terciary'
  }


  return (
    <div className='About'>
      <div className="About__container  bd-grid">
        <div className="About__data">
          <h3 className='About__title About__initial'>{content.title}</h3>
          <p className='About__description About__initial'>{content.description}</p>
          <Cta type={uiConfig.cta} label={content.cta} />
        </div>
        <img src={burger} alt="Foto de David Geib en Pexels " class="About__img"/>
      </div>
    </div>

  );
}

export default About;