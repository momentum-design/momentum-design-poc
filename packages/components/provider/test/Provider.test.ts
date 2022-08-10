import {Provider} from '../src/index.js';

import {fixture, assert} from '@open-wc/testing';
import {html} from 'lit/static-html.js';

suite('md-provider', () => {
  test('is defined', () => {
    const el = document.createElement('md-provider');
    assert.instanceOf(el, Provider);
  });

  test('renders with default values', async () => {
    const el = await fixture(html`<md-provider></md-provider>`);
    assert.shadowDom.equal(
      el,
      `
      <p>
        Hello, Somebody!
      </p>
    `
    );
  });
});
