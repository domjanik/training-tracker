import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt({
  rules: {
    // Disable some strict rules for development
    '@typescript-eslint/no-unused-vars': 'warn',
    '@typescript-eslint/no-explicit-any': 'warn',
    'vue/multi-word-component-names': 'off',
    'vue/no-v-html': 'off',
    // Allow template variables without usage
    'vue/no-unused-vars': 'warn',
    'vue/no-template-shadow': 'warn',
  },
})
