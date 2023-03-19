import { Button, ButtonProps } from "@mui/material";
import React from "react";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

interface OutlinedButtonProps extends ButtonProps {
  arrow?: boolean;
  fit?: boolean;
}

const OutlinedButton = ({ sx = {}, arrow, children, fit, ...props }: OutlinedButtonProps) => {
  return (
    <Button
      variant="outlined"
      sx={{
        borderRadius: 2,
        color: "text.primary",
        borderColor: "text.primary",
        width: fit ? "fit-content" : "100%",
        ...sx,
      }}
      {...props}
    >
      {children}
      {arrow && <KeyboardArrowRightIcon fontSize="small" sx={{ ml: 0.5 }} />}
    </Button>
  );
};

export default OutlinedButton;
