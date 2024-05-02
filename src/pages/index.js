import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"
import { Typography, Card, CardBody } from "@material-tailwind/react"

const featuresLotenet = [
  {
    img: "",
    title: "FLEXIBLE",
    description: "Puedes vender cualquier tipo de juego e se te ocurra.",
  },
  {
    img: "",
    title: "INTERFAZ AMIGABLE",
    description:
      "Fue diseñada para que sea simple, facil y veloz para su uso constante.",
  },
  {
    img: "",
    title: "DOCUMENTACIÓN",
    description:
      "Te damos entrenamiento  para usar nuestra aplicacion ademas de recursos extras que puedes acceder en cualquier momento.",
  },
  {
    img: "",
    title: "ACTUALIZACIONES GRATIS ",
    description:
      "Te ofrecemos actualizaciones de seguridad y nuevas caracteristicas sin costo extra.",
  },
]

const FeaturesSection = () => {
  const list = featuresLotenet.map((item, idx) => (
    <div key={idx} className="text-center">
      <Typography variant="h6">{item.title}</Typography>
      <Typography variant="small">{item.description}</Typography>
    </div>
  ))
  return list
}

const IndexPage = () => (
  <Layout>
    {/* MAIN SECTION */}
    <div className="grid grid-cols-1 gap-4">
      <div className="grid grid-cols-1 md:grid-cols-2 p-5 rounded-lg bg-red-700 text-white">
        <div>
          <Typography variant="h1">Orkapi Technology</Typography>
          <Typography variant="paragraph" >
            Somos una empresa lider en el desarrollo de software de
            administracion y venta de juegos de loteria y electronicos.
          </Typography>
        </div>
        <div className="flex items-center">
          <StaticImage
            alt="logo"
            src="../images/orkapi-blanco.png"
          ></StaticImage>
        </div>
      </div>
    </div>
    {/* MID SECTION */}
    <Card className="p-5 mt-5 mb-5">
      <CardBody>
        <div className="grid grid-cols-1 gap-4">
          <div className="grid grid-cols-1">
            <div className="text-center">
              <Typography variant="h2">LotenetSoft</Typography>
              <Typography variant="paragraph">
                Nos hemos consolidado con la plataforma mas estable y operativa
                del mercado dando la informacion en tiempo real justo cuando la
                necesitas.
              </Typography>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 text-center">
              <div className="flex items-center justify-center">
                <StaticImage
                  width={250}
                  alt="logo"
                  src="../images/lotenetbl.png"
                ></StaticImage>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2">
                <FeaturesSection></FeaturesSection>
              </div>
            </div>
          </div>
        </div>
      </CardBody>
    </Card>
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Inicio" />

export default IndexPage
