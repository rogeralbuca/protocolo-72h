import './Author.css';

export function Author() {
  return (
    <section className="author" id="author">
      <div className="container author-container">
        <div className="author-image-placeholder">
          {/* Espaço para colocar a foto real do autor do Produto posteriormente */}
          <div className="image-fallback">?</div>
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
