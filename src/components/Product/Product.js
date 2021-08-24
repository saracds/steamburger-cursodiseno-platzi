import React from 'react';
import Cta from '../Cta/Cta';
import './Product.css';
import hamburguesasencilla from '../../images/hamburguer-product.png';

function Product(props) {
  const content = props.content;

  const uiConfig = {
    'cta': 'price'
  }

  const imagenes = {
    'hamburguesasencilla': hamburguesasencilla,
    
  }

  return (
    <div className='Product'>
       <img className='Product-img' src={imagenes[content.imagen]} alt='Foto de Valeria Boltneva en Pexels' />
      <h4 className='Product-title h4--dark'>
        {content.title}
      </h4>
      <p className='Product-description'>
        {content.subtitle}
      </p>
      <Cta type={uiConfig.cta} label={content.price} />
    </div>
  );
}

export default Product;
// Foto de Valeria Boltneva en Pexels