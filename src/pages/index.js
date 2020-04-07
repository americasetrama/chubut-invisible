import React from "react"
import { Link } from "gatsby"
import { kebabCase } from "lodash"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { TiCalendarOutline } from "react-icons/ti"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query HomeQuery {
      allAirtable(
        sort: { fields: data___date, order: DESC }
        filter: { data: { published: { eq: true } } }
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
        totalCount
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Inicio" />
      <h1 className="flex items-baseline justify-between py-6 text-3xl border-b border-gray-400">
        Todas{" "}
        <span className="text-sm ">
          {data.allAirtable.totalCount} publicaciones
        </span>
      </h1>
      <div className="max-w-full m-auto mb-6">
        <div className="flex flex-wrap justify-center ">
          {data.allAirtable.nodes.map((item, i) => (
            <div className="flex w-full py-3 shadow-sm">
              <div className="flex flex-col justify-between pt-1 leading-normal rounded-b lg:rounded-b-none lg:rounded-r">
                <div className="mb-1">
                  <p className="flex items-center mb-2 text-sm text-gray-900 date">
                    <TiCalendarOutline className="w-4 h-4 mr-2 fill-current" />
                    {item.data.date} -{" "}
                    <i className="pl-1 ">via {item.data.source}</i>
                  </p>
                  <a
                    href={item.data.link}
                    target="_blank"
                    className="block mb-3 text-xl font-bold text-gray-900 hover:text-teal-500"
                    rel="noopener noreferrer"
                  >
                    {item.data.title}
                  </a>
                  <div className="p-0 mb-2 ">
                    <Link
                      to={`/${kebabCase(item.data.category)}/`}
                      className="inline-block px-3 py-1 mr-2 font-mono text-sm font-semibold text-gray-100 bg-teal-700 rounded-full hover:bg-gray-600"
                    >
                      {item.data.category}
                    </Link>
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
