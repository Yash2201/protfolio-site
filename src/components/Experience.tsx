import { useState } from "react";
import { EXPERIENCE } from "../data";

export default function Experience() {
  const [open, setOpen] = useState("success");

  return (
    <section id="experience" className="tile-parchment">
      <div className="container">
        <div className="tile-header-stack reveal">
          <p className="tile-label">Experience</p>
          <h2 className="tile-headline">Where I've worked</h2>
        </div>
        
        <div className="exp-list reveal reveal-d1">
          {EXPERIENCE.map(e => (
            <div key={e.id} className={`exp-card${open === e.id ? " open" : ""}`}>
              <div className="exp-head" onClick={() => setOpen(open === e.id ? "" : e.id)}>
                <div className="exp-head-left">
                  <div className="exp-ico">{e.icon}</div>
                  <div>
                    <div className="exp-co">{e.company}</div>
                    <div className="exp-role-txt">{e.role}</div>
                  </div>
                </div>
                <div className="exp-meta">
                  <div className="exp-period">{e.period}</div>
                  <div className="exp-loc">{e.location}</div>
                </div>
                <span className="exp-arrow">▶</span>
              </div>
              <div className="exp-body" style={{ maxHeight: open === e.id ? "600px" : "0" }}>
                <div className="exp-body-inner">
                  <ul>
                    {e.points.map((pt, i) => (
                      <li key={i}>{pt}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
