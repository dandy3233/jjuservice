import { FlatCompat } from '@eslint/eslintrc'

const compat = new FlatCompat({
  // This works only if you're on Node.js v20.11.0+ or using a bundler that supports import.meta
  baseDirectory: import.meta.dirname,
})

const eslintConfig = [
  {
    ignores: [
      'node_modules/**',
      '.next/**',
      'lib/generated/prisma/**', // ✅ Add paths you want to ignore here
    ],
  },
  ...compat.config({
    extends: ['next'],
    rules: {
      'react/no-unescaped-entities': 'off',
      '@next/next/no-page-custom-font': 'off',
    },
  }),
]

export default eslintConfig
