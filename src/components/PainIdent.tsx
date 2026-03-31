import { AlertCircle, ZapOff, WifiOff, Droplet } from 'lucide-react';
import './PainIdent.css';

export function PainIdent() {
  return (
    <section className="pain-ident">
      <div className="container">
        <div className="pain-header">
          <h2 className="section-title">Você trabalha, resolve problemas, cuida da sua família...</h2>
          <p className="pain-subtitle">Mas tem uma coisa que você evita encarar de verdade:</p>
          <div className="pain-highlight">E se tudo parar hoje?</div>
        </div>

        <div className="pain-grid">
          <div className="pain-item"><ZapOff size={32} /><span>Sem energia.</span></div>
          <div className="pain-item"><Droplet size={32} /><span>Sem água.</span></div>
          <div className="pain-item"><WifiOff size={32} /><span>Sem comunicação.</span></div>
        </div>

        <div className="pain-content">
          <p className="pain-question">
            Se isso acontecer hoje à noite... <br />
            <strong>Você saberia exatamente o que fazer?</strong> <br />
            Ou iria improvisar enquanto sua família olha pra você esperando uma decisão?
          </p>

          <div className="pain-contradiction">
            <h3>A maioria dos pais vive uma contradição silenciosa.</h3>
            <p>No trabalho, você resolve. Você lidera. Você toma decisões. Mas quando o assunto é crise real...</p>
            <ul className="pain-lack-list">
              <li><AlertCircle className="lack-icon" /> Falta clareza</li>
              <li><AlertCircle className="lack-icon" /> Falta estrutura</li>
              <li><AlertCircle className="lack-icon" /> Falta um plano</li>
            </ul>
            <p className="pain-worst">E o pior não é a crise. <strong>É a sensação de não estar preparado quando mais importa.</strong></p>
          </div>

          <div className="pain-belief">
            <p className="belief-highlight">Você não precisa ser militar. Você não precisa ter experiência. Você não precisa mudar sua rotina.</p>
            <p className="belief-solution">Você precisa de clareza.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
