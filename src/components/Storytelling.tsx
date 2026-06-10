import { ZapOff, WifiOff, AlertTriangle, Users, Skull } from 'lucide-react';
import './Storytelling.css';

export function Storytelling() {
  return (
    <section id="story" className="storytelling">
      <div className="container">
        <div className="story-intro">
          <h2 className="section-title">O sistema não é tão estável quanto parece.</h2>
          <p className="story-subtitle">Agora imagine esse cenário real batendo à sua porta:</p>
        </div>

        <div className="story-timeline">
          <div className="timeline-item">
            <div className="timeline-icon"><ZapOff size={24} /></div>
            <div className="timeline-content">
              <h3>Hora 0: O apagão inicial.</h3>
              <p>Anoitece e toda a energia cai de repente. Parece só mais um apagão temporário. Sem se preocupar, você vai dormir esperando que tudo volte ao normal pela manhã.</p>
            </div>
          </div>
          
          <div className="timeline-item">
            <div className="timeline-icon"><WifiOff size={24} /></div>
            <div className="timeline-content">
              <h3>Hora 12: O isolamento tático.</h3>
              <p>Você acorda e a escuridão continua. O sinal do celular sumiu, a internet caiu e não há notícias. Você sai na rua e vê comércios fechando as portas às pressas. O pânico silencioso começa.</p>
            </div>
          </div>
          
          <div className="timeline-item">
            <div className="timeline-icon"><AlertTriangle size={24} /></div>
            <div className="timeline-content">
              <h3>Hora 24: A torneira seca.</h3>
              <p>A caixa d'água do seu prédio ou casa zera. Ao abrir a torneira, você só ouve o som do ar saindo. Sem estoque em casa, você percebe que a água potável que tem não dura mais 12 horas.</p>
            </div>
          </div>
          
          <div className="timeline-item">
            <div className="timeline-icon"><Users size={24} /></div>
            <div className="timeline-content">
              <h3>Hora 48: O olhar da sua família.</h3>
              <p>A fome aperta, a casa está quente e na escuridão total. Seus filhos começam a chorar com sede. Sua esposa olha nos seus olhos, esperando que você tome a liderança e resolva. Mas você não sabe o que fazer.</p>
            </div>
          </div>

          <div className="timeline-item timeline-item-alert">
            <div className="timeline-icon"><Skull size={24} className="icon-tragic" /></div>
            <div className="timeline-content">
              <h3>Hora 72: A decisão desesperada.</h3>
              <p>Sem água, sem comida e no escuro. Você ouve barulhos estranhos no corredor e gritos na rua. Para salvar sua família, você é forçado a tomar uma decisão trágica: sair desarmado e despreparado na escuridão da rua para saquear ou mendigar por recursos, deixando quem você ama vulnerável e desprotegido em casa.</p>
            </div>
          </div>
        </div>

        <div className="story-climax">
          <p><span className="highlight-green">É nesse momento de caos</span><strong> que o preço da procrastinação é cobrado.</strong></p>
          <h3>A diferença entre proteger sua família ou virar mais uma vítima é o plano que você decide ter hoje.</h3>
        </div>

      </div>
    </section>
  );
}
