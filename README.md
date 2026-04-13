# Assignment 14: Building a Portfolio Website

This project completes Coding Assignment 14, which requires building a portfolio website using a React component library and deploying it as a production-ready Docker container.
This project builds upon Assignment 12 and Assignment 13 by reusing the UI component library and CI/CD workflow.

This README documents the step-by-step workflow, including project setup, portfolio pages, testing, CI/CD pipeline, Docker configuration, and running the site on localhost:5575.

# Table of Contents

[Project Initialization]
[Install and Configure Dependencies]
[Build Portfolio Structure]
[Testing Setup]
[CI/CD Pipeline]
[Dockerize the Project]
[Project Documentation & Version Control]

1. [Project Initialization](#project-initialization)
2. [Install and Configure Dependencies](#install-and-configure-dependencies)
3. [Build Component Library Structure](#build-component-library-structure)
4. [Project Documentation & Version Control](#project-documentation--version-control)

## Project Initialization

The following is a step-by-step operation procedure.

### Step 1: Create React App with TypeScript

Run the code below into WSL2 Terminal; it will take some time, and when it finishes, it will display "Happy hacking!".

```bash
npx create-react-app huang_yirui_final_site --template typescript
```

### Step 2: Initialize Git

Enter the project folder and set up version control for the project.
Copy the following content into WSL2 Terminal

```bash
cd huang_yirui_final_site
git init
```

## Install and Configure Dependencies

### Step 3: Install Storybook

Copy the following content into WSL2 Terminal

```bash
npx storybook init --type react
```

You may see this prompt:

```
We were not able to detect the right builder for your project. Please
│  │  select one:
```

Use the arrow keys to select `Webpack 5`, then press Enter to confirm.
This will launch a local development server and open a new browser tab with your components rendered in the Storybook UI at:`http://localhost:6006/`
To run Storybook manually, run `npm run storybook`. CTRL+C to stop.

### Step 4: Install Styled Components and dependency:

To add Styled Components to the project, run:

```bash
npm install styled-components
```

Also install the type definitions as a dev dependency:

```bash
npm install --save-dev @types/styled-components
```

### Step 5: Install Jest and testing-library

For testing your React components with Jest, React Testing Library, and Styled Components, run the following commands:

1. Core testing libraries and TypeScript support:

```bash
npm install @testing-library/react jest @types/jest jest-environment-jsdom --save-dev
```

`@testing-library/react`: Utilities for testing React components.

`jest`: JavaScript testing framework.

`@types/jest`: TypeScript types for Jest.

`jest-environment-jsdom`: Provides a browser-like environment for testing DOM in Jest.

2. Babel setup for Jest:

```bash
npm install @babel/core @babel/preset-env @babel/preset-react @babel/preset-typescript babel-jest --save-dev
```

`@babel/core`: Babel compiler core.
`@babel/preset-env`: Compile modern JS down to compatible JS.
`@babel/preset-react`: Compile JSX.
`@babel/preset-typescript`: Compile TypeScript.
`babel-jest`: Integrates Babel with Jest for compilation.

3. Jest DOM utilities:

```bash
npm install --save-dev @testing-library/jest-dom
```

Adds custom matchers for Jest, e.g., `.toHaveTextContent()` or `.toBeVisible()`.

4. Styled Components testing helpers:

```bash
npm install --save-dev jest-styled-components
```

`jest-styled-components`: Adds style-specific matchers and snapshot support for styled-components.

### Step 6: Configuring Jest to Include .tests.tsx Files

By default, Jest looks for files with .test.js or .spec.js extensions.
To make Jest to also include files ending with .tests.tsx, add a jest configuration in `package.json`:

```JSON
"jest": {
  "testMatch": [
    "<rootDir>/src/**/*.{test,spec,tests}.{js,jsx,ts,tsx}"
  ]
}
```

### Step 7: TypeScript Configuration for Module Resolution

To ensure proper module resolution, especially when using bundlers like Vite or Webpack 5, change the following to `tsconfig.json`:

```JSON
"moduleResolution": "bundler",
```

### Step 8: Reuse Component Library from Assignment 12

Copy the src/components folder from Assignment 12 into this project.
This allows the portfolio website to reuse components such as:
Button
Card
Label
Dropdown
Table
HeroImage

## Build Portfolio Structure

### Step 9: Install React Router for Client-Side Routing

```bash
npm install react-router-dom@6
```

### Step 10: Create Multi-page Navigation

Create pages:
Home
Work
Resources
Developer Setup
This ensures the website meets the requirement of having more than one page and intuitive navigation.

### Step 11: Build Portfolio Pages

The portfolio includes the following sections:

1. Basic Information
   Name
   Program
   Contact information

2. Work (Projects)
   Winnipeg Parks Explorer (Rails data project)
   Greenleaf Store (E-commerce Rails app)
   Tropical Plant CMS (PHP CMS system)
   Each project includes:
   Title
   Description
   Image
   Tech list
   Skills
   Languages
   Frameworks
   Tools

3. Resources
   GitHub
   Docker
   React

4. Developer Setup
   VS Code setup
   Terminal setup
   Preferred font

## Testing Setup

### Step 12: Create Test Files

Create test files inside `src/` and `src/pages/`:

`App.test.tsx`
`Home.test.tsx`
`Work.test.tsx`
`Resources.test.tsx`
`DeveloperSetup.test.tsx`

### Step 13: Run Tests

```bash
npm test -- --watchAll=false
```

This ensures all sections render correctly.

## CI/CD Pipeline

### Step 14: Install Code Quality and Git Hook Development Dependencies

```bash
npm install --save-dev husky lint-staged prettier eslint-config-prettier
```

husky: Runs scripts automatically during Git actions (e.g., before commit)
lint-staged: Runs linters only on staged files (faster and efficient)
prettier: Formats code consistently
eslint-config-prettier: Prevents conflicts between ESLint and Prettier

### Step 15: Initialize Husky

```bash
npx husky install
```

Creates a .husky/ folder
Enables Git hooks in the project

### Step 16: Enable Husky on Install

Update `package.json`:

```json
"scripts": {
  "prepare": "husky"
}
```

Then run:

```bash
npm run prepare
```

Automatically sets up Husky after npm install
Ensures hooks work for all developers on the project

### Step 17: Create Pre-commit Hook

```bash
mkdir -p .husky
nano .husky/pre-commit
```

Add the following:

```bash
#!/bin/sh
npx lint-staged
npm test -- --watchAll=false
```

Then make it executable:

```bash
chmod +x .husky/pre-commit
```

Runs before every commit
Ensures:
Code is linted and formatted
Tests pass before committing

### Step 18: Configure lint-staged

Add this to `package.json`:

```json
"lint-staged": {
  "*.{js,jsx,ts,tsx}": [
    "eslint",
    "prettier --check"
  ]
}
```

### Step 19: Configure ESLint

Create `.eslintrc.js`:

```json
module.exports = {
  extends: [
    'react-app',
    'react-app/jest',
  ],
  rules: {
    semi: ['error', 'always'],
    quotes: ['error', 'single'],
    '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
    'no-console': ['warn'],
    'react/prop-types': 'off',
  },
};
```

Enforces code quality rules
Custom rules include:
Require semicolons
Use single quotes
Warn on unused variables
Warn on console logs

### Step 20: Configure Prettier

Create `.prettierrc`:

```json
{
  "semi": true,
  "singleQuote": true
}
```

Ensures consistent formatting across the project
Works together with ESLint (no conflicts)

### Step 21: Setup GitHub Actions CI/CD

Create `.github/workflows/ci.yml`:

```yaml
name: Assignment 14 CI/CD Pipeline

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout repo
        uses: actions/checkout@v3

      - name: Setup Node
        uses: actions/setup-node@v3
        with:
          node-version: '20'

      - name: Install dependencies
        run: npm install

      - name: Run Prettier
        run: npx prettier --check "src/**/*.{js,jsx,ts,tsx}"

      - name: Run ESLint
        run: npx eslint "src/**/*.{js,jsx,ts,tsx}"

      - name: Run tests
        run: npm test -- --watchAll=false --bail
```

## Dockerize the Project

### Step 21: Create Dockerfile

Create a file named `Dockerfile.prod` in the root directory.
Open the `Dockerfile` file in VS Code, copy the following content into it, and save it.

```dockerfile
# Development environment
FROM node:18-alpine AS build

WORKDIR /huang_yirui_final_site

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

FROM nginx:alpine

RUN rm -rf /usr/share/nginx/html/*
COPY --from=build /huang_yirui_final_site/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
```

### Step 22: Create .dockerignore

Create a file named `.dockerignore` in the root directory.
This file prevents Docker from copying large files, thus reducing the image size.
Open the `.dockerignore` file in VS Code, copy the following content into it, and save it.

```
node_modules
build
.git
npm-debug.log
```

### Step 23: Create docker-compose.prod.yml (prod environments)

Create a file named `docker-compose.prod.yml` in the root directory.
Open the `docker-compose.prod.yml` file in VS Code, copy the following content into it, and save it.

```yaml
version: '3.8'

services:
  app-prod:
    container_name: huang_yirui_coding_assignment14
    build:
      context: .
      dockerfile: Dockerfile
    ports:
      - '5575:80'
```

### Step 24: Running development containers

1. Ensure Docker Desktop is running.
2. In the WSL2 Terminal, run the following code in the project root directory.

```bash
docker compose -f docker-compose.prod.yml up
```

3. Open your browser and access:
   `http://127.0.0.1:5575`

### Step 25: Stop the container:

In the WSL2 Terminal, run the following code in the project root directory.

```bash
docker compose -f docker-compose.prod.yml down
```

## Project Documentation & Version Control

### Step 26: Create README.md

Create a file named `README.md` in the root directory.
This document contains information including the project purpose, each step of the operation process, the Dockerfile content, how to run development and production containers, and the Git commit steps.
Open the `README.md` file in VS Code, write and update all operations from start to finish.

### Step 27: Push to GitHub

1. Create a new repository on GitHub (do not initialize the README)
2. Add a remote repository:

```bash
git remote add origin https://github.com/Yirui-Huang227/huang_yirui_ui_garden.git
```

3. Add all files and commit

```bash
git add .
git commit -m "Initial commit"
```

4. Rename master to main:

```bash
git branch -m master main
```

5. Push to GitHub

```bash
git push -u origin main
```
