import { Hero } from '../components/Hero';
import { PainIdent } from '../components/PainIdent';
import { ProtocolIntro } from '../components/ProtocolIntro';
import { Storytelling } from '../components/Storytelling';
import { CrisisComparison } from '../components/CrisisComparison';
import { Pillars } from '../components/Pillars';
import { Features } from '../components/Features';
import { Offer } from '../components/Offer';
import { Author } from '../components/Author';
import { Guarantee } from '../components/Guarantee';

export function LandingPage() {
  return (
    <main>
      <Hero />
      <PainIdent />
      <ProtocolIntro />
      <Storytelling />
      <CrisisComparison />
      <Pillars />
      <Features />
      <Offer />
      <Author />
      <Guarantee />
    </main>
  );
}
