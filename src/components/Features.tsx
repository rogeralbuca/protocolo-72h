import { Book, Shield, Droplets, Utensils, HeartPulse, Map, Users, CheckSquare } from 'lucide-react';
import './Features.css';

const featureList = [
  { icon: Book, title: "Manual Completo", description: "Passo a passo direto ao ponto para as primeiras 72h." },
  { icon: Shield, title: "Segurança da Casa", description: "Técnicas discretas para proteger sua família sem parecer uma fortaleza." },
  { icon: Droplets, title: "Água e Energia", description: "A base da sobrevivência. Como estocar e purificar sem errar." },
  { icon: Utensils, title: "Alimentação", description: "Organização prática de mantimentos que não estragam." },
  { icon: HeartPulse, title: "Saúde", description: "Evite riscos invisíveis. Primeiros socorros práticos." },
  { icon: Map, title: "Plano de Fuga", description: "Saiba exatamente quando é hora de sair e para onde ir." },
  { icon: Users, title: "Plano Familiar", description: "O que cada membro deve fazer para evitar o caos." },
  { icon: CheckSquare, title: "Checklists", description: "Resumos práticos em cada etapa. Você apenas lê e aplica." }
];

export function Features() {
  return (
    <section className="features" id="features">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">O Que Você Recebe No Protocolo</h2>
          <p className="section-subtitle">O sistema não é tão estável quanto parece. Entregar nas mãos da sorte não é uma opção. Veja o que está coberto no seu plano:</p>
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
