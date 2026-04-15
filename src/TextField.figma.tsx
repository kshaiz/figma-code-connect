import figma from '@figma/code-connect'
import { TextField } from '@mui/material'

figma.connect(TextField, 'https://www.figma.com/design/nSb86jpFeaJ929PkSyyK2H/Code-Connect---MUI-for-Figma-v7.2.0---Material-UI---Standard?node-id=6570-48313', {
  props: {
    variant: figma.enum('Variant', {
      'Standard': 'standard',
      'Filled': 'filled',
      'Outlined': 'outlined',
    }),
    size: figma.enum('Size', {
      'Medium': 'medium',
      'Small': 'small',
    }),
    disabled: figma.enum('State', {
      'Enabled': false,
      'Hovered': false,
      'Focused': false,
      'Disabled': true,
      'Error': false,
    }),
    error: figma.enum('State', {
      'Enabled': false,
      'Hovered': false,
      'Focused': false,
      'Disabled': false,
      'Error': true,
    }),
    label: figma.string('Label'),
    defaultValue: figma.string('↳ Value'),
    placeholder: figma.string('↳ Placeholder'),
  },
  example: ({ variant, size, disabled, error, label, defaultValue, placeholder }) => (
    <TextField
      variant={variant}
      size={size}
      disabled={disabled}
      error={error}
      label={label}
      defaultValue={defaultValue}
      placeholder={placeholder}
    />
  ),
})
