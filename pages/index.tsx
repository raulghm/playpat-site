/* eslint-disable @next/next/no-img-element */
import type { NextPage } from 'next'
import Link from 'next/link'
import { Header, Footer } from '../components'

const Home: NextPage = () => {
  return (
    <div className="h-screen text-zinc-200 main-bg">
      <Header />

      <main>
        {/* Hero */}
        <div className="relative rounded-xl">
          <div className="absolute z-10 w-full h-screen opacity-80 bg-background"></div>
          <div className="relative z-20 grid content-center h-screen justify-items-center">
            <img src="/images/lgo-playpat.png" alt="logo" className="h-auto w-60 sm:w-120" />
            <p className="mt-2 text-sm sm:text-lg text-zinc-300">Encuentra a tu partner de pádel</p>

            <Link href="https://playpat.app">
              <a className="px-8 py-2 sm:py-2.5 mt-4 font-medium tracking-wide rounded-full text-background bg-brand">
                Jugar ahora
              </a>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default Home
