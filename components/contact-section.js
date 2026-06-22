/**
 * <contact-section> — Contact info and enquiry form
 */
import { addComponentCss } from '/js/shared.js'

class ContactSection extends HTMLElement {
  connectedCallback() {
    addComponentCss('contact-section')

    const links = [
      { icon: '✉️', label: 'Email',    value: 'Mikeal.Day@live.com',
        href: 'mailto:Mikeal.Day@live.com' },
      { icon: '💼', label: 'LinkedIn', value: 'linkedin.com/in/mikeal-day',
        href: 'https://linkedin.com/in/mikeal-day', external: true },
      { icon: '📞', label: 'Phone',    value: '(541) 571-8861',
        href: 'tel:5415718861' },
    ];

    this.innerHTML = `
      <section id="contact" class="reveal">
        <div class="section-inner">
          <div class="section-header reveal">
            <div class="section-eyebrow">Contact</div>
            <h2 class="section-title">Let's Build Something<br><em>Together</em></h2>
          </div>

          <div class="contact-grid">
            <div class="contact-text reveal">
              <div class="availability-badge">Open to Opportunities</div>
              <p>
                Whether you're looking for a fractional engineering leader, an executive
                to scale your engineering org, or just want to talk shop — I'd love to
                connect.
              </p>
              <p style="font-size:0.92rem;">
                I work best with organizations navigating growth transitions, platform
                modernization, and team transformation. If that sounds like you, let's talk.
              </p>
              <div class="contact-links">
                ${links.map(l => this._link(l)).join('')}
              </div>
            </div>

            <div class="contact-form-wrapper reveal">
              <div class="form-group">
                <label class="form-label" for="contact-name">Your Name</label>
                <input id="contact-name" type="text" class="form-input"
                       placeholder="Jane Smith" autocomplete="name" />
              </div>
              <div class="form-group">
                <label class="form-label" for="contact-email">Email</label>
                <input id="contact-email" type="email" class="form-input"
                       placeholder="jane@company.com" autocomplete="email" />
              </div>
              <div class="form-group">
                <label class="form-label" for="contact-company">Company / Context</label>
                <input id="contact-company" type="text" class="form-input"
                       placeholder="Acme Corp — Series B SaaS" />
              </div>
              <div class="form-group">
                <label class="form-label" for="contact-message">Message</label>
                <textarea id="contact-message" class="form-textarea"
                  placeholder="Tell me about what you're building and where you need support..."></textarea>
              </div>
              <button type="button" class="form-submit" id="contact-submit">Send Message</button>
            </div>
          </div>
        </div>
      </section>
    `;

    this.querySelector('#contact-submit')
      .addEventListener('click', (event) => this._handleSubmit(event));

    this._inputs = {
      name: this.querySelector('#contact-name'),
      email: this.querySelector('#contact-email'),
      message: this.querySelector('#contact-message'),
    };
  }

  _link({ icon, label, value, href, external }) {
    const target = external ? ' target="_blank" rel="noopener noreferrer"' : '';
    return `
      <a href="${href}" class="contact-link"${target}>
        <span class="contact-link-icon" aria-hidden="true">${icon}</span>
        <div>
          <div class="contact-link-label">${label}</div>
          ${value}
        </div>
      </a>
    `;
  }

  _buildMailto() {
    const name = this.querySelector('#contact-name')?.value.trim() || '';
    const email = this.querySelector('#contact-email')?.value.trim() || '';
    const company = this.querySelector('#contact-company')?.value.trim() || '';
    const message = this.querySelector('#contact-message')?.value.trim() || '';

    const subject = `Contact request from ${name || 'Website Visitor'}`;
    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Company / Context: ${company}`,
      '',
      message,
    ].join('\n');

    return `mailto:Mikeal.Day@live.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  _handleSubmit(event) {
    event.preventDefault();
    event.stopPropagation();

    const fields = [
      { el: this._inputs.name, name: 'Name' },
      { el: this._inputs.email, name: 'Email' },
      { el: this._inputs.message, name: 'Message' },
    ];

    const invalid = fields.filter(({ el }) => !el?.value.trim());
    fields.forEach(({ el }) => el?.classList.remove('invalid'));

    if (invalid.length) {
      invalid.forEach(({ el }) => el?.classList.add('invalid'));
      invalid[0].el?.focus();
      return;
    }

    const mailto = this._buildMailto();
    window.location.href = mailto;
  }
}

customElements.define('contact-section', ContactSection);
