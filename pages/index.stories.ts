import type { Meta, StoryObj } from "@nuxtjs/storybook";
import { http, HttpResponse } from "msw";

import Index from "./index.vue";

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction

const meta = {
  title: "Example/Index",
  component: Index,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/vue/writing-docs/autodocs
  tags: ["autodocs"],
  parameters: {
    msw: {
      handlers: [
        http.get("/api/hello", () => {
          return HttpResponse.json({
            firstName: "Neil",
            lastName: "Maverick",
          });
        }),
      ],
    },
  },
} satisfies Meta<typeof Index>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    id: 1,
  },
};
