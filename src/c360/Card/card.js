/**
 * This Class is built on top of Elix's "ReactiveElement"
 * base element. Think of this like React's Component class.
 *
 * Documentation on ReactiveElement can be found here:
 * https://component.kitchen/elix/ReactiveElement
 *
 * Also check out documentation on ReactiveMixin, to better
 * understand how component state is managed:
 * https://component.kitchen/elix/ReactiveMixin
 * (you can also see `src/sds/Button/button.js` for a state management example)
 */

import ReactiveElement from 'elix/src/core/ReactiveElement'
import { template } from 'elix/src/base/internal'
import { templateFrom } from 'elix/src/core/htmlLiterals.js'

import stylesheet from './card.css'

class C360Card extends ReactiveElement {
  get [template]() {
    return templateFrom.html`
      <style>
        ${stylesheet}
      </style>

      <article class="c360-card">
        <c360-headline class="c360-card__headline" level="h2" size="small">Card headline</c360-headline>
        <img class="c360-card__image" src="https://via.placeholder.com/640x420" alt="placeholder image" />
        <p class="c360-card__body-copy">Call us at 1-800-667-6389, click on the chat in the lower right, or let us call you back.</p>
        <c360-button class="c360-card__button" variant="brand">Request a call</c360-button>
      </article>
    `
  }
}

export default C360Card
