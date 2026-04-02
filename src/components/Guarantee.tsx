import { ShieldCheck } from 'lucide-react';
import './Guarantee.css';

export function Guarantee() {
  return (
    <section className="guarantee">
      <div className="container">
        <div className="guarantee-box">
          <ShieldCheck className="guarantee-icon" size={64} />
          <p className="guarantee-kicker">Teste por 7 dias sem risco</p>
          <h2 className="section-title">Você entra para ganhar clareza, não para correr risco</h2>
          <p>
            Acesse o <strong>Protocolo 72H</strong>, leia o material, avalie como ele se encaixa na sua rotina e veja se você sente mais controle sobre os próximos passos.
          </p>
          <p className="guarantee-strong">
            Se você não sentir mais clareza e confiança para proteger sua família, basta pedir reembolso. Sem perguntas. Sem burocracia.
          </p>
        </div>
      </div>
    </section>
  );
}
