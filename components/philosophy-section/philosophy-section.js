/**
 * <philosophy-section> — Leadership philosophy with quote and principles
 */
import { addComponentCss } from '/js/shared.js'

class PhilosophySection extends HTMLElement {
  connectedCallback() {
    addComponentCss('philosophy-section')

    const principles = [
      {
        num: '01', title: 'Strategy Must Become Code',
        body: "Company vision means nothing if it doesn't translate into clear engineering priorities. I bridge the gap between boardroom intent and daily stand ups.",
      },
      {
        num: '02', title: 'Data Before Opinions',
        body: 'Every major decision I make is anchored in data — delivery metrics, incident trends, customer signals. I build the dashboards so the data can speak.',
      },
      {
        num: '03', title: 'Quality Is a Culture, Not a Gate',
        body: "The teams I've led have achieved 90%+ defect reductions not through process enforcement, but by making engineers care about quality as craft.",
      },
      {
        num: '04', title: 'Adopt AI Pragmatically',
        body: "I've integrated AI/LLM tools where they genuinely accelerate outcomes — not for the narrative. Skepticism and curiosity in equal measure.",
      },
      {
        num: '05', title: 'Grow Your Replacement',
        body: "A team that can't operate without me isn't a success — it's a dependency. I build leaders who appreciate my guidance, but don't need me to operate, and that's how organizations scale.",
      },
    ];

    this.innerHTML = `
      <section id="philosophy">
        <div class="section-inner">

          <div class="section-header reveal">
            <div class="section-eyebrow">Leadership Philosophy</div>
            <h2 class="section-title">How I <em>Think</em> About Engineering</h2>
          </div>

          <div class="philosophy-grid">

            <div class="philosophy-quote-block reveal">
              <blockquote class="big-quote">
                The best engineering cultures don't happen by accident. They're built
                intentionally — one decision, one conversation, one learning moment
                at a time.
              </blockquote>
              <p class="philosophy-prose">
                I've seen teams frozen by unclear strategy, stunted by fear of failure,
                and exhausted by process debt. I've also seen those same teams transform
                into shipping machines once leadership removed the friction. That's the
                work I'm here to do.
              </p>
              <p class="philosophy-prose">
                Mentorship isn't a checkbox for me — it's a multiplier. When engineers
                grow, organizations scale. I invest deliberately in people, and they
                invest in the mission.
              </p>
            </div>

            <div class="principles reveal">
              ${principles.map(p => this._principle(p)).join('')}
            </div>

          </div>
        </div>
      </section>
    `;
  }

  _principle({ num, title, body }) {
    return `
      <div class="principle reveal">
        <div class="principle-num" aria-hidden="true">${num}</div>
        <div class="principle-body">
          <h4>${title}</h4>
          <p>${body}</p>
        </div>
      </div>
    `;
  }
}

customElements.define('philosophy-section', PhilosophySection);
