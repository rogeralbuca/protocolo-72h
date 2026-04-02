import './Hero.css';

export function Hero() {
  return (
    <section className="hero">
      <div className="hero-overlay"></div>
      <div className="container hero-content">
        <div className="hero-text-col">
          <img src="/protocolo-72h.svg" alt="Protocolo 72H" className="hero-logo" />

          <p className="hero-kicker">Plano prático para pais que precisam liderar com clareza em cenário de crise</p>

          <h1 className="hero-title">
            Se tudo parar hoje...
            <span className="hero-title-emphasis">você saberia o que fazer</span>
            ou travaria enquanto sua família depende de você?
          </h1>

          <p className="hero-subtitle">
            Você não precisa ser militar, forte ou especialista. Só precisa de um plano claro para agir nas primeiras 72 horas, mesmo morando em apartamento e começando do zero.
          </p>

          <p className="hero-urgent-text">
            <strong>Crise não exige força. Exige clareza.</strong>
          </p>

          <div className="hero-cta-wrapper">
            <a href="https://pay.hotmart.com/F18680649I?bid=1774933351301" className="cta-button" target="_blank" rel="noopener noreferrer">
              QUERO SABER EXATAMENTE O QUE FAZER
            </a>
            <div className="hero-trust-row">
              <span className="cta-guarantee">Pagamento 100% seguro</span>
              <span className="cta-guarantee">Acesso imediato</span>
              <span className="cta-guarantee">Garantia de 7 dias</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
