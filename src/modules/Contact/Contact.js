import React from 'react';
import './Contact.css';
import Cta from '../../components/Cta/Cta';
import hamburger from '../../images/hamburguer-contac.jpg'

function Contact(props) {

  const content = props.content;

  const uiConfig = {
    'cta': 'secondary',
    'icon': 'terciary'
  }

  return (
    <div className='Contact grid'>
      <div className='Contact-info'>
        <h3 className='h4--white'>  {content.title} </h3>
        <p> {content.description}   </p>
        <Cta type={uiConfig.cta} label={content.cta} />
      </div>
      <div className='Contact-box'>
        <img src={hamburger} alt='Hamburguesa, foto de Jonathan Borba'/>
      </div>
    </div>
  );
}

export default Contact;