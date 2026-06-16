const css = `
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&display=swap');

*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

:root {
  /* Brand & Accent */
  --colors-primary: #0066cc; /* Action Blue */
  --colors-primary-focus: #0071e3; /* Focus Blue */
  --colors-primary-on-dark: #2997ff; /* Sky Link Blue */

  /* Surface colors */
  --colors-canvas: #ffffff; /* Pure White */
  --colors-canvas-parchment: #f5f5f7; /* Parchment */
  --colors-surface-pearl: #fafafc; /* Pearl Button */
  --colors-surface-tile-1: #272729; /* Near-Black Tile 1 */
  --colors-surface-tile-2: #2a2a2c; /* Near-Black Tile 2 */
  --colors-surface-tile-3: #252527; /* Near-Black Tile 3 */
  --colors-surface-black: #000000; /* Pure Black */
  --colors-surface-chip-translucent: rgba(210, 210, 215, 0.64);

  /* Text colors */
  --colors-ink: #1d1d1f; /* Near-Black Ink */
  --colors-body: #1d1d1f;
  --colors-body-on-dark: #ffffff;
  --colors-body-muted: #cccccc;
  --colors-ink-muted-80: #333333;
  --colors-ink-muted-48: #7a7a7a;

  /* Borders & Dividers */
  --colors-divider-soft: rgba(0, 0, 0, 0.04);
  --colors-hairline: #e0e0e0;

  /* Spacing */
  --spacing-xxs: 4px;
  --spacing-xs: 8px;
  --spacing-sm: 12px;
  --spacing-md: 17px;
  --spacing-lg: 24px;
  --spacing-xl: 32px;
  --spacing-xxl: 48px;
  --spacing-section: 80px;

  /* Radii */
  --rounded-none: 0px;
  --rounded-xs: 5px;
  --rounded-sm: 8px;
  --rounded-md: 11px;
  --rounded-lg: 18px;
  --rounded-pill: 9999px;
  --rounded-full: 9999px;
}

html {
  scroll-behavior: smooth;
}

body {
  background-color: var(--colors-canvas-parchment);
  color: var(--colors-body);
  font-family: -apple-system, BlinkMacSystemFont, "SF Pro Text", "Inter", "Helvetica Neue", sans-serif;
  font-size: 17px;
  font-weight: 400;
  line-height: 1.44; /* Tightened from 1.47 for Inter */
  letter-spacing: -0.01em;
  -webkit-font-smoothing: antialiased;
  overflow-x: hidden;
}

::-webkit-scrollbar {
  width: 4px;
}
::-webkit-scrollbar-thumb {
  background: var(--colors-ink-muted-48);
  border-radius: var(--rounded-xs);
}

canvas.particles-canvas {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 0;
  opacity: .3;
}

.portfolio-root {
  position: relative;
  z-index: 1;
}

/* Global Nav */
.global-nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 44px;
  background-color: var(--colors-surface-black);
  z-index: 1000;
  display: flex;
  align-items: center;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}
.global-nav-inner {
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
  padding: 0 var(--spacing-lg);
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.global-nav-logo {
  font-size: 14px;
  font-weight: 600;
  color: var(--colors-body-on-dark);
  text-decoration: none;
  letter-spacing: -0.02em;
  cursor: pointer;
  display: flex;
  align-items: center;
}
.global-nav-links {
  display: flex;
  list-style: none;
  gap: var(--spacing-xl);
}
.global-nav-links a {
  color: var(--colors-body-on-dark);
  text-decoration: none;
  font-size: 12px;
  font-weight: 400;
  letter-spacing: -0.12px;
  opacity: 0.8;
  transition: opacity 0.2s;
  cursor: pointer;
}
.global-nav-links a:hover {
  opacity: 1;
}

/* Sub Nav Frosted */
.sub-nav-frosted {
  position: fixed;
  top: 44px;
  left: 0;
  right: 0;
  height: 52px;
  background-color: rgba(245, 245, 247, 0.8);
  backdrop-filter: saturate(180%) blur(20px);
  -webkit-backdrop-filter: saturate(180%) blur(20px);
  z-index: 999;
  display: flex;
  align-items: center;
  border-bottom: 1px solid var(--colors-divider-soft);
  transition: background-color 0.3s;
}
.sub-nav-frosted.scrolled {
  background-color: rgba(255, 255, 255, 0.85);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.02);
}
.sub-nav-inner {
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
  padding: 0 var(--spacing-lg);
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.sub-nav-title {
  font-size: 21px;
  font-weight: 600;
  color: var(--colors-ink);
  letter-spacing: 0.231px;
  cursor: pointer;
  font-family: -apple-system, BlinkMacSystemFont, "SF Pro Display", "Inter", sans-serif;
}
.sub-nav-links {
  display: flex;
  align-items: center;
  list-style: none;
  gap: var(--spacing-lg);
}
.sub-nav-links a {
  color: var(--colors-ink);
  text-decoration: none;
  font-size: 12px;
  font-weight: 400;
  letter-spacing: -0.12px;
  cursor: pointer;
  transition: color 0.2s;
}
.sub-nav-links a:hover, .sub-nav-links a.active {
  color: var(--colors-primary);
}
.sub-nav-cta {
  background-color: var(--colors-primary);
  color: var(--colors-body-on-dark) !important;
  font-size: 12px;
  font-weight: 400;
  padding: 6px 14px;
  border-radius: var(--rounded-pill);
  transition: transform 0.15s;
}
.sub-nav-cta:hover {
  transform: scale(0.95);
}

/* Sections & Layout (Full-bleed alternating tiles) */
section {
  padding: var(--spacing-section) 0;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: auto;
  border-radius: var(--rounded-none);
}

.container {
  width: 100%;
  max-width: 1024px;
  margin: 0 auto;
  padding: 0 var(--spacing-lg);
  position: relative;
  z-index: 2;
}

/* Color Tile Sections */
.tile-light {
  background-color: var(--colors-canvas);
  color: var(--colors-ink);
}
.tile-parchment {
  background-color: var(--colors-canvas-parchment);
  color: var(--colors-ink);
}
.tile-dark {
  background-color: var(--colors-surface-tile-1);
  color: var(--colors-body-on-dark);
}
.tile-dark-2 {
  background-color: var(--colors-surface-tile-2);
  color: var(--colors-body-on-dark);
}
.tile-dark-3 {
  background-color: var(--colors-surface-tile-3);
  color: var(--colors-body-on-dark);
}

/* Typography Hierarchy */
.hero-display-title {
  font-family: -apple-system, BlinkMacSystemFont, "SF Pro Display", "Inter", sans-serif;
  font-size: 56px;
  font-weight: 600;
  line-height: 1.07;
  letter-spacing: -0.035em; /* "Apple tight" letter spacing */
  margin-bottom: var(--spacing-md);
  font-feature-settings: "ss03";
}

.tile-headline {
  font-family: -apple-system, BlinkMacSystemFont, "SF Pro Display", "Inter", sans-serif;
  font-size: 40px;
  font-weight: 600;
  line-height: 1.10;
  letter-spacing: -0.02em;
  margin-bottom: var(--spacing-xs);
  font-feature-settings: "ss03";
}

.tile-label {
  font-family: -apple-system, BlinkMacSystemFont, "SF Pro Text", "Inter", sans-serif;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  margin-bottom: var(--spacing-xs);
  color: var(--colors-primary);
}
.tile-dark .tile-label, .tile-dark-2 .tile-label {
  color: var(--colors-primary-on-dark);
}

.lead-subcopy {
  font-size: 28px;
  font-weight: 400;
  line-height: 1.14;
  letter-spacing: 0.196px;
  margin-bottom: var(--spacing-lg);
}

.body-lead-airy {
  font-size: 24px;
  font-weight: 300;
  line-height: 1.5;
  letter-spacing: 0;
}

.tagline-accent {
  font-size: 21px;
  font-weight: 600;
  line-height: 1.19;
  letter-spacing: 0.231px;
}

.body-paragraph {
  font-size: 17px;
  font-weight: 400;
  line-height: 1.44;
  letter-spacing: -0.01em;
}

.caption-label {
  font-size: 14px;
  font-weight: 400;
  line-height: 1.43;
  letter-spacing: -0.224px;
}

.caption-strong {
  font-size: 14px;
  font-weight: 600;
  line-height: 1.29;
  letter-spacing: -0.224px;
}

/* Centered stack headers for tiles */
.tile-header-stack {
  text-align: center;
  max-width: 760px;
  margin: 0 auto var(--spacing-xxl);
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* Button Components */
.btn-primary {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: var(--colors-primary);
  color: var(--colors-body-on-dark);
  font-family: -apple-system, BlinkMacSystemFont, "SF Pro Text", "Inter", sans-serif;
  font-size: 17px;
  font-weight: 400;
  line-height: 1.0;
  padding: 11px 22px;
  border-radius: var(--rounded-pill);
  text-decoration: none;
  border: none;
  cursor: pointer;
  transition: transform 0.15s, outline 0.15s;
}
.btn-primary:active {
  transform: scale(0.95);
}
.btn-primary:focus-visible {
  outline: 2px solid var(--colors-primary-focus);
  outline-offset: 2px;
}

.btn-secondary {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  color: var(--colors-primary);
  font-family: -apple-system, BlinkMacSystemFont, "SF Pro Text", "Inter", sans-serif;
  font-size: 17px;
  font-weight: 400;
  line-height: 1.0;
  padding: 11px 22px;
  border-radius: var(--rounded-pill);
  border: 1px solid var(--colors-primary);
  text-decoration: none;
  cursor: pointer;
  transition: transform 0.15s, background-color 0.2s;
}
.tile-dark .btn-secondary, .tile-dark-2 .btn-secondary {
  color: var(--colors-primary-on-dark);
  border-color: var(--colors-primary-on-dark);
}
.btn-secondary:active {
  transform: scale(0.95);
}

.btn-dark-utility {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: var(--colors-ink);
  color: var(--colors-body-on-dark);
  font-size: 14px;
  font-weight: 400;
  line-height: 1.29;
  letter-spacing: -0.224px;
  padding: 8px 15px;
  border-radius: var(--rounded-sm);
  text-decoration: none;
  border: none;
  cursor: pointer;
  transition: transform 0.15s;
}
.btn-dark-utility:active {
  transform: scale(0.95);
}

.btn-pearl-capsule {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: var(--colors-surface-pearl);
  color: var(--colors-ink-muted-80);
  font-size: 14px;
  font-weight: 400;
  line-height: 1.43;
  padding: 8px 14px;
  border-radius: var(--rounded-md);
  border: 3px solid var(--colors-divider-soft);
  cursor: pointer;
  transition: transform 0.15s;
  text-decoration: none;
}
.btn-pearl-capsule:active {
  transform: scale(0.95);
}

.tile-actions {
  display: flex;
  gap: var(--spacing-md);
  justify-content: center;
  align-items: center;
  margin-top: var(--spacing-sm);
}

/* Links */
.text-link {
  color: var(--colors-primary);
  text-decoration: none;
  font-size: 17px;
  font-weight: 400;
  display: inline-flex;
  align-items: center;
  gap: 4px;
  cursor: pointer;
}
.text-link:hover {
  text-decoration: underline;
}

.text-link-on-dark {
  color: var(--colors-primary-on-dark);
  text-decoration: none;
  font-size: 17px;
  font-weight: 400;
  display: inline-flex;
  align-items: center;
  gap: 4px;
  cursor: pointer;
}
.text-link-on-dark:hover {
  text-decoration: underline;
}

/* Product shadows & containers */
.product-shadow {
  box-shadow: rgba(0, 0, 0, 0.22) 3px 5px 30px 0;
}

/* Card grids & components */
.store-utility-card {
  background-color: var(--colors-canvas);
  border: 1px solid var(--colors-hairline);
  border-radius: var(--rounded-lg);
  padding: var(--spacing-lg);
  display: flex;
  flex-direction: column;
  transition: transform 0.2s, border-color 0.2s;
  box-shadow: none; /* Shadow philosophy: cards have no default shadow */
}
.store-utility-card:hover {
  border-color: var(--colors-primary);
  transform: translateY(-2px);
}
.tile-dark .store-utility-card, .tile-dark-2 .store-utility-card {
  background-color: var(--colors-surface-tile-3);
  border-color: rgba(255, 255, 255, 0.08);
}
.tile-dark .store-utility-card:hover, .tile-dark-2 .store-utility-card:hover {
  border-color: var(--colors-primary-on-dark);
}

/* Option chips */
.configurator-option-chip {
  background-color: var(--colors-canvas);
  border: 1px solid var(--colors-hairline);
  border-radius: var(--rounded-pill);
  padding: 12px 16px;
  color: var(--colors-ink);
  font-size: 14px;
  font-weight: 400;
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  transition: border-color 0.2s;
  user-select: none;
}
.configurator-option-chip:hover {
  border-color: var(--colors-ink-muted-80);
}
.configurator-option-chip-selected {
  border: 2px solid var(--colors-primary-focus) !important;
  padding: 11px 15px; /* Adjust padding for thicker border */
}

/* Specific Section Layouts */

/* Hero */
#hero {
  padding-top: 130px; /* Offset for both navigation rows */
  padding-bottom: var(--spacing-section);
  text-align: center;
  min-height: 90vh;
}
.hero-desc {
  max-width: 600px;
  margin: 0 auto var(--spacing-xl);
  color: var(--colors-ink-muted-80);
}
.hero-mockup-wrapper {
  margin-top: var(--spacing-xxl);
  perspective: 1000px;
  display: flex;
  justify-content: center;
  width: 100%;
}
.hero-browser-mockup {
  width: 100%;
  max-width: 760px;
  aspect-ratio: 16/10;
  border-radius: var(--rounded-sm);
  background-color: var(--colors-canvas);
  border: 1px solid var(--colors-hairline);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  box-shadow: rgba(0, 0, 0, 0.22) 3px 5px 30px 0;
  transform: rotateX(2deg);
}
.browser-chrome {
  height: 28px;
  background-color: var(--colors-canvas-parchment);
  border-bottom: 1px solid var(--colors-hairline);
  display: flex;
  align-items: center;
  padding: 0 12px;
  gap: 6px;
}
.chrome-dot {
  width: 9px;
  height: 9px;
  border-radius: var(--rounded-full);
  background-color: var(--colors-hairline);
}
.chrome-address-bar {
  flex-grow: 1;
  max-width: 280px;
  height: 16px;
  background-color: var(--colors-canvas);
  border-radius: var(--rounded-xs);
  margin: 0 auto;
  border: 1px solid var(--colors-divider-soft);
}
.browser-content {
  flex-grow: 1;
  padding: var(--spacing-lg);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--colors-canvas);
}
.hero-stats {
  display: flex;
  gap: var(--spacing-md);
  justify-content: space-between;
  margin: 0;
}
.stat-val {
  font-family: -apple-system, BlinkMacSystemFont, "SF Pro Display", "Inter", sans-serif;
  font-weight: 600;
  font-size: 32px;
  color: var(--colors-primary);
  letter-spacing: -0.02em;
}
.stat-lbl {
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--colors-ink-muted-48);
  margin-top: 2px;
}
.hero-mock-board {
  flex-grow: 1;
  padding: var(--spacing-lg);
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: var(--spacing-lg);
}
.hero-mock-head {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.hero-mock-title {
  font-size: 12px;
  font-weight: 600;
  letter-spacing: -0.01em;
  color: var(--colors-ink);
}
.hero-mock-status {
  display: flex;
  align-items: center;
  gap: var(--spacing-xs);
  font-size: 10px;
  color: var(--colors-ink-muted-48);
}
.hero-mock-status::before {
  content: "";
  width: 7px;
  height: 7px;
  border-radius: var(--rounded-full);
  background-color: #30d158;
}
.hero-mock-heat {
  display: grid;
  grid-template-columns: repeat(30, 1fr);
  gap: var(--spacing-xxs);
}
.hero-mock-cell {
  aspect-ratio: 1;
  border-radius: var(--rounded-xs);
  background-color: var(--colors-divider-soft);
}
.hero-mock-cell.heat-1 {
  background-color: color-mix(in srgb, var(--colors-primary) 18%, transparent);
}
.hero-mock-cell.heat-2 {
  background-color: color-mix(in srgb, var(--colors-primary) 40%, transparent);
}
.hero-mock-cell.heat-3 {
  background-color: color-mix(in srgb, var(--colors-primary) 65%, transparent);
}
.hero-mock-cell.heat-4 {
  background-color: color-mix(in srgb, var(--colors-primary) 90%, transparent);
}
.hero-mock-heat-legend {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: var(--spacing-xxs);
  font-size: 10px;
  color: var(--colors-ink-muted-48);
}
.hero-mock-heat-legend .hero-mock-cell {
  width: 11px;
  height: 11px;
  aspect-ratio: auto;
}

/* About */
#about {
  min-height: auto;
}
.about-grid {
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: var(--spacing-xxl);
  align-items: start;
}
.about-p {
  color: var(--colors-body-muted);
  margin-bottom: var(--spacing-md);
  font-size: 17px;
}
.about-p strong {
  color: var(--colors-body-on-dark);
}
.highlights {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-md);
  margin-top: var(--spacing-xl);
}
.hi {
  background-color: var(--colors-surface-tile-3);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: var(--rounded-sm);
  padding: var(--spacing-md);
  transition: border-color 0.2s;
}
.hi:hover {
  border-color: var(--colors-primary-on-dark);
}
.hi-ico {
  font-size: 18px;
  margin-bottom: var(--spacing-xs);
}
.hi-lbl {
  font-size: 14px;
  color: var(--colors-body-muted);
  line-height: 1.43;
}
.hi-lbl strong {
  display: block;
  color: var(--colors-body-on-dark);
  font-size: 17px;
  margin-bottom: var(--spacing-xxs);
}

.sk-group {
  margin-bottom: var(--spacing-lg);
}
.sk-group-title {
  font-size: 12px;
  font-weight: 600;
  color: var(--colors-body-muted);
  letter-spacing: 0.05em;
  text-transform: uppercase;
  margin-bottom: var(--spacing-xs);
}
.sk-row {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}
.chip {
  font-size: 14px;
  color: var(--colors-body-muted);
  background-color: var(--colors-surface-tile-2);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: var(--rounded-pill);
  padding: 6px 14px;
  transition: border-color 0.2s, color 0.2s;
}
.chip:hover {
  border-color: var(--colors-primary-on-dark);
  color: var(--colors-body-on-dark);
}
.chip.primary {
  color: var(--colors-primary-on-dark);
  border-color: rgba(41, 151, 255, 0.3);
  background-color: rgba(41, 151, 255, 0.08);
}

/* Experience */
#experience {
  min-height: auto;
}
.exp-list {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-lg);
  max-width: 800px;
  margin: 0 auto;
}
.exp-card {
  background-color: var(--colors-canvas);
  border: 1px solid var(--colors-hairline);
  border-radius: var(--rounded-lg);
  overflow: hidden;
  transition: border-color 0.25s, transform 0.2s;
}
.exp-card:hover {
  border-color: var(--colors-primary);
  transform: translateY(-1px);
}
.exp-card.open {
  border-color: var(--colors-primary);
}
.exp-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--spacing-lg);
  cursor: pointer;
  gap: var(--spacing-md);
  user-select: none;
}
.exp-head-left {
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
}
.exp-ico {
  width: 44px;
  height: 44px;
  border-radius: var(--rounded-sm);
  background-color: var(--colors-canvas-parchment);
  border: 1px solid var(--colors-hairline);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  flex-shrink: 0;
}
.exp-co {
  font-size: 17px;
  font-weight: 600;
  color: var(--colors-ink);
  letter-spacing: -0.01em;
}
.exp-role-txt {
  font-size: 14px;
  color: var(--colors-ink-muted-80);
  margin-top: 2px;
}
.exp-meta {
  text-align: right;
  flex-shrink: 0;
}
.exp-period {
  font-size: 14px;
  font-weight: 600;
  color: var(--colors-primary);
  letter-spacing: -0.01em;
}
.exp-loc {
  font-size: 12px;
  color: var(--colors-ink-muted-48);
  margin-top: 2px;
}
.exp-arrow {
  font-size: 11px;
  color: var(--colors-ink-muted-48);
  transition: transform 0.25s, color 0.25s;
  flex-shrink: 0;
}
.exp-card.open .exp-arrow {
  transform: rotate(90deg);
  color: var(--colors-primary);
}
.exp-body {
  overflow: hidden;
  transition: max-height 0.4s ease;
}
.exp-body-inner {
  border-top: 1px solid var(--colors-divider-soft);
  padding: var(--spacing-lg);
  background-color: var(--colors-surface-pearl);
}
.exp-body ul {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
}
.exp-body li {
  font-size: 15px;
  color: var(--colors-ink-muted-80);
  padding-left: 20px;
  position: relative;
  line-height: 1.5;
}
.exp-body li::before {
  content: '•';
  position: absolute;
  left: 4px;
  color: var(--colors-primary);
  font-size: 16px;
  line-height: 1.3;
}

/* Projects */
#projects {
  min-height: auto;
}
.projects-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-lg);
}
.p-card {
  background-color: var(--colors-surface-tile-3);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: var(--rounded-lg);
  padding: var(--spacing-lg);
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
  transition: border-color 0.25s, transform 0.2s;
  position: relative;
  overflow: hidden;
}
.p-card:hover {
  border-color: var(--colors-primary-on-dark);
  transform: translateY(-2px);
}
.p-card.featured {
  grid-column: span 2;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-xl);
  align-items: start;
}
.p-card.wide {
  grid-column: span 2;
}
.p-card.wide .wide-inner {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-xl);
  align-items: start;
}
.p-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--spacing-xs);
}
.p-ico {
  width: 44px;
  height: 44px;
  border-radius: var(--rounded-sm);
  background-color: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  flex-shrink: 0;
}
.p-period {
  font-size: 12px;
  color: var(--colors-body-muted);
  opacity: 0.7;
}
.p-name {
  font-size: 21px;
  font-weight: 600;
  color: var(--colors-body-on-dark);
  letter-spacing: -0.01em;
}
.p-desc {
  font-size: 15px;
  color: var(--colors-body-muted);
  line-height: 1.5;
}
.p-points {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xs);
}
.p-points li {
  font-size: 14px;
  color: var(--colors-body-muted);
  padding-left: 16px;
  position: relative;
  line-height: 1.45;
}
.p-points li::before {
  content: '•';
  position: absolute;
  left: 0;
  color: var(--colors-primary-on-dark);
  font-size: 14px;
}
.p-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: auto;
}
.tag {
  display: inline-block;
  font-size: 12px;
  color: var(--colors-primary-on-dark);
  background-color: rgba(41, 151, 255, 0.08);
  border: 1px solid rgba(41, 151, 255, 0.15);
  border-radius: var(--rounded-pill);
  padding: 3px 10px;
}

/* Contact */
#contact {
  min-height: auto;
}
.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1.1fr;
  gap: var(--spacing-xxl);
  align-items: start;
}
.c-links {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
  margin-top: var(--spacing-xl);
}
.c-link {
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
  padding: 16px 20px;
  background-color: var(--colors-canvas-parchment);
  border: 1px solid var(--colors-hairline);
  border-radius: var(--rounded-lg);
  text-decoration: none;
  transition: border-color 0.2s, transform 0.15s;
}
.c-link:hover {
  border-color: var(--colors-primary);
  transform: translateX(4px);
}
.c-link-ico {
  width: 38px;
  height: 38px;
  border-radius: var(--rounded-sm);
  background-color: var(--colors-canvas);
  border: 1px solid var(--colors-hairline);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  flex-shrink: 0;
}
.c-link-lbl {
  font-size: 12px;
  font-weight: 600;
  color: var(--colors-ink-muted-48);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}
.c-link-val {
  font-size: 15px;
  color: var(--colors-ink);
  font-weight: 400;
  margin-top: 1px;
}
.c-card {
  background-color: var(--colors-canvas);
  border: 1px solid var(--colors-hairline);
  border-radius: var(--rounded-lg);
  padding: var(--spacing-xxl);
}
.c-card-title {
  font-size: 21px;
  font-weight: 600;
  color: var(--colors-ink);
  margin-bottom: var(--spacing-xxs);
}
.c-card-sub {
  font-size: 15px;
  color: var(--colors-ink-muted-80);
  line-height: 1.5;
  margin-bottom: var(--spacing-lg);
}
.form {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
}
.form-row-2 {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-md);
}
.form-field {
  display: flex;
  flex-direction: column;
  gap: 6px;
}
.form-label {
  font-size: 12px;
  font-weight: 600;
  color: var(--colors-ink-muted-80);
}
.form-input, .form-textarea {
  background-color: var(--colors-canvas-parchment);
  border: 1px solid var(--colors-hairline);
  border-radius: var(--rounded-pill);
  padding: 12px var(--spacing-lg);
  color: var(--colors-ink);
  font-family: inherit;
  font-size: 15px;
  outline: none;
  transition: border-color 0.2s;
  width: 100%;
}
.form-textarea {
  border-radius: var(--rounded-lg);
  min-height: 120px;
  resize: vertical;
}
.form-input:focus, .form-textarea:focus {
  border-color: var(--colors-primary);
}
.form-input.invalid, .form-textarea.invalid {
  border-color: #d12f2f;
}
.form-error {
  font-size: 12px;
  color: #d12f2f;
}
.form-input::placeholder, .form-textarea::placeholder {
  color: var(--colors-ink-muted-48);
}
.form-btn {
  background-color: var(--colors-primary);
  color: var(--colors-body-on-dark);
  border: none;
  border-radius: var(--rounded-pill);
  padding: 12px 28px;
  font-size: 15px;
  font-weight: 400;
  cursor: pointer;
  transition: transform 0.15s, background-color 0.3s;
  align-self: flex-start;
}
.form-btn:active {
  transform: scale(0.95);
}
.form-btn.sent {
  background-color: #30d158; /* Apple green */
}
.form-btn:disabled {
  cursor: default;
}
.form-spinner {
  display: inline-block;
  width: 14px;
  height: 14px;
  margin-right: 8px;
  vertical-align: -2px;
  border: 2px solid var(--colors-body-on-dark);
  border-top-color: transparent;
  border-radius: 50%;
  animation: form-spin 0.7s linear infinite;
}
@keyframes form-spin {
  to { transform: rotate(360deg); }
}
.form-status {
  font-size: 14px;
  line-height: 1.5;
  margin: 0;
}
.form-status-success {
  color: #1a8a3a;
}
.form-status-error {
  color: #d12f2f;
}

/* Footer styling matching Apple dense stack */
.footer {
  background-color: var(--colors-canvas-parchment);
  color: var(--colors-ink-muted-80);
  border-top: 1px solid var(--colors-divider-soft);
  padding: var(--spacing-xxl) 0;
}
.footer-directory {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--spacing-xl);
  margin-bottom: var(--spacing-xxl);
}
.footer-directory-col {
  display: flex;
  flex-direction: column;
}
.footer-directory-col-title {
  font-size: 12px;
  font-weight: 600;
  color: var(--colors-ink);
  margin-bottom: var(--spacing-sm);
}
.footer-directory-col-links {
  list-style: none;
  display: flex;
  flex-direction: column;
}
.footer-directory-col-links a {
  font-size: 12px;
  font-weight: 400;
  color: var(--colors-ink-muted-80);
  text-decoration: none;
  line-height: 2.0; /* relaxed leading for scannability */
  cursor: pointer;
}
.footer-directory-col-links a:hover {
  color: var(--colors-primary);
}
.footer-bottom {
  border-top: 1px solid var(--colors-hairline);
  padding-top: var(--spacing-lg);
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
}
.footer-legal {
  font-size: 12px;
  color: var(--colors-ink-muted-48);
  line-height: 1.5;
}
.footer-legal-links {
  display: flex;
  gap: 16px;
  list-style: none;
  flex-wrap: wrap;
}
.footer-legal-links a {
  color: var(--colors-ink-muted-48);
  text-decoration: none;
}
.footer-legal-links a:hover {
  text-decoration: underline;
}

/* Animations */
.reveal {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.6s cubic-bezier(0.25, 1, 0.5, 1), transform 0.6s cubic-bezier(0.25, 1, 0.5, 1);
}
.reveal.visible {
  opacity: 1;
  transform: translateY(0);
}
.reveal-d1 { transition-delay: .1s; }
.reveal-d2 { transition-delay: .2s; }
.reveal-d3 { transition-delay: .3s; }

/* Responsive adjustments */
@media (max-width: 1024px) {
  .hero-display-title {
    font-size: 48px;
  }
}

@media (max-width: 834px) {
  section {
    padding: var(--spacing-xxl) 0;
  }
  .about-grid {
    grid-template-columns: 1fr;
    gap: var(--spacing-xl);
  }
  .projects-grid {
    grid-template-columns: 1fr;
  }
  .p-card.featured, .p-card.wide .wide-inner {
    grid-template-columns: 1fr;
    gap: var(--spacing-md);
  }
  .contact-grid {
    grid-template-columns: 1fr;
    gap: var(--spacing-xl);
  }
  .footer-directory {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 640px) {
  body {
    font-size: 15px;
  }
  .hero-display-title {
    font-size: 34px;
    letter-spacing: -0.02em;
  }
  .tile-headline {
    font-size: 28px;
  }
  .lead-subcopy {
    font-size: 21px;
  }
  .hero-stats {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: var(--spacing-lg);
    justify-items: start;
  }
  .footer-directory {
    grid-template-columns: 1fr;
  }
  .form-row-2 {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 419px) {
  .hero-display-title {
    font-size: 28px;
  }
  .tile-actions {
    flex-direction: column;
    width: 100%;
  }
  .tile-actions .btn-primary, .tile-actions .btn-secondary {
    width: 100%;
  }
}
`;

export default css;
