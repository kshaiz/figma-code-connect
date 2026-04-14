// url=https://www.figma.com/design/1vY6IaRKuv8Kgs2w4OupPn/Code-Connect-Demo?node-id=1-124
// component=Button
import figma from 'figma'
const instance = figma.selectedInstance

const label = instance.getString('Label')
const labelShow = instance.getBoolean('Label Show')

const variant = instance.getEnum('Variant', {
  'Contained': 'contained',
  'Outlined': 'outlined',
  'Text': 'text',
})

const size = instance.getEnum('Size', {
  'Large': 'large',
  'Medium*': 'medium',
  'Small': 'small',
})

const color = instance.getEnum('Color', {
  'Primary*': 'primary',
  'Secondary': 'secondary',
  'Error': 'error',
  'Info': 'info',
  'Success': 'success',
  'Inherit': 'inherit',
  'Warning': 'warning',
})

const disabled = instance.getEnum('State', {
  'Enabled': false,
  'Hovered': false,
  'Focused': false,
  'Disabled': true,
})

const showLeftIcon = instance.getBoolean('Left Icon Show')
const leftIcon = showLeftIcon ? instance.getInstanceSwap('Left Icon') : null
let startIconCode
if (leftIcon && leftIcon.type === 'INSTANCE' && leftIcon.hasCodeConnect()) {
  startIconCode = leftIcon.executeTemplate().example
}

const showRightIcon = instance.getBoolean('Right Icon Show')
const rightIcon = showRightIcon ? instance.getInstanceSwap('Right Icon') : null
let endIconCode
if (rightIcon && rightIcon.type === 'INSTANCE' && rightIcon.hasCodeConnect()) {
  endIconCode = rightIcon.executeTemplate().example
}

export default {
  example: figma.code`
    <Button
      variant="${variant}"
      size="${size}"
      color="${color}"
      ${disabled ? 'disabled' : ''}
      ${startIconCode ? figma.code`startIcon={${startIconCode}}` : ''}
      ${endIconCode ? figma.code`endIcon={${endIconCode}}` : ''}
    >
      ${labelShow ? label : ''}
    </Button>
  `,
  imports: ['import { Button } from "@mui/material"'],
  id: 'button',
  metadata: { nestable: true },
}
