import nav from './nav'
import {top, bottom} from './footer'
import makeButton from './button'
import {makeColorStyle} from './button-styles'

nav()
console.log(top, bottom, makeButton('first button'))
console.log(makeColorStyle('cyan'))