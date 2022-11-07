import type { AppProps } from 'next/app'
import Header from '../components/Header'
import { globalStyles } from '../styles/global'
import { Container } from '../styles/pages/app'
import { MoviesContextProvider } from '../contexts/MoviesContext'
import { UserContextProvider } from '../contexts/UserContext'
globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <UserContextProvider>
        <Header />
        <MoviesContextProvider>
          <Component {...pageProps} />
        </MoviesContextProvider>
      </UserContextProvider>
    </Container>
  )
}
