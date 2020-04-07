import React from "react"
//import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query HomeQuery {
      allAirtable(
        sort: { fields: data___date, order: DESC }
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
      <SEO title="Inicio" />
      

      <div className="mb-6 max-w-full m-auto">

        <div className=" flex flex-wrap justify-center">
          {data.allAirtable.nodes.map((item, i) => (
              
            <div className="w-full  flex">

              <div className=" rounded-b lg:rounded-b-none lg:rounded-r py-4 flex flex-col justify-between leading-normal">
                <div className="mb-1">
                  <p className="text-sm text-gray-600 flex items-center m-0">
                    <svg className="fill-current text-gray-500 w-3 h-3 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                      <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
                    </svg>
                    {item.data.date}
                  </p>
                  <a
                    href={item.data.link}
                    target="_blank"
                    className="text-gray-900 font-bold text-xl mb-3 block hover:text-teal-500"
                    rel="noopener noreferrer"
                  >
                    {item.data.title}
                  </a>
                  <div className=" p-0">
                      <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#{item.data.category}</span>
                     
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

export default IndexPage
