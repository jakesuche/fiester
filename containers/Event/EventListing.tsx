import CustomButton from "@/components/custom-button";
import EventViewCard from "@/components/event-view-card";
import Withclient from "@/components/layouts/withClient";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import React from "react";

function EventListing() {
  return (
    <Withclient>
      <Grid spacing={3} container>
        {Array.from({ length: 8 }).map((item, i) => (
          <Grid key={i} md={3} xs={12} sm={6} item>
            <EventViewCard />
          </Grid>
        ))}
      </Grid>
      <Stack
        sx={{
          mt: 2,
          alignItems: "center",
          justifyContent: "center",
        }}
        spacing={2}
        direction={"row"}
        aria-label="Disabled elevation buttons"
      >
        <CustomButton sx={{ height: 50 }}>1</CustomButton>
        <CustomButton sx={{ height: 50 }}>2</CustomButton>
      </Stack>
    </Withclient>
  );
}

export default EventListing;
