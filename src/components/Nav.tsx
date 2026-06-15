const scroll = (id: string) => {
  const el = document.getElementById(id);
  if (el) {
    // Account for both headers height (44px + 52px = 96px)
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

interface NavProps {
  scrolled: boolean;
  activeSection: string;
}

export default function Nav({ scrolled, activeSection }: NavProps) {
  return (
    <>
      {/* Global Top Nav */}
      <header className="global-nav">
        <div className="global-nav-inner">
          <span className="global-nav-logo" onClick={() => scroll("hero")}>YJ</span>
          <ul className="global-nav-links">
            <li><a href="https://github.com/Yash2201/" target="_blank" rel="noopener noreferrer">GitHub</a></li>
            <li><a href="https://www.linkedin.com/in/joshi-yas" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            <li><a href="https://drive.google.com/file/d/1ftjeK5du10iuMKVTSbUIwazPHfnjV2ZU/view?usp=drive_link" target="_blank" rel="noopener noreferrer">Resume</a></li>
          </ul>
        </div>
      </header>

      {/* Sub Nav Frosted */}
      <nav className={`sub-nav-frosted${scrolled ? " scrolled" : ""}`}>
        <div className="sub-nav-inner">
          <span className="sub-nav-title" onClick={() => scroll("hero")}>Yash Joshi</span>
          <ul className="sub-nav-links">
            {["about", "experience", "projects"].map(id => (
              <li key={id}>
                <a
                  className={activeSection === id ? "active" : ""}
                  onClick={() => scroll(id)}
                >
                  {id.charAt(0).toUpperCase() + id.slice(1)}
                </a>
              </li>
            ))}
            <li>
              <a className="sub-nav-cta" onClick={() => scroll("contact")}>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
