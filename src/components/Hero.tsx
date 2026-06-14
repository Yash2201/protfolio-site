import { useTypewriter, useCounter } from "../hooks";

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
  const c1 = useCounter(4.5, countersStarted);
  const c2 = useCounter(6, countersStarted);
  const c3 = useCounter(3, countersStarted);

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
              {/* Sidebar */}
              <div style={{ width: "60px", background: "#f5f5f7", borderRight: "1px solid #e0e0e0", display: "flex", flexDirection: "column", gap: "12px", padding: "16px 0", alignItems: "center" }}>
                <div style={{ width: "24px", height: "24px", borderRadius: "50%", background: "#0066cc", opacity: 0.15 }} />
                <div style={{ width: "24px", height: "12px", borderRadius: "4px", background: "#e0e0e0" }} />
                <div style={{ width: "24px", height: "12px", borderRadius: "4px", background: "#e0e0e0" }} />
                <div style={{ width: "24px", height: "12px", borderRadius: "4px", background: "#e0e0e0" }} />
              </div>
              {/* Main Board */}
              <div style={{ flexGrow: 1, padding: "24px", display: "flex", flexDirection: "column", justifyContent: "center", gap: "24px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <div style={{ height: "14px", width: "100px", borderRadius: "4px", background: "#f5f5f7" }} />
                  <div style={{ height: "24px", width: "80px", borderRadius: "12px", background: "#0066cc", opacity: 0.1 }} />
                </div>
                <div className="hero-stats" style={{ display: "flex", justifyContent: "space-between", margin: 0, gap: "16px" }}>
                  <div style={{ textAlign: "left" }}>
                    <div className="stat-val">{c1}+</div>
                    <div className="stat-lbl" style={{ textTransform: "uppercase", fontSize: "10px", letterSpacing: "0.05em" }}>Years Experience</div>
                  </div>
                  <div style={{ textAlign: "left" }}>
                    <div className="stat-val">{c2}+</div>
                    <div className="stat-lbl" style={{ textTransform: "uppercase", fontSize: "10px", letterSpacing: "0.05em" }}>Products Shipped</div>
                  </div>
                  <div style={{ textAlign: "left" }}>
                    <div className="stat-val">{c3}+</div>
                    <div className="stat-lbl" style={{ textTransform: "uppercase", fontSize: "10px", letterSpacing: "0.05em" }}>Tech Stacks</div>
                  </div>
                </div>
                {/* Visual Activity block */}
                <div style={{ height: "40px", width: "100%", borderRadius: "6px", background: "#f5f5f7", display: "flex", alignItems: "center", padding: "0 12px", justifyContent: "space-between" }}>
                  <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
                    <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#30d158" }} />
                    <div style={{ height: "10px", width: "120px", borderRadius: "3px", background: "#e0e0e0" }} />
                  </div>
                  <div style={{ height: "8px", width: "40px", borderRadius: "3px", background: "#e0e0e0" }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
