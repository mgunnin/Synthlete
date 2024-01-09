import { Fragment } from "react";
import Head from "next/head";
import type { AppProps } from "next/app";
import GlobalStyles from "./styles/global";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <Head>
        <title>Synthlete</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <link rel="icon" href="favicon.ico" />
        <meta property="og:image" content="/thumbnail.png" />
        <style
          dangerouslySetInnerHTML={{
            __html: `@import url('https://fonts.googleapis.com/css2?family=Inter:ital,wght@0,400;0,500;0,600;1,400&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Suisse+Intl:wght@600;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Aquire:wght@700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Loos+Wide:wght@700&display=swap');
@font-face {
        font-family: "Aquire";
        src: url("/public/Aquire Bold.otf");
        font-weight: 700;
      }
`,
          }}
        />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </Fragment>
  );
}

export default MyApp;
