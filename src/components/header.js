import React, { Component } from "react"
import { Link } from "gatsby"
import DropdownSearchByYear from "../components/dropdownSearchByYear"

class Header extends Component {
  render() {
    return (
      <div id="header" className="bg-black">
        <div
          id="headerInner"
          className="flex justify-between items-center py-2 text-center text-white"
          style={{ borderBottom: "2px solid gray" }}
        >
          <ul
            className="flex justify-around text-xl"
            style={{ flex: "0 1 33.3vw" }}
          >
            <li>
              <DropdownSearchByYear />
            </li>
            <li className="">
              <Link to="/">Danceland Bio</Link>
            </li>
          </ul>
          <Link to="/">
            <h1 className="text-6xl font-bold" style={{ flex: "0 1 33.3vh" }}>
              Danceland
            </h1>
          </Link>
          <ul
            className="flex justify-around text-xl"
            style={{ flex: "0 1 33.3vw" }}
          >
            <li>
              <Link to="/">Early Years</Link>
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
