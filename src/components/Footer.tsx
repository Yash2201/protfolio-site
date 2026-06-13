export default function Footer() {
  return (
    <footer>
      <div className="foot-inner">
        <div className="foot-logo">YJ<span>.</span></div>
        <div className="foot-copy">Yash Joshi · 2025 · Rajkot, India</div>
        <span className="foot-top" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>↑ Back to top</span>
      </div>
    </footer>
  );
}
