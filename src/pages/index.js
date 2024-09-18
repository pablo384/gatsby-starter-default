import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"
import NuestrosClientes from "../components/nuestrosClientes"
import "../components/index.module.css"
import "./index.css"
import { Typography, Card, CardBody } from "@material-tailwind/react"
import { GatsbyImage } from "gatsby-plugin-image"
import { useStaticQuery, graphql } from "gatsby"

const featuresLotenet = [
  {
    img: "flexible",
    title: "FLEXIBLE",
    description: "Puedes vender cualquier tipo de juego que se te ocurra.",
  },
  {
    img: "interfaz",
    title: "INTERFAZ AMIGABLE",
    description:
      "Fue diseñada para que sea simple, fácil y veloz para su uso constante.",
  },
  {
    img: "documentacion",
    title: "DOCUMENTACIÓN",
    description:
      "Te damos entrenamiento para usar nuestra aplicación, además de recursos extras que puedes acceder en cualquier momento.",
  },
  {
    img: "actualizaciones",
    title: "ACTUALIZACIONES GRATIS ",
    description:
      "Te ofrecemos actualizaciones de seguridad y nuevas características sin costo extra.",
  },
]

const FeaturesSection = ({ data }) => {
  const list = featuresLotenet.map((item, idx) => {
    const image = data[item.img].childImageSharp.gatsbyImageData
    return (
      <div key={idx} className="text-center">
        <GatsbyImage alt="logo" image={image}></GatsbyImage>
        <Typography variant="h6">{item.title}</Typography>
        <Typography variant="small">{item.description}</Typography>
      </div>
    )
  })
  return list
}

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    {
      documentacion: file(relativePath: { eq: "documentacion.png" }) {
        childImageSharp {
          gatsbyImageData(height: 50, placeholder: DOMINANT_COLOR)
        }
      }
      interfaz: file(relativePath: { eq: "interfaz.png" }) {
        childImageSharp {
          gatsbyImageData(height: 50, placeholder: DOMINANT_COLOR)
        }
      }
      actualizaciones: file(relativePath: { eq: "actualizaciones.png" }) {
        childImageSharp {
          gatsbyImageData(height: 50, placeholder: DOMINANT_COLOR)
        }
      }
      flexible: file(relativePath: { eq: "flexible.png" }) {
        childImageSharp {
          gatsbyImageData(height: 50, placeholder: DOMINANT_COLOR)
        }
      }
    }
  `)
  return (
    <Layout>
      {/* MAIN SECTION */}
      <div className="grid grid-cols-1 gap-4">
        <div className="grid grid-cols-1 md:grid-cols-2 p-5 rounded-lg bg-red-700 text-white">
          <div>
            <Typography variant="h1">Orkapi</Typography>
            <Typography variant="paragraph">
            Somos una empresa líder en el desarrollo de software de administración y venta de juegos de lotería y electrónicos.
            </Typography>
          </div>
          <div className="flex items-center">
            <div className="logo-blanco">
              <StaticImage
                alt="logo"
                src="../images/orkapi-logo.png"
              ></StaticImage>
            </div>
          </div>
        </div>
      </div>
      {/* RUNNER */}
      {/* <RunnerSection /> */}
      {/* MID SECTION */}
      <Card className="p-5 mt-5">
        <CardBody>
          <div className="grid grid-cols-1 gap-4">
            <div className="grid grid-cols-1">
              <div className="text-center">
                <Typography variant="h2">LotenetSoft</Typography>
                <Typography variant="paragraph">
                Nos hemos consolidado con la plataforma más estable y operativa del mercado, dando la información en tiempo real justo cuando la necesitas.
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
                  <FeaturesSection data={data}></FeaturesSection>
                </div>
              </div>
            </div>
          </div>
        </CardBody>
      </Card>

      {/* Nuestros cientes */}
      <Card className="p-5 mt-5 mb-5 ">
        <NuestrosClientes></NuestrosClientes>
      </Card>
    </Layout>
  )
}

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Inicio" />

export default IndexPage
