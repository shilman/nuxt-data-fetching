import type { Meta, StoryObj } from '@nuxtjs/storybook';
import { http, HttpResponse } from 'msw';

import TheQuote from './TheQuote.vue';

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction

const meta = {
  title: 'Example/TheQuote',
  component: TheQuote,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/vue/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    msw: {
      handlers: [
        http.get('https://dummyjson.com/quotes/1', () => {
          return HttpResponse.json({
            id: 1,
            text: 'This is an MSW quote.',
          });
        }),
      ],
    },
  },
  beforeEach: (context) => {
    const original = globalThis.useFetch;
    globalThis.useFetch = async () => {
      console.log('Mocking useFetch for TheQuote story');
      return {
        data: {
          id: context.args.id,
          text: 'This is a sample quote.',
        },
      };
    };
    return () => {
      globalThis.useFetch = original;
    };
  },
} satisfies Meta<typeof TheQuote>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    id: 1,
  },
};
