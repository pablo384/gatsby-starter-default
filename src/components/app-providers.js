import React from "react"
import { ThemeProvider } from "@material-tailwind/react"

const theme = {
  // button: {
  //   defaultProps: {
  //     color: "red",
  //   },
  // },
}

export const AppProviders = ({ children }) => {
  return <ThemeProvider value={theme}>{children}</ThemeProvider>
}
