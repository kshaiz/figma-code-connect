// url=https://www.figma.com/design/1vY6IaRKuv8Kgs2w4OupPn/Code-Connect-Demo?node-id=6-20
// component=Typography
import figma from 'figma'
const instance = figma.selectedInstance

const variant = instance.getEnum('Variant', {
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
})

const textNode = instance.findText('Typography')
const text = textNode.textContent

export default {
  example: figma.code`<Typography variant="${variant}">${text}</Typography>`,
  imports: ['import { Typography } from "@mui/material"'],
  id: 'typography',
  metadata: { nestable: true },
}
