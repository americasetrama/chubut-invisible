import { Link } from "gatsby"
import React from "react"

const routes = [
  {
    title: "Todas",
    slug: "/",
  },
  {
    title: "Educación",
    slug: "/educacion/",
  },
  {
    title: "Salud",
    slug: "/salud/",
  },
  {
    title: "Megaminería",
    slug: "/megamineria/",
  },
  {
    title: "Violencia institucional",
    slug: "/violencia-institucional/",
  },
  {
    title: "Violencia contra las mujeres",
    slug: "/violencia-contra-las-mujeres/",
  },
]

const Navigation = ({ closeMenu }) => (
  <nav className="justify-center hidden w-full py-2 font-mono bg-teal-100 border-b border-teal-400 shadow-sm app-nav lg:flex">
    {routes.map((route, i) => {
      return (
        <Link
          key={i}
          onClick={closeMenu}
          activeClassName="font-bold"
          to={route.slug}
          className="px-2 m-2"
        >
          {route.title}
        </Link>
      )
    })}
  </nav>
)

export default Navigation