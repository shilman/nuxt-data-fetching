import type { Meta, StoryObj } from "@nuxtjs/storybook";

import External from "./external.vue";

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction

const meta = {
  title: "Example/External",
  component: External,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/vue/writing-docs/autodocs
  tags: ["autodocs"],
} satisfies Meta<typeof External>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    id: 1,
  },
};
