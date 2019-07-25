import React, { Component } from "react"
import { Link } from "gatsby"
import DropdownSearchByYear from "../components/dropdownSearchByYear"
// import { FaBars } from "react-icons/Fa"

class Header extends Component {
  render() {
    return (
      <div
        id="header"
        className="flex text-center text-white items-center px-12 py-2"
        style={{ backgroundColor: "rgba(0,0,0,0)" }}
      >
        <ul className="hidden lg:flex lg:justify-between lg:w-1/3">
          <li>
            <DropdownSearchByYear />
          </li>
          <Link to="/earlyYears">
            <li>Early Years</li>
          </Link>
          <Link to="/bio">
            <li>Danceland Bio</li>
          </Link>
        </ul>
        <div className="w-1/3 flex justify-center text-xl md:text-3xl lg:text-5xl font-bold">
          <Link to="/">
            <h1 style={{ transform: "rotate(-3deg)" }}>Danceland</h1>
          </Link>
        </div>
        <ul className="hidden lg:flex lg:justify-between lg:w-1/3">
          <Link to="/darloweOleson">
            <li>Darlowe Oleson</li>
          </Link>
          <Link to="/posters">
            <li>Posters</li>
          </Link>
          <Link to="/dancelandBandstand">
            <li>Danceland Bandstand</li>
          </Link>
        </ul>
      </div>
    )
  }
}

export default Header
