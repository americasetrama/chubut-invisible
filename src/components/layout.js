/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Sidebar from "../components/Sidebar"
import Navigation from "../components/navigation"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
        buildTime(locale: "es", formatString: "dddd Do - MMMM YYYY")
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <Navigation className="flex justify-center" />
      </div>
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
        }}
      >
        <Sidebar />

        <main className="p-3">{children}</main>
        <footer className="p-6 text-center">
          <p class="font-bold py-1 m-0">
            Última actualización:{" "}
            <span class="block sm:inline-block  m-0">
              {data.site.buildTime}
            </span>
          </p>
          © {new Date().getFullYear()}, Hecho con ❤ en
          {` `}
          <a href="https://www.gatsbyjs.org">Cooparaje</a>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
