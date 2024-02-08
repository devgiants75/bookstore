module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 14,
    sourceType: 'module',
    project: './tsconfig.json',
  },
  // [plugins] 사용할 eslint 플러그인 설정
  plugins: ['@typescript-eslint', 'prettier'],
  // [extends] 프로젝트에 적용할 eslint 규칙셋
  extends: [
    'airbnb',
    'airbnb/hooks',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:prettier/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  // [rules] 상세 규칙
  rules: {
    // [error] Delete `␍` prettier/prettier
    'prettier/prettier': ['error', { endOfLine: 'auto' }],
    // var 금지
    'no-var': 'warn',
    // 불필요한 세미콜론 사용 시 에러 표시
    'no-extra-semi': 'error',
    // jsx 파일 확장자 .jx, .jsx, .ts, .tsx 허용
    'react/jsx-filename-extension': [
      2,
      { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
    ],
    // 화살표 함수의 파라미터가 하나일때 괄호 생략
    'arrow-parens': ['warn', 'as-needed'],
    // 사용하지 않는 변수가 있을 때 발생하는 경고 비활성화
    'no-unused-vars': ['warn'],
    // 콘솔 사용 시 발생하는 경고 비활성화
    'no-console': ['off'],
    // react hooks의 의존성배열이 충분하지 않을 때 경고 표시
    'react-hooks/exhaustive-deps': ['warn'],
    // 디버그 허용
    'no-debugger': 'off',
    // [error] Function component is not a function declaration
    'react/function-component-definition': [
      2,
      { namedComponents: ['arrow-function', 'function-declaration'] },
    ],
    'react/jsx-no-useless-fragment': [2, { allowExpressions: true }],
    'react/prefer-stateless-function': 0,
    'react/jsx-one-expression-per-line': 0,
    'no-nested-ternary': 0,
    // [error] Curly braces are unnecessary here
    // 'react/jsx-curly-brace-presence': [
    //   'warn',
    //   { props: 'always', children: 'always' },
    // ],
    // props spreading 허용하지 않는 경고 표시
    'react/jsx-props-no-spreading': [1, { custom: 'ignore' }],
    'linebreak-style': 0,
    'import/extensions': 0,
    'no-use-before-define': 0,
    // 테스트 또는 개발환경을 구성 파일에서는 devDependency 사용 허용
    'import/no-extraneous-dependencies': 0,
    'no-shadow': 0,
    'jsx-a11y/no-noninteractive-element-interactions': 0,
    'react/react-in-jsx-scope': 'off',
    'global-require': 0,
    // input label 연결 에러
    'jsx-a11y/label-has-associated-control': [
      2,
      {
        labelAttributes: ['htmlFor'],
      },
    ],
    'import/prefer-default-export': 0,
    // default props 경고
    'react/require-default-props': 'warn', // or "warn"
    // 추후 삭제
    'jsx-a11y/anchor-is-valid': 0,
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  ignorePatterns: ['.eslintrc.js'],
};
