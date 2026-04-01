import './Author.css';

export function Author() {
  return (
    <section className="author" id="author">
      <div className="container author-container">
        <div className="dossier-card">
          <div className="dossier-image">
            <div className="corner corner-tl"></div>
            <div className="corner corner-tr"></div>
            <div className="corner corner-bl"></div>
            <div className="corner corner-br"></div>
            <img src="/author.png" alt="Roger Albuquerque" className="dossier-photo" />
          </div>
          <div className="dossier-quote-box">
             <p>"Não trate preparação como hobby. Isso é responsabilidade. A maioria das famílias não sobrevive às primeiras 72 horas."</p>
             <span className="dossier-author-name">- Roger Albuquerque</span>
          </div>
        </div>
        <div className="author-text">
          <h2 className="section-title">Sobre Quem Criou</h2>
          <p>
            Eu não criei isso porque sou militar ou fanático por sobrevivencialismo extremo.
            <strong> Criei porque sou pai.</strong>
          </p>
          <p>
            Percebi que se o sistema vacilasse hoje, eu não teria um plano claro. Preparação não é sobre força brural.
            <strong> É sobre estrutura.</strong>
          </p>
          <p>
            Se você é pai, você entende. A responsabilidade é sua, e delegar essa segurança ao acaso é um erro que a maioria descobre apenas quando já é tarde demais. Você pode resolver isso hoje.
          </p>
        </div>
      </div>
    </section>
  );
}
