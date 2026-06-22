import { addComponentCss } from '/js/shared.js'

/**
 * <hero-section> — Full-viewport hero with stats card (from backup)
 */
class HeroSection extends HTMLElement {
  connectedCallback() {
    addComponentCss('hero-section')

    this.innerHTML = `
      <section id="hero">
        <div class="hero-glow"></div>

        <div class="hero-content">
          <div class="hero-eyebrow">Engineering Leadership</div>
          <h1 class="hero-name">Mikeal<br><em>Day</em></h1>
          <p class="hero-title">VP / Director of Engineering &nbsp;&middot;&nbsp; Seattle, WA</p>
          <p class="hero-tagline">
            20+ years building software. 10+ years building the teams
            that build it. I turn engineering freezes into forward momentum —
            through clarity, trust, and relentless focus on outcomes.
          </p>
          <div class="hero-cta">
            <a href="#experience" class="btn-primary">View My Work</a>
            <a href="#contact" class="btn-ghost">Get in Touch</a>
          </div>
        </div>

        <div class="hero-right">
          <div class="stats-card">
            <div class="stats-grid">
              <div class="stat-item">
                <div class="stat-num">20<sup>+</sup></div>
                <div class="stat-label">Years in<br>Software</div>
              </div>
              <div class="stat-item">
                <div class="stat-num">$1.4<sup>T</sup></div>
                <div class="stat-label">AUM on<br>platforms overseen</div>
              </div>
              <div class="stat-item">
                <div class="stat-num">4.5<sup>M</sup></div>
                <div class="stat-label">Active users<br>supported</div>
              </div>
              <div class="stat-item">
                <div class="stat-num">50<sup>%</sup></div>
                <div class="stat-label">Org growth<br>YoY achieved</div>
              </div>
            </div>
            <div class="hero-location">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none"
                   stroke="currentColor" stroke-width="2" aria-hidden="true">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
              Seattle, WA &nbsp;&middot;&nbsp; Open to Remote &amp; Hybrid
            </div>
          </div>
        </div>
      </section>
    `;
  }
}

customElements.define('hero-section', HeroSection);
