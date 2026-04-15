import figma from '@figma/code-connect'
import { Typography } from '@mui/material'

figma.connect(Typography, 'https://www.figma.com/design/1vY6IaRKuv8Kgs2w4OupPn/Code-Connect-Demo?node-id=6-20', {
  props: {
    variant: figma.enum('Variant', {
      'Body 1': 'body1',
      'Body 2': 'body2',
      'Subtitle 1': 'subtitle1',
      'Subtitle 2': 'subtitle2',
      'H1': 'h1',
      'H2': 'h2',
      'H3': 'h3',
      'H4': 'h4',
      'H5': 'h5',
      'H6': 'h6',
      'Caption': 'caption',
      'Button': 'button',
      'Overline': 'overline',
    }),
  },
  example: ({ variant }) => (
    <Typography variant={variant}>Typography</Typography>
  ),
})
