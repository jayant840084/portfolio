import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import GloablStyle from '../components/global-stylesheet.components'

const theme = {

}

function MyApp({ Component, pageProps }: AppProps) {
  return <>
    <GloablStyle />
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  </>
}
export default MyApp
