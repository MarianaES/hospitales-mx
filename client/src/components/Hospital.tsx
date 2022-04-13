import { Box, Card, CardContent, Typography } from '@mui/material'
import { useTheme } from '@mui/material/styles'

import { Hospital } from '../interface/Hospital'

interface Props {
  hospital: Hospital
}

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
)

function Hospital(props: Props) {
  const { hospital } = props
  const theme = useTheme()

  return (
    <Box marginBottom={2}>
      <Card
        variant="outlined"
        style={{
          borderColor: theme.palette.primary.light,
          borderWidth: '1px',
          color: theme.palette.text.primary,
        }}
      >
        <CardContent>
          <Typography
            sx={{ fontSize: 14, color: theme.palette.text.primary }}
            gutterBottom
          >
            {hospital?.['address.state'] ?? ''} {bull}{' '}
            {hospital?.['address.municipality'] ?? ''}
          </Typography>
          <Typography
            variant="h5"
            component="div"
            style={{ fontWeight: 800, color: theme.palette.primary.main }}
          >
            {hospital?.['institution.name']}
          </Typography>
          <Typography
            style={{ fontWeight: 600, color: theme.palette.primary.light }}
            gutterBottom
          >
            {`${hospital?.['institution.code']} - ${hospital?.['institution.code.long']}`}
          </Typography>
          <Typography variant="body1">
            {hospital?.['institution.type']}.
          </Typography>
          {hospital?.['institution.unit'] !== 'NO ESPECIFICADO' && (
            <Typography variant="body2">
              {hospital?.['institution.unit']}
            </Typography>
          )}
        </CardContent>
      </Card>
    </Box>
  )
}

export default Hospital
