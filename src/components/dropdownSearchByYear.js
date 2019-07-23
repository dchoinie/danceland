import React, { Component } from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { FaAngleDown, FaAngleUp } from "react-icons/fa"

export class dropdownSearchByYear extends Component {
  constructor() {
    super()

    this.state = {
      displayMenu: false,
      isArrowDown: true,
    }

    this.showDropdownMenu = this.showDropdownMenu.bind(this)
    this.hideDropdownMenu = this.hideDropdownMenu.bind(this)
  }

  showDropdownMenu(event) {
    event.preventDefault()
    this.setState({ displayMenu: true, isArrowDown: false }, () => {
      document.addEventListener("click", this.hideDropdownMenu)
    })
  }

  hideDropdownMenu() {
    this.setState({ displayMenu: false, isArrowDown: true }, () => {
      document.removeEventListener("click", this.hideDropdownMenu)
    })
  }

  render() {
    let dropdownArrow
    if (this.state.isArrowDown) {
      dropdownArrow = (
        <span className="self-center mx-1">
          <FaAngleDown />
        </span>
      )
    } else {
      dropdownArrow = (
        <span className="self-center mx-1">
          <FaAngleUp />
        </span>
      )
    }

    return (
      <div className="dropdown relative inline-block cursor-pointer z-40">
        <div
          className="button flex"
          onClick={this.showDropdownMenu}
          onMouseOver={this.mouseShowDropdownMenu}
        >
          Search By Year {dropdownArrow}
        </div>
        {this.state.displayMenu ? (
          <div className="flex justify-center">
            <ul className="text-black bg-white text-center absolute py-1 px-4 whitespace-no-wrap border border-gray-900">
              <li className="px-2 py-1">
                <Link to="/1954">1954</Link>
              </li>
              <li className="px-2 py-1">
                <Link to="/1955">1955</Link>
              </li>
              <li className="px-2 py-1">
                <Link to="/1956">1956</Link>
              </li>
              <li className="px-2 py-1">
                <Link to="/1957">1957</Link>
              </li>
              <li className="px-2 py-1">
                <Link to="/1958">1958</Link>
              </li>
              <li className="px-2 py-1">
                <Link to="/1959">1959</Link>
              </li>
              <li className="px-2 py-1">
                <Link to="/1960">1960</Link>
              </li>
              <li className="px-2 py-1">
                <Link to="/1961">1961</Link>
              </li>
              <li className="px-2 py-1">
                <Link to="/1962">1962</Link>
              </li>
              <li className="px-2 py-1">
                <Link to="/1963">1963</Link>
              </li>
              <li className="px-2 py-1">
                <Link to="/1964">1964</Link>
              </li>
              <li className="px-2 py-1">
                <Link to="/1965">1965</Link>
              </li>
              <li className="px-2 py-1">
                <Link to="/1966">1966</Link>
              </li>
              <li className="px-2 py-1">
                <Link to="/1967">1967</Link>
              </li>
              <li className="px-2 py-1">
                <Link to="/1968">1968</Link>
              </li>
            </ul>
          </div>
        ) : null}
      </div>
    )
  }
}

export default dropdownSearchByYear
