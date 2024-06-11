import * as React from "react"
import { Link } from "gatsby"
import { Typography, Card, CardBody } from "@material-tailwind/react"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { ArrowDownTrayIcon } from "@heroicons/react/24/outline"
function LotenetSection() {
  const data = useStaticQuery(graphql`
    {
      allFile(filter: { name: { eq: "runner_v0.1.2" } }) {
        nodes {
          name
          publicURL
        }
      }
    }
  `)
  console.log("data::::::", data)

  return (
    <div className="relative w-full mt-5 mb-5">
      <Card className="bg-green-700">
        <CardBody>
          <div className="mx-auto w-full max-w-7xl px-8 grid grid-cols-1 text-white text-center">
            <Typography variant="h4">Descargar Runner</Typography>
            {data.allFile.nodes.map((file, index) => {
              return (
                <a
                  href={file.publicURL}
                  download
                  className="flex justify-center items-center logo-blanco"
                >
                  <ArrowDownTrayIcon color="black" width={25} />
                  <StaticImage
                    alt="Runner download"
                    className=" "
                    width={150}
                    src="../images/runner-logo.png"
                  ></StaticImage>
                </a>
              )
            })}
          </div>
        </CardBody>
      </Card>
    </div>
  )
}

export default LotenetSection
