import type { Preview } from "@storybook-vue/nuxt";

import { initialize, mswLoader } from "msw-storybook-addon";
initialize();

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  loaders: [mswLoader],
};

export default preview;
