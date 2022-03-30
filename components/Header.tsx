import Head from 'next/head'

interface Props {
  showLogo?: boolean
}

const Header = ({ showLogo = false }: Props) => {
  return (
    <>
      <Head>
        <title>PlayPat</title>
        <meta name="description" content="Encuentra a tu partner de pádel" />
        <link rel="icon" href="/images/favicon.png" />
      </Head>

      {showLogo === true && (
        <img src="/images/lgo-playpat.png" alt="logo" className="h-auto w-60 sm:w-120" />
      )}
    </>
  )
}

export default Header
