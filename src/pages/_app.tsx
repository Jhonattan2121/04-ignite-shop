import { AppProps } from "next/app";
import { globalStyles } from "../styles/global";

import logoImg from '../assets/logo.svg'

import { Container, Header } from "../styles/pages/api";

import Image from 'next/image'

export default function App({Component , pageProps}: AppProps) {
  globalStyles()
  return (
    <Container>
      <Header>
      <Image
          src={logoImg}
          alt="Picture of the author"
            />

      </Header>

    <Component {...pageProps} />
    </Container>
  )
}
