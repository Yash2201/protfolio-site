import { useState } from 'react';
import { GmailIcon, LinkedInIcon } from './TechIcons';

type Status = 'idle' | 'sending' | 'success' | 'error';

type FormValues = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormValues, string>>;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const initialValues: FormValues = { name: '', email: '', subject: '', message: '' };

export default function Contact() {
  const [status, setStatus] = useState<Status>('idle');
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});

  const validate = (vals: FormValues): FormErrors => {
    const next: FormErrors = {};
    if (!vals.name.trim()) next.name = 'Please enter your name.';
    if (!vals.email.trim()) next.email = 'Please enter your email.';
    else if (!EMAIL_RE.test(vals.email.trim())) next.email = 'Please enter a valid email address.';
    if (!vals.subject.trim()) next.subject = 'Please add a subject.';
    if (!vals.message.trim()) next.message = 'Please write a message.';
    else if (vals.message.trim().length < 10) next.message = 'Your message is a little short (min 10 characters).';
    return next;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    // Clear a field's error as soon as the user starts correcting it.
    setErrors((prev) => (prev[name as keyof FormValues] ? { ...prev, [name]: undefined } : prev));
    if (status === 'error') setStatus('idle');
  };

  const handleSend = async () => {
    if (status === 'sending') return;

    const validationErrors = validate(values);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    setStatus('sending');
    const GOOGLE_SCRIPT_WEB_APP_URL = import.meta.env.VITE_GOOGLE_SCRIPT_WEB_APP_URL;

    const formData = new FormData();
    (Object.keys(values) as (keyof FormValues)[]).forEach((key) => {
      formData.append(key, values[key].trim());
    });

    try {
      await fetch(GOOGLE_SCRIPT_WEB_APP_URL, {
        method: "POST",
        body: formData,
        mode: "no-cors"
      });
      // With mode: "no-cors" the response is opaque, so a resolved fetch
      // means the request went through. Treat that as success.
      setStatus('success');
      setValues(initialValues);
    } catch (error) {
      console.error("Error sending form:", error);
      setStatus('error');
    }
  };

  const sending = status === 'sending';
  const success = status === 'success';

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
                <div className="c-link-ico"><GmailIcon size={22} /></div>
                <div>
                  <div className="c-link-lbl">Email</div>
                  <div className="c-link-val">yashjoshi2201@gmail.com</div>
                </div>
              </a>
              <a href="https://www.linkedin.com/in/joshi-yas" target="_blank" rel="noopener noreferrer" className="c-link">
                <div className="c-link-ico"><LinkedInIcon size={22} /></div>
                <div>
                  <div className="c-link-lbl">LinkedIn</div>
                  <div className="c-link-val">in/joshi-yas/</div>
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
                  <label className="form-label" htmlFor="contact-name">Name</label>
                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    className={`form-input${errors.name ? " invalid" : ""}`}
                    placeholder="Your name"
                    value={values.name}
                    onChange={handleChange}
                    aria-invalid={errors.name ? true : undefined}
                  />
                  {errors.name && <span className="form-error" role="alert">{errors.name}</span>}
                </div>
                <div className="form-field">
                  <label className="form-label" htmlFor="contact-email">Email</label>
                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    className={`form-input${errors.email ? " invalid" : ""}`}
                    placeholder="you@company.com"
                    value={values.email}
                    onChange={handleChange}
                    aria-invalid={errors.email ? true : undefined}
                  />
                  {errors.email && <span className="form-error" role="alert">{errors.email}</span>}
                </div>
              </div>
              <div className="form-field">
                <label className="form-label" htmlFor="contact-subject">Subject</label>
                <input
                  id="contact-subject"
                  type="text"
                  name="subject"
                  className={`form-input${errors.subject ? " invalid" : ""}`}
                  placeholder="Project, role, collaboration..."
                  value={values.subject}
                  onChange={handleChange}
                  aria-invalid={errors.subject ? true : undefined}
                />
                {errors.subject && <span className="form-error" role="alert">{errors.subject}</span>}
              </div>
              <div className="form-field">
                <label className="form-label" htmlFor="contact-message">Message</label>
                <textarea
                  id="contact-message"
                  name="message"
                  className={`form-textarea${errors.message ? " invalid" : ""}`}
                  placeholder="Tell me a bit about what you're working on..."
                  value={values.message}
                  onChange={handleChange}
                  aria-invalid={errors.message ? true : undefined}
                />
                {errors.message && <span className="form-error" role="alert">{errors.message}</span>}
              </div>
              <button
                className={`form-btn${success ? " sent" : ""}`}
                onClick={handleSend}
                disabled={sending || success}
              >
                {sending && <span className="form-spinner" aria-hidden="true" />}
                {sending ? "Sending..." : success ? "Message Sent ✓" : "Send Message"}
              </button>
              {success && (
                <p className="form-status form-status-success" role="status">
                  Thanks! Your message has been sent — I'll get back to you soon.
                </p>
              )}
              {status === 'error' && (
                <p className="form-status form-status-error" role="alert">
                  Something went wrong while sending. Please try again, or email me directly.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
