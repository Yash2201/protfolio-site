import { PROJECTS } from "../data";
import { Icon } from "./Icon";

export default function Projects() {
  const featured = PROJECTS.find(p => p.featured)!;
  const regular = PROJECTS.filter(p => !p.featured && !p.wide);
  const wide = PROJECTS.find(p => p.wide);

  return (
    <section id="projects" className="tile-dark-2">
      <div className="container">
        <div className="tile-header-stack reveal">
          <p className="tile-label">Projects</p>
          <h2 className="tile-headline">Things I've built</h2>
        </div>
        
        <div className="projects-grid">
          {/* Featured Project */}
          <div className="p-card featured reveal">
            <div>
              <div className="p-head">
                <div className="p-ico"><Icon icon={featured.icon} alt={featured.name} /></div>
                <div className="p-period">{featured.period}</div>
              </div>
              <div className="p-name" style={{ marginTop: 16 }}>{featured.name}</div>
              <p className="p-desc" style={{ marginTop: 12 }}>{featured.desc}</p>
              <div style={{ marginTop: 20 }}>
                <span className="text-link-on-dark" style={{ fontSize: "14px" }}>
                  Learn more &rarr;
                </span>
              </div>
            </div>
            <div>
              <ul className="p-points">
                {featured.points.map((pt, i) => (
                  <li key={i}>{pt}</li>
                ))}
              </ul>
              <div className="p-tags" style={{ marginTop: 24 }}>
                {featured.tags.map(t => (
                  <span className="tag" key={t}>{t}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Regular Projects */}
          {regular.map((p, i) => (
            <div key={p.id} className={`p-card reveal reveal-d${i + 1}`}>
              <div className="p-head">
                <div className="p-ico"><Icon icon={p.icon} alt={p.name} /></div>
                <div className="p-period">{p.period}</div>
              </div>
              <div className="p-name" style={{ marginTop: 8 }}>{p.name}</div>
              <p className="p-desc">{p.desc}</p>
              <ul className="p-points" style={{ margin: "8px 0" }}>
                {p.points.map((pt, j) => (
                  <li key={j}>{pt}</li>
                ))}
              </ul>
              <div className="p-tags" style={{ marginBottom: 16 }}>
                {p.tags.map(t => (
                  <span className="tag" key={t}>{t}</span>
                ))}
              </div>
              <div style={{ marginTop: "auto" }}>
                <span className="text-link-on-dark" style={{ fontSize: "14px" }}>
                  Learn more &rarr;
                </span>
              </div>
            </div>
          ))}

          {/* Wide Project */}
          {wide && (
            <div className="p-card wide reveal">
              <div className="wide-inner">
                <div>
                  <div className="p-head">
                    <div className="p-ico"><Icon icon={wide.icon} alt={wide.name} /></div>
                    <div className="p-period">{wide.period}</div>
                  </div>
                  <div className="p-name" style={{ marginTop: 16 }}>{wide.name}</div>
                  <p className="p-desc" style={{ marginTop: 12 }}>{wide.desc}</p>
                  <div style={{ marginTop: 20 }}>
                    <span className="text-link-on-dark" style={{ fontSize: "14px" }}>
                      Learn more &rarr;
                    </span>
                  </div>
                </div>
                <div>
                  <ul className="p-points">
                    {wide.points.map((pt, i) => (
                      <li key={i}>{pt}</li>
                    ))}
                  </ul>
                  <div className="p-tags" style={{ marginTop: 24 }}>
                    {wide.tags.map(t => (
                      <span className="tag" key={t}>{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
