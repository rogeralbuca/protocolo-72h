import { ZapOff, WifiOff, Watch, Users } from 'lucide-react';
import './Storytelling.css';

export function Storytelling() {
  return (
    <section className="storytelling">
      <div className="container">
        <div className="story-intro">
          <h2 className="section-title">O sistema não é tão estável quanto parece.</h2>
          <p className="story-subtitle">Agora imagina isso acontecendo com você:</p>
        </div>

        <div className="story-timeline">
          <div className="timeline-item">
            <div className="timeline-icon"><ZapOff size={24} /></div>
            <div className="timeline-content">
              <h3>Anoitece. A energia cai.</h3>
              <p>No começo, parece só mais um problema temporário. Uma falha de bairro.</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-icon"><WifiOff size={24} /></div>
            <div className="timeline-content">
              <h3>A internet para. O sinal some.</h3>
              <p>Você tenta buscar notícias, mas o celular está sem torre de comunicação.</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-icon"><Watch size={24} /></div>
            <div className="timeline-content">
              <h3>As horas passam... E nada volta.</h3>
              <p>A tensão começa a subitamente preencher o silêncio da casa.</p>
            </div>
          </div>
          <div className="timeline-item timeline-item-alert">
            <div className="timeline-icon"><Users size={24} /></div>
            <div className="timeline-content">
              <h3>Sua família olha pra você.</h3>
              <p>Seus filhos começam a perguntar. Sua esposa espera uma direção clara.</p>
            </div>
          </div>
        </div>

        <div className="story-climax">
          <p><span className="highlight-green">E nesse momento</span><strong> que não dá mais pra "ver depois".</strong></p>
          <h3>Ou você sabe o que fazer… Ou você improvisa sob pressão.</h3>
        </div>

      </div>
    </section>
  );
}
