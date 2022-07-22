import {html, css, LitElement} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('md-provider')
class Provider extends LitElement {
  static override styles = css`p { color: blue }`;

  @property()
  name = 'Somebody';

  public override render() {
    return html`<p>Hello, ${this.name}!</p>`;
  }

  public static get CONSTANTS() {
    return {
      value: 'value'
    };
  }
}

export default Provider;
