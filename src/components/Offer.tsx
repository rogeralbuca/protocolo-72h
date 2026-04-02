import { Check } from 'lucide-react';
import './Offer.css';

const offerIncludes = [
  'Protocolo completo 72H (guia principal)',
  'Mapa visual 72H',
  'Checklist de compras para 72H',
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
                <span className="price-value">R$ 47</span>
                <span className="price-compare">
                  Você pode gastar R$47 com algo que esquece amanhã ou usar isso para garantir que sua família não dependa da sorte.
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

            <div className="offer-justification">
              <p>
                O preço não compra só um ebook. Compra clareza para agir, reduzir erro nas primeiras horas e proteger quem depende de você sem improviso.
              </p>
            </div>

            <div className="offer-cta-wrapper">
              <a href="https://pay.hotmart.com/F18680649I?bid=1774933351301" className="cta-button" target="_blank" rel="noopener noreferrer">
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
