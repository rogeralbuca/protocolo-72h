import './Hero.css';

export function Hero() {
  return (
    <section className="hero">
      <div className="hero-overlay"></div>
      <div className="container hero-content">
        <div className="hero-text-col">
          <img src="/protocolo-72h.svg" alt="Protocolo 72H" className="hero-logo" />

          <h1 className="hero-title">
            Se tudo parar hoje...
            <span className="hero-title-emphasis">você saberia o que fazer</span>
            ou travaria enquanto sua família depende de você?
          </h1>

          <p className="hero-subtitle">
            Você não precisa ser especialista em sobrevivencialista. Só precisa de um plano claro para agir nas primeiras 72 horas, mesmo morando em apartamento e começando do zero.
          </p>

          <p className="hero-urgent-text">
            <strong>Crise não exige força. Exige clareza e antecipação.</strong>
          </p>

          <div className="hero-cta-wrapper">
            <a href="#" className="cta-button">
              QUERO SABER EXATAMENTE O QUE FAZER
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
