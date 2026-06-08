import { Check } from 'lucide-react';
import './Offer.css';

const offerIncludes = [
  'E-book Protocolo 72H (guia principal)',
  'Guia Ilustardo 72H (infográficos)',
  'Lista de equipamentos 72H (lista de compras)',
];

const extras = [
  'App Guia de Execução 72H (mão na massa)',
  'Blog Protocolo 72H (artigos sobre sobrevivência e defesa)',
  'Loja Protocolo 72H (equipamentos de sobrevivência)',
  'Canal Telegram Protocolo 72H (canal novidades e atualizações)',
  'Grupo Telegram Protocolo 72H (Comunidade exclusiva)',
];


export function Offer() {
  return (
    <section className="offer" id="offer">
      <div className="container">
        <div className="offer-content">
          <div className="offer-box">
            <div className="offer-header">
              <h2>O que você garante hoje</h2>
              <div className="price-tag">
                <span className="price-label">Está pronto. Apenas</span>
                <span className="price-value">R$ 97</span>
                <span className="price-compare">
                  Você pode gastar R$97 com algo que esquece amanhã ou usar isso para garantir que sua família não dependa da sorte.
                </span>
              </div>
            </div>

            <div className="offer-list">
              <ul>
                {offerIncludes.map((item, idx) => (
                  <li key={idx}>
                    <Check className="check-icon" size={20} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="offer-list offer-list-bonus">
              <h3 className="bonus-title">Bônus Especiais Inclusos</h3>
              <ul>
                {extras.map((item, idx) => (
                  <li key={idx}>
                    <Check className="check-icon" size={20} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="offer-justification">
              <p>
                O preço não compra só um ebook. Compra clareza para agir, reduzir erro nas primeiras horas e proteger quem depende de você sem improviso.
              </p>
            </div>

            <div className="offer-cta-wrapper">
              <a href="#" className="cta-button">
                QUERO ESTAR PREPARADO AGORA
              </a>

              <div className="offer-trust-row">
                <span className="cta-guarantee">Pagamento 100% seguro</span>
                <span className="cta-guarantee">Acesso imediato</span>
                <span className="cta-guarantee">Garantia de 7 dias</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
