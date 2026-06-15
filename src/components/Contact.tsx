import { useState } from "react";

export default function Contact() {
  const [sent, setSent] = useState(false);

  const handleSend = () => {
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <section id="contact" className="tile-light">
      <div className="container">
        <div className="tile-header-stack reveal">
          <p className="tile-label">Contact</p>
          <h2 className="tile-headline">Let's build something together.</h2>
        </div>
        
        <div className="contact-grid">
          <div className="reveal">
            <p className="body-paragraph" style={{ color: "var(--colors-ink-muted-80)", marginBottom: "24px" }}>
              Open to full-time remote roles and freelance projects. If you have something interesting in mind, I'd like to hear about it.
            </p>
            <div className="c-links">
              <a href="mailto:yashjoshi2201@gmail.com" className="c-link">
                <div className="c-link-ico">✉️</div>
                <div>
                  <div className="c-link-lbl">Email</div>
                  <div className="c-link-val">yashjoshi2201@gmail.com</div>
                </div>
              </a>
              <a href="https://www.linkedin.com/in/joshi-yas" target="_blank" rel="noopener noreferrer" className="c-link">
                <div className="c-link-ico">💼</div>
                <div>
                  <div className="c-link-lbl">LinkedIn</div>
                  <div className="c-link-val">in/yash-joshi-b12712196/</div>
                </div>
              </a>
            </div>
          </div>
          
          <div className="c-card reveal reveal-d2">
            <div className="c-card-title">Send a message</div>
            <p className="c-card-sub">Fill this out and it'll go straight to my inbox.</p>
            <div className="form">
              <div className="form-row-2">
                <div className="form-field">
                  <label className="form-label">Name</label>
                  <input type="text" className="form-input" placeholder="Your name" />
                </div>
                <div className="form-field">
                  <label className="form-label">Email</label>
                  <input type="email" className="form-input" placeholder="you@company.com" />
                </div>
              </div>
              <div className="form-field">
                <label className="form-label">Subject</label>
                <input type="text" className="form-input" placeholder="Project, role, collaboration..." />
              </div>
              <div className="form-field">
                <label className="form-label">Message</label>
                <textarea className="form-textarea" placeholder="Tell me a bit about what you're working on..." />
              </div>
              <button 
                className={`form-btn${sent ? " sent" : ""}`} 
                onClick={handleSend}
              >
                {sent ? "Message Sent ✓" : "Send Message"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
