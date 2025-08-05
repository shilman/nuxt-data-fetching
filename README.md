# Nuxt data fetching example with Storybook

Investigation of https://github.com/nuxt-modules/storybook/issues/889

## What I did

1. Copied the [Nuxt data fetching example](https://github.com/nuxt/examples/tree/main/examples/features/data-fetching).
2. Installed Storybook using `pnpm create storybook`.
3. Added the [Storybook MSW addon](https://github.com/mswjs/msw-storybook-addon).
4. Tried updated the `MyWelcome` componennt to `useFetch`, which breaks the story.
5. Added stories for all the components from the fetching example, none of which work.

## What I observed

- There is a 500 error fetching `storybook.json`, even on the built-in `MyWelcome` story (which appears to render correctly without the `useFetch` addition).
- The story for the "index" page does not render, but a fetch request is made in the browser and MSW is intercepting it.
- The story for the "component" page does render, but it does not render the component.

## Run it yourself

```sh
pnpm install
pnpm dev
pnpm run storybook
```
