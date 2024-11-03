# Tooark ESLint config

ESLint configuration for JavaScript, TypeScript, React, and Node.js projects.

## Description

This package provides a ready-to-use ESLint configuration for projects using JavaScript, TypeScript, React, and Node.js. It includes rules and plugins to ensure code quality and consistency.

## Installation

To install the package, run the following command:

```bash
npm i -D github:Tooark/eslint
```

### React

Inside `.eslintrc.json`

```javascript
const { reactConfig } = require("@tooark/eslint");

module.exports = reactConfig;
```

### Node.js

Inside `.eslintrc.json`

```javascript
const { nodeConfig } = require("@tooark/eslint");

module.exports = nodeConfig;
```
