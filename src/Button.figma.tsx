import figma from '@figma/code-connect'
import StyledButton from './StyledButton'

figma.connect(StyledButton, 'https://www.figma.com/design/nSb86jpFeaJ929PkSyyK2H/Code-Connect---MUI-for-Figma-v7.2.0---Material-UI---Standard?node-id=6543-36744', {
  props: {
    variant: figma.enum('Variant', {
      'Contained': 'contained',
      'Outlined': 'outlined',
      'Text': 'text',
    }),
    size: figma.enum('Size', {
      'Large': 'large',
      'Medium': 'medium',
      'Small': 'small',
    }),
    color: figma.enum('Color', {
      'Primary': 'primary',
      'Secondary': 'secondary',
      'Error': 'error',
      'Warning': 'warning',
      'Info': 'info',
      'Success': 'success',
      'Inherit': 'inherit',
      'Inherit (white)': 'inherit',
    }),
    disabled: figma.enum('State', {
      'Enabled': false,
      'Hovered': false,
      'Focused': false,
      'Pressed': false,
      'Disabled': true,
    }),
    label: figma.string('Label'),
    startIcon: figma.boolean('Start Icon', {
      true: figma.instance('↳ Start Icon'),
      false: undefined,
    }),
    endIcon: figma.boolean('End Icon', {
      true: figma.instance('↳ End Icon'),
      false: undefined,
    }),
  },
  example: ({ variant, size, color, disabled, label, startIcon, endIcon }) => (
    <StyledButton
      variant={variant}
      size={size}
      color={color}
      disabled={disabled}
      startIcon={startIcon}
      endIcon={endIcon}
    >
      {label}
    </StyledButton>
  ),
})
