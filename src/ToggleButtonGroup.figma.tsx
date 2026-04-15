import figma from '@figma/code-connect'
import { ToggleButton, ToggleButtonGroup } from '@mui/material'

figma.connect(ToggleButtonGroup, 'https://www.figma.com/design/nSb86jpFeaJ929PkSyyK2H/Code-Connect---MUI-for-Figma-v7.2.0---Material-UI---Standard?node-id=6601-51012', {
  props: {
    orientation: figma.enum('Orientation', {
      'Horizontal': 'horizontal',
      'Vertical': 'vertical',
    }),
    size: figma.enum('Size', {
      'Large': 'large',
      'Medium': 'medium',
      'Small': 'small',
    }),
    exclusive: figma.enum('Single', {
      'True': true,
      'False': false,
    }),
  },
  example: ({ orientation, size, exclusive }) => (
    <ToggleButtonGroup orientation={orientation} size={size} exclusive={exclusive}>
      <ToggleButton value="option1">Option 1</ToggleButton>
      <ToggleButton value="option2">Option 2</ToggleButton>
      <ToggleButton value="option3">Option 3</ToggleButton>
    </ToggleButtonGroup>
  ),
})
