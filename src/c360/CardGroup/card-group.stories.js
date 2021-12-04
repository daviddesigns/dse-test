import { fragmentFrom } from 'elix/src/core/htmlLiterals'
import docs from './docs.mdx'
import { withKnobs, text } from "@storybook/addon-knobs";

export default {
  title: 'C360 Components/Card Group',
  parameters: {
    docs: {
      page: docs
    }
  },
  decorators: [withKnobs]
}

export const RFC = () => {
  return fragmentFrom.html`
    <h1>Card Group</h1>
    <p>
      You need to build this Card Group component from the specs
      outlined in the project's README file. Add one or more
      additional "Stories" (this function is a story) that
      showcase your component, and use Storybook's addons, such as
      the responsive viewport, or the AXE accessibility validator,
      to ensure that your component code is bulletproof.
    </p>
    <p>
      We have scaffolded out two components to assist with your
      development - this one, which is intended to contain the entire
      component structure, as well as a 'Card' component to represent
      an individual card.
    </p>
  `
}

export const Base = () => {
  return fragmentFrom.html`
    <c360-card-group 
      headline-text='${text("headline-text", "Want to learn more about Salesforce?")}' 
      headline-level="${text("headline-level", "h1")}" 
      headline-size="${text("headline-size", "x-large")}"
    >
      <c360-card></c360-card>
      <c360-card></c360-card>
      <c360-card></c360-card>
    </c360-card-group>
  `
}

export const Contained = () => {
  return fragmentFrom.html`
    <div style="display: block; margin: auto; max-width: 625px;">
      <c360-card-group 
        headline-text='${text("headline-text", "Want to learn more about Salesforce?")}' 
        headline-level="${text("headline-level", "h1")}" 
        headline-size="${text("headline-size", "x-large")}"
      >
        <c360-card></c360-card>
        <c360-card></c360-card>
        <c360-card></c360-card>
      </c360-card-group>
    </div>
  `
}

export const ContainedTwoCards = () => {
  return fragmentFrom.html`
    <div style="display: block; margin: auto; max-width: 625px;">
      <c360-card-group 
        headline-text='${text("headline-text", "Want to learn more about Salesforce?")}' 
        headline-level="${text("headline-level", "h1")}" 
        headline-size="${text("headline-size", "x-large")}"
      >
        <c360-card></c360-card>
        <c360-card></c360-card>
      </c360-card-group>
    </div>
  `
}
 