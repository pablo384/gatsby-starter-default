/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { FloatingWhatsApp } from "react-floating-whatsapp"
import Header from "./header"
import FooterMine from "./footerMine"
import "./layout.css"
import imgOrkapi from "../images/ORKAPI.png"
const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: `var(--size-content)`,
          padding: `var(--size-gutter)`,
        }}
      >
        <main>{children}</main>
        <FooterMine></FooterMine>
        <FloatingWhatsApp
          avatar={imgOrkapi}
          phoneNumber="18093837933"
          accountName="Orkapi Technology"
          chatMessage="Hola!👋 🤝 ¿Como podemos ayudarte?"
          placeholder="Escribe un mensaje..."
          statusMessage="Tipicamente, responde en menos de 1 hora"
        ></FloatingWhatsApp>
      </div>
    </>
  )
}

export default Layout
