const scroll = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

interface NavProps {
  scrolled: boolean;
  activeSection: string;
}

export default function Nav({ scrolled, activeSection }: NavProps) {
  return (
    <nav className={scrolled ? "scrolled" : ""}>
      <div className="nav-inner">
        <span className="nav-logo" onClick={() => scroll("hero")}>YJ<span>.</span></span>
        <ul className="nav-links">
          {["about", "experience", "projects"].map(id => (
            <li key={id}>
              <a className={activeSection === id ? "active" : ""} onClick={() => scroll(id)}>
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </a>
            </li>
          ))}
          <li><a className="nav-cta" onClick={() => scroll("contact")}>Let's Talk</a></li>
        </ul>
      </div>
    </nav>
  );
}
