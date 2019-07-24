import React, { Component } from "react"
import { Link } from "gatsby"
import DropdownSearchByYear from "../components/dropdownSearchByYear"
// import { FaBars } from "react-icons/Fa"

class Header extends Component {
  render() {
    return (
      <div id="header" style={{ backgroundColor: "#000" }}>
        <div
          id="headerInner"
          className="flex justify-between items-center text-center text-white py-2"
        >
          <ul
            className="xl:text-lg hidden lg:flex lg:justify-around"
            style={{ flex: "0 1 37.5vw" }}
          >
            <li className="hover:text-red-700">
              <DropdownSearchByYear />
            </li>
            <li className="hover:text-red-700">
              <Link to="/bio">Danceland Bio</Link>
            </li>
            <li className="hover:text-red-700">
              <Link to="/earlyYears">Early Years</Link>
            </li>
          </ul>
          <Link to="/">
            <h1
              className="xs:text-2xl sm:text-3xl md:text-4xl px-6 lg:px-0 lg:text-6xl font-bold"
              style={{ flex: "0 1 25vh" }}
            >
              Danceland
            </h1>
          </Link>
          <ul
            className="xl:text-lg hidden lg:flex lg:justify-around"
            style={{ flex: "0 1 37.5vw" }}
          >
            <li className="hover:text-red-700">
              <Link to="/darloweOleson">Darlowe Oleson</Link>
            </li>
            <li className="hover:text-red-700">
              <Link to="/posters">Posters</Link>
            </li>
            <li className="hover:text-red-700">
              <Link to="/dancelandBandstand">Danceland Bandstand</Link>
            </li>
          </ul>
          <ul>
            {/* <li className="px-6 lg:hidden">
              <FaBars />
            </li> */}
          </ul>
        </div>
      </div>
    )
  }
}

export default Header
