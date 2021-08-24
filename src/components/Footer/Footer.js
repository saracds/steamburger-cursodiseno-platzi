import React from 'react';
import './Footer.css';

function Footer() {

    return (
        <footer class="footer section bd-container">
            <div class="footer__container bd-grid">
                <div class="footer__content">
                    <a href="#" class="footer__logo">Steam Burger</a>
                    <span class="footer__description">Restaurante</span>
                    <div>
                        <a href="#" class="footer__social"><i class='bx bxl-github'></i></a>
                    </div>
                </div>

                <div class="footer__content">
                    <h3 class="footer__title">Servicios</h3>
                    <ul>
                        <li><a href="#" class="footer__link">Entrega</a></li>
                        <li><a href="#" class="footer__link">Precios</a></li>
                        <li><a href="#" class="footer__link">Comida rápida</a></li>
                        <li><a href="#" class="footer__link">Reserve su plaza</a></li>
                    </ul>
                </div>

                <div class="footer__content">
                    <h3 class="footer__title">Información</h3>
                    <ul>
                        <li><a href="#" class="footer__link">Eventos</a></li>
                        <li><a href="#" class="footer__link">Contáctanos</a></li>
                        <li><a href="#" class="footer__link">Política de privacidad</a></li>
                        <li><a href="#" class="footer__link">Términos del servicio</a></li>
                    </ul>
                </div>

                <div class="footer__content">
                    <h3 class="footer__title">Dirección</h3>
                    <ul>
                        <li class="footer__info">Medellín - Colombia</li>
                        <li class="footer__info">Cra 11 # 10 Sur</li>
                        <li class="footer__info">233 - 86 - 17</li>
                        <li class="footer__info">steamburger@email.com</li>
                    </ul>
                </div>
            </div>

            <p class="footer__copy">&#169; 2021 Sara C. Todos los derechos reservados</p>
        </footer>
    );
}

export default Footer;