"use client";

import { useRef, useState } from "react";

const keys = [
  { i: "guitar", f: 261.6, label: "Guitar" },
  { i: "bass", f: 196.0, label: "Bass" },
  { i: "keyboard", f: 329.6, label: "Keyboard" },
  { i: "drums", f: 110.0, label: "Drums" },
  { i: "ukulele", f: 392.0, label: "Ukulele" },
  { i: "evocal", f: 293.7, label: "Eastern vocal" },
  { i: "wvocal", f: 440.0, label: "Western vocal" },
];

export default function PlayStrip() {
  const ctxRef = useRef<AudioContext | null>(null);
  const [active, setActive] = useState<string | null>(null);

  function note(freq: number, id: string) {
    try {
      const AudioCtx =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext })
          .webkitAudioContext;
      ctxRef.current = ctxRef.current || new AudioCtx();
      const ctx = ctxRef.current;
      if (ctx.state === "suspended") ctx.resume();
      const t = ctx.currentTime;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "triangle";
      osc.frequency.value = freq;
      // low notes sound quieter to the ear at the same amplitude, so boost
      // proportionally as frequency drops to keep every key feeling even.
      const peak = 0.22 * Math.min(1.7, Math.max(1, 260 / freq));
      gain.gain.setValueAtTime(0.0001, t);
      gain.gain.exponentialRampToValueAtTime(peak, t + 0.015);
      gain.gain.exponentialRampToValueAtTime(0.0001, t + 1.1);
      osc.connect(gain).connect(ctx.destination);
      osc.start(t);
      osc.stop(t + 1.2);
    } catch {
      /* audio unavailable — the visual response still works */
    }
    setActive(id);
    setTimeout(() => setActive((cur) => (cur === id ? null : cur)), 260);
  }

  return (
    <div
      className="strip"
      id="strip"
      role="group"
      aria-label="Play a note for each instrument"
    >
      {keys.map((k) => (
        <button
          key={k.i}
          className={`key${active === k.i ? " on" : ""}`}
          data-i={k.i}
          onClick={() => note(k.f, k.i)}
          suppressHydrationWarning
        >
          <span>{k.label}</span>
        </button>
      ))}
    </div>
  );
}
