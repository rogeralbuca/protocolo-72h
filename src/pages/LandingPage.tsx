import { useEffect, useRef, useState, lazy, Suspense } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { Hero } from '../components/Hero';

// Lazy loading components below the fold
const PainIdent = lazy(() => import('../components/PainIdent').then(m => ({ default: m.PainIdent })));
const ProtocolIntro = lazy(() => import('../components/ProtocolIntro').then(m => ({ default: m.ProtocolIntro })));
const Storytelling = lazy(() => import('../components/Storytelling').then(m => ({ default: m.Storytelling })));
const CrisisComparison = lazy(() => import('../components/CrisisComparison').then(m => ({ default: m.CrisisComparison })));
const Pillars = lazy(() => import('../components/Pillars').then(m => ({ default: m.Pillars })));
const Features = lazy(() => import('../components/Features').then(m => ({ default: m.Features })));
const Proof = lazy(() => import('../components/Proof').then(m => ({ default: m.Proof })));
const Offer = lazy(() => import('../components/Offer').then(m => ({ default: m.Offer })));
const Author = lazy(() => import('../components/Author').then(m => ({ default: m.Author })));
const Guarantee = lazy(() => import('../components/Guarantee').then(m => ({ default: m.Guarantee })));
const FinalDecision = lazy(() => import('../components/FinalDecision').then(m => ({ default: m.FinalDecision })));

export function LandingPage() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const revealTimerRef = useRef<number | null>(null);
  const [audioEnabled, setAudioEnabled] = useState(false);
  const [showAudioControl, setShowAudioControl] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) {
      return;
    }

    audio
      .play()
      .then(() => {
        setAudioEnabled(true);
        setShowAudioControl(false);
      })
      .catch(() => {
        setAudioEnabled(false);
        revealTimerRef.current = window.setTimeout(() => {
          setShowAudioControl(true);
        }, 1200);
      });

    return () => {
      if (revealTimerRef.current) {
        window.clearTimeout(revealTimerRef.current);
      }
    };
  }, []);

  const handleToggleAudio = async () => {
    const audio = audioRef.current;
    if (!audio) {
      return;
    }

    if (audioEnabled) {
      audio.pause();
      setAudioEnabled(false);
      setShowAudioControl(true);
      return;
    }

    try {
      await audio.play();
      setAudioEnabled(true);
      setShowAudioControl(true);
    } catch {
      setAudioEnabled(false);
      setShowAudioControl(true);
    }
  };

  return (
    <main>
      <audio ref={audioRef} loop preload="none" aria-hidden="true" style={{ display: 'none' }}>
        <source src="/urban-heartline.mp3" type="audio/mpeg" />
      </audio>

      {showAudioControl ? (
        <button
          type="button"
          className={`audio-fallback-button ${audioEnabled ? 'is-active' : ''}`}
          onPointerDown={handleToggleAudio}
          aria-pressed={audioEnabled}
        >
          {audioEnabled ? <Volume2 size={16} /> : <VolumeX size={16} />}
          <span>{audioEnabled ? 'Som ligado' : 'Ativar som'}</span>
        </button>
      ) : null}

      <Hero />
      
      <Suspense fallback={<div style={{ minHeight: '50vh' }}></div>}>
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
      </Suspense>
    </main>
  );
}
