import { ShieldAlert, ShieldCheck, Droplets, Users, Brain, X, Check } from 'lucide-react';
import './CrisisComparison.css';

export function CrisisComparison() {
  return (
    <section className="comparison-section">
      <div className="container">
        <h2 className="section-title text-center">As Primeiras 24 Horas</h2>
        <p className="section-subtitle text-center">A maioria das famílias entra em colapso nas primeiras 24h por falta de um plano.</p>

        <div className="comparison-grid">

          {/* Chaos / Sem Protocolo */}
          <div className="comparison-card chaos-card">
            <div className="card-header">
              <ShieldAlert size={48} className="chaos-icon" />
              <h3>O CAOS (Sem Plano)</h3>
            </div>
            <ul className="comparison-list">
              <li>
                <div className="icon-box"><Droplets /></div>
                <div>
                  <strong>Recursos:</strong>
                  <p>Improviso e frustração</p>
                </div>
                <X className="status-icon chaos-icon" />
              </li>
              <li>
                <div className="icon-box"><Users /></div>
                <div>
                  <strong>Família:</strong>
                  <p>Insegurança e desordem</p>
                </div>
                <X className="status-icon chaos-icon" />
              </li>
              <li>
                <div className="icon-box"><Brain /></div>
                <div>
                  <strong>Mentalidade:</strong>
                  <p>Pânico e paralisia</p>
                </div>
                <X className="status-icon chaos-icon" />
              </li>
            </ul>
          </div>

          {/* Plan / Com Protocolo */}
          <div className="comparison-card plan-card">
            <div className="card-header">
              <ShieldCheck size={48} className="plan-icon" />
              <h3>A BASE SEGURA (Plano 72H)</h3>
            </div>
            <ul className="comparison-list plan-list">
              <li>
                <div className="icon-box-green"><Droplets /></div>
                <div>
                  <strong>Recursos:</strong>
                  <p>Gestão e racionamento</p>
                </div>
                <Check className="status-icon plan-icon" />
              </li>
              <li>
                <div className="icon-box-green"><Users /></div>
                <div>
                  <strong>Família:</strong>
                  <p>Confiança e coesão familiar</p>
                </div>
                <Check className="status-icon plan-icon" />
              </li>
              <li>
                <div className="icon-box-green"><Brain /></div>
                <div>
                  <strong>Mentalidade:</strong>
                  <p>Ação estratégica e liderança</p>
                </div>
                <Check className="status-icon plan-icon" />
              </li>
            </ul>
          </div>

        </div>
        
      <div className="comparison-turn">
        <h2>Não é o mais forte que assume o controle.<br /><span className="highlight-green">É o mais preparado.</span></h2>
      </div>
      
      </div>

    </section>
  );
}
