import Container from "@mui/material/Container";
import { NextPageWithLayout } from "../_app";
import WithMain from "@/components/layouts/withMain";
const EventSearch = dynamic(() => import("@/components/EventSearch"));
import { useTheme } from "@mui/material";
import dynamic from "next/dynamic";
import AllEventBanner from "@/components/EventBanners/AllEventBanner";
import GetStartedBanner from "@/components/EventBanners/GetStartedBanner";
import EventListing from "@/containers/Event/EventListing";

const Discovery: NextPageWithLayout = () => {
  const theme = useTheme();
  return (
    <>
      <AllEventBanner />
      <Container
        sx={{
          mt: 2,
          [theme.breakpoints.up("lg")]: {
            maxWidth: "1350px!important",
          },
        }}
      >
        <EventSearch />
        <EventListing />
      </Container>
      <GetStartedBanner />
    </>
  );
};

export default Discovery;

Discovery.getLayout = (page) => {
  return <WithMain>{page}</WithMain>;
};
