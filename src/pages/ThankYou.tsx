import { CheckCircle2, Mail, KeyRound, Smartphone, ExternalLink } from 'lucide-react';
import './ThankYou.css';

export function ThankYou() {
  return (
    <main className="thank-you-page">
      <div className="thank-you-container">

        {/* Success Alert Card */}
        <div className="status-card">
          <div className="success-badge">
            <CheckCircle2 size={24} className="success-icon" />
            <span>Compra Aprovada com Sucesso!</span>
          </div>
          <h1 className="thank-you-subtitle">
            <CheckCircle2 size={28} className="section-title-icon" style={{ flexShrink: 0 }} />
            <span>
              Para liberar o seu acesso na Hotmart, siga os 3 passos abaixo:
            </span>
          </h1>
        </div>

        {/* 3 Steps Section */}
        <div className="steps-grid">
          {/* Step 1 */}
          <div className="step-card">
            <div className="step-number">01</div>
            <div className="step-icon-wrapper">
              <Mail size={32} />
            </div>
            <h3>Abra o seu e-mail</h3>
            <p>
              Procure na sua caixa de entrada, spam ou promoções pelo e-mail enviado pela Hotmart com o título:
            </p>
            <div className="email-subject-badge">
              “Hotmart | sua compra foi aprovada”
            </div>

            {/* Quick Access Email Links */}
            <div className="email-actions">
              <a href="https://mail.google.com" target="_blank" rel="noopener noreferrer" className="email-btn gmail">
                Ir para o Gmail
              </a>
              <a href="https://outlook.live.com" target="_blank" rel="noopener noreferrer" className="email-btn outlook">
                Ir para o Outlook
              </a>
            </div>
          </div>

          {/* Step 2 */}
          <div className="step-card">
            <div className="step-number">02</div>
            <div className="step-icon-wrapper">
              <KeyRound size={32} />
            </div>
            <h3>Defina sua senha</h3>
            <p>
              Abra o e-mail e clique no botão azul destacado abaixo para criar seus dados de acesso:
            </p>
            <div className="button-visual-badge">
              “Definir senha e acessar conteúdo”
            </div>
          </div>

          {/* Step 3 */}
          <div className="step-card">
            <div className="step-number">03</div>
            <div className="step-icon-wrapper">
              <CheckCircle2 size={32} />
            </div>
            <h3>Acesse a plataforma</h3>
            <p>
              Faça login utilizando o <strong>mesmo endereço de e-mail</strong> que você informou no momento da compra.
            </p>
            <p className="step-note">
              Pronto! O produto <strong>Protocolo 72H</strong> estará disponível na sua biblioteca Hotmart.
            </p>
          </div>
        </div>

        {/* Extra Information: Where to find it later */}
        <section className="faq-section">
          <h2>
            <Smartphone size={24} className="section-title-icon" />
            Onde encontro meu produto na Hotmart?
          </h2>
          <div className="faq-content-card">
            <p>
              Você pode acessar o seu conteúdo a qualquer momento através de duas formas muito simples:
            </p>
            <div className="access-methods">
              <div className="method-item">
                <span className="method-bullet">1</span>
                <div>
                  <strong>Pelo Computador/Navegador:</strong>
                  <p>Acesse o site da Hotmart no botão abaixo, faça login e vá na opção <strong>Minhas compras</strong> no menu lateral.</p>
                </div>
              </div>
              <div className="method-item">
                <span className="method-bullet">2</span>
                <div>
                  <strong>Pelo Aplicativo:</strong>
                  <p>Baixe o aplicativo da Hotmart no seu celular (App Store ou Google Play) e acesse com seus dados.</p>
                </div>
              </div>
            </div>

            {/* Primary Action Call */}
            <div className="faq-cta-wrapper">
              <a
                href="https://consumer.hotmart.com"
                target="_blank"
                rel="noopener noreferrer"
                className="cta-button"
              >
                Acessar Minhas Compras <ExternalLink size={18} style={{ marginLeft: '8px' }} />
              </a>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="thank-you-footer">
          <p>© {new Date().getFullYear()} Protocolo 72H. Todos os direitos reservados.</p>
        </footer>

      </div>
    </main>
  );
}
