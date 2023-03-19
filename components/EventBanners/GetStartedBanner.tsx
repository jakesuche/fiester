import { useTheme } from "@mui/material";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import React from "react";
import CustomButton from "../custom-button";

function GetStartedBanner() {

const theme = useTheme();
  return (
    <Box
    sx={{
      height: 400,
      mt: "72px",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundImage:
        'url("https://seatevent.jwsuperthemes.com/wp-content/uploads/2022/11/paralax-bg.jpg")',
    }}
  >
    <Container
      sx={{
        [theme.breakpoints.up("lg")]: {
          maxWidth: "1350px!important",
        },
        height: "100%",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Stack spacing={1}>
        <Typography variant="h4">Tell us what you love</Typography>
        <Typography>
          We will find event recomendations just for you.
        </Typography>
        <CustomButton sx={{ width: 200, height: 60 }}>
          Get Started
        </CustomButton>
      </Stack>
    </Container>
  </Box>
  );
}

export default GetStartedBanner;
