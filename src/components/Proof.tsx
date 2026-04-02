import { MessageSquareQuote, ShieldCheck, Star } from 'lucide-react';
import './Proof.css';

const testimonials = [
  {
    quote:
      'Eu achava que isso era exagero. Depois que organizei água, energia e função de cada um, percebi o quanto estávamos vulneráveis.',
    author: 'Pai, 38 anos, Fortaleza',
  },
  {
    quote:
      'O material tirou a preparação do campo da ansiedade e levou para a prática. Em uma noite já consegui montar meu plano-base.',
    author: 'Mãe, 34 anos, Recife',
  },
  {
    quote:
      'Sem dramatização. Sem teoria demais. Só um roteiro claro para proteger minha família sem virar refém do improviso.',
    author: 'Responsável familiar, 41 anos, São Paulo',
  },
];

export function Proof() {
  return (
    <section className="proof-section">
      <div className="container">
        <div className="proof-header">
          <h2 className="section-title">O que muda quando existe um plano</h2>
        </div>

        <div className="proof-grid">
          {testimonials.map((item) => (
            <article className="proof-card" key={item.author}>
              <MessageSquareQuote className="proof-card-icon" size={24} />
              <p className="proof-quote">“{item.quote}”</p>
              <span className="proof-author">{item.author}</span>
            </article>
          ))}
        </div>

        <div className="proof-note">
          <div className="proof-note-icon">
            <ShieldCheck size={26} />
          </div>
          <div>
            <strong>Transparência:</strong> estes relatos representam cenários e reações típicas de quem aplicou o plano de preparação urbana.
          </div>
        </div>

        <div className="proof-rating" aria-hidden="true">
          <Star size={18} fill="currentColor" />
          <Star size={18} fill="currentColor" />
          <Star size={18} fill="currentColor" />
          <Star size={18} fill="currentColor" />
          <Star size={18} fill="currentColor" />
          <span>Mais confiança, mais clareza, menos improviso.</span>
        </div>
      </div>
    </section>
  );
}
