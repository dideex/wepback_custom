import {red, blue} from './button-styles'

const top = document.createElement('div')
top.innerText = 'top of footer'
top.style = red
const bottom = document.createElement('div')
bottom.innerText = 'bottom of footer'
bottom.style = blue

export const footer = document.createElement('footer')
footer.appendChild(top)
footer.appendChild(bottom)
