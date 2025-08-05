import type { Meta, StoryObj } from "@nuxtjs/storybook";

import TheQuote from "./TheQuote.vue";

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction

const meta = {
  title: "Example/TheQuote",
  component: TheQuote,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/vue/writing-docs/autodocs
  tags: ["autodocs"],
} satisfies Meta<typeof TheQuote>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    id: 1,
  },
};
