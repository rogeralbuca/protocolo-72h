import { Book, ShieldCheck, Droplets, Utensils, HeartPulse, Map, Users, CheckSquare } from 'lucide-react';
import './Features.css';

const featureList = [
  { icon: Book, title: 'Manual Completo', description: 'Passo a passo direto ao ponto para as primeiras 72h.' },
  { icon: ShieldCheck, title: 'Segurança da Casa', description: 'Técnicas discretas para proteger sua família sem parecer uma fortaleza.' },
  { icon: Droplets, title: 'Água e Energia', description: 'A base da preparação. Como estocar, racionar e purificar sem errar.' },
  { icon: Utensils, title: 'Alimentação', description: 'Organização prática de mantimentos que funcionam em cenário urbano.' },
  { icon: HeartPulse, title: 'Saúde', description: 'Primeiros socorros práticos e redução de riscos invisíveis.' },
  { icon: Map, title: 'Plano de Fuga', description: 'Saiba quando sair, por onde sair e como não decidir sob pânico.' },
  { icon: Users, title: 'Plano Familiar', description: 'O que cada membro deve fazer para evitar o caos dentro de casa.' },
  { icon: CheckSquare, title: 'Checklists', description: 'Resumos práticos para você ler, aplicar e revisar rápido.' },
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
              <span>Plano urbano para agir com clareza</span>
            </div>
            <div className="product-sheet product-sheet-map">
              <span>Mapa Visual 72H</span>
            </div>
            <div className="product-sheet product-sheet-checklist">
              <span>Checklist de Compras</span>
            </div>
          </div>

          <div className="product-anchor-copy">
            <p className="product-anchor-eyebrow">Âncora visual do produto</p>
            <h3>Não é só texto. É um sistema aplicável.</h3>
            <p>
              O material agora se apresenta com mais percepção de produto: guia principal, mapa visual, checklist imprimível e roteiro de ação para consulta rápida em momentos de pressão.
            </p>
            <ul className="product-anchor-list">
              <li>Guia central para leitura rápida e ação imediata</li>
              <li>Peças visuais que ajudam sua família a entender o plano</li>
              <li>Formato pensado para consulta simples e execução prática</li>
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
