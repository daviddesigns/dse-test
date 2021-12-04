import { fragmentFrom } from 'elix/src/core/htmlLiterals'
import docs from './docs.mdx'

export default {
  title: 'C360 Components/Card',
  parameters: {
    docs: {
      page: docs
    }
  }
}

export const RFC = () => {
  return fragmentFrom.html`
    <h1>Card</h1>
    <p>
      You need to build this Card component from the specs
      outlined in the project's README file. Add one or more
      additional "Stories" (this function is a story) that
      showcase your component, and use Storybook's addons, such as
      the responsive viewport, or the AXE accessibility validator,
      to ensure that your component code is bulletproof.
    </p>
    <p>
      We have scaffolded out two components to assist with your
      development - this one, which is intended to contain the contents
      within the shaded 'card', as well as a 'CardGroup' component,
      that containts the composed component's structure.
    </p>
  `
}

export const Base = () => {
  return fragmentFrom.html`
    <c360-card />
  `
}
