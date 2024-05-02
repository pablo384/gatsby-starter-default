import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { Typography, Card, CardBody } from "@material-tailwind/react"
const SecondPage = () => (
  <Layout>
    <Card className="mt-2 mb-2">
      <CardBody>
        <div className="grid grid-cols-1 text-center">
          {/* <Typography variant="h1">Sobre nosotros</Typography> */}
          <Typography variant="h2">Orkapi Technology</Typography>
          <Typography variant="paragraph">
            Somos una empresa lider en el desarrollo de software de
            administracion y venta de juegos de loteria y electronicos.
          </Typography>
        </div>
      </CardBody>
    </Card>
    <Card className="mt-2 mb-2">
      <CardBody className="grid grid-cols-1 md:grid-cols-2">
        <div>
          <Typography variant="h5">Misión</Typography>
          <Typography variant="paragraph">
            Proveer a nuestros clientes la capacidad de ofrecer la mayor
            dicersidad y mejor experiencia en Juegos de Loterias y Apuestas.
          </Typography>
        </div>
        <div>img</div>
      </CardBody>
    </Card>
    <Card className="mt-2 mb-2">
      <CardBody className="grid grid-cols-1 md:grid-cols-2">
        <div>img</div>
        <div>
          <Typography variant="h5">Visión</Typography>
          <Typography variant="paragraph">
            Ser la empresa con el mejor y mas eficiente modelo de procesamiento;
            la gestion de apuestas y resultados financieros para agilizar el
            desempeño y crecimiento de las operaciones de nuestros clientes.
          </Typography>
        </div>
      </CardBody>
    </Card>
    <Card className="mt-2 mb-2">
      <CardBody className="grid grid-cols-1 md:grid-cols-2">
        <div>
          <Typography variant="h5">Valores</Typography>
          <Typography variant="paragraph">
            Desarrollar operaciones comerciales basados en la mutua confianza,
            la etica profesional e integridad de nuestro personal, nuestros
            procesos y registros de informacion.
          </Typography>
        </div>
        <div>img</div>
      </CardBody>
    </Card>
  </Layout>
)

export const Head = () => <Seo title="Sobre nosotros" />

export default SecondPage
