import { Book, ShieldCheck, Droplets, Utensils, HeartPulse, Map, Radio, Smartphone } from 'lucide-react';
import './Features.css';

const featureList = [
  { icon: Book, title: '01. Manual Completo', description: 'O ponto de partida. A mentalidade correta e o que fazer no minuto zero.' },
  { icon: Droplets, title: '02. Água e Energia', description: 'A base da sobrevivência imediata. Como estocar, racionar e purificar água sem eletricidade.' },
  { icon: Utensils, title: '03. Alimentação', description: 'Estoque estratégico de mantimentos urbanos que não necessitam de refrigeração ou cozimento.' },
  { icon: Radio, title: '04. Comunicação', description: 'Como restabelecer contato e obter notícias cruciais mesmo com celular e internet caídos.' },
  { icon: ShieldCheck, title: '05. Segurança da Casa', description: 'Técnicas discretas de proteção residencial para defender seu lar sem chamar atenção.' },
  { icon: HeartPulse, title: '06. Saúde', description: 'Gerenciamento de primeiros socorros práticos, higiene básica e medicamentos sob crise.' },
  { icon: Map, title: '07. Plano de Fuga', description: 'Rotas de evacuação urbana e critérios de segurança para saber exatamente quando é hora de sair.' },
  { icon: Smartphone, title: '08. App Guia de Execução 72H', description: 'Aplicativo prático (mão na massa), para guiar sua ação passo a passo sob extrema pressão.' },
];

export function Features() {
  return (
    <section className="features" id="features">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">O Que Você Recebe No Protocolo</h2>
          <p className="section-subtitle">
            O sistema não é tão estável quanto parece. Entregar sua resposta à sorte não é uma opção. Veja o que está coberto no seu plano.
          </p>
        </div>

        <div className="product-anchor">
          <div className="product-mockup" aria-hidden="true">
            <div className="product-cover">
              <span className="product-cover-kicker">Kit digital</span>
              <strong>Protocolo 72H</strong>
              <span>Plano de ação para agir com clareza</span>
            </div>
            <div className="product-sheet product-sheet-map">
              <span>Guia Ilustardo 72H</span>
            </div>
          </div>

          <div className="product-anchor-copy">
            <h3>Não é só texto. É um sistema aplicável.</h3>
            <p>
              O material agora se apresenta com mais percepção de produto: guia principal, mapa visual, checklist imprimível e roteiro de ação para consulta rápida em momentos de pressão.
            </p>
            <ul className="product-anchor-list">
              <li>Protocolo 72H (plano de ação para agir com clareza)</li>
              <li>Guia Ilustardo 72H (infográficos)</li>
            </ul>
          </div>
        </div>

        <div className="features-grid">
          {featureList.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div className="feature-card" key={index}>
                <div className="feature-icon-wrapper">
                  <Icon className="feature-icon" size={28} />
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
