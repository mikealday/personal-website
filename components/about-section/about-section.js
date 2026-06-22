/**
 * <about-section> — About section component
 */
import { addComponentCss } from '/js/shared.js'

class AboutSection extends HTMLElement {
  connectedCallback() {
    addComponentCss('about-section')

    this.innerHTML = `
      <section id="about">
        <div class="section-inner">

          <div class="section-header reveal">
            <div class="section-eyebrow">About</div>
            <h2 class="section-title">The Leader Behind<br>the <em>Engineering</em></h2>
          </div>

          <div class="about-grid">

            <div class="about-text reveal">
              <p>
                I'm an executive engineering leader with <strong>20+ years in software
                development</strong> and over a decade leading engineering organizations —
                from scrappy Series A startups to multinational enterprises operating
                across 45 countries.
              </p>
              <p>
                My career has spanned FinTech, SaaS, AI-driven startups, and regulated
                enterprise environments. I've built platforms managing
                <strong>$1.4 trillion in AUM</strong>, scaled teams 50% year-over-year,
                and taken an AI-first startup from pre-seed to profitability in six months.
              </p>
              <p>
                But the work I'm most proud of isn't measured in dollars or uptime metrics.
                It's the engineers who leveled up, the teams that found their rhythm, the
                organizations that went from paralyzed to shipping. I believe
                <strong>great engineering culture is the product</strong>.
              </p>
              <p>
                I hold a <strong>BS in Computer Science and a BS in Software Engineering</strong>
                from Montana Technological University — and I still get my hands dirty in
                architecture reviews, code walkthroughs, and technical strategy.
              </p>
            </div>

            <div class="about-pillars reveal">
              ${this._pillars([
                { icon: '🧭', title: 'Executive Clarity',
                  body: 'I translate company strategy into engineering roadmaps that teams can execute with confidence — eliminating ambiguity that causes freeze.' },
                { icon: '⚙️', title: 'Still Technical',
                  body: 'Architecture reviews, platform modernization, AI integration — I stay current because it makes me a better leader and a better partner to my engineers.' },
                { icon: '📈', title: 'Data-Driven Development',
                  body: 'Decisions anchored in KPIs, OKRs, and measurable outcomes — not instinct alone. I build the dashboards that keep teams accountable.' },
                { icon: '🌱', title: 'People Grower',
                  body: "My greatest pride is the careers I've helped accelerate. Mentorship, sponsorship, and building learning cultures are non-negotiables for me." },
              ])}
            </div>

          </div>
        </div>
      </section>
    `;
  }

  _pillars(items) {
    return items.map(({ icon, title, body }) => `
      <div class="pillar">
        <div class="pillar-icon" aria-hidden="true">${icon}</div>
        <div class="pillar-text">
          <h4>${title}</h4>
          <p>${body}</p>
        </div>
      </div>
    `).join('');
  }
}

customElements.define('about-section', AboutSection);
