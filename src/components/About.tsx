import { SKILLS } from "../data";

const highlights: [string, string, string][] = [
  ["⚡", "MERN Stack", "Primary production stack"],
  ["🧩", "Laravel / PHP", "Backend & API expertise"],
  ["🚀", "Remote-ready", "3 years remote experience"],
  ["🛠", "Agile teams", "Cross-functional delivery"],
];

export default function About() {
  return (
    <section id="about">
      <div className="container">
        <div className="about-grid">
          <div className="reveal">
            <p className="sec-label">About</p>
            <h2 className="sec-title">I care about what ships, not just what compiles.</h2>
            <div className="sec-divider" />
            <p className="about-p">I'm a full-stack developer based in Rajkot, India with <strong>4.5+ years of experience</strong> building scalable web products. I've worked across the full lifecycle — from first commit to production deployment — on platforms handling real users, real data, and real scale.</p>
            <p className="about-p">Most recently at <strong>Success.ai</strong>, I built white-label SaaS platforms, email deliverability infrastructure, and AI-powered outreach tools. Before that at <strong>Tmedia</strong>, I worked on real-time communication systems, no-code builders, and EdTech platforms.</p>
            <p className="about-p">I'm comfortable with ambiguity, deliberate about architecture, and prefer working in codebases where the decisions actually matter.</p>
            <div className="highlights">
              {highlights.map(([ico, title, sub]) => (
                <div className="hi" key={title}>
                  <div className="hi-ico">{ico}</div>
                  <div className="hi-lbl"><strong>{title}</strong>{sub}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="reveal reveal-d2">
            {SKILLS.map(g => (
              <div className="sk-group" key={g.label}>
                <div className="sk-group-title">{g.label}</div>
                <div className="sk-row">
                  {g.chips.map(([name, primary]) => (
                    <span key={name} className={`chip${primary ? " primary" : ""}`}>{name}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
