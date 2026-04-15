import figma from '@figma/code-connect'
import { Paper } from '@mui/material'

figma.connect(Paper, 'https://www.figma.com/design/nSb86jpFeaJ929PkSyyK2H/Code-Connect---MUI-for-Figma-v7.2.0---Material-UI---Standard?node-id=6584-46711', {
  props: {
    variant: figma.enum('Variant', {
      'Elevation': 'elevation',
      'Outlined': 'outlined',
    }),
    elevation: figma.enum('Elevation', {
      '0': 0, '1': 1, '2': 2, '3': 3, '4': 4,
      '5': 5, '6': 6, '7': 7, '8': 8, '9': 9,
      '10': 10, '11': 11, '12': 12, '13': 13, '14': 14,
      '15': 15, '16': 16, '17': 17, '18': 18, '19': 19,
      '20': 20, '21': 21, '22': 22, '23': 23, '24': 24,
    }),
    square: figma.enum('Square', {
      'True': true,
      'False': false,
    }),
  },
  example: ({ variant, elevation, square }) => (
    <Paper variant={variant} elevation={elevation} square={square}>
      Content
    </Paper>
  ),
})
