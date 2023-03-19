import {
  Button,
  Grid,
  Paper,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React from "react";
import SearchSharpIcon from "@mui/icons-material/SearchSharp";

const EventSearch = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Paper sx={{ mt: -8, mb: 5, p: 4 }} elevation={2}>
      <Grid spacing={2} container>
        <Grid xs={12} md={5} item>
          <Typography fontWeight={600}>Search for</Typography>
          <TextField
            InputLabelProps={{
              style: { color: "#39364F" },
            }}
            variant="standard"
            label="Event Title"
            sx={{ width: "100%" }}
          />
        </Grid>
        <Grid xs={12} md={5} item>
          <Typography fontWeight={600}>Where</Typography>
          <TextField
            InputLabelProps={{
              style: { color: "#39364F" },
            }}
            variant="standard"
            label="Any where"
            sx={{ width: "100%" }}
          />
        </Grid>
        <Grid xs={12} md={2} item>
          <Typography fontWeight={600}></Typography>
          <Button sx={{ height: 50, gap: 1,mt:2 }} fullWidth={!isMobile} variant="contained">
            {!isMobile && <Typography>Search</Typography>}
            <SearchSharpIcon />
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default EventSearch;
