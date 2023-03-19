import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import React from "react";

function AllEventBanner() {

 
  
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
        }}
      >
        <Stack spacing={1} direction="row">
          <Link href="/">
            <Typography>Home</Typography>
          </Link>
          <Typography>/</Typography>
          <Typography>Discovery</Typography>
        </Stack>
      </Container>
    </Box>
  );
}

export default AllEventBanner;
