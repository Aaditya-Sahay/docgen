import { Global, css } from '@emotion/core'
import { config } from '../config'
export default function App({ Component, pageProps }) {
    return <> <Global styles={globalStyles} /><Component {...pageProps} /> </>
}

const globalStyles = css`

body {
  margin: 0;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: 'EconSansOS';
}

body, html {
  min-height: 100vh;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
@import url(${config.typography.googleFontsUrl});

`