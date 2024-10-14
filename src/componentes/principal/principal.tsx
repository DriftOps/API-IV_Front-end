import React from 'react';
import './principal.css';

function principal() {
    return (
        <div className="principal">
            <header className="principal-header">
                <h2>Bem-vindo ao sistema LogiTrack!</h2>
                <h3>Sobre a JJM Log:</h3>
            </header>

            {/* Serviços */}
            <section className="servicos-section">
                <div className="servico">
                    <img src="./img/transporte-aereo.png" alt="Transporte Aéreo e Rodoviário" />
                    <h3>Transporte Aéreo e Rodoviário</h3>
                    <p>Transportes com hora marcada para coleta e recebimento.</p>
                </div>
                <div className="servico">
                    <img src="./img/armazenagem.png" alt="Armazenagem e Manuseio" />
                    <h3>Armazenagem e Manuseio</h3>
                    <p>Montagem de kits promocionais, confecção de mailing e envelopagem.</p>
                </div>
                <div className="servico">
                    <img src="./img/empresa.png" alt="Operações in House e Telecom" />
                    <h3>Operações in House e Telecom</h3>
                    <p>Gestão de operação logística na própria empresa. Redução de custos e acompanhamento.</p>
                </div>
                <div className="servico">
                    <img src="./img/logistica-reversa.png" alt="Encomendas especiais e Logística Reversa" />
                    <h3>Encomendas especiais e Logística Reversa</h3>
                    <p>Entregas urgentes e encomendas especiais porta a porta, também através de parcerias com os Correios.</p>
                </div>
            </section>

            {/* Missão, Visão e Valores */}
            <section className="mvv-section">
                <div className="mvv-item">
                    <img src="./img/missao.png" alt="Missão" />
                    <h3>Missão</h3>
                    <p>Promover a Distribuição e Logística Nacional com eficiência, excelência e informação em tempo real.</p>
                </div>
                <div className="mvv-item">
                    <img src="./img/visao.png" alt="Missão" />
                    <h3>Visão</h3>
                    <p>Ser reconhecida como empresa de excelência nos transportes de cargas multimodal e Logística, por meio do profissionalismo e transparência, aliados à experiência e inovação.</p>
                </div>
                <div className="mvv-item">
                    <img src="./img/valores.png" alt="Missão" />
                    <h3>Valores</h3>
                    <p>Ética, Honestidade e Responsabilidade Social.</p>
                </div>
            </section>

            {/* Download da Apresentação */}
            <section className="download-section">
                <h2>Download da apresentação </h2>
                <p>Para maiores informações, baixe nossa apresentação no formato PDF.</p>
                <br /><br />
                <a href="/public/JJMLOG.pdf" download className="download-button">DOWNLOAD</a>
            </section>
        </div>
    );
}

export default principal;
