import * as React from "react";
import { styled } from "@mui/material/styles";
import Button, { ButtonProps } from "@mui/material/Button";

const BootstrapButton = styled(Button)({
  boxShadow: "none",
  textTransform: "none",
  fontSize: 16,
  padding: "6px 12px",
  lineHeight: 1.5,
  backgroundColor: "#F6699E",
  borderColor: "#0063cc",
  "&:hover": {
    backgroundColor: "#F6699E",
    borderColor: "#0062cc",
    boxShadow: "none",
  },
  "&:active": {
    boxShadow: "none",
    backgroundColor: "#F6699E",
    borderColor: "#005cbf",
  },
 
});

type Iprops = ButtonProps & { children: React.ReactNode };

export default function CustomButton({ children, ...res }: Iprops) {
  return (
    <BootstrapButton {...res} variant="contained">
      {children}
    </BootstrapButton>
  );
}
