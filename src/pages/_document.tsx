import Document, { Html, Head, Main, NextScript } from "next/document";

import { Global, css } from "@emotion/react";
const GlobalStyles = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: #f8f0f1;
    -webkit-font-smoothing: antialiased;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%; /*15px*/
    }
    @media (max-width: 720px) {
      font-size: 87.5%; /*14px*/
    }
  }

  body,
  input,
  textarea,
  button {
    font-family: "Poppins", sans-serif;
    font-weight: 400;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  strong {
    font-weight: 600;
  }

  button {
    cursor: pointer;
    transition: all 0.5s;
    :hover {
      filter: brightness(0.8);
    }
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500&family=Roboto:wght@400;500;700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
          <Global styles={GlobalStyles} />
        </body>
      </Html>
    );
  }
}
