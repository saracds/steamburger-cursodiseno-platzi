import React, { Component } from 'react';

import Contact from '../modules/Contact/Contact';
import Hero from '../modules/Hero/Hero';
import About from '../modules/About/About';
import Menu from '../modules/Menu/Menu';

import Nav from '../components/Nav/Nav';
import Challenge from '../components/Challenge/Challenge';
import Quote from '../components/Quote/Quote';
import Services from '../components/Services/Services';
import Footer from '../components/Footer/Footer'


class Home extends Component {
  render() {
    const content = this.props.content;
    const cssClass = 'Home';
    const uiConfig = {
      'nav': 'light',
      'quote': 'primary'
    }

    return (
      <div className={cssClass}>

        {/* <!--========== SCROLL TOP ==========--> */}

        <a href="#" class="scrolltop" id="scroll-top">
          <i class='bx bx-chevron-up scrolltop__icon' />
        </a>

        <Nav />
        <section id='Home'>
          <Hero content={content.hero} />
          <Quote content={content.quote} type={uiConfig.quote} />
        </section>

        <section id='About' className='bd-container'>
          <About content={content.about} />
        </section >

        <section class="Services bd-container">
            <Services content={content.services} />
        </section>

        <section id='Menu'>
          <Menu content={content.menu} />
        </section>

        <section id='Contacto'>
          <Challenge content={content.challenge} />
          <Contact content={content.contact} />
        </section>

        <Footer />
      </div>
    );
  }
}

export default Home;