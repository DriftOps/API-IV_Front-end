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
      if (scrollY + windowHeight >= documentHeight - 50) { // Adicionando um pequeno buffer
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
      <div>
        <p>
          <strong>JJM LOG</strong>
          <br />
          comercial@jjmlog.com +55 [12] 3911-5186
          <br />
          Matriz Av. Ambrósio Molina, 1251
          <br />
          Eugênio de Melo S. J. dos Campos - SP
          <br />
          CEP 12247-000
        </p>
        <p>
          <strong>Links</strong>
          <br />
          <a href="#">LGPD</a>
          <br />
          <a href="#">Instagram</a>
          <br />
          <a href="#">Facebook</a>
        </p>
        <p>
          <strong>Media Copyright</strong>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
