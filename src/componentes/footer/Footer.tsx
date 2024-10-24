import React, { useEffect } from 'react';
import './Footer.css';

const Footer = () => {
  useEffect(() => {
    const handleScroll = () => {
      const footer = document.querySelector('.footer');
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      // Se o usuário rolou até o final da página
      if (scrollY + windowHeight >= documentHeight - 50) {
        footer.classList.add('show'); // Mostra o footer
      } else {
        footer.classList.remove('show'); // Esconde o footer
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll); // Limpa o evento ao desmontar
    };
  }, []);

  return (
    <footer className="footer">
  <div className="footer-card">
    <strong>JJM LOG</strong>
    <p>comercial@jjmlog.com</p>
    <p>+55 [12] 3911-5186</p>
  </div>
  <div className="footer-card">
    <strong>Endereço</strong>
    <p>Matriz: Av. Ambrósio Molina, 1251</p>
    <p>Eugênio de Melo, S. J. dos Campos - SP</p>
    <p>CEP 12247-000</p>
  </div>
  <div className="footer-card">
    <strong>Links</strong>
    <p><a href="https://www.jjmlog.com/index.php/pt/documentation/" target="_blank" rel="noopener noreferrer">LGPD</a></p>
    <p><a href="https://www.instagram.com/jjmlog/?r=nametag" target="_blank" rel="noopener noreferrer">Instagram</a></p>
    <p><a href="https://www.facebook.com/JJMLOG" target="_blank" rel="noopener noreferrer">Facebook</a></p>
  </div>
  <div className="footer-card">
    <strong>®2024 JJM LOG. Todos os direitos reservados.</strong>
  </div>
</footer>

  );
};

export default Footer;
