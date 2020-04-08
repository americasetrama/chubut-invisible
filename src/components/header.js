import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Headroom from "react-headroom"
import { ThemeToggler } from "gatsby-plugin-dark-mode"
import ReactTooltip from "react-tooltip"
const Header = ({ siteTitle }) => (
  <Headroom>
    <nav class="flex items-center justify-between flex-wrap bg-teal-700 p-6 font-sans font-bold">
      <div class="flex items-center flex-shrink-0 text-white mr-6">
        <div className="flex flex-col mr-12 font-mono md:flex-row">
          <Link to="/" className="text-base md:text-2xl">
            {siteTitle}
          </Link>
          <ReactTooltip
            place="right"
            type="dark"
            effect="solid"
            className="bg-red-500 shadow"
          />
          <a
            className="text-base md:ml-2"
            rel="noopener noreferrer"
            target="_blank"
            data-tip="Ver hashtag en instagram"
            href="https://www.instagram.com/explore/tags/fueraarcioni/"
          >
            #fueraarcioni
          </a>
        </div>
      </div>

      <ThemeToggler>
        {({ theme, toggleTheme }) => (
          <label
            className="switch top-right"
            for="theme-toggle"
            aria-hidden="true"
          >
            <input
              type="checkbox"
              aria-labelledby="theme-toggle"
              id="theme-toggle"
              onChange={e => toggleTheme(e.target.checked ? "dark" : "light")}
              checked={theme === "dark"}
            />{" "}
            <span class="slider"></span>
          </label>
        )}
      </ThemeToggler>
    </nav>
  </Headroom>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
