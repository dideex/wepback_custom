import nav from './nav'
import {footer} from './footer'
import makeButton from './button'
import {makeColorStyle} from './button-styles'

const firstButton = makeButton('first button')
document.body.appendChild(firstButton)
document.body.appendChild(footer)

nav()
console.log(top, bottom)
console.log(makeColorStyle('cyan'))