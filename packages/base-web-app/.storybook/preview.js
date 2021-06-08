import { withVuetify } from '@socheatsok78/storybook-addon-vuetify/dist/decorators'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
};

export const decorators = [
  withVuetify
]