

import React, { Children, ReactNode } from "react";
import NavbarConstants from "@/constants/navbar";
import useScrollPosition from "../../hooks/useScrollPosition";
import { navbarContent } from "@/utils/content";
import CallMadeIcon from "@mui/icons-material/CallMade";
import LanguageIcon from "@mui/icons-material/Language";
// import LaunchButton from "../Buttons/LaunchButton";
import MenuIcon from "@mui/icons-material/Menu";
import CustomButton from "../custom-button";
import TicketIcon from "@mui/icons-material/ConfirmationNumber";
import Link from "next/link";
import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Stack, { StackProps } from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";

import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material";

// const { Logo } = navbarContent;

interface LinkButtonProps extends StackProps {
  children: ReactNode;
}

const LinkButton = ({ children, ...props }: LinkButtonProps) => (
  <Stack
    direction="row"
    alignItems="center"
    spacing={0.2}
    sx={{
      cursor: "pointer",
      color: "text.secondary",
      "&:hover": { color: "text.primary" },
    }}
    {...props}
  >
    {children}
  </Stack>
);

const Navbar = () => {
  const scrollPosition = useScrollPosition();

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));

  return (
    <AppBar
      component="div"
      elevation={3}
      sx={{
        py: 1,

        height: NavbarConstants.NAVBAR_HEIGHT,
        bgcolor: scrollPosition > 10 ? "#fff" : "transparent",
        backdropFilter: scrollPosition > 10 ? "blur(60px)" : null,
      }}
    >
      <Container
        sx={{
          [theme.breakpoints.up("lg")]: {
            maxWidth: "1380px!important",
          },
        }}
      >
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          flexWrap="wrap"
        >
          {/* Logo */}
          <Link href="/">
            {/* <img
              src={Logo.src}
              style={{ height: "100%", objectFit: "contain" }}
            /> */}
          </Link>

          {/* Links */}
          {!isMobile && (
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="center"
              spacing={6}
              sx={{ flex: 1 }}
              flexWrap="wrap"
            >
              <Link href="/">
                <LinkButton>
                  <Typography fontWeight={700} color="text.primary" variant="body1">
                    Home
                  </Typography>
                </LinkButton>
              </Link>

              <LinkButton>
                <Link href={"/discovery"}>
                  <Typography fontWeight={700}  color="text.primary" variant="body1">
                    Discovery
                  </Typography>
                </Link>
              </LinkButton>

              <LinkButton>
                <Typography  fontWeight={700} color="text.primary" variant="body1">
                  About
                </Typography>
              </LinkButton>

              <LinkButton>
                <Typography fontWeight={700}  color="text.primary" variant="body1">
                  Schedule
                </Typography>
              </LinkButton>

              <LinkButton spacing={0.5}>
                <Typography fontWeight={700}  color="text.primary" variant="body1">
                  Contact
                </Typography>
                <CallMadeIcon htmlColor="#000" sx={{ fontSize: 12 }} />
              </LinkButton>
            </Stack>
          )}

          {/* Action Buttons */}
          {isMobile ? (
            <IconButton>
              <MenuIcon sx={{ color: "text.secondary" }} />
            </IconButton>
          ) : (
            <Stack direction="row" spacing={5} alignItems="center">
              <LinkButton spacing={1}>
                <LanguageIcon htmlColor="white" fontSize="small" />
                <Typography color="#fff" variant="body2">
                  EN
                </Typography>
              </LinkButton>
              <CustomButton
                sx={{ p: 1.4 }}
                endIcon={<TicketIcon />}
                variant="contained"
              >
                Buy ticket
              </CustomButton>
            </Stack>
          )}
        </Stack>
      </Container>
    </AppBar>
  );
};

export default Navbar;
