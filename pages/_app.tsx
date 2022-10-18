import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { defaultTheme, GlobalStyles } from "../themes/theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
