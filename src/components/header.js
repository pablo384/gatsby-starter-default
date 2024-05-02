import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { Button } from "@material-tailwind/react"
import { NavbarWithMegaMenu } from "./navbar"
const Header = ({ siteTitle }) => (
  <header>
    <NavbarWithMegaMenu siteTitle={siteTitle}></NavbarWithMegaMenu>
  </header>
)

export default Header
