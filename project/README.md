# Node.js TypeScript starter

Requires Node.js 24.12.0 or newer.

```sh
npm install
npm start
```

`npm start` checks the project with `tsc --noEmit`, then runs `index.ts` directly
with Node. Type errors prevent the app from starting. `npm run typecheck` checks
types without running the app, and `npm test` checks types and runs Vitest once.
Import test helpers from `vitest`.

Use ES modules, explicit `.ts` extensions for local imports, and `import type`
for type-only imports. TypeScript syntax that needs transformation, such as enums
or parameter properties, is rejected by the type checker because Node only strips
types.
