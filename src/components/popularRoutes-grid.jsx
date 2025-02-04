import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import Link from '@mui/material/Link';

export default function PopularRoutes_Grid() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={3} columns={{xs:2, sm:4, md:6}}>
        <Grid size={2}>
            <Link variant='body2'>
                Flights from New York to London
            </Link>
        </Grid>
        <Grid size={2}>
            <Link variant='body2'>
                Flights from New York to London
            </Link>
        </Grid>
        <Grid size={2}>
            <Link variant='body2'>
                Flights from New York to London
            </Link>
        </Grid>
        <Grid size={2}>
            <Link variant='body2'>
                Flights from New York to London
            </Link>
        </Grid>
        <Grid size={2}>
            <Link variant='body2'>
                Flights from New York to London
            </Link>
        </Grid>
        <Grid size={2}>
            <Link variant='body2'>
                Flights from New York to London
            </Link>
        </Grid>
        <Grid size={2}>
            <Link variant='body2'>
                Flights from New York to London
            </Link>
        </Grid>
        <Grid size={2}>
            <Link variant='body2'>
                Flights from New York to London
            </Link>
        </Grid>
      </Grid>
    </Box>
  );
}