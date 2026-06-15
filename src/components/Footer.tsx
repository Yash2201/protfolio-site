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

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        {/* Apple Dense Link Stack Directory */}
        <div className="footer-directory">
          <div className="footer-directory-col">
            <h3 className="footer-directory-col-title">Explore</h3>
            <ul className="footer-directory-col-links">
              <li><a onClick={() => scroll("hero")}>Home</a></li>
              <li><a onClick={() => scroll("about")}>About</a></li>
              <li><a onClick={() => scroll("experience")}>Experience</a></li>
              <li><a onClick={() => scroll("projects")}>Projects</a></li>
              <li><a onClick={() => scroll("contact")}>Contact</a></li>
            </ul>
          </div>
          <div className="footer-directory-col">
            <h3 className="footer-directory-col-title">Connect</h3>
            <ul className="footer-directory-col-links">
              <li><a href="https://github.com/Yash2201/" target="_blank" rel="noopener noreferrer">GitHub</a></li>
              <li><a href="https://www.linkedin.com/in/joshi-yas" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
              <li><a href="mailto:yashjoshi2201@gmail.com">Email</a></li>
            </ul>
          </div>
          <div className="footer-directory-col">
            <h3 className="footer-directory-col-title">Services</h3>
            <ul className="footer-directory-col-links">
              <li><a href="#" onClick={(e) => e.preventDefault()}>Full Stack Development</a></li>
              <li><a href="#" onClick={(e) => e.preventDefault()}>SaaS Infrastructure</a></li>
              <li><a href="#" onClick={(e) => e.preventDefault()}>API Engineering</a></li>
              <li><a href="#" onClick={(e) => e.preventDefault()}>Consulting</a></li>
            </ul>
          </div>
          <div className="footer-directory-col">
            <h3 className="footer-directory-col-title">Yash Joshi Values</h3>
            <ul className="footer-directory-col-links">
              <li><a href="#" onClick={(e) => e.preventDefault()}>Performance first</a></li>
              <li><a href="#" onClick={(e) => e.preventDefault()}>Minimal UI design</a></li>
              <li><a href="#" onClick={(e) => e.preventDefault()}>Clean code structure</a></li>
              <li><a href="#" onClick={(e) => e.preventDefault()}>Responsive layouts</a></li>
            </ul>
          </div>
        </div>

        {/* Legal foot notes */}
        <div className="footer-bottom">
          <p className="footer-legal">
            More ways to connect: <a href="mailto:yashjoshi2201@gmail.com" style={{ color: "var(--colors-primary)", textDecoration: "underline" }}>email me</a> or find a <a href="https://www.linkedin.com/in/joshi-yas" target="_blank" rel="noopener noreferrer" style={{ color: "var(--colors-primary)", textDecoration: "underline" }}>LinkedIn contact</a>.
          </p>
          <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "12px", borderTop: "1px solid var(--colors-hairline)", paddingTop: "16px" }}>
            <span className="footer-legal" style={{ opacity: 0.8 }}>
              Copyright &copy; {new Date().getFullYear()} Yash Joshi. All rights reserved. Built with React and TypeScript in Rajkot, India.
            </span>
            <ul className="footer-legal-links">
              <li><a href="#" onClick={(e) => e.preventDefault()}>Privacy Policy</a></li>
              <li><a href="#" onClick={(e) => e.preventDefault()}>Terms of Use</a></li>
              <li><a href="#" onClick={(e) => e.preventDefault()}>Legal</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}>Back to top &uarr;</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
