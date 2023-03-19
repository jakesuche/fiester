import * as React from "react";

import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Box, CircularProgress, Fab } from "@mui/material";
import Link from "next/link";
import Paths from "@/utils/urlPath";
import { convertToSlug } from "@/utils/commonFunctions";

export default function EventViewCard() {
  return (
    <Card sx={{ maxWidth: 348 }}>
      <CardMedia
        component="img"
        height="164"
        image="https://deelaa.com/_next/image?url=https%3A%2F%2Fmedia.deelaa.com%2F2022%2F11%2Fblob1667315692.&w=3840&q=75"
        alt="Paella dish"
      />
      <CardContent>
        <Typography
          gutterBottom
          component="div"
          variant="body2"
          color="#F6699E"
        >
          Medical & Health
        </Typography>
        <Link href={Paths.eventDetails(convertToSlug('This impressive paella is a perfect party dish and a fun meal to cook'))}>
        <Typography
          fontWeight={700}
          gutterBottom
          component="a"
          variant="h5"
          color="#39364F"
        >
          
          This impressive paella is a perfect party dish and a fun meal to cook
        </Typography>
        </Link>
        <Typography component="div" variant="body2" color="text.primary">
          June 10, 2023 . LA, CA
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: "space-between" }}>
        <Box sx={{ m: 0.7, position: "relative" }}>
          <Fab
            aria-label="save"
            color="secondary"
            sx={{ height: 37, width: 37 }}
          >
            <FavoriteIcon />
          
          </Fab>
          <CircularProgress
              size={51}
              sx={{
                color: red[500],
                position: "absolute",
                top: -7,
                left: -7,
                zIndex: 1,
              }}
            />
        </Box>
        <Typography variant="body2" color="text.primary">
          Free
        </Typography>
      </CardActions>
    </Card>
  );
}
