import { useCountdown } from "@/hooks/useCountdown";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/system";
import React from "react";

const Item = styled(Box)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: '#fff',
}));


type Iprops = {
    category?: string
    title?:string;
    date?:string;
}

function Countdownbanner({category,title,date}:Iprops) {
  const theme = useTheme();
  const endDate = new Date('2023-04-01T00:00:00');
  const {hours,minutes,seconds,days} = useCountdown({endDate})

  return (
    <Box
      sx={{
        height: 400,
        mt: "72px",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundImage:
          'url("https://seatevent.jwsuperthemes.com/wp-content/uploads/2022/11/Hero-event-Listing-min.jpg")',
      }}
    >
      <Container
        sx={{
          height: "80%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          mt: 2,
          [theme.breakpoints.up("lg")]: {
            maxWidth: "1300px!important",
          },
        }}
      >
        <Grid alignItems={"center"} spacing={1} container>
          <Grid md={6} item>
            <Stack spacing={2}>
              <Chip
                label="Medical & Health"
                sx={{
                  background: "#704FE8",
                  borderRadius: 2,
                  color: "#fff",
                  fontWeight: 700,
                  width: "fit-content",
                }}
              />
              <Typography
                fontSize={{ md: 44, xs: 25, sm: 50 }}
                fontWeight={"700"}
                variant="h1"
                color="#fff"
              >
                Long Covid rehab – The long road to recovery?
              </Typography>
            </Stack>
          </Grid>
          <Grid xs={12} sm={12} md={6} item>
            <Box
              padding={1}
              borderRadius={4}
              display={"flex"}
              justifyContent={"center"}
              bgcolor={"#F6699E"}
              sx={{ flexGrow: 1 }}
            >
              <Grid container >
                <Grid item xs={3} md={3}>
                  <Item>
                    <Typography fontWeight={700} fontSize={{ md: 50, xs: 25, sm: 50 }}>
                     {days}
                    </Typography>
                    <Typography>Days</Typography>
                  </Item>
                </Grid>
                <Grid item xs={3} md={3}>
                  <Item>
                    <Typography fontWeight={700} fontSize={{ md: 50, xs: 25, sm: 50 }}>
                      {hours}
                    </Typography>
                    <Typography>Hours</Typography>
                  </Item>
                </Grid>
                <Grid item xs={3} md={3}>
                  <Item>
                    <Typography fontWeight={700} fontSize={{ md: 50, xs: 25, sm: 50 }}>
                      {minutes}
                    </Typography>
                    <Typography>Minutes</Typography>
                  </Item>
                </Grid>
                <Grid item xs={3} md={3}>
                  <Item>
                    <Typography fontWeight={700} fontSize={{ md: 50, xs: 25, sm: 50 }}>
                      {seconds}
                    </Typography>
                    <Typography>Seconds</Typography>
                  </Item>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Countdownbanner;
