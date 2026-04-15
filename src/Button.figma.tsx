import figma from '@figma/code-connect'
import { Button } from '@mui/material'

figma.connect(Button, 'https://www.figma.com/design/1vY6IaRKuv8Kgs2w4OupPn/Code-Connect-Demo?node-id=1-124', {
  props: {
    variant: figma.enum('Variant', {
      'Contained': 'contained',
      'Outlined': 'outlined',
      'Text': 'text',
    }),
    size: figma.enum('Size', {
      'Large': 'large',
      'Medium*': 'medium',
      'Small': 'small',
    }),
    color: figma.enum('Color', {
      'Primary*': 'primary',
      'Secondary': 'secondary',
      'Error': 'error',
      'Info': 'info',
      'Success': 'success',
      'Inherit': 'inherit',
      'Warning': 'warning',
    }),
    disabled: figma.enum('State', {
      'Enabled': false,
      'Hovered': false,
      'Focused': false,
      'Disabled': true,
    }),
    label: figma.string('Label'),
    labelShow: figma.boolean('Label Show'),
    startIcon: figma.boolean('Left Icon Show', {
      true: figma.instance('Left Icon'),
      false: undefined,
    }),
    endIcon: figma.boolean('Right Icon Show', {
      true: figma.instance('Right Icon'),
      false: undefined,
    }),
  },
  example: ({ variant, size, color, disabled, label, labelShow, startIcon, endIcon }) => (
    <Button
      variant={variant}
      size={size}
      color={color}
      disabled={disabled}
      startIcon={startIcon}
      endIcon={endIcon}
    >
      {labelShow ? label : undefined}
    </Button>
  ),
})
