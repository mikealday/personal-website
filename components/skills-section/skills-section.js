/**
 * <skills-section> — Skills and expertise grid
 */
import { addComponentCss } from '/js/shared.js'

class SkillsSection extends HTMLElement {
  connectedCallback() {
    addComponentCss('skills-section')

    const cards = [
      {
        icon: '🏗️', title: 'Engineering Leadership',
        tags: ['Org Design', 'SDLC Modernization', 'OKR / KPI Frameworks',
               'Delivery Predictability', 'Multi-team Coordination',
               'Offshore / Nearshore', 'Engineering Culture'],
      },
      {
        icon: '☁️', title: 'Platform &amp; Architecture',
        tags: ['Microservices', 'Cloud-Native (AWS / Azure)', 'API-First Design',
               'Monolith Decomposition', 'Identity &amp; Auth',
               'Multi-region Infrastructure', 'Data Pipelines'],
      },
      {
        icon: '🤖', title: 'AI &amp; Emerging Tech',
        tags: ['LLM Integration', 'AI-assisted Workflows', 'AI-powered Decisioning',
               'Pragmatic AI Adoption', 'AI Startup Strategy'],
      },
      {
        icon: '🔒', title: 'Security &amp; Compliance',
        tags: ['PCI Certification', 'Penetration Testing', 'Security Remediation',
               'Incident Response', 'Audit Defensibility', 'Zero Trust Auth'],
      },
      {
        icon: '📊', title: 'Data &amp; Analytics',
        tags: ['Data-Driven Development', 'KPI Dashboards', 'Conversion Optimization',
               'Engineering Metrics', 'Business Intelligence'],
      },
      {
        icon: '🌱', title: 'People &amp; Growth',
        tags: ['Mentorship', 'Career Development', 'Technical Recruiting',
               'Performance Management', 'Guild / CoP Leadership', 'Executive Partnering'],
      },
    ];

    this.innerHTML = `
      <section id="skills">
        <div class="section-inner">

          <div class="section-header reveal">
            <div class="section-eyebrow">Skills &amp; Expertise</div>
            <h2 class="section-title">
              Broad Enough to <em>Lead</em>,<br>Deep Enough to <em>Build</em>
            </h2>
          </div>

          <div class="skills-grid">
            ${cards.map(c => this._card(c)).join('')}
          </div>

        </div>
      </section>
    `;
  }

  _card({ icon, title, tags }) {
    const tagHTML = tags
      .map(t => `<span class="skill-tag">${t}</span>`)
      .join('');
    return `
      <div class="skill-card reveal">
        <div class="skill-card-icon" aria-hidden="true">${icon}</div>
        <h3>${title}</h3>
        <div class="skill-tags">${tagHTML}</div>
      </div>
    `;
  }
}

customElements.define('skills-section', SkillsSection);
