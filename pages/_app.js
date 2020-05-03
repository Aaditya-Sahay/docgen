import { Global, css } from '@emotion/core'

import EconSansNormal from '../public/fonts/econsans-primary-subset-rg.woff'
import EconSansOS from '../public/fonts/econsans-primary-subset-md.woff'
import MiloTEOS from '../public/fonts/milo-primary-subset-rg.woff'
import EconSansCnd from '../public/fonts/econsans-condensed-primary-subset-rg.woff'

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

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

@font-face {
  font-display: swap;
  font-family:EconSansOS;
  font-weight: 400;
  src: 
    url(${EconSansNormal}) format('woff');
}
@font-face {
  font-display: swap;
  font-family: EconSansOS;
  font-style: normal;
  font-weight: 500;
  src:
    url(${EconSansOS}) format('woff');
}



@font-face {
  font-display: swap;
  font-family: MiloTEOS;
  font-style: normal;
  font-weight: 400;
  src:
  url(${MiloTEOS}) format('woff');
}

@font-face {
  font-display: swap;
  font-family: EconSansCnd;
  font-style: normal;
  font-weight: 400;
  src:
    url(${EconSansCnd}) format('woff');
}

`