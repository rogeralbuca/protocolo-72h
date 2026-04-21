import { useEffect, useRef, useState } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
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
          aria-label={audioEnabled ? 'Desativar som ambiente' : 'Ativar som ambiente'}
        >
          {audioEnabled ? <Volume2 size={16} /> : <VolumeX size={16} />}
          <span>{audioEnabled ? 'Som ligado' : 'Ativar som'}</span>
        </button>
      ) : null}

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
