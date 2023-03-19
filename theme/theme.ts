"use client";


import { createTheme } from "@mui/material/styles";

export const Theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#2f8af5",
    },
    background: {
      default: "#fff",
    },
    text: {
      primary: "#39364F",
      secondary: "rgba(255, 255, 255, 0.6)",
    },
  },
  typography:{
    fontFamily:[
        'Urbanist',
        'sans-serif'
    ].join(",")
  }
});