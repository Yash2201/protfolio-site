import { useTypewriter, useCounter } from "../hooks";
import { STATS } from "../data";

// Decorative "shipping activity" heatmap — a GitHub-style grid built once at module load.
// 5 intensity levels (0 = idle … 4 = busy) come from a stable hash, so the pattern is
// identical on every load (no per-render flicker). Cells are tints of the single accent.
const HEAT_COLS = 30;
const HEAT_ROWS = 7;
const HEATMAP = Array.from({ length: HEAT_COLS * HEAT_ROWS }, (_, i) => {
  const h = Math.sin(i * 12.9898) * 43758.5453;
  const f = h - Math.floor(h); // deterministic pseudo-random in [0, 1)
  if (f < 0.45) return 0;
  if (f < 0.66) return 1;
  if (f < 0.83) return 2;
  if (f < 0.94) return 3;
  return 4;
});

interface StatItemProps {
  value: number;
  suffix: string;
  label: string;
  started: boolean;
}

// Module-level so it isn't re-created on every Hero render (rerender-no-inline-components).
function StatItem({ value, suffix, label, started }: StatItemProps) {
  const count = useCounter(value, started);
  return (
    <div style={{ textAlign: "left" }}>
      <div className="stat-val">{count}{suffix}</div>
      <div className="stat-lbl">{label}</div>
    </div>
  );
}

const scroll = (id: string) => {
  const el = document.getElementById(id);
  if (el) {
    const offset = 96;
    const bodyRect = document.body.getBoundingClientRect().top;
    const elementRect = el.getBoundingClientRect().top;
    const elementPosition = elementRect - bodyRect;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });
  }
};

interface HeroProps {
  countersStarted: boolean;
}

export default function Hero({ countersStarted }: HeroProps) {
  const { display, showCursor } = useTypewriter(["Joshi.", "Full Stack Dev.", "Problem Solver.", "Joshi."]);

  return (
    <section id="hero" className="tile-light">
      <div className="container">
        <div className="tile-header-stack">
          <p className="tile-label">Full Stack Developer</p>
          <h1 className="hero-display-title">
            Yash {display}{showCursor && <span className="cursor-blink" />}
          </h1>
          <p className="hero-desc body-paragraph">
            I build <strong>production-grade web applications</strong> — from real-time platforms and no-code builders to SaaS infrastructure and email delivery systems. 4.5+ years shipping things that actually work.
          </p>
          <div className="tile-actions">
            <button className="btn-primary" onClick={() => scroll("projects")}>View Projects</button>
            <button className="btn-secondary" onClick={() => scroll("contact")}>Get In Touch</button>
          </div>
        </div>

        <div className="hero-mockup-wrapper">
          <div className="hero-browser-mockup">
            <div className="browser-chrome">
              <div className="chrome-dot" style={{ backgroundColor: "#ff5f56" }} />
              <div className="chrome-dot" style={{ backgroundColor: "#ffbd2e" }} />
              <div className="chrome-dot" style={{ backgroundColor: "#27c93f" }} />
              <div className="chrome-address-bar" />
            </div>
            <div className="browser-content" style={{ display: "flex", flexDirection: "row", padding: 0, height: "100%", width: "100%", background: "#ffffff" }}>
              {/* Main Board */}
              <div className="hero-mock-board">
                <div className="hero-mock-head">
                  <span className="hero-mock-title">Shipping activity</span>
                  <span className="hero-mock-status">Open to work</span>
                </div>
                <div className="hero-stats">
                  {STATS.map(s => (
                    <StatItem key={s.label} value={s.value} suffix={s.suffix} label={s.label} started={countersStarted} />
                  ))}
                </div>
                <div className="hero-mock-heat" aria-hidden="true">
                  {HEATMAP.map((lvl, i) => (
                    <span key={i} className={lvl ? `hero-mock-cell heat-${lvl}` : "hero-mock-cell"} />
                  ))}
                </div>
                <div className="hero-mock-heat-legend" aria-hidden="true">
                  <span>Less</span>
                  <span className="hero-mock-cell" />
                  <span className="hero-mock-cell heat-1" />
                  <span className="hero-mock-cell heat-2" />
                  <span className="hero-mock-cell heat-3" />
                  <span className="hero-mock-cell heat-4" />
                  <span>More</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
