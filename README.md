# React Primitives for Mio CSS

## Installation

```bash
npm install @miocss/layout-primitives
```

## TODO

props Box: space, border, color, background tag (react only)
props Stack: space, splitAfter

Documentation
-Space primitive
-Row primitive

Space primitive is used (https://www.leereamsnyder.com/row-stack-space-layout-components) as something to do some extra
space with - margin, padding,
etc. (https://ericwbailey.website/published/where-do-you-put-spacing-on-design-system-components/)
h & width maybe?
Svelte: https://svelte.dev/repl/15e37766904046b39d067b7105aacea3?version=3.53.1

Great idea: https://mxstbr.com/thoughts/margin/

```css
    .row {
    display: flex;
    align-items: var(--row-align, stretch);
    gap: calc(1rem * var(--row-gap));
}

.wrap {
    flex-wrap: wrap;
}

.splitLast > :global(:last-child) {
    margin-inline-start: auto;
}

.overflow {
    overflow-x: scroll
}
```

```css

.space {
    margin: 0 !important;
    border-width: 0 !important;
    padding: 0 !important;
    height: calc(1rem * var(--space-h));
    width: calc(1rem * var(--space-w));
}
```

Separate SCSS into separate package and import.

Philosophy: component does one thing and does it well.

Q: HTML <template> tag for compositions ?

NOTE: CSS primitives that require JS to fully operate (e.g. nth-child(#)) should probably be made into actual web
components.