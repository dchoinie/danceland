import React, { Component } from "react"
import { Link } from "gatsby"
import DropdownSearchByYear from "../components/dropdownSearchByYear"

class Header extends Component {
  render() {
    return (
      <div id="header" style={{ backgroundColor: "#222" }}>
        <div
          id="headerInner"
          className="flex justify-between items-center py-1 text-center text-white"
        >
          <ul
            className="flex justify-around text-lg"
            style={{ flex: "0 1 37.5vw" }}
          >
            <li>
              <DropdownSearchByYear />
            </li>
            <li className="">
              <Link to="/">Danceland Bio</Link>
            </li>
            <li>
              <Link to="/">Early Years</Link>
            </li>
          </ul>
          <Link to="/">
            <h1 className="text-6xl font-bold" style={{ flex: "0 1 25vh" }}>
              Danceland
            </h1>
          </Link>
          <ul
            className="flex justify-around text-lg"
            style={{ flex: "0 1 37.5vw" }}
          >
            <li>
              <Link to="/">Darlowe Olesen</Link>
            </li>
            <li>
              <Link to="/">Posters</Link>
            </li>
            <li>
              <Link to="/">Danceland Bandstand</Link>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Header
