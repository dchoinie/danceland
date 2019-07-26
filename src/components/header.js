import React, { Component } from "react"
import { Link } from "gatsby"
import DropdownSearchByYear from "../components/dropdownSearchByYear"
import { FaBars } from "react-icons/Fa"

class Header extends Component {
  render() {
    return (
      <div
        id="header"
        className="flex justify-between text-center text-white items-center px-12 py-2"
        style={{ backgroundColor: "rgba(0,0,0,0)" }}
      >
        <ul className="hidden lg:flex lg:justify-between lg:w-1/3">
          <li className="hover:text-red-800">
            <DropdownSearchByYear />
          </li>
          <Link to="/earlyYears">
            <li className="hover:text-red-800">Early Years</li>
          </Link>
          <Link to="/bio">
            <li className="hover:text-red-800">Danceland Bio</li>
          </Link>
        </ul>
        <div className="w-1/3 flex justify-center text-xl md:text-3xl lg:text-5xl font-bold">
          <Link to="/">
            <h1>Danceland</h1>
          </Link>
        </div>
        <ul className="hidden lg:flex lg:justify-between lg:w-1/3">
          <Link to="/darloweOleson">
            <li className="hover:text-red-800">Darlowe Oleson</li>
          </Link>
          <Link to="/posters">
            <li className="hover:text-red-800">Posters</li>
          </Link>
          <Link to="/dancelandBandstand">
            <li className="hover:text-red-800">Danceland Bandstand</li>
          </Link>
        </ul>
        <FaBars className="lg:hidden" />
      </div>
    )
  }
}

export default Header
