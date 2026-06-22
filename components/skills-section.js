/**
 * <skills-section> — Skills section component
 */
class SkillsSection extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <section id="skills" class="reveal">
        <h1>Skills</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus massa sem,
          ornare ac diam non, pharetra sollicitudin neque. Nullam a nisi quis nibh commodo
          convallis. Sed mollis pretium lorem, ac faucibus nisi pellentesque at.
        </p>
        <p>
          Etiam quis dolor est. Donec et diam at libero sagittis finibus. Nullam ut orci
          elementum, gravida turpis non, pharetra urna. Vivamus in tortor justo.
        </p>
      </section>
    `;
  }
}

customElements.define('skills-section', SkillsSection);
