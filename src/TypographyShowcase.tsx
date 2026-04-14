import { Stack, Typography } from '@mui/material'

const variants = [
  { variant: 'body1',    label: 'Body 1'     },
  { variant: 'body2',    label: 'Body 2'     },
  { variant: 'subtitle1', label: 'Subtitle 1' },
  { variant: 'subtitle2', label: 'Subtitle 2' },
  { variant: 'h1',       label: 'H1'         },
  { variant: 'h2',       label: 'H2'         },
  { variant: 'h3',       label: 'H3'         },
  { variant: 'h4',       label: 'H4'         },
  { variant: 'h5',       label: 'H5'         },
  { variant: 'h6',       label: 'H6'         },
  { variant: 'caption',  label: 'Caption'    },
  { variant: 'button',   label: 'Button'     },
  { variant: 'overline', label: 'Overline'   },
] as const

export default function TypographyShowcase() {
  return (
    <Stack sx={{ p: 2, color: '#172B4D' }}>
      {variants.map(({ variant, label }) => (
        <Typography key={variant} variant={variant} sx={{ color: 'inherit', display: 'block' }}>
          {label}
        </Typography>
      ))}
    </Stack>
  )
}
