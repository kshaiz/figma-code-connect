import figma from '@figma/code-connect'
import { ToggleButton } from '@mui/material'

figma.connect(ToggleButton, 'https://www.figma.com/design/nSb86jpFeaJ929PkSyyK2H/Code-Connect---MUI-for-Figma-v7.2.0---Material-UI---Standard?node-id=6601-50975', {
  props: {
    size: figma.enum('Size', {
      'Large': 'large',
      'Medium': 'medium',
      'Small': 'small',
    }),
    disabled: figma.enum('State', {
      'Enabled': false,
      'Hovered': false,
      'Focused': false,
      'Pressed': false,
      'Disabled': true,
    }),
    selected: figma.enum('Selected', {
      'True': true,
      'False': false,
    }),
    icon: figma.boolean('Icon?', {
      true: figma.instance('Icon'),
      false: undefined,
    }),
  },
  example: ({ size, disabled, selected, icon }) => (
    <ToggleButton value="option" size={size} disabled={disabled} selected={selected}>
      {icon}
    </ToggleButton>
  ),
})
