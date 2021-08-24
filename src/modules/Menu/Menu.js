import React, { useState } from 'react';
import Cta from '../../components/Cta/Cta';
import Product from '../../components/Product/Product';
import './Menu.css';

function Menu(props) {
  const content = props.content;

  const uiConfig = {
    'ctaTab': 'terciary',
    'ctaIcon': 'primary',
    'cta': 'secondary'
  }

  const Tabs = (() => {
    return content.items.map((item, index) => {
      return (
        <li key={index} className='Menu-item' >
          <Cta type={uiConfig.ctaTab} icon={item.icon} iconType={uiConfig.ctaIcon}  />
        </li>
      )
    })
  })();

  const Products = (() => {
    return content.products.map((product, index) => {
      return (
        <li key={index} className='Menu-product'>
          <Product content={product} />
        </li>
      )
    })
  })();

  return (
    <div className='Menu'>
      <h3>{content.title}</h3>
      <ul className='Menu-tabs'>
        {Tabs}
      </ul>
      <ul className='Menu-products grid'>
        {Products}
      </ul>
      <Cta type={uiConfig.cta} label={content.cta} />
    </div>
  );
}

export default Menu;