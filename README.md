# Getting Started
Install the dependencies and run the project
```
npm install
npm start
```

Head over to https://vitejs.dev/ to learn more about configuring vite

# React Web Library

A small collection of accessible, composable React UI components built with modern React (JSX + Vite). This repository includes source components in `components/` and small demo pages in `demo/` to preview and try them locally.

## Highlights

- Lightweight React components (JSX) designed for composition and easy styling.
- Demos in `demo/` for quick visual checks while developing.
- Built with Vite for fast local development.

## Contents

- `components/` — source components (Button, Badge, Card, Tooltip, Toast, Menu, etc.)
- `demo/` — small demo pages that import components for quick preview
- `index.jsx` / `index.html` — example app entry used by the demo

## Quick start

Install dependencies and start the dev server (Vite):

```bash
npm install
npm run dev
```

Open http://localhost:5173 in your browser (Vite's default port).

If you prefer the `start` script you can run `npm start` — it runs Vite as well.

## Using components

Components are plain React components you can import directly from the `components/` folder. Example usage for a few key components:

Button

```jsx
import React from 'react'
import Button from './components/Button/Button.jsx'

export default function Example() {
	return <Button onClick={() => alert('Clicked')}>Click me</Button>
}
```

Badge

```jsx
import Badge from './components/Badge/Badge.jsx'

function Status() {
	return <Badge>New</Badge>
}
```

Tooltip

```jsx
import Tooltip from './components/Tooltip/Tooltip.jsx'

function Help() {
	return (
		<Tooltip content="Helpful tip">
			<button>Hover me</button>
		</Tooltip>
	)
}
```

Notes:
- Adjust import paths to fit how you bundle or publish the library. For local demos and development, relative imports from `components/` work fine.
- Most components accept `className` and pass through standard DOM props for easy styling and composition.

## Development

- Run the dev server: `npm run dev` or `npm start`.
- Build a production bundle with: `npm run build`.
- Preview the production build: `npm run preview`.

The `demo/` folder contains example pages that import components directly. Use these to manually verify layout, accessibility, and interaction.

## Contribution

Contributions, bug reports, and feature requests are welcome. A few suggestions to get started:

- Add unit tests for component logic and accessibility.
- Add visual regression tests or Storybook stories for component previewing.
- Improve PropTypes and component documentation.

If you open a pull request, include a short description of changes and a screenshot or short GIF for UI updates.

## Suggestions & Next Steps

- Publish as an npm package (add a build step and entry points).
- Add Storybook for isolated component development and documentation.
- Add automated tests (Jest + React Testing Library) and simple CI.
