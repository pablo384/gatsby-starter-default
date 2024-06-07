import { StaticImage } from "gatsby-plugin-image"
import * as React from "react"
import "./clientes.css"

function NuestrosClientes({}) {
  return (
    <>
      <section className=" text-white dark:bg-gray-900 ">
        <div className="py-8 lg:py-16 mx-auto max-w-screen-xl px-4">
          <h2 className="mb-8 lg:mb-16 text-3xl font-extrabold tracking-tight leading-tight text-center text-gray-900 dark:text-white md:text-4xl">
            Nuestros Clientes
          </h2>
          <div className="grid grid-cols-2 gap-8 text-gray-500 sm:gap-12 md:grid-cols-3 lg:grid-cols-4 dark:text-gray-400">
            <div className="flex justify-center items-center logo-cliente-loteka">
              <a target="_blank" href="https://loteka.com.do/">
                <StaticImage
                  alt="Loteka"
                  src="../images/clientes/loteka.png"
                ></StaticImage>
              </a>
            </div>
            <div className="flex justify-center items-center logo-cliente-lotedom">
              <a target="_blank" href="https://lotedom.com/">
                <StaticImage
                  alt="Lotedom"
                  src="../images/clientes/lotedom.png"
                ></StaticImage>
              </a>
            </div>
            <div className="flex justify-center items-center logo-cliente-blanco">
              <a target="_blank" href="http://www.lnb.gob.pa/">
                <StaticImage
                  alt="LNB"
                  src="../images/clientes/lnb.png"
                ></StaticImage>
              </a>
            </div>
            <div className="flex justify-center items-center logo-cliente-blanco">
              <a target="_blank" href="https://laprimera.do/">
                <StaticImage
                  alt="LA PRIMERA"
                  src="../images/clientes/la-primera.svg"
                ></StaticImage>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default NuestrosClientes
