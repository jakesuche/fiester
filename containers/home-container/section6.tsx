import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import ServiceCard from "@/components/Cards/ServiceCard";
import Title from "@/components/Title";
import { section6Content } from "@/utils/content";

const { title, ITEMS,subtitle } = section6Content;

const Section6 = () => {
  return (
    <Container sx={{ mt: { xs: 10, md: 20, lg: 25 } }}>
      <Title color="text.primary" variant={{ xs: "h3", md: "h2" }} sx={{ mb: { xs: 2, md: 1 } }}>
        {title}
      </Title>
      <Typography variant="h6" sx={{ mb: { xs: 2, md: 3 } }} color="text.primary">
        {subtitle}
      </Typography>
    

      <Grid container spacing={3}>
        {ITEMS.map((item) => (
          <Grid item xs={12} md={4} key={item.title}>
            <ServiceCard {...item} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Section6;
