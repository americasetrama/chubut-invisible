import React from "react"
//import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { TiCalendarOutline } from "react-icons/ti"

const EducacionPage = () => {
  const data = useStaticQuery(graphql`
    query EducacionQuery {
      allAirtable(
        sort: { fields: data___date, order: DESC }
        filter: {
          data: { published: { eq: true }, category: { eq: "Educación" } }
        }
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
      <SEO title="Educación" />
      <h1 className="flex flex-col items-baseline justify-between py-6 text-3xl border-b border-gray-400 sm:flex-row">
        Educación{" "}
        <span className="mt-2 text-sm">
          {data.allAirtable.totalCount} denuncias
        </span>
      </h1>
      <div className="max-w-full m-auto mb-6">
        <div className="flex flex-wrap justify-center ">
          {data.allAirtable.nodes.map((item, i) => (
            <div className="flex w-full shadow-sm">
              <div className="flex flex-col justify-between py-4 leading-normal rounded-b lg:rounded-b-none lg:rounded-r">
                <div className="mb-3">
                  <p className="flex items-center mb-2 text-sm text-gray-900 date">
                    <TiCalendarOutline className="w-4 h-4 mr-2 fill-current" />
                    {item.data.date} -{" "}
                    <i className="pl-1 ">via {item.data.source}</i>
                  </p>
                  <a
                    href={item.data.link}
                    target="_blank"
                    className="block mb-3 text-xl font-bold text-gray-900 hover:text-red-500"
                    rel="noopener noreferrer"
                  >
                    {item.data.title}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  )
}

export default EducacionPage
