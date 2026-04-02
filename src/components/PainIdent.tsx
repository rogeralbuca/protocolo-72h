import { PlugZap, RadioTower, Droplets, UtensilsCrossed, X } from 'lucide-react';
import './PainIdent.css';

export function PainIdent() {
  return (
    <section className="pain-ident">
      <div className="container">
        <div className="pain-grid">
          <div className="pain-item">
            <PlugZap size={40} className="pain-icon-main" />
            <div className="pain-item-text">
              <span className="pain-item-title">Fim da Energia.</span>
              <span className="pain-item-desc">Cegueira inicial.</span>
            </div>
          </div>
          <div className="pain-item">
            <RadioTower size={40} className="pain-icon-main" />
            <div className="pain-item-text">
              <span className="pain-item-title">Queda de Comunicação.</span>
              <span className="pain-item-desc">Isolamento tático.</span>
            </div>
          </div>
          <div className="pain-item">
            <Droplets size={40} className="pain-icon-main" />
            <div className="pain-item-text">
              <span className="pain-item-title">Fim da Água Encanada.</span>
              <span className="pain-item-desc">Racionamento crítico.</span>
            </div>
          </div>
          <div className="pain-item">
            <UtensilsCrossed size={40} className="pain-icon-main" />
            <div className="pain-item-text">
              <span className="pain-item-title">Fim dos Estoques.</span>
              <span className="pain-item-desc">Colapso da ordem.</span>
            </div>
          </div>
        </div>

        <div className="pain-content">
          <p className="pain-question">
            Se isso acontecer hoje à noite...
            <strong>Você saberia exatamente o que fazer?</strong>
            Ou iria improvisar enquanto sua família olha pra você esperando uma decisão?
          </p>

          <div className="pain-contradiction">
            <h3>A maioria dos pais vive uma contradição silenciosa.</h3>
            <p>No trabalho, você resolve. Você lidera. Você toma decisões. Mas quando o assunto é crise real...</p>
            <ul className="pain-lack-list">
              <li><X className="lack-icon" /> Falta clareza</li>
              <li><X className="lack-icon" /> Falta estrutura</li>
              <li><X className="lack-icon" /> Falta um plano</li>
            </ul>
            <p className="pain-worst">E o pior não é a crise. <strong>É a sensação de não estar preparado quando mais importa.</strong></p>
          </div>
        </div>
      </div>
    </section>
  );
}
