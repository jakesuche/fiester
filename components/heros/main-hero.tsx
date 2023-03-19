import * as React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';



export default function MainHero() {
 

  return (
    <Paper
      sx={{
        position: 'relative',
        backgroundColor: 'grey.800',
        color: '#fff',
        mb: 4,
       
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundImage: `url(https://deelaa.com/_next/image?url=https%3A%2F%2Fmedia.deelaa.com%2F2022%2F11%2Fblob1667315692.&w=3840&q=75)`,
      }}
    >
      {/* Increase the priority of the hero background image */}
      {<img style={{ display: 'none' }} src='https://deelaa.com/_next/image?url=https%3A%2F%2Fmedia.deelaa.com%2F2022%2F11%2Fblob1667315692.&w=3840&q=75' alt="backe" />}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
          backgroundColor: 'rgba(0,0,0,.3)',
        }}
      />
      <Grid container>
        <Grid item md={6}>
          <Box
            sx={{
              position: 'relative',
              p: { xs: 3, md: 6 },
              pr: { md: 0 },
            }}
          >
            <Typography component="h1" variant="h3" color="inherit" gutterBottom>
              Title
            </Typography>
            <Typography variant="h5" color="inherit" paragraph>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta eaque perferendis maxime.
            </Typography>
            <Link variant="subtitle1" href="#">
              link here
            </Link>
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
}