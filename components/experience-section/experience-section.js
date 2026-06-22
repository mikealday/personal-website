/**
 * <experience-section> — Career timeline
 */
import { addComponentCss } from '/js/shared.js'

class ExperienceSection extends HTMLElement {
  connectedCallback() {
    addComponentCss('experience-section')

    const roles = [
      {
        company: 'Nu Day Resources (NDR) — Founder &amp; Executive Consultant',
        period: '09/2023 – Present',
        role: 'Founder, Executive Consultant &amp; Fractional Leader',
        summary: `Providing executive-level engineering leadership to organizations at critical
          inflection points — from enterprise modernization at Foundever (150K employees,
          45 countries) to AI startup growth at Revere, and SaaS platform engineering
          at Impact.com.`,
        wins: [
          '↓50% DevOps deficit in 6 mo', '$1.8B new addressable market',
          '↑30% internal NPS', '$300K vendor savings',
          'Pre-seed → profitable in 6 mo', '↓85% platform incidents',
          '10x frontend productivity', '$50K/yr automation savings',
        ],
      },
      {
        company: 'Crelate',
        period: '03/2021 – 08/2023',
        role: 'Director of Engineering',
        summary: `Led and scaled the engineering department through Series A → B → C growth.
          Grew three agile engineering teams 50% YoY using onshore, nearshore, and offshore
          resources. Spearheaded a new enterprise back-office platform that expanded TAM
          and significantly increased ACV.`,
        wins: [
          '$16M revenue — year one', '1,000+ bugs → 25 ZBB',
          '↓90% post-release defects', 'API-first architecture',
          'AI/LLM resume parsing', '10 months saved (build vs buy)',
        ],
      },
      {
        company: 'Tamarac (FinTech — $1.4T AUM)',
        period: '02/2018 – 01/2021',
        role: 'Associate Vice President',
        summary: `Led cross-functional teams delivering large-scale data processing and
          integration platforms for Tier-1 financial institutions. Managed identity
          overhauls, platform modernization to AWS microservices, and revenue recovery
          initiatives.`,
        wins: [
          '$3M at-risk revenue recovered', '↑28% pipeline throughput',
          '↑17% team productivity', '0 production defects',
          '$144K/yr ops savings', 'AWS microservices migration',
        ],
      },
    ];

    const earlierRoles = [
      'Kitsap Credit Union — Sr. Software Engineer (2013–2018)',
      'AMSEC / US Navy — Team Lead (2010–2013)',
      'University of Puget Sound — Data Services (2009–2010)',
      'Applied Technical Systems — Programmer II (2008–2009)',
      'MSE-Tetragenics — Software Engineer (2006–2008)',
      'UM-ESD — Web Developer (2004–2008)',
    ];

    this.innerHTML = `
      <section id="experience">
        <div class="section-inner">

          <div class="section-header reveal">
            <div class="section-eyebrow">Experience</div>
            <h2 class="section-title">Where I've <em>Led</em></h2>
            <p class="section-subtitle">
              A track record of engineering transformation across industries,
              company stages, and scale.
            </p>
          </div>

          <div class="timeline">
            ${roles.map(r => this._timelineItem(r)).join('')}

            <div class="earlier-roles reveal">
              <h4>Earlier Career</h4>
              <div class="earlier-list">
                ${earlierRoles.map(r => `<span class="earlier-tag">${r}</span>`).join('')}
              </div>
            </div>
          </div>

        </div>
      </section>
    `;
  }

  _timelineItem({ company, period, role, summary, wins }) {
    const chips = wins.map(w => `<span class="win-chip">${w}</span>`).join('');
    return `
      <div class="timeline-item reveal">
        <div class="timeline-dot" aria-hidden="true"></div>
        <div class="timeline-card">
          <div class="timeline-meta">
            <span class="timeline-company">${company}</span>
            <span class="timeline-period">${period}</span>
          </div>
          <h3 class="timeline-role">${role}</h3>
          <p class="timeline-summary">${summary}</p>
          <div class="timeline-wins">${chips}</div>
        </div>
      </div>
    `;
  }
}

customElements.define('experience-section', ExperienceSection);
