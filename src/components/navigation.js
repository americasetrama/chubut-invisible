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
]

const Navigation = ({ closeMenu }) => (
  <nav className="justify-center hidden w-full py-2 font-mono bg-red-100 border-b border-red-400 shadow-sm app-nav lg:flex">
    {routes.map((route, i) => {
      return (
        <Link
          key={i}
          onClick={closeMenu}
          activeClassName="font-bold text-red-600"
          to={route.slug}
          className="px-2 m-2 text-sm font-bold leading-tight"
        >
          {route.title}
        </Link>
      )
    })}
  </nav>
)

export default Navigation
