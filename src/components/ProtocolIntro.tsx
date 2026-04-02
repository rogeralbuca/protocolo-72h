import './ProtocolIntro.css';

export function ProtocolIntro() {
  return (
    <section className="protocol-intro">
      <div className="container">
        <div className="intro-comparison">
          <h2 className="intro-highlight">
            Um tem informação. <span className="highlight-green">O outro tem um plano.</span>
          </h2>
        </div>

        <div className="intro-box">
          <div className="intro-logo-wrapper">
            <h3 className="intro-logo">PROTOCOLO 72H</h3>
          </div>

          <p className="intro-description">
            Um manual direto ao ponto, feito para pais de família que vivem em centros urbanos e precisam saber exatamente o que fazer nas primeiras 72 horas de uma crise.
          </p>

          <ul className="intro-benefits">
            <li>✔ Sem teoria desnecessária</li>
            <li>✔ Sem cenário fantasioso</li>
            <li>✔ Sem complicação</li>
          </ul>

          <div className="intro-action">
            <strong>Apenas o que precisa ser feito… na ordem certa.</strong>
          </div>

          <div className="intro-cta-wrapper">
            <a href="https://pay.hotmart.com/F18680649I?bid=1774933351301" className="cta-button" target="_blank" rel="noopener noreferrer">
              QUERO TER ACESSO AGORA
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
