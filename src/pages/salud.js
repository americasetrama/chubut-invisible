import React from "react"
//import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const SaludPage = () => {
  const data = useStaticQuery(graphql`
    query SaludQuery {
      allAirtable(
        sort: { fields: data___date, order: DESC }
        filter: { data: { category: { eq: "salud" } } }
      ) {
        nodes {
          data {
            title
            link
            date(locale: "es", formatString: "Do MMMM YYYY")
            category
            source
          }
          recordId
          table
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Salud" />
      <h1 className="py-6 border-b border-gray-400">Salud</h1>
      <div className="max-w-full m-auto mb-6">
        <div className="flex flex-wrap justify-center ">
          {data.allAirtable.nodes.map((item, i) => (
            <div className="flex w-full">
              <div className="flex flex-col justify-between py-4 leading-normal rounded-b lg:rounded-b-none lg:rounded-r">
                <div className="mb-1">
                  <p className="flex items-center m-0 text-sm text-gray-600">
                    <svg
                      className="w-3 h-3 mr-2 text-gray-500 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
                    </svg>
                    {item.data.date}
                  </p>
                  <a
                    href={item.data.link}
                    target="_blank"
                    className="block mb-3 text-xl font-bold text-gray-900 hover:text-teal-500"
                    rel="noopener noreferrer"
                  >
                    {item.data.title}
                  </a>
                  <div className="p-0 ">
                    <span className="inline-block px-3 py-1 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full">
                      #{item.data.category}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  )
}

export default SaludPage
