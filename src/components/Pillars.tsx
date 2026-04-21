import { Home, Battery, Utensils, HeartPulse, Radio, Route } from 'lucide-react';
import './Pillars.css';

export function Pillars() {
  return (
    <section className="pillars-section">
      <div className="container">
        <h2 className="section-title text-center">Os Pilares da Base Segura (Bug-In)</h2>
        <p className="section-subtitle text-center">Sua casa é o ponto mais seguro da sua família — desde que possua essa tríade vital ativa.</p>

        <div className="pillars-container">
          <div className="pillar-step protocol-step">
            <div className="step-number-wrapper">
              <span className="bracket">[</span>
              <span className="number">1</span>
              <span className="bracket">]</span>
            </div>
            <div className="pillar-content">
              <h3>Fortificação e Recursos Críticos</h3>
              <p>Mapeie os pontos vulneráveis da casa e garanta uma reserva estratégica de água e energia off-grid para o cenário mais demorado.</p>
              <div className="pillar-icons">
                <Home size={28} /><Battery size={28} />
              </div>
            </div>
          </div>

          <div className="pillar-divider"></div>

          <div className="pillar-step protocol-step">
            <div className="step-number-wrapper">
              <span className="bracket">[</span>
              <span className="number">2</span>
              <span className="bracket">]</span>
            </div>
            <div className="pillar-content">
              <h3>Nutrição e Saúde de Emergência</h3>
              <p>Crie um estoque de alimentos de fácil preparo (sem cocção pesada) e tenha às mãos um kit médico focado em trauma e degradação sanitária.</p>
              <div className="pillar-icons">
                <Utensils size={28} /><HeartPulse size={28} />
              </div>
            </div>
          </div>

          <div className="pillar-divider"></div>

          <div className="pillar-step protocol-step">
            <div className="step-number-wrapper">
              <span className="bracket">[</span>
              <span className="number">3</span>
              <span className="bracket">]</span>
            </div>
            <div className="pillar-content">
              <h3>Comunicação e Plano de Evasão</h3>
              <p>Tenha códigos familiares indetectáveis de encontro e rotas com mapa físico prontas caso a permanência na base deixe de ser uma opção viável.</p>
              <div className="pillar-icons">
                <Radio size={28} /><Route size={28} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
