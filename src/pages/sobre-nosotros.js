import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { Typography, Card, CardBody } from "@material-tailwind/react"
// import"../images/team.svg"from "../images/team.svg"
const SecondPage = () => (
  <Layout>
    <Card className="mt-2 mb-2">
      <CardBody>
        <div className="grid grid-cols-1 text-center">
          {/* <Typography variant="h1">Sobre nosotros</Typography> */}
          <Typography variant="h2">Orkapi</Typography>
          <Typography variant="paragraph">
          ORKAPI se destaca como una empresa líder en el desarrollo de software especializado para la gestión y comercialización de juegos de lotería y productos electrónicos. Nos enfocamos en proporcionar soluciones innovadoras y eficientes que faciliten la administración y venta de estos productos en diversas plataformas. Contamos con un equipo altamente capacitado y experimentado en el desarrollo de software, lo que nos permite ofrecer soluciones personalizadas que se ajusten a las necesidades específicas de nuestros clientes. Nuestro software de administración ofrece un control completo sobre los procesos de ventas, análisis de datos y seguimiento de resultados, lo que garantiza una gestión ágil y efectiva del negocio de lotería y productos electrónicos.
          </Typography>
        </div>
      </CardBody>
    </Card>
    <Card className="mt-2 mb-2">
      <CardBody className="grid grid-cols-1 md:grid-cols-2">
        <div>
          <Typography variant="h5">Misión</Typography>
          <Typography variant="paragraph">
          Proveer a nuestros clientes la capacidad de ofrecer la mayor diversidad y mejor experiencia en juegos de loterías y apuestas.
          </Typography>
        </div>
        <div className="text-center">
          <StaticImage
            alt="Mision-IMG"
            src="../images/team.svg"
            height={250}
          ></StaticImage>
        </div>
      </CardBody>
    </Card>
    <Card className="mt-2 mb-2">
      <CardBody className="grid grid-cols-1 md:grid-cols-2">
        <div className="text-center">
          <StaticImage
            alt="ValoresIMG"
            src="../images/vision.svg"
            height={250}
          ></StaticImage>
        </div>
        <div>
          <Typography variant="h5">Visión</Typography>
          <Typography variant="paragraph">
          Ser la empresa con el mejor y más eficiente modelo de procesamiento; la gestión de apuestas y resultados financieros para agilizar el desempeño y crecimiento de las operaciones de nuestros clientes.
          </Typography>
        </div>
      </CardBody>
    </Card>
    <Card className="mt-2 mb-2">
      <CardBody className="grid grid-cols-1 md:grid-cols-2 justify-center content-center">
        <div>
          <Typography variant="h5">Valores</Typography>
          <Typography variant="paragraph">
          Desarrollar operaciones comerciales basadas en la mutua confianza, la ética profesional e integridad de nuestro personal, nuestros procesos y registros de información.
          </Typography>
        </div>
        <div className="text-center">
          <StaticImage
            alt="ValoresIMG"
            src="../images/cooperation.svg"
            height={250}
          ></StaticImage>
        </div>
      </CardBody>
    </Card>
  </Layout>
)

export const Head = () => <Seo title="Sobre nosotros" />

export default SecondPage
