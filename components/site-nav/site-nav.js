import { addComponentCss } from '/js/shared.js'

class SiteNav extends HTMLElement {
  connectedCallback() {
    addComponentCss('site-nav')
    this.innerHTML = `
      <nav>
        <a href="#hero" class="nav-logo" aria-label="Mikeal Day — home">MD</a>

        <ul class="nav-links" role="list">
          <li><a href="#about">About</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#highlights">Impact</a></li>
          <li><a href="#philosophy">Philosophy</a></li>
        </ul>

        <a href="#contact" class="nav-cta-desktop">Let's Talk</a>

        <button class="nav-hamburger" aria-label="Toggle navigation" aria-expanded="false">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>

      <div class="nav-mobile-overlay" aria-hidden="true">
        <ul role="list">
          <li><a href="#about">About</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#highlights">Impact</a></li>
          <li><a href="#philosophy">Philosophy</a></li>
          <li class="nav-overlay-cta">
            <a href="#contact">Let's Talk</a>
          </li>
        </ul>
      </div>
    `;

    this._nav      = this.querySelector('nav');
    this._hamburger = this.querySelector('.nav-hamburger');
    this._overlay  = this.querySelector('.nav-mobile-overlay');
    this._menuOpen = false;

    this._onScroll    = this._onScroll.bind(this);
    this._onToggle    = this._onToggle.bind(this);
    this._onOverlayClick = this._onOverlayClick.bind(this);
    this._onOutside   = this._onOutside.bind(this);

    window.addEventListener('scroll', this._onScroll, { passive: true });
    this._hamburger.addEventListener('click', this._onToggle);
    this._overlay.addEventListener('click', this._onOverlayClick);
    document.addEventListener('click', this._onOutside);
  }

  disconnectedCallback() {
    window.removeEventListener('scroll', this._onScroll);
    document.removeEventListener('click', this._onOutside);
    document.body.style.overflow = '';
  }

  _onScroll() {
    if (this._menuOpen) return;
    const scrolled  = window.scrollY > 60;
    const isDesktop = window.innerWidth > 768;
    const horiz     = isDesktop ? '5rem' : '1.25rem';
    this._nav.style.padding = scrolled
      ? `0.9rem ${horiz}`
      : `1.4rem ${horiz}`;
  }

  _onToggle() {
    this._menuOpen ? this._closeMenu() : this._openMenu();
  }

  _openMenu() {
    this._menuOpen = true;
    this._nav.dataset.menuOpen = 'true';
    this._overlay.classList.add('is-open');
    this._overlay.setAttribute('aria-hidden', 'false');
    this._hamburger.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }

  _closeMenu() {
    this._menuOpen = false;
    delete this._nav.dataset.menuOpen;
    this._overlay.classList.remove('is-open');
    this._overlay.setAttribute('aria-hidden', 'true');
    this._hamburger.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  _onOverlayClick(e) {
    if (e.target.tagName === 'A') this._closeMenu();
  }

  _onOutside(e) {
    if (this._menuOpen && !this.contains(e.target)) this._closeMenu();
  }
}

customElements.define('site-nav', SiteNav);