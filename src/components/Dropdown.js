import React, { Component } from "react"
import { Link } from "gatsby"
import { FaAngleDown } from "react-icons/fa"

class Dropdown extends Component {
  constructor() {
    super()

    this.state = {
      displayMenu: false,
    }

    this.showDropdownMenu = this.showDropdownMenu.bind(this)
    this.hideDropdownMenu = this.hideDropdownMenu.bind(this)
  }

  showDropdownMenu(event) {
    event.preventDefault()
    this.setState({ displayMenu: true }, () => {
      document.addEventListener("click", this.hideDropdownMenu)
    })
  }

  hideDropdownMenu() {
    this.setState({ displayMenu: false }, () => {
      document.removeEventListener("click", this.hideDropdownMenu)
    })
  }
  render() {
    return (
      <div className="dropdown relative inline-block cursor-pointer">
        <div className="button" onClick={this.showDropdownMenu}>
          Search By Year
        </div>
        {this.state.displayMenu ? (
          <ul className="bg-white text-black text-center absolute z-10 p-2 border border-gray-800">
            <li className="px-3 py-1 hover:bg-gray-800 hover:text-white">
              <Link to="/1954">1954</Link>
            </li>
            <li className="px-3 py-1 hover:bg-gray-800 hover:text-white">
              <Link to="/1955">1955</Link>
            </li>
            <li className="px-3 py-1 hover:bg-gray-800 hover:text-white">
              <Link to="/1956">1956</Link>
            </li>
            <li className="px-3 py-1 hover:bg-gray-800 hover:text-white">
              <Link to="/1957">1957</Link>
            </li>
            <li className="px-3 py-1 hover:bg-gray-800 hover:text-white">
              <Link to="/1958">1958</Link>
            </li>
            <li className="px-3 py-1 hover:bg-gray-800 hover:text-white">
              <Link to="/1959">1959</Link>
            </li>
            <li className="px-3 py-1 hover:bg-gray-800 hover:text-white">
              <Link to="/1960">1960</Link>
            </li>
            <li className="px-3 py-1 hover:bg-gray-800 hover:text-white">
              <Link to="/1961">1961</Link>
            </li>
            <li className="px-3 py-1 hover:bg-gray-800 hover:text-white">
              <Link to="/1962">1962</Link>
            </li>
            <li className="px-3 py-1 hover:bg-gray-800 hover:text-white">
              <Link to="/1963">1963</Link>
            </li>
            <li className="px-3 py-1 hover:bg-gray-800 hover:text-white">
              <Link to="/1964">1964</Link>
            </li>
            <li className="px-3 py-1 hover:bg-gray-800 hover:text-white">
              <Link to="/1965">1965</Link>
            </li>
            <li className="px-3 py-1 hover:bg-gray-800 hover:text-white">
              <Link to="/1966">1966</Link>
            </li>
            <li className="px-3 py-1 hover:bg-gray-800 hover:text-white">
              <Link to="/1967">1967</Link>
            </li>
            <li className="px-3 py-1 hover:bg-gray-800 hover:text-white">
              <Link to="/1968">1968</Link>
            </li>
          </ul>
        ) : null}
      </div>
    )
  }
}

export default Dropdown
