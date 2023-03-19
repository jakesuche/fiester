

import Image from "next/image";
import { Inter } from "@next/font/google";
import Box from "@mui/material/Box";
import Section1 from "@/containers/home-container/section1";
import Navbar from "@/components/Navbar";
import Section2 from "@/containers/home-container/section2";
import Section4 from "@/containers/home-container/section4";
import Section3 from "@/containers/home-container/section3";
import Section5 from "@/containers/home-container/section5";
import Section6 from "@/containers/home-container/section6";
import Section7 from "@/containers/home-container/section7";
import Section8 from "@/containers/home-container/section8";
import Section9 from "@/containers/home-container/section9";
import Section10 from "@/containers/home-container/sections10";
import Section11 from "@/containers/home-container/section11";
import Footer from "@/components/Footer";
import SignupDialog from "@/components/Auth/Signup";
import { NextPageWithLayout } from "./_app";
import  WithMain from "@/components/layouts/withMain";

const  Home:NextPageWithLayout = ({})=> {
  return (
    <div >
  

      {/* Sections */}
      <Section1 />
      <Section2 />

      <Box sx={{  position: "relative" }}>
      <Section3 />
      <Section4 />
    
        <Section5 />
        <Section6 />
       
        {/* <Section6 />
        <Section7 />
        <Section8 />
        <Section9 />
        <Section10 />
        <Section11 />  
        {/* Footer */}
        {/* <Footer /> */}
     
      </Box>
      <SignupDialog />
      
    </div>
  );
}

Home.getLayout = (page) => {
  return (
    < WithMain>
    {page}
    </ WithMain>
  )
}

export default Home
