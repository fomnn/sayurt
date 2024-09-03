// @ts-check
import antfu from '@antfu/eslint-config'
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  antfu({
    vue: true,
    typescript: true,
    stylistic: {
      quotes: 'single',
    },
    ignores: ['dist', 'node_modules', '.gitignore'],
  }, {
    rules: {
      'vue/singleline-html-element-content-newline': 'off',
      'vue/max-attributes-per-line': ['error', {
        singleline: { max: 2 },
        multiline: { max: 1 },
      }],
      'vue/attribute-hyphenation': ['error', 'never'],
      'no-console': 'warn',
      'vue/no-side-effects-in-computed-properties': 'off',
      'unicorn/error-message': 'error',
      'antfu/curly': 'warn',
      'antfu/top-level-function': 'error',
      'style/brace-style': ['error', '1tbs'],
      'antfu/if-newline': 'off',
      'unused-imports/no-unused-vars': 'warn',
    },
  }),
  // Your custom configs here
)
