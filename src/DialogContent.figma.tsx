import figma from '@figma/code-connect'
import { DialogContent, DialogContentText } from '@mui/material'

figma.connect(DialogContent, 'https://www.figma.com/design/nSb86jpFeaJ929PkSyyK2H/Code-Connect---MUI-for-Figma-v7.2.0---Material-UI---Standard?node-id=127-59928', {
  props: {
    dividers: figma.enum('Dividers?', {
      'True': true,
      'False': false,
    }),
  },
  example: ({ dividers }) => (
    <DialogContent dividers={dividers}>
      <DialogContentText>Dialog content goes here.</DialogContentText>
    </DialogContent>
  ),
})
