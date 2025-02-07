import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import Link from '@mui/material/Link';

export default function PopularRoutes_Grid() {
  return (
    <Box sx={{ width:"100%" }}>
      <Grid container sx={{width:"100%"}} spacing={2} columns={{xs:2, sm:4, md:6}}>
        <Grid size={2}>
            <Link underline='none' variant='body2'>
                Flights from New York to London
            </Link>
        </Grid>
        <Grid size={2}>
            <Link underline='none' variant='body2'>
                Flights from New York to Paris
            </Link>
        </Grid>
        <Grid size={2}>
            <Link underline='none' variant='body2'>
                Flights from Paris to London
            </Link>
        </Grid>
        <Grid size={2}>
            <Link underline='none' variant='body2'>
                Flights from New York to Rome
            </Link>
        </Grid>
        <Grid size={2}>
            <Link underline='none' variant='body2'>
                Flights from Madrid to Rome
            </Link>
        </Grid>
        <Grid size={2}>
            <Link underline='none' variant='body2'>
                Flights from Toronto to London
            </Link>
        </Grid>
        <Grid size={2}>
            <Link underline='none' variant='body2'>
                Flights from Montreal to Paris
            </Link>
        </Grid>
        <Grid size={2}>
            <Link underline='none' variant='body2'>
                Flights from London to Milan
            </Link>
        </Grid>
      </Grid>
    </Box>
  );
}