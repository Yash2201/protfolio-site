import type { ReactNode } from "react";
import { SKILLS } from "../data";
import {
  MongoDBIcon,
  ExpressIcon,
  ReactIcon,
  NodeIcon,
  LaravelIcon,
  PHPIcon,
  RemoteIcon,
  AgileIcon,
} from "./TechIcons";

const highlights: { icon: ReactNode; title: string; sub: string }[] = [
  {
    icon: (
      <span className="hi-logos">
        <MongoDBIcon size={20} />
        <ExpressIcon size={20} />
        <ReactIcon size={20} />
        <NodeIcon size={20} />
      </span>
    ),
    title: "MERN Stack",
    sub: "Primary production stack",
  },
  {
    icon: (
      <span className="hi-logos">
        <LaravelIcon size={20} />
        <PHPIcon size={26} />
      </span>
    ),
    title: "Laravel / PHP",
    sub: "Backend & API expertise",
  },
  {
    icon: <RemoteIcon size={22} />,
    title: "Remote-ready",
    sub: "3 years remote experience",
  },
  {
    icon: <AgileIcon size={22} />,
    title: "Agile teams",
    sub: "Cross-functional delivery",
  },
];

export default function About() {
  return (
    <section id="about" className="tile-dark">
      <div className="container">
        <div className="about-grid">
          <div className="reveal">
            <p className="tile-label">About</p>
            <h2 className="tile-headline">I care about what ships, not just what compiles.</h2>
            <p className="about-p body-paragraph" style={{ marginTop: "24px" }}>
              I'm a full-stack developer based in Rajkot, India with <strong>4.5+ years of experience</strong> building scalable web products. I've worked across the full lifecycle — from first commit to production deployment — on platforms handling real users, real data, and real scale.
            </p>
            <p className="about-p body-paragraph">
              Most recently at <strong>Success.ai</strong>, I built white-label SaaS platforms, email deliverability infrastructure, and AI-powered outreach tools. Before that at <strong>Tmedia</strong>, I worked on real-time communication systems, no-code builders, and EdTech platforms.
            </p>
            <p className="about-p body-paragraph">
              I'm comfortable with ambiguity, deliberate about architecture, and prefer working in codebases where the decisions actually matter.
            </p>
            
            <div className="highlights">
              {highlights.map(({ icon, title, sub }) => (
                <div className="hi" key={title}>
                  <div className="hi-ico">{icon}</div>
                  <div className="hi-lbl">
                    <strong>{title}</strong>
                    {sub}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="reveal reveal-d2" style={{ paddingLeft: "8px" }}>
            {SKILLS.map(g => (
              <div className="sk-group" key={g.label}>
                <div className="sk-group-title">{g.label}</div>
                <div className="sk-row">
                  {g.chips.map(([name, primary]) => (
                    <span key={name} className={`chip${primary ? " primary" : ""}`}>
                      {name}
                    </span>
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
