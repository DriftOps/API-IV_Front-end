import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <p>
              <strong>JJM LOG</strong>
              <br />
              comercial@jjmlog.com +55 [12] 3911-
              <br />
              5186 Matriz Av. Ambrósio Molina, 1251
              <br />
              Eugênio de Melo S. J. dos Campos - SP
              <br />
              CEP 12247-000
            </p>
          </div>
          <div className="col-md-4">
            <p>
              <strong>Links</strong>
              <br />
              <a href="#">LGPD</a>
              <br />
              <a href="#">Instagram</a>
              <br />
              <a href="#">Facebook</a>
            </p>
          </div>
          <div className="col-md-4">
            <p>
              <strong>Media Copyright</strong>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;