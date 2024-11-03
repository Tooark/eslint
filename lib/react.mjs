export default {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/react',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
  },
  plugins: [
    'react',
    'react-hooks',
    'jsx-a11y',
    'import',
    '@typescript-eslint',
    'prettier',
  ],
  rules: {
    'brace-style': [                                  // Define o estilo de chaves para a mesma linha.
      'error',
      '1tbs'
    ],
    'consistent-return': 'warn',                      // Garante que todas as funções sempre retornem um valor consistente, o que melhora a previsibilidade do comportamento do código.
    'curly': [                                        // Exige chaves para blocos de código de várias linhas.
      'error',
      'multi-line'
    ],
    'jsx-a11y/alt-text': [                            // Verifica se elementos img possuem atributo alt.
      'warn',
      {
        elements: ['img'],                            // Elementos que devem possuir atributo alt.
        img: ['Image'],                               // Elementos img que devem possuir atributo alt.
      },
    ],
    'jsx-a11y/aria-props': 'warn',                    // Verifica se elementos possuem atributos ARIA válidos.
    'jsx-a11y/aria-proptypes': 'warn',                // Verifica se elementos possuem atributos ARIA válidos.
    'jsx-a11y/aria-unsupported-elements': 'warn',     // Verifica se elementos não suportam atributos ARIA.  
    'jsx-a11y/role-has-required-aria-props': 'warn',  // Verifica se elementos com atributo role possuem atributos ARIA obrigatórios.
    'jsx-a11y/role-supports-aria-props': 'warn',      // Verifica se elementos com atributo role possuem atributos ARIA válidos.
    'no-console': 'warn',                             // Evita o uso de console.log para não poluir a saída do console. Pode ser ajustado conforme a necessidade.
    'no-unused-vars': 'warn',                         // Garante que não haja variáveis declaradas que não são utilizadas, ajudando a manter o código limpo.
    'prettier/prettier': [                            // Configurações do Prettier.
      'error', {
        'printWidth': 120,                            // Máximo de caracteres por linha.
        'tabWidth': 2,                                // Número de espaços por tabulação.
        'singleQuote': true,                          // Utiliza aspas simples.
        'trailingComma': 'all',                       // Adiciona vírgula no último item de objetos e arrays.
        'arrowParens': 'always',                      // Adiciona parênteses em torno de argumentos de arrow functions.
        'semi': false,                                // Não utiliza ponto e vírgula no final de linhas.
        'endOfLine': 'auto',                          // Utiliza o padrão do sistema operacional para quebras de linha.
      }
    ],
    'react/jsx-curly-brace-presence': [               // Garante que as chaves sejam utilizadas em torno de expressões JSX.
      'error',
      {
        'props': 'never',                             // Chaves não são necessárias em torno de prop
        'children': 'never'                           // Chaves não são necessárias em torno de children
      }
    ],
    'react/jsx-key': 'error',                         // Garante que elementos em uma lista têm uma prop key única e necessária para garantir que o React identifique quais itens foram alterados, adicionados ou removidos.
    'react/jsx-no-bind': 'warn',                      // Avisa quando funções são passadas diretamente como props, o que pode causar problemas de desempenho.
    'react/jsx-no-duplicate-props': 'error',          // Evita a duplicação de propriedades em JSX.
    'react/jsx-no-script-url': 'warn',                // Evita o uso de URLs de script em atributos href, pois eles são vulneráveis a ataques de cross-site scripting (XSS).
    'react/jsx-no-target-blank': 'warn',              // Evita problemas de segurança ao usar _blank para abrir links em novas abas, sem a atribuição de rel='noopener noreferrer'.
    'react/jsx-no-undef': 'error',                    // Previne o uso de variáveis indefinidas em JSX.
    'react/jsx-uses-react': 'off',                    // Garante que a variável React é marcada como usada quando JSX é presente. Útil para evitar advertências.
    'react/jsx-uses-vars': 'error',                   // Garante que as variáveis definidas mas não utilizadas em JSX sejam detectadas.
    'react/no-array-index-key': 'warn',               // Evita o uso de índices de array como chaves para elementos de lista, pois isso pode levar a problemas de renderização.
    'react/no-unknown-property': 'error',             // Garante que propriedades desconhecidas não sejam passadas para componentes React.
    'react/prop-types': 'off',                        // Remove a necessidade de declarar propTypes em componentes.
    'react/react-in-jsx-scope': 'off',                // Remove a necessidade de importar React em arquivos JSX.
    'react/self-closing-comp': 'error',               // Garante que componentes React sem filhos sejam auto-fechados (<Component />).
    'react-hooks/rules-of-hooks': 'error',            // Garante que os Hooks sejam chamados apenas nas funções de componentes React e nos Custom Hooks, seguindo as regras dos Hooks.
    '@typescript-eslint/no-unused-vars': ['error'],   // Garante que não haja variáveis declaradas que não são utilizadas, ajudando a manter o código limpo.  
  },
  settings: {
    react: {
      version: 'detect',
    },
    'import/parsers': {
      [require.resolve('@typescript-eslint/parser')]: ['.ts', '.tsx', '.d.ts'],
    },
  },
  ignorePatterns: [
    'node_modules'
  ]
};
