import type { NextPage } from 'next'
import { Header, Footer } from '../components'

const Politicas: NextPage = () => {
  return (
    <div className="text-zinc-400">
      <Header />

      <main>
        <div className="relative z-20 grid justify-items-center">
          <div className="p-6 sm:p-10 sm:w-5/6 bg-background">
            <h1 className="mt-2 text-2xl text-brand">Política de privacidad PlayPat</h1>

            <div className="mt-4">
              <p className="mb-2">
                Política de privacidad El sitio web playpat.app es propiedad de PlayPat, quién
                controla tus datos personales.
              </p>
              <p className="mb-2">
                Hemos adoptado esta Política de privacidad, que determina cómo procesamos la
                información recopilada por playpat.app, que también proporciona las razones por las
                que debemos recopilar ciertos datos personales sobre usted. Por lo tanto, debe leer
                esta Política de privacidad antes de utilizar el sitio web playpat.app.
              </p>
              <p className="mb-2">
                Cuidamos sus datos personales y nos comprometemos a garantizar su confidencialidad y
                seguridad.
              </p>
              <p className="mb-2">
                Información personal que recopilamos: Cuando visita playpat.app, recopilamos
                automáticamente cierta información sobre su dispositivo, incluida información sobre
                su navegador web, dirección IP, zona horaria y algunas de las cookies instaladas en
                su dispositivo. Nos referimos a esta información recopilada automáticamente como
                &quot;Información del dispositivo&quot;. Además, podemos recopilar los datos
                personales que nos proporciona (incluidos, entre otros, email, nombre, apellido y
                número de teléfono.) durante el registro para poder cumplir con el acuerdo.
              </p>
              <p className="mb-2">
                ¿Por qué tratamos sus datos? Nuestra principal prioridad es la seguridad de los
                datos del cliente y, como tal, podemos procesar solo los datos mínimos del usuario,
                solo en la medida en que sea absolutamente necesario para mantener el sitio web. La
                información recopilada automáticamente se usa solo para identificar posibles casos
                de abuso y establecer información estadística sobre el uso del sitio web. Esta
                información estadística no se agrega de otra manera de tal manera que identifique a
                cualquier usuario particular del sistema.
              </p>
              <p className="mb-2">
                Puede visitar el sitio web sin decirnos quién es ni revelar ninguna información
                mediante la cual alguien pueda identificarlo como una persona específica e
                identificable. Sin embargo, si desea utilizar algunas de las funciones del sitio
                web, o desea recibir nuestro boletín informativo o proporcionar otros detalles
                completando un formulario, puede proporcionarnos datos personales, como su email,
                nombre, apellido, número de teléfono. Puede optar por no proporcionarnos sus datos
                personales, pero es posible que no pueda aprovechar algunas de las funciones del
                sitio web. Los usuarios que no estén seguros de qué información es obligatoria
                pueden ponerse en contacto con nosotros a través de raulghm@gmail.com.
              </p>
              <p className="mb-2">
                Enlaces a otros sitios web: Nuestro sitio web puede contener enlaces a otros sitios
                web que no son de nuestra propiedad ni están controlados por nosotros. Tenga en
                cuenta que no somos responsables de dichos otros sitios web ni de las prácticas de
                privacidad de terceros. Lo alentamos a que tenga cuidado cuando abandone nuestro
                sitio web y lea las declaraciones de privacidad de cada sitio web que pueda
                recopilar información personal.
              </p>
              <p className="mb-2">
                Seguridad de información: Protegemos la información que proporciona en servidores
                informáticos en un entorno controlado y seguro, protegido contra el acceso, uso o
                divulgación no autorizados. Mantenemos medidas de seguridad administrativas,
                técnicas y físicas razonables para proteger contra el acceso, uso, modificación y
                divulgación de datos personales no autorizados bajo su control y custodia. Sin
                embargo, no se puede garantizar la transmisión de datos a través de Internet o de
                una red inalámbrica.
              </p>
              <p className="mb-2">
                Divulgación jurídica: Divulgaremos cualquier información que recopilemos, usemos o
                recibamos si así lo requiere o lo permite la ley, como para cumplir con una citación
                o un proceso legal similar, y cuando creamos de buena fe que la divulgación es
                necesaria para proteger nuestros derechos, proteger su seguridad o la seguridad de
                otros, investigar fraudes o responder a una solicitud del gobierno.
              </p>
              <p className="mb-2">
                Información del contacto: Si desea comunicarse con nosotros para obtener más
                información sobre esta Política o desea comunicarse con nosotros con respecto a
                cualquier asunto relacionado con los derechos individuales y su Información
                personal, puede enviar un correo electrónico a raulghm@gmail.com.
              </p>
              <p className="mb-2">
                Modificaciones de nuestra Política de Privacidad: Es posible que actualicemos
                nuestra Política de privacidad de vez en cuando. Le notificaremos cualquier cambio
                publicando la nueva Política de Privacidad en esta página.
              </p>
              <p className="mb-2">
                Se le recomienda revisar esta Política de Privacidad periódicamente para cualquier
                cambio. Los cambios a esta Política de privacidad son efectivos cuando se publican
                en esta página.
              </p>
              <p className="mb-2">
                Contáctenos Si tiene alguna pregunta sobre esta Política de privacidad, contáctenos
                por correo electrónico: raulghm@gmail.com.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default Politicas
