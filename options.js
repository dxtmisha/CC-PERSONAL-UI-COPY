export const options = {
  options: {
    global: {
      iconArrowDown: 'keyboard_arrow_down',
      ripple: false
    },
    'd-alert': {
      shape: 'tile'
    },
    'd-button': {
      appearance: 'filled',
      shape: 'basic',
      adaptive: 'auto'
    },
    'd-button-select': {
      appearance: 'text',
      size: 'small'
    },
    'd-carcass-field': {
      appearance: 'basic-outlined',
      shape: 'tile',
      size: 'small'
    },
    'd-icon-item': {
      urlIcon: location.hostname === 'localhost' ? '/icons/' : '/local/templates/personal/ui/dist/icons/'
    },
    'd-menu': {
      size: 'small'
    },
    'd-select-value': {
      buttonSize: 'medium',
      buttonShape: 'basic',
      iconCancel: 'close'
    }
  }
}
