import { Icon } from 'dcode/classes/Icon'
import forEach from 'dcode/functions/forEach'

export default function (icons = undefined) {
  if (icons) {
    forEach(icons, (icon, index) => Icon.add(index, icon))
  } else {
    Icon.add('back-office', require('../assets/icons/back-office.svg'))
    Icon.add('edit', require('../assets/icons/edit.svg'))
    Icon.add('help', require('../assets/icons/help.svg'))
    Icon.add('verified', require('../assets/icons/verified.svg'))
  }
}
