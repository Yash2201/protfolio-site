import { useTypewriter, useCounter } from "../hooks";

const scroll = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

interface HeroProps {
  countersStarted: boolean;
}

export default function Hero({ countersStarted }: HeroProps) {
  const { display, showCursor } = useTypewriter(["Joshi.", "Full Stack Dev.", "Problem Solver.", "Joshi."]);
  const c1 = useCounter(4.5, countersStarted);
  const c2 = useCounter(6, countersStarted);
  const c3 = useCounter(3, countersStarted);

  return (
    <section id="hero">
      <div className="container hero-center">
        <div className="eyebrow">
          <div className="eyebrow-dot" />
          <span className="eyebrow-txt">Full Stack Developer · Open to opportunities</span>
        </div>
        <h1 className="hero-name">
          Yash<br />
          <span className="amber-line">{display}{showCursor && <span className="cursor-blink" />}</span>
        </h1>
        <p className="hero-desc">
          I build <strong>production-grade web applications</strong> — from real-time platforms and no-code builders to SaaS infrastructure and email delivery systems. 4.5+ years shipping things that actually work.
        </p>
        <div className="hero-actions">
          <button className="btn-primary" onClick={() => scroll("projects")}>View My Work →</button>
          <button className="btn-secondary" onClick={() => scroll("contact")}>Get In Touch</button>
        </div>
        <div className="hero-stats">
          <div><div className="stat-val">{c1}+</div><div className="stat-lbl">Years experience</div></div>
          <div><div className="stat-val">{c2}+</div><div className="stat-lbl">Products shipped</div></div>
          <div><div className="stat-val">{c3}+</div><div className="stat-lbl">Tech stacks</div></div>
        </div>
      </div>
    </section>
  );
}
