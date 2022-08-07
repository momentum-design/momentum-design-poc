import { html, css, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('md-test')
class Provider extends LitElement {
  static override styles = css`p { color: blue }`;

  @property()
  name = 'Test';

  public override render() {
    return html`<p>Hello, ${this.name}!</p>`;
  }
}

customElements.define('md-test', Provider);

export default Provider;
