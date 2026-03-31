import { Shield } from 'lucide-react';
import './Hero.css';

export function Hero() {
  return (
    <section className="hero">
      <video autoPlay loop muted playsInline className="hero-video-bg">
        {/* Recomendação: Baixe um vídeo de nuvens/tempestade gratuitas em Pexels.com e salve como bg-video.mp4 na pasta public */}
        <source src="/bg-video.mp4" type="video/mp4" />
      </video>
      <div className="hero-overlay"></div>
      <div className="container hero-content">

        <div className="hero-text-col">
          <div className="badge-72">
            <Shield size={24} className="shield-icon" fill="currentColor" />
            <span>PROTOCOLO 72H</span>
          </div>

          <h1 className="hero-title">
            SE TUDO PARAR HOJE... <br />
            <span className="highlight">VOCÊ SABERIA O QUE FAZER</span> <br />
            OU TRAVARIA ENQUANTO SUA FAMÍLIA DEPENDE DE VOCÊ?
          </h1>

          <p className="hero-subtitle">
            Você não precisa ser militar, forte ou especialista. Você só precisa de um plano claro para agir nas primeiras 72 horas — <strong>mesmo morando em apartamento e começando do zero.</strong>
          </p>

          <p className="hero-urgent-text">
            <strong>Crise não exige força. Exige clareza.</strong>
          </p>

          <div className="hero-cta-wrapper">
            <a href="https://pay.hotmart.com/F18680649I?bid=1774933351301" className="cta-button" target="_blank" rel="noopener noreferrer">
              QUERO UM PLANO PARA PROTEGER MINHA FAMÍLIA
            </a>
            <span className="cta-guarantee">🔒 Pagamento 100% Seguro • Acesso Imediato</span>
          </div>
        </div>

      </div>
    </section>
  );
}
