/* eslint-disable @next/next/no-img-element */
import type { NextPage } from 'next'
import Link from 'next/link'

const Footer: NextPage = () => {
  return (
    <footer className="flex justify-around p-8 text-sm bg-primary">
      <div>
        <Link href="/terminos">
          <a>Términos y condiciones</a>
        </Link>
      </div>
      <div>
        <Link href="/politicas">
          <a>Políticas de privacidad</a>
        </Link>
      </div>
    </footer>
  )
}

export default Footer
