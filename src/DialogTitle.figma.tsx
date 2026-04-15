import figma from '@figma/code-connect'
import { DialogTitle } from '@mui/material'

figma.connect(DialogTitle, 'https://www.figma.com/design/nSb86jpFeaJ929PkSyyK2H/Code-Connect---MUI-for-Figma-v7.2.0---Material-UI---Standard?node-id=6643-52210', {
  example: () => (
    <DialogTitle>Dialog Title</DialogTitle>
  ),
})
