import React, { Component } from "react"
import { Link } from "gatsby"
import Dropdown from "../components/Dropdown"

class Header extends Component {
  render() {
    return (
      <nav className="flex items-center justify-between flex-wrap bg-gray-800 p-6">
        <div>
          <Link
            to="/"
            className="uppercase text-white text-3xl font-black tracking-wider"
          >
            Danceland
          </Link>
        </div>
        <div>
          <ul className="flex text-white text-lg">
            <li className="mx-2">
              <Dropdown />
            </li>
            <li className="mx-2">
              <Link to="/dancelandbandstand">Danceland Bandstand</Link>
            </li>
            <li className="mx-2">
              <Link to="/about">About</Link>
            </li>
            <li className="mx-2">
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}

export default Header
