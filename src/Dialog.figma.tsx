import figma from '@figma/code-connect'
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material'

figma.connect(Dialog, 'https://www.figma.com/design/nSb86jpFeaJ929PkSyyK2H/Code-Connect---MUI-for-Figma-v7.2.0---Material-UI---Standard?node-id=6586-47183', {
  props: {
    maxWidth: figma.enum('Max Width', {
      'xs': 'xs',
      'sm': 'sm',
      'md': 'md',
      'lg': 'lg',
      'xl': 'xl',
    }),
  },
  example: ({ maxWidth }) => (
    <Dialog open maxWidth={maxWidth}>
      <DialogTitle>Dialog Title</DialogTitle>
      <DialogContent>
        <DialogContentText>Dialog content goes here.</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => {}}>Cancel</Button>
        <Button onClick={() => {}}>Confirm</Button>
      </DialogActions>
    </Dialog>
  ),
})
