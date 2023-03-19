import CustomButton from "@/components/custom-button";
import Countdownbanner from "@/components/EventBanners/Countdownbanner";
import GetStartedBanner from "@/components/EventBanners/GetStartedBanner";
import WithMain from "@/components/layouts/withMain";
import EventDescription from "@/containers/Event/EventDescription";
import RelatedEvents from "@/containers/Event/RelatedEvent";
import { NextPageWithLayout } from "@/pages/_app";

import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import { useTheme } from "@mui/system";
import React from "react";

const EventDetails: NextPageWithLayout = () => {
  const theme = useTheme();
  return (
    <>
      <Countdownbanner />
      <Container
        sx={{
          height: "80%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          mt: 2,
          [theme.breakpoints.up("lg")]: {
            maxWidth: "1290px!important",
          },
        }}
      >
        <Grid spacing={10} container>
          <Grid item md={8}>
            <EventDescription />
          </Grid>
          <Grid xs={12} item md={4}>
          
           <Stack spacing={5}>
           <Stack spacing={1}>
              <Typography fontWeight={600} color="text.primary" variant="h5">
                 Tickets
              </Typography>
              <Typography fontWeight={300} color="text.primary" variant="body1">
                 Tickets
              </Typography>
              <CustomButton sx={{height:50}}>
                Buy now ticket
              </CustomButton>
            </Stack>
            <Stack spacing={1}>
              <Typography fontWeight={600} color="text.primary" variant="h5">
              Date and time
              </Typography>
              <Typography fontWeight={300} color="text.primary" variant="body1">
              June 11, 2023
              </Typography>
              <Typography fontWeight={300} color="text.primary" variant="body1">
                08:00 AM - 11:00 AMUTC+ 0
              </Typography>
            </Stack>
            <Stack spacing={1}>
              <Typography fontWeight={600} color="text.primary" variant="h5">
              Location
              </Typography>
              <Typography fontWeight={300} color="text.primary" variant="body1">
              2921 St Andrews Dr, Lewisville, TX 75067, USA
              </Typography>
              <Typography fontWeight={300} color="text.primary" variant="body1">
                08:00 AM - 11:00 AMUTC+ 0
              </Typography>
            </Stack>
           </Stack>
        
          </Grid>
        </Grid>
       
        <RelatedEvents />
        
      </Container>
      <GetStartedBanner />
    </>
  );
};

EventDetails.getLayout = (page) => {
  return <WithMain>{page}</WithMain>;
};

export default EventDetails;
