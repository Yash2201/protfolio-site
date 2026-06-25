import { useEffect, useState } from "react";
import type { RefObject } from "react";

export function useParticles(canvasRef: RefObject<HTMLCanvasElement | null>) {
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;
    let W: number, H: number, pts: { x: number; y: number; vx: number; vy: number; r: number }[] = [];
    const mouse = { x: -999, y: -999 };
    let rafId: number;

    const resize = () => {
      W = canvas.width = window.innerWidth;
      H = canvas.height = window.innerHeight;
      initPts();
    };

    const initPts = () => {
      pts = [];
      const count = Math.min(80, Math.floor(W * H / 12000));
      for (let i = 0; i < count; i++) {
        pts.push({ x: Math.random() * W, y: Math.random() * H, vx: (Math.random() - .5) * .3, vy: (Math.random() - .5) * .3, r: Math.random() * 1.5 + .5 });
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      pts.forEach(p => {
        const dx = mouse.x - p.x, dy = mouse.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const glow = dist < 120 ? 1 - dist / 120 : 0;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r + glow * .8, 0, Math.PI * 2);
        ctx.fillStyle = glow > 0 ? `rgba(0,102,204,${.3 + glow * .5})` : "rgba(240,237,232,0.18)";
        ctx.fill();
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0) p.x = W; if (p.x > W) p.x = 0;
        if (p.y < 0) p.y = H; if (p.y > H) p.y = 0;
      });
      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const dx = pts[i].x - pts[j].x, dy = pts[i].y - pts[j].y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < 100) {
            ctx.beginPath(); ctx.moveTo(pts[i].x, pts[i].y); ctx.lineTo(pts[j].x, pts[j].y);
            ctx.strokeStyle = `rgba(0,102,204,${.06 * (1 - d / 100)})`; ctx.lineWidth = .6; ctx.stroke();
          }
        }
      }
      rafId = requestAnimationFrame(draw);
    };

    const onMouse = (e: MouseEvent) => { mouse.x = e.clientX; mouse.y = e.clientY; };
    resize();
    draw();
    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", onMouse);
    return () => { cancelAnimationFrame(rafId); window.removeEventListener("resize", resize); window.removeEventListener("mousemove", onMouse); };
  }, []);
}

export function useTypewriter(words: string[]) {
  const [display, setDisplay] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  useEffect(() => {
    let wi = 0, ci = 0, deleting = false;
    let timeout: ReturnType<typeof setTimeout>;
    const tick = () => {
      const word = words[wi];
      if (!deleting) {
        setDisplay(word.slice(0, ci + 1));
        ci++;
        if (ci === word.length) {
          if (wi === words.length - 1) { setShowCursor(false); return; }
          timeout = setTimeout(() => { deleting = true; tick(); }, 1800);
          return;
        }
        timeout = setTimeout(tick, 90);
      } else {
        setDisplay(word.slice(0, ci - 1));
        ci--;
        if (ci === 0) {
          deleting = false; wi++;
          timeout = setTimeout(tick, 300);
          return;
        }
        timeout = setTimeout(tick, 50);
      }
    };
    timeout = setTimeout(tick, 900);
    return () => clearTimeout(timeout);
  }, []);
  return { display, showCursor };
}

export function useReveal() {
  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("visible"); obs.unobserve(e.target); } });
    }, { threshold: 0.08 });
    document.querySelectorAll(".reveal").forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);
}

export function useCounter(target: number, start = false) {
  const [val, setVal] = useState<number | string>(0);
  useEffect(() => {
    if (!start) return;
    const isDecimal = target % 1 !== 0;
    let startTime: number | null = null;
    const duration = 1400;
    const step = (ts: number) => {
      if (!startTime) startTime = ts;
      const progress = Math.min((ts - startTime) / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      setVal(isDecimal ? (ease * target).toFixed(1) : Math.floor(ease * target));
      if (progress < 1) requestAnimationFrame(step);
      else setVal(isDecimal ? target.toFixed(1) : target);
    };
    requestAnimationFrame(step);
  }, [start, target]);
  return val;
}
