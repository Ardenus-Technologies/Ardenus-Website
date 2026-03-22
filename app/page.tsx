'use client';

import { useEffect, useRef, useState } from 'react';

const CHARS = '.,;:!|/\\(){}[]<>+=*^~?0123456789abcdef';
const SCRAMBLE_CHARS =
  'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%&*!?<>{}[]';

// ─── Scramble Text Hook ──────────────────────────────────────
function useScrambleText(text: string, delay: number = 0) {
  const [displayed, setDisplayed] = useState('');
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setStarted(true), delay);
    return () => clearTimeout(timeout);
  }, [delay]);

  useEffect(() => {
    if (!started || !text) return;

    let resolved = 0;
    let frame: number;
    let tick = 0;

    const animate = () => {
      tick++;

      if (tick % 3 === 0 && resolved < text.length) {
        resolved++;
      }

      let result = '';
      for (let i = 0; i < text.length; i++) {
        if (i < resolved) {
          result += text[i];
        } else {
          result +=
            SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)];
        }
      }

      setDisplayed(result);

      if (resolved < text.length) {
        frame = requestAnimationFrame(animate);
      }
    };

    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [started, text]);

  return displayed;
}

// ─── Crosshair Cursor ────────────────────────────────────────
function Crosshair() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current!;
    let x = -100;
    let y = -100;

    const move = (e: MouseEvent) => {
      x = e.clientX;
      y = e.clientY;
      el.style.transform = `translate(${x}px, ${y}px)`;
    };

    const hide = () => {
      el.style.opacity = '0';
    };
    const show = () => {
      el.style.opacity = '1';
    };

    window.addEventListener('mousemove', move);
    document.addEventListener('mouseleave', hide);
    document.addEventListener('mouseenter', show);

    return () => {
      window.removeEventListener('mousemove', move);
      document.removeEventListener('mouseleave', hide);
      document.removeEventListener('mouseenter', show);
    };
  }, []);

  return (
    <div
      ref={ref}
      className="pointer-events-none fixed left-0 top-0 z-50"
      style={{ opacity: 0 }}
    >
      {/* Vertical line */}
      <div className="absolute -top-3 left-1/2 h-[10px] w-px -translate-x-1/2 bg-white/60" />
      <div className="absolute -bottom-3 left-1/2 h-[10px] w-px -translate-x-1/2 bg-white/60" />
      {/* Horizontal line */}
      <div className="absolute -left-3 top-1/2 h-px w-[10px] -translate-y-1/2 bg-white/60" />
      <div className="absolute -right-3 top-1/2 h-px w-[10px] -translate-y-1/2 bg-white/60" />
      {/* Center dot */}
      <div className="absolute left-1/2 top-1/2 h-px w-px -translate-x-1/2 -translate-y-1/2 bg-white" />
    </div>
  );
}

// ─── World Clock Bar ─────────────────────────────────────────
const ZONES = [
  { label: 'PST', tz: 'America/Los_Angeles' },
  { label: 'EST', tz: 'America/New_York' },
  { label: 'UTC', tz: 'UTC' },
  { label: 'SGT', tz: 'Asia/Singapore' },
  { label: 'JST', tz: 'Asia/Tokyo' },
];

function WorldClock() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tick = () => {
      if (!ref.current) return;
      const spans = ref.current.querySelectorAll<HTMLSpanElement>('[data-tz]');
      spans.forEach((span) => {
        const tz = span.dataset.tz!;
        const now = new Date();
        const time = now.toLocaleTimeString('en-GB', {
          timeZone: tz,
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: false,
        });
        span.textContent = time;
      });
    };
    tick();
    const iv = setInterval(tick, 1000);
    return () => clearInterval(iv);
  }, []);

  return (
    <div
      ref={ref}
      className="fixed left-0 right-0 top-6 flex justify-between px-3 font-mono text-[9px] tracking-wider text-white/25 sm:px-12 sm:text-sm"
    >
      {ZONES.map((z) => (
        <div key={z.label} className="flex flex-col items-center gap-0.5">
          <span className="text-[7px] uppercase tracking-[0.2em] text-white/15 sm:text-[10px] sm:tracking-[0.3em]">
            {z.label}
          </span>
          <span data-tz={z.tz}>--:--:--</span>
        </div>
      ))}
    </div>
  );
}

// ─── Mouse Coordinates ──────────────────────────────────────
function MouseCoords() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      if (ref.current) {
        const x = String(Math.round(e.clientX)).padStart(4, '0');
        const y = String(Math.round(e.clientY)).padStart(4, '0');
        ref.current.textContent = `X:${x} Y:${y}`;
      }
    };
    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, []);

  return (
    <div ref={ref} className="font-mono text-sm tracking-wider text-white/25">
      X:0000 Y:0000
    </div>
  );
}

// ─── LinkedIn Link ───────────────────────────────────────────
function LinkedInLink() {
  const ref = useRef<HTMLSpanElement>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval>>(undefined);
  const TARGET = '[  in  ]';

  const scramble = () => {
    let tick = 0;
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      tick++;
      let result = '';
      for (let i = 0; i < TARGET.length; i++) {
        if (TARGET[i] === ' ' || TARGET[i] === '[' || TARGET[i] === ']') {
          result += TARGET[i];
        } else if (tick > i * 2) {
          result += TARGET[i];
        } else {
          result +=
            SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)];
        }
      }
      if (ref.current) ref.current.textContent = result;
      if (tick > TARGET.length * 2) clearInterval(intervalRef.current);
    }, 40);
  };

  const reset = () => {
    clearInterval(intervalRef.current);
    if (ref.current) ref.current.textContent = TARGET;
  };

  return (
    <a
      href="https://www.linkedin.com/company/ardenus/"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 font-mono text-sm tracking-wider text-white/25 transition-colors duration-300 hover:text-white/50"
      onMouseEnter={scramble}
      onMouseLeave={reset}
    >
      <span ref={ref}>{TARGET}</span>
    </a>
  );
}

// ─── Main Page ───────────────────────────────────────────────
export default function Home() {
  const preRef = useRef<HTMLPreElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const pointsRef = useRef<{ x: number; y: number; z: number }[]>([]);
  const [fullIP, setFullIP] = useState('');
  const [showDenied, setShowDenied] = useState(false);
  const deniedRef = useRef<HTMLDivElement>(null);

  const copyrightText = useScrambleText('© Ardenus Technologies 2026', 300);
  const ipText = useScrambleText(fullIP, 300);

  const glitchRef = useRef(false);
  const idleRef = useRef(0); // 0 = active, increases toward 1 over time
  const lastActivityRef = useRef(Date.now());

  // Right-click — ACCESS DENIED
  const deniedTimerRef = useRef<ReturnType<typeof setTimeout>>(undefined);
  const deniedIntervalRef = useRef<ReturnType<typeof setInterval>>(undefined);

  useEffect(() => {
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();

      // Clear any existing timers
      clearTimeout(deniedTimerRef.current);
      clearInterval(deniedIntervalRef.current);

      setShowDenied(true);

      // Need to wait a tick for the ref to be available
      requestAnimationFrame(() => {
        const el = deniedRef.current;
        if (!el) return;
        const target = 'ACCESS DENIED';
        let resolved = 0;
        let tick = 0;

        deniedIntervalRef.current = setInterval(() => {
          tick++;
          if (tick % 2 === 0 && resolved < target.length) resolved++;

          let result = '';
          for (let i = 0; i < target.length; i++) {
            if (i < resolved) {
              result += target[i];
            } else {
              result += CHARS[Math.floor(Math.random() * CHARS.length)];
            }
          }
          el.textContent = result;

          if (resolved >= target.length) {
            clearInterval(deniedIntervalRef.current);
            deniedTimerRef.current = setTimeout(
              () => setShowDenied(false),
              1200,
            );
          }
        }, 40);
      });
    };

    window.addEventListener('contextmenu', handleContextMenu);
    return () => window.removeEventListener('contextmenu', handleContextMenu);
  }, []);

  // Tab visibility — glitch on return
  useEffect(() => {
    const handleVisibility = () => {
      if (!document.hidden) {
        glitchRef.current = true;
        setTimeout(() => {
          glitchRef.current = false;
        }, 600);
      }
    };
    document.addEventListener('visibilitychange', handleVisibility);
    return () =>
      document.removeEventListener('visibilitychange', handleVisibility);
  }, []);

  // Idle detection — dim after 30s of no mouse movement
  useEffect(() => {
    const resetIdle = () => {
      lastActivityRef.current = Date.now();
    };
    window.addEventListener('mousemove', resetIdle);
    window.addEventListener('keydown', resetIdle);
    window.addEventListener('click', resetIdle);
    return () => {
      window.removeEventListener('mousemove', resetIdle);
      window.removeEventListener('keydown', resetIdle);
      window.removeEventListener('click', resetIdle);
    };
  }, []);

  // Scrambling browser tab title
  useEffect(() => {
    const target = 'Ardenus';
    const chars = '.,;:!|/\\(){}[]<>+=*^~?0123456789abcdef';
    let resolved = 0;
    let tick = 0;

    const iv = setInterval(() => {
      tick++;
      if (tick % 4 === 0 && resolved < target.length) resolved++;

      let title = '';
      for (let i = 0; i < target.length; i++) {
        title +=
          i < resolved
            ? target[i]
            : chars[Math.floor(Math.random() * chars.length)];
      }
      document.title = title;

      if (resolved >= target.length) {
        clearInterval(iv);
        document.title = 'Ardenus';
      }
    }, 60);

    return () => clearInterval(iv);
  }, []);

  // Load logo image → extract point cloud
  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d')!;

      const w = 160;
      const h = Math.round((img.height / img.width) * w * 0.55);
      canvas.width = w;
      canvas.height = h;
      ctx.drawImage(img, 0, 0, w, h);

      const data = ctx.getImageData(0, 0, w, h).data;
      const pts: { x: number; y: number; z: number }[] = [];
      const depth = 3;

      for (let y = 0; y < h; y++) {
        for (let x = 0; x < w; x++) {
          if (data[(y * w + x) * 4 + 3] > 80) {
            for (let z = -depth; z <= depth; z++) {
              pts.push({ x: x - w / 2, y: y - h / 2, z });
            }
          }
        }
      }

      pointsRef.current = pts;
    };
    img.src = '/logo.png';
  }, []);

  // 3D rotation animation
  useEffect(() => {
    let angle = 0;
    let raf: number;

    const tick = () => {
      const pts = pointsRef.current;
      const el = preRef.current;
      if (!pts.length || !el) {
        raf = requestAnimationFrame(tick);
        return;
      }

      // Idle: ramp up over 5s after 30s of inactivity
      const idleElapsed = Date.now() - lastActivityRef.current;
      if (idleElapsed > 30000) {
        idleRef.current = Math.min(1, (idleElapsed - 30000) / 5000);
      } else {
        // Snap back quickly when activity resumes
        idleRef.current = Math.max(0, idleRef.current - 0.05);
      }

      const idle = idleRef.current;
      const glitching = glitchRef.current;

      // Slow rotation when idle
      angle += 0.005 * (1 - idle * 0.8);
      const cos = Math.cos(angle);
      const sin = Math.sin(angle);
      const cols = 180;
      const rows = 55;
      const buf = new Uint8Array(rows * cols);
      const zbuf = new Float32Array(rows * cols).fill(-1e9);
      const cx = cols >> 1;
      const cy = rows >> 1;
      const fov = 280;

      for (let i = 0; i < pts.length; i++) {
        const px = pts[i].x;
        const py = pts[i].y;
        const pz = pts[i].z;

        const rx = px * cos - pz * sin;
        const rz = px * sin + pz * cos;

        const d = fov / (fov + rz);
        let sx = (rx * d + cx) | 0;
        let sy = (py * d + cy) | 0;

        // Glitch: randomly offset characters on tab return
        if (glitching && Math.random() > 0.6) {
          sx += Math.round((Math.random() - 0.5) * 14);
          sy += Math.round((Math.random() - 0.5) * 8);
        }

        if (sx >= 0 && sx < cols && sy >= 0 && sy < rows) {
          const idx = sy * cols + sx;
          if (rz > zbuf[idx]) {
            zbuf[idx] = rz;
            const ci = (((rz + 100) / 200) * (CHARS.length - 1)) | 0;
            buf[idx] = Math.max(1, Math.min(ci + 1, CHARS.length));
          }
        }
      }

      let s = '';
      for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
          let v = buf[y * cols + x];
          // Glitch: scramble characters on tab return
          if (glitching && v && Math.random() > 0.65) {
            v = Math.floor(Math.random() * CHARS.length) + 1;
          }
          // Idle: randomly drop characters
          if (idle > 0 && v && Math.random() < idle * 0.7) {
            s += ' ';
          } else {
            s += v ? CHARS[Math.min(v - 1, CHARS.length - 1)] : ' ';
          }
        }
        if (y < rows - 1) s += '\n';
      }

      el.textContent = s;

      // Idle: dim everything
      if (containerRef.current) {
        containerRef.current.style.opacity = String(1 - idle * 0.75);
      }
      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  // Fetch IP
  useEffect(() => {
    fetch('https://api.ipify.org?format=json')
      .then((r) => r.json())
      .then((d) => setFullIP(d.ip))
      .catch(() => setFullIP('0.0.0.0'));
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative flex h-full w-full items-center justify-center"
    >
      {/* Crosshair — hidden on touch devices */}
      <div className="hidden sm:block">
        <Crosshair />
      </div>

      {/* ACCESS DENIED overlay */}
      {showDenied && (
        <div className="pointer-events-none fixed inset-0 z-50 flex items-center justify-center bg-black/60">
          <span
            ref={deniedRef}
            className="font-mono text-2xl tracking-[0.5em] text-white/70"
          >
            ACCESS DENIED
          </span>
        </div>
      )}
      <pre
        ref={preRef}
        className="select-none font-mono text-[7px] leading-[9px] text-white/40"
      />

      {/* Copyright — vertical, right side */}
      <div
        className="fixed right-3 top-1/2 -translate-y-1/2 whitespace-nowrap font-mono text-sm uppercase tracking-[0.25em] text-white/25"
        style={{ writingMode: 'vertical-rl' }}
      >
        {copyrightText}
      </div>

      {/* IP Address — bottom left */}
      <div className="fixed bottom-6 left-6 font-mono text-sm tracking-wider text-white/25">
        {ipText}
        <span
          className="ml-0.5 inline-block text-white/40"
          style={{ animation: 'blink-caret 1s step-end infinite' }}
        >
          _
        </span>
      </div>

      {/* World Clock — top bar */}
      <WorldClock />

      {/* Mouse Coordinates — bottom center, hidden on mobile */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 hidden sm:block">
        <MouseCoords />
      </div>

      {/* LinkedIn — bottom right */}
      <LinkedInLink />
    </div>
  );
}
