import React, { Component } from "react"
import { Link } from "gatsby"
import Dropdown from "../components/Dropdown"

export class footer extends Component {
  render() {
    return (
      <div className="flex flex-col justify-center bg-gray-800 text-white text-center">
        <div className="px-2 py-2 flex justify-center">
          <ul className="flex flex-row">
            <Dropdown />
            <li className="px-2">
              <Link to="/dancelandbandstand">Danceland Bandstand</Link>
            </li>
            <li className="px-2">
              <Link to="/about">About</Link>
            </li>
            <li className="px-2">
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="px-2 py-2">
          <p>© {new Date().getFullYear()} | Steve Wilson</p>
        </div>
      </div>
    )
  }
}

export default footer
