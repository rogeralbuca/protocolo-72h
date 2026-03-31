import { Check } from 'lucide-react';
import './Offer.css';

const offerIncludes = [
  "Protocolo completo (Guia Principal)",
  "Mapa Visual 72H",
  "Lista de Compras de Emergência",
  "Roteiro prático para os primeiros 7 dias",
  "Guia de aplicação dentro de apartamento/casa",
  "Plano anti-procrastinação"
];

export function Offer() {
  return (
    <section className="offer" id="offer">
      <div className="container">
        <div className="offer-content">
          <div className="offer-box">
            <div className="offer-header">
              <h2>O que você garante HOJE</h2>
              <div className="price-tag">
                <span className="price-label">ESTÁ PRONTO. APENAS</span>
                <span className="price-value">R$ 47</span>
                <span className="price-compare">Menos que uma pizza. Muito mais valioso que improvisar.</span>
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

            <div className="offer-cta">
              <a href="https://pay.hotmart.com/F18680649I?bid=1774933351301" className="cta-button" target="_blank" rel="noopener noreferrer">
                QUERO PROTEGER MINHA FAMÍLIA AGORA
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
