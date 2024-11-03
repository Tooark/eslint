const fs = require('fs');
const path = require('path');

const configContent = `
const { reactConfig, nodeConfig } = require('@tooark/eslint');

module.exports = process.env.ESLINT_CONFIG_TYPE === 'node' ? nodeConfig : reactConfig;
`;

const filePath = path.join(process.cwd(), '.eslintrc.js');

if (!fs.existsSync(filePath)) {
  fs.writeFileSync(filePath, configContent);
  console.log('.eslintrc.js criado com sucesso!');
} else {
  console.log('.eslintrc.js já existe. Nenhuma ação necessária.');
}
