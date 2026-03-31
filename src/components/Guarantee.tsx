import { ShieldCheck } from 'lucide-react';
import './Guarantee.css';

export function Guarantee() {
  return (
    <section className="guarantee">
      <div className="container">
        <div className="guarantee-box">
          <ShieldCheck className="guarantee-icon" size={64} />
          <h2 className="section-title">Garantia Incondicional de 7 Dias</h2>
          <p>Você não tem risco algum. Acesse o <strong>Protocolo 72H</strong> agora mesmo, baixe o material e veja se ele faz sentido para a sua realidade. Se você não achar essa a estruturação mais prática para a segurança da sua família, devolvemos 100% do seu dinheiro. Sem complicação.</p>
        </div>
      </div>
    </section>
  );
}
