/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

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
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
        }}
      >
      	<div class="bg-teal-300  rounded-b text-teal-900 px-4 py-3 mb-6 font-mono" role="alert">
      	  <div class="flex">
      	    <div class="py-1"><svg class="fill-current h-6 w-6 text-teal-100 mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z"/></svg></div>
      	    <div>
  	        <p class="font-bold py-1 m-0">Última: actualización: <span class="block sm:inline-block  m-0">{data.site.buildTime}</span></p>
      	      
      	    </div>
      	  </div>
      	</div>

        <main className="px-3">{children}</main>
        <footer className="text-center p-6">
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
