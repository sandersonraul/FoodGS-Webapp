import '../styles/globals.css'
import Header from '../components/header'
import Footer from '../components/footer'
import 'bootstrap/dist/css/bootstrap.css'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
  <>
  <Header/>
  <Component {...pageProps} />
  <Footer/>
  </>
  )
}

export default MyApp
