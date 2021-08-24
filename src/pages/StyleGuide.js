import React, { Component } from 'react';
import Challenge from '../components/Challenge/Challenge';
import Contact from '../modules/Contact/Contact';
import Cta from '../components/Cta/Cta';
import Hero from '../modules/Hero/Hero';
import Menu from '../modules/Menu/Menu';
import Nav from '../components/Nav/Nav';
import Quote from '../components/Quote/Quote';
import Product from '../components/Product/Product';
import './StyleGuide.css';

class StyleGuide extends Component {
  render() {
    const content = this.props.content;
    console.log(content)
    const sections = content.styleguide.sections;
    console.log(sections)

    /**
     * Sets the UI config for customizable components.
     */
    const uiConfig = {
      'nav': 'dark',
      'quote': 'primary'
    };

    /**
     * Creates the color palette component for the styleguide.
     */
    const Colors = (() => {
      const colors = [
        '$color-white',
        '$color-black',
        '$color-primary',
        '$color-secondary',
        '$color-terciary',
        '$color-cuaternary'
      ];

      return (
        <div className='StyleGuide__colors'>
          {colors.map((item, index) => {
            const colorClassName = `StyleGuide__color StyleGuide__color--${index}`;
            return (
              <span
                key={index}
                className={colorClassName}>
                  {item}
              </span>
            )
          })}
        </div>
      )
    })();

    /**
     * Creates the typography showcase component for the styleguide.
     */
    const Typography = (() => {
     
      const title = 'Ejemplo de título'

      return (
        <div className='StyleGuide__typography subgrid'>
          <h3 className='StyleGuide__typography-title'>Tipografía principal: Arvo Font Family</h3>
          <h5 className='StyleGuide__typography-title'>Tipografía secundaria: Open Sans</h5>
          <h1 className='StyleGuide__typography-heading'>{`${title} h1`}</h1>
          <h2 className='StyleGuide__typography-heading'>{`${title} h2`}</h2>
          <h3 className='StyleGuide__typography-heading'>{`${title} h3`}</h3>
          <h3 className='StyleGuide__typography-heading h3--primary'>{`${title} h3 primary`}</h3>
          <h4 className='StyleGuide__typography-heading'>{`${title} h4`}</h4>
          <h4 className='StyleGuide__typography-heading h4--dark'>{`${title} h4 dark`}</h4>
        </div>
      )
    })();

    /**
     * Creates the grid showcase component for the styleguide.
     */
    const Grid = (() => {
      const columnNumber = 12;
      const columns = [...Array(columnNumber).keys()];

      return (
        <div className='StyleGuide__grid subgrid'>
          {columns.map((item, index) => {
            const colorClassName = 'StyleGuide__column';
            return (
              <span
                key={index}
                className={colorClassName}>
                  {item + 1}
              </span>
            )
          })}
        </div>
      )
    })();

    /**
     * Creates the ctas showcase component for the styleguide.
     */
    const Ctas = (() => {
      return (
        <div className='StyleGuide__ctas '>
          <Cta type="primary" label="Primary!" />
          <Cta type="secondary" label="Secondary" />
          <Cta type="terciary" icon="hamburger" iconType="primary" />
          <Cta type="cuaternary" icon="nav" iconType="secondary" />
          <Cta type="cuaternary" icon="facebook" iconType="primary" />
        </div>
      )
    })();

    /**
     * Lists the components used in the styleguide.
     */
    const components = {
      'challenge': <Challenge content={content.challenge} />,
      'contactbox': <Contact content={content.contact} />,
      'hero': <Hero content={content.hero} />,
      'menu': <Menu content={content.menu} />,
      'nav': <Nav content={content.nav} type={uiConfig.nav} />,
      'quote': <Quote content={content.quote} type={uiConfig.quote} />,
      'product': <Product content={content.menu.products[0]} />,
      'colores': Colors,
      'tipografia': Typography,
      'grid': Grid,
      'botones': Ctas
    }

    /**
     * Creates the sections of the styleguide.
     */
    const Sections = (() => {
      return sections.map((item, index) => {
        return (
          <section key={index} className='StyleGuide__section'>
            <div className='StyleGuide__masthead'>
              <h3 className='StyleGuide__section-title'>{item.title}</h3>
              <p className='StyleGuide__section-subtitle'>{item.subtitle}</p>
            </div>
            <div className='StyleGuide__wrapper'>
              {components[item.title.toLowerCase()]}
            </div>
          </section>
        )
      })
    })();

    /**
     * Returns the styleguide markup.
     */
    return (
      <div className='StyleGuide'>
        <h1 className='StyleGuide__main-title'>{content.styleguide.title}</h1>
        <div className='StyleGuide__wrapper grid'>
          {Sections}
        </div>
      </div>
    );
  }
}

export default StyleGuide;