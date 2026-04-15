import figma from '@figma/code-connect'
import StyledDialogTitle from './StyledDialogTitle'

figma.connect(StyledDialogTitle, 'https://www.figma.com/design/nSb86jpFeaJ929PkSyyK2H/Code-Connect---MUI-for-Figma-v7.2.0---Material-UI---Standard?node-id=6643-52210', {
  example: () => (
    <StyledDialogTitle>Dialog Title</StyledDialogTitle>
  ),
})
