import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import OutlinedButton from "../Buttons/OutlinedButton";
import Title from "../Title";

type ServiceCardProps = {
  title: string
  subtitle: string
  image:any
}


const ServiceCard = ({ title, subtitle, image }:ServiceCardProps ) => {
  return (
    <Box
      sx={{
        height: "100%",
        position: "relative",
        p: 4,
        borderRadius: "30px",
        boxShadow: "rgb(0 0 0 / 10%) 0px 4px 25px, rgb(23 27 30 / 8%) 0px 1px 4px",
        "&::before": {
          content: '""',
          position: "absolute",
          inset: 0,
          borderRadius: "30px",
          background: "linear-gradient(120deg,#5f5f61,transparent) border-box",
          WebkitMask:
            "linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exlude",
        },
      }}
    >
      <Stack sx={{ height: "100%" }} spacing={1}>
        <Title color="text.primary" variant={{ xs: "h5", sm: "h4" }}>{title}</Title>

        <Typography variant="body2" color="text.secondary">
          {subtitle}
        </Typography>

        <img
          src={image.src}
          style={{
            height: "280px",
            width: "100%",
            objectFit: "contain",
            flex: 1,
          }}
        />

        <OutlinedButton arrow fit>
          Learn more
        </OutlinedButton>
      </Stack>
    </Box>
  );
};

export default ServiceCard;
