import React, { useEffect } from 'react';
import './Nav.css';

function Nav() {

  useEffect(() => {

    /*===== SCROLL SECTIONS ACTIVE LINK =====*/
    const sections = document.querySelectorAll('section[id]');
    function scrollActive() {
      const scrollY = window.pageYOffset;

      sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        let sectionId = current.getAttribute('id');
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link');
        } else {
          document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link');
        }
      })
    }
    window.addEventListener('scroll', scrollActive);

    /*==================== SHOW SCROLL TOP ====================*/
    function scrollTop() {
      const scrollTop = document.getElementById('scroll-top');
      // Cuando el desplazamiento sea superior a 560 de altura de la ventana gráfica, añada la clase show-scroll 
      // a la etiqueta a con la clase scroll-top
      if (this.scrollY >= 560) scrollTop.classList.add('show-scroll'); else scrollTop.classList.remove('show-scroll')
    }
    window.addEventListener('scroll', scrollTop)

      // *===== CHANGE BACKGROUND HEADER =====* / 
    function scrollHeader() {
      const header = document.getElementById('header');
      if (this.scrollY >= 200) header.classList.add('scroll-header'); else header.classList.remove('scroll-header');
    }
    window.addEventListener('scroll', scrollHeader);

    // cleanup this component
    return () => {
      window.removeEventListener('scroll', scrollActive);
      window.removeEventListener('scroll', scrollTop);
      window.removeEventListener('scroll', scrollHeader);
    };
  }, []);

  /* Show menu */
  const showMenu = () => {
    const toggle = document.querySelector('#nav-toggle');
    const nav = document.querySelector('#nav-menu');
    console.log('se huzo click')
    if (toggle && nav) {
      nav.classList.toggle('show-menu');
    }
  }

  /* ===== REMOVE MENU MOBILE ===== */
  const removeMenu = () => {
    const navMenu = document.querySelector('#nav-menu');
    navMenu.classList.remove('show-menu');
  }

  return (

    <header className="Nav l-header" id="header">
      <nav className="nav bd-container">
        <a href="#" className="nav__logo"><span className="hamburger"></span></a>
        <div className="nav__menu" id="nav-menu">
          <ul className="nav__list">
            <li className="nav__item">
              <a href="#Home" className="nav__link active-link" onClick={() => removeMenu()}>Home</a>
            </li>
            <li className="nav__item">
              <a href="#About" className="nav__link" onClick={() => removeMenu()}>Nosotros</a>
            </li>
            <li className="nav__item">
              <a href="#Menu" className="nav__link" onClick={() => removeMenu()}>Menú</a>
            </li>
            <li className="nav__item">
              <a href="#Contacto" class="nav__link" onClick={() => removeMenu()}>Contacto</a>
            </li>
          </ul>
        </div>
        <div className="nav__toggle" id="nav-toggle" >
          <span className="nav__toggle--icon" onClick={() => showMenu()}></span>
        </div>
      </nav>
    </header>
  );
}

export default Nav;

// home nosotros menú promociones contacto