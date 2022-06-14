module.exports = {
  content: [
    './components/**/*.{html,js,json,vue}',
    './src/**/*.{html,js,json,vue}',
    './node_modules/ui/components/**/*.{html,js,json,vue}'
  ],
  theme: {
    colors: ({ colors }) => ({
      basic: 'rgb(var(--basic-type1))',
      primary: 'rgb(var(--primary-type1))',
      success: 'rgb(var(--success-type1))',
      info: 'rgb(var(--info-type1))',
      warning: 'rgb(var(--warning-type1))',
      error: 'rgb(var(--error-type1))',
      disabled: 'rgb(var(--disabled-type1))',
      gray: colors.gray,
      black: colors.black,
      white: colors.white
    }),
    fontFamily: {
      sans: ['Rubik', 'sans-serif'],
      inter: ['Inter', 'sans-serif']
    },
    opacity: {
      'primary-high': 'var(--opacity-primary-high)',
      'primary-medium': 'var(--opacity-primary-medium)',
      'primary-disabled': 'var(--opacity-primary-disabled)',
      'surface-high': 'var(--opacity-surface-high)',
      'surface-medium': 'var(--opacity-surface-medium)',
      'surface-disabled': 'var(--opacity-surface-disabled)',
      enabled: 'var(--opacity-container-enabled)',
      step: 'var(--opacity-container-step)',
      hover: 'var(--opacity-container-hover)',
      focus: 'var(--opacity-container-focus)',
      pressed: 'var(--opacity-container-pressed)',
      selected: 'var(--opacity-container-selected)',
      disabled: 'var(--opacity-container-disabled)',
      overlay: 'var(--opacity-overlay)',
      outline: 'var(--opacity-outline)',
      scrim: 'var(--opacity-scrim)',
      0: '0',
      5: '0.05',
      10: '0.1',
      20: '0.2',
      25: '0.25',
      30: '0.3',
      40: '0.4',
      50: '0.5',
      60: '0.6',
      70: '0.7',
      75: '0.75',
      80: '0.8',
      90: '0.9',
      95: '0.95',
      100: '1'
    }
  }
}
