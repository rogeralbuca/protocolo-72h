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
            <img src="/author.webp" alt="Roger Albuquerque" className="dossier-photo" width="380" height="400" loading="lazy" />
          </div>
          <div className="dossier-quote-box">
            <p>"Não trate preparação como hobby. Isso é responsabilidade. A maioria das famílias não sobrevive às primeiras 72 horas."</p>
            <span className="dossier-author-name">- Roger Albuquerque</span>
          </div>
        </div>

        <div className="author-text">
          <h2 className="section-title">Sobre Quem Criou</h2>
          <p>
            Eu não criei o <strong>Protocolo 72H</strong> para alimentar medo.
            Criei porque entendi uma verdade simples: quando tudo falha, a responsabilidade continua sendo sua.
          </p>
          <p>
            Sou pai. E foi isso que mudou a forma como eu enxergo preparação.
            Não como hobby. Não como exagero. Mas como a diferença entre improvisar sob pressão e ter um plano claro quando sua família mais precisa de você.
          </p>
          <p>
            Diante de uma crise, ou um colapso urbano, a maioria percebe tarde demais que nunca definiu o básico:
            água, alimento, comunicação, segurança e função de cada um.
          </p>
          <p>
            O Protocolo 72H nasceu para resolver isso de forma prática.
            Sem paranoia. Sem fantasia. Sem complicação.
            Só estrutura, clareza e direção para que qualquer pessoa comum esteja pronto para proteger quem ama.
          </p>
        </div>
      </div>
    </section>
  );
}
