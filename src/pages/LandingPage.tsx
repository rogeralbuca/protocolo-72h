import { Hero } from '../components/Hero';
import { PainIdent } from '../components/PainIdent';
import { ProtocolIntro } from '../components/ProtocolIntro';
import { Storytelling } from '../components/Storytelling';
import { CrisisComparison } from '../components/CrisisComparison';
import { Pillars } from '../components/Pillars';
import { Features } from '../components/Features';
import { Proof } from '../components/Proof';
import { Offer } from '../components/Offer';
import { Author } from '../components/Author';
import { Guarantee } from '../components/Guarantee';
import { FinalDecision } from '../components/FinalDecision';

export function LandingPage() {
  return (
    <main>
      <audio autoPlay loop preload="auto" aria-hidden="true" style={{ display: 'none' }}>
        <source src="/urban-heartline.mp3" type="audio/mpeg" />
      </audio>
      <Hero />
      <PainIdent />
      <ProtocolIntro />
      <Storytelling />
      <CrisisComparison />
      <Pillars />
      <Features />
      <Proof />
      <Offer />
      <Author />
      <Guarantee />
      <FinalDecision />
    </main>
  );
}
