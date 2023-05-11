# Points Development Engineer (React/Typescript) Assessment

## Stacks used
- React
- Typescript
- styled-components
- storybook
- react-testing-library
- vitest

## How to Setup
- run 
  ```bash
  npm run docker-pull-server
  ```
  script to pull the server from docker cloud (<b>NOTE:</b> this script assumes you have `docker` cli installed)
- run
  ```bash
  npm ci
  ```
  script to run a clean install of the npm dependencies


## How to run on your local machine
- run
  ```bash
  npm run docker-server
  ```
  to run the tax server
- run
  ```bash
  npm run dev
  ```
  script to run `vite` react app and `storybook` dashboard together

## How to make changes?
- make changes to any files and `vite` will use Hot Module Replacement (HMR) to reload only changed parts to not throw away the state of the application

## How to test?
- run
  ```bash
  npm test
  ```
  to run tests using `react-testing-library` and `vitest`