import figma from '@figma/code-connect'
import { Typography } from '@mui/material'

figma.connect(Typography, 'https://www.figma.com/design/nSb86jpFeaJ929PkSyyK2H/Code-Connect---MUI-for-Figma-v7.2.0---Material-UI---Standard?node-id=11609-174872', {
  props: {
    variant: figma.enum('Variant', {
      'body1': 'body1',
      'body2': 'body2',
      'subtitle1': 'subtitle1',
      'subtitle2': 'subtitle2',
      'overline': 'overline',
      'caption': 'caption',
      'h6': 'h6',
      'h5': 'h5',
      'h4': 'h4',
      'h3': 'h3',
      'h2': 'h2',
      'h1': 'h1',
    }),
    gutterBottom: figma.enum('Gutter Bottom', {
      'True': true,
      'False': false,
    }),
    children: figma.string('Content'),
  },
  example: ({ variant, gutterBottom, children }) => (
    <Typography variant={variant} gutterBottom={gutterBottom}>
      {children}
    </Typography>
  ),
})
