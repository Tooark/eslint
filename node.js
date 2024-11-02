module.exports = {
  env: {
    node: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'standard',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'plugin:node/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint'],
  rules: {
    'prettier/prettier': [
      'error',                    // Garante que o código está formatado de acordo com as regras do Prettier
      {
        printWidth: 120,          // Define a largura máxima de uma linha de código para 120 caracteres
        tabWidth: 2,              // Define a largura de uma tabulação para 2 espaços
        singleQuote: true,        // Utiliza aspas simples em vez de aspas duplas
        trailingComma: 'all',     // Adiciona uma vírgula no final de objetos e arrays
        arrowParens: 'always',    // Sempre adiciona parênteses em torno dos argumentos de funções de seta
        semi: false,              // Não utiliza ponto e vírgula no final das linhas
      },
    ],
    'brace-style': [              // Define o estilo de chaves para a mesma linha
      'error',
      '1tbs'
    ],
    'consistent-return': 'warn',  // Garante que todas as funções sempre retornem um valor consistente
    'curly': [                    // Exige chaves para blocos de código de várias linhas
      'error',
      'multi-line'
    ],
    'no-process-exit': 'error',   // Proíbe o uso de process.exit()
    'no-sync': 'warn',            // Emite um aviso ao usar métodos síncronos
  },
  settings: {
    'import/parsers': {
      [require.resolve('@typescript-eslint/parser')]: ['.ts', '.tsx', '.d.ts'],
    },
  },
}