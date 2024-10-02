# Random Github Repository

GitHub repository finder that allows users to select a programming language from a dropdown menu.

- Use the GitHub Repository Search API to fetch and display a random repository that matches the selected language.
- Displayed information should include the repository name, description, number of stars, forks, and open issues.
- Users can fetch another random repository with a button click.

# References

1. GitHub Logo - https://github.com/logos
2. How To Build A Dropdown Component In React - https://www.youtube.com/watch?v=qb70Epml9X0
3. Learn React Hooks: useRef - Simply Explained! - https://www.youtube.com/watch?v=42BkpGe8oxg
4. Detect click outside react component - https://stackoverflow.com/questions/32553158/detect-click-outside-react-component
5. Property 'current' does not exist on type '((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement>' - https://stackoverflow.com/questions/65876809/property-current-does-not-exist-on-type-instance-htmldivelement-null
6. Fetching Data in React - Complete Tutorial - https://www.youtube.com/watch?v=00lxm_doFYw

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ["./tsconfig.node.json", "./tsconfig.app.json"],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from "eslint-plugin-react"

export default tseslint.config({
  // Set the react version
  settings: { react: { version: "18.3" } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs["jsx-runtime"].rules,
  },
})
```

https://roadmap.sh/projects/github-random-repo
