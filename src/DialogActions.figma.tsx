import figma from '@figma/code-connect'
import { Button, DialogActions } from '@mui/material'

figma.connect(DialogActions, 'https://www.figma.com/design/nSb86jpFeaJ929PkSyyK2H/Code-Connect---MUI-for-Figma-v7.2.0---Material-UI---Standard?node-id=170-161662', {
  props: {
    actions: figma.enum('Actions', {
      '1': 1,
      '2': 2,
      '3': 3,
    }),
  },
  example: ({ actions }) => (
    <DialogActions>
      <Button onClick={() => {}}>Action 1</Button>
      {actions >= 2 && <Button onClick={() => {}}>Action 2</Button>}
      {actions >= 3 && <Button onClick={() => {}}>Action 3</Button>}
    </DialogActions>
  ),
})
