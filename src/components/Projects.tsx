import { PROJECTS } from "../data";

export default function Projects() {
  const featured = PROJECTS.find(p => p.featured)!;
  const regular = PROJECTS.filter(p => !p.featured && !p.wide);
  const wide = PROJECTS.find(p => p.wide);

  return (
    <section id="projects">
      <div className="container">
        <div className="reveal">
          <p className="sec-label">Projects</p>
          <h2 className="sec-title">Things I've built</h2>
          <div className="sec-divider" />
        </div>
        <div className="projects-grid">
          <div className="p-card featured reveal">
            <div>
              <div className="p-head"><div className="p-ico">{featured.icon}</div></div>
              <div className="p-period" style={{ marginTop: 12 }}>{featured.period}</div>
              <div className="p-name" style={{ marginTop: 12 }}>{featured.name}</div>
              <p className="p-desc" style={{ marginTop: 10 }}>{featured.desc}</p>
            </div>
            <div>
              <ul className="p-points">{featured.points.map((pt, i) => <li key={i}>{pt}</li>)}</ul>
              <div className="p-tags" style={{ marginTop: 16 }}>{featured.tags.map(t => <span className="tag" key={t}>{t}</span>)}</div>
            </div>
          </div>

          {regular.map((p, i) => (
            <div key={p.id} className={`p-card reveal reveal-d${i + 1}`}>
              <div className="p-head"><div className="p-ico">{p.icon}</div><div className="p-period">{p.period}</div></div>
              <div className="p-name">{p.name}</div>
              <p className="p-desc">{p.desc}</p>
              <ul className="p-points">{p.points.map((pt, j) => <li key={j}>{pt}</li>)}</ul>
              <div className="p-tags">{p.tags.map(t => <span className="tag" key={t}>{t}</span>)}</div>
            </div>
          ))}

          {wide && (
            <div className="p-card wide reveal">
              <div className="wide-inner">
                <div>
                  <div className="p-head"><div className="p-ico">{wide.icon}</div><div className="p-period">{wide.period}</div></div>
                  <div className="p-name" style={{ marginTop: 12 }}>{wide.name}</div>
                  <p className="p-desc" style={{ marginTop: 10 }}>{wide.desc}</p>
                </div>
                <div>
                  <ul className="p-points">{wide.points.map((pt, i) => <li key={i}>{pt}</li>)}</ul>
                  <div className="p-tags" style={{ marginTop: 14 }}>{wide.tags.map(t => <span className="tag" key={t}>{t}</span>)}</div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
