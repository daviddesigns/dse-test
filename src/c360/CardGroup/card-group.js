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
import { render, setState, state, template } from 'elix/src/base/internal'
import { templateFrom } from 'elix/src/core/htmlLiterals.js'

import cardGroupStylesheet from './card-group.css'

class C360CardGroup extends ReactiveElement {

  // Headline Text Getter/Setter
  get headlineText() {
    return this[state].headlineText
  }

  set headlineText(headlineText) {
    this[setState]({
      headlineText
    })
  }

  // Headline Level Getter / Setter
  get headlineLevel() {
    return this[state].headlineLevel
  }

  set headlineLevel(headlineLevel) {
    this[setState]({
      headlineLevel
    })
  }

  // Headline Size Getter / Setter
  get headlineSize() {
    return this[state].headlineSize
  }

  set headlineSize(headlineSize) {
    this[setState]({
      headlineSize
    })
  }


  get [template]() {
    const { headlineText, headlineLevel, headlineSize } = this[state]

    return templateFrom.html`
      <style>
        ${cardGroupStylesheet}
      </style>
      <section class="c360-card-group">
        ${ headlineText ? 
          `<c360-headline class="c360-card-group__headline" ${ headlineLevel ? `level="${headlineLevel}"` : `level="p"` } ${ headlineSize ? `size="${headlineSize}"` : `size="x-large"` }>${ headlineText }</c360-headline>`
        : ''}

        <div class="c360-card-group__cards">
          <slot />
        </div>
      </section>
    `
  }

  // Change detector / dispatcher
  [render](changed) {
    super[render](changed)

    // Detects for changes to headline text state
    if (changed.headlineText) {
      const { headlineText } = this[state]

      if (headlineText) {
        this.setAttribute('headline-text', headlineText)
      } else {
        this.removeAttribute('headline-text')
      }
    }
  }
}

export default C360CardGroup
