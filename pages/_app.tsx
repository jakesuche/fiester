import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { NextPage } from "next";
import { ComponentType, ReactElement, ReactNode } from "react";
import { ThemeProvider } from "@mui/material";
import { Theme } from "@/theme/theme";

export type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export type NextPageWithLayout<P = {}> = NextPage<P> & {
  getLayout?: (_page: ReactElement) => ReactNode;
  layout?: ComponentType;
};
export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page: ReactElement) => page);

  return (
    <ThemeProvider theme={Theme}>
       {getLayout(<Component {...pageProps} />)}
    </ThemeProvider>
  );
}
