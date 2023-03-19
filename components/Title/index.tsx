import { Typography, TypographyProps } from "@mui/material";
import React, { FC, ReactNode } from "react";


interface TitleProps {
    children?: ReactNode;
    sx?: Record<string, unknown>;
    color?: string;
    variant?: TypographyProps["variant"] | { xs?: string; sm?: string; md?: string; lg?: string; xl?: string };
}

const Title: FC<TitleProps> = ({ variant = "h6", sx = {}, children, ...props }) => {
  const _component =
    typeof variant !== "object"
      ? variant
      : variant.xl ||
        variant.lg ||
        variant.md ||
        variant.sm ||
        variant.xs ||
        "h6";

  const _variantStyles =
    typeof variant !== "object"
      ? variant
      : {
          xs: variant.xs,
          sm: variant.sm || variant.xs,
          md: variant.md || variant.sm || variant.xs,
          lg: variant.lg || variant.md || variant.sm || variant.xs,
          xl:
            variant.xl || variant.lg || variant.md || variant.sm || variant.xs,
        };

  return (
    <Typography
    //  @ts-ignore
      sx={{
        ...sx,
        typography: typeof _variantStyles! === "object" && _variantStyles!,
        fontWeight: `${sx.fontWeight || 600}!important`,
      }}
      component={_component}
      {...props}
    >
      {children}
    </Typography>
  );
};

export default Title;


