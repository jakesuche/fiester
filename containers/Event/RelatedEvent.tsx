import EventViewCard from "@/components/event-view-card";
import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import React from "react";

function RelatedEvents() {
  return (
    <Stack mb={10} mt={4}>
      <Typography color="text.primary" mt={3} mb={3} variant="h4">
        Related Events
      </Typography>
      <Grid spacing={3} container>
        {Array.from({ length: 4 }).map((item, i) => (
          <Grid key={i} md={3} xs={12} sm={6} item>
            <EventViewCard />
          </Grid>
        ))}
      </Grid>
    </Stack>
  );
}

export default RelatedEvents;
