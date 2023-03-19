import { Stack, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import React from "react";
import Image from "next/image";
// https://seatevent.jwsuperthemes.com/wp-content/uploads/2022/11/thumbnail-blog-857x492.jpg
function EventDescription() {
  return (
    <Box>
      <Box width={"100%"} mb="13" position={"relative"}>
        <img
          alt="description-image"
          height={"auto"}
          width={"100%"}
          src="https://seatevent.jwsuperthemes.com/wp-content/uploads/2022/11/thumbnail-blog-857x492.jpg"
        />
      </Box>
      <Stack mt={3}>
        <Typography fontWeight={600} variant="h5" color="text.primary">
          About the Event
        </Typography>
        <Typography fontWeight="300" mb={1} color="text.primary">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in
          pulvinar neque. Nulla finib us lobortis pulvinar. Donec a consectetur
          nulla. Nulla posuere sapien vitae lectus suscipit, et pu lvinar nisi
          tincidunt. Aliquam erat volutpat. Curabitur convallis fringilla diam
          sed
        </Typography>
        <Typography fontWeight="300" mb={1} color="text.primary">
          adipiscing elit. Maecenas in pulvinar neque. Nulla finib us lobortis
          pulvinar. Donec a consectetur nulla. Nulla posuere sapien vitae lectus
          suscipit, et pu lvinar nisi tincidunt. Aliquam erat volutpat.
          Curabitur convallis fringilla diam sed aliquam. Sed te mpor iaculis
          massa faucibus event.
        </Typography>
        <Typography fontWeight="300" mb={1} color="text.primary">
          adipiscing elit. Maecenas in pulvinar neque. Nulla finib us lobortis
          pulvinar. Donec a consectetur nulla. Nulla posuere sapien vitae lectus
          suscipit, et pu lvinar nisi tincidunt. Aliquam erat volutpat.
          Curabitur convallis fringilla diam sed aliquam. Sed te mpor iaculis
          massa faucibus event.
        </Typography>
      </Stack>
    </Box>
  );
}

export default EventDescription;
