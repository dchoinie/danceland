import React, { Component } from "react"
import { FaBars } from "react-icons/fa"
import { Link } from "gatsby"
import DropdownSearchByYear from "../components/dropdownSearchByYear"

class hamburgerMenu extends Component {
  constructor() {
    super()

    this.state = {
      showMenu: false,
    }

    this.showMenu = this.showMenu.bind(this)
    this.closeMenu = this.closeMenu.bind(this)
  }

  showMenu(event) {
    event.preventDefault()

    this.setState({ showMenu: true }, () => {
      document.addEventListener("click", this.closeMenu)
    })
  }

  closeMenu(event) {
    if (!this.dropdownMenu.contains(event.target)) {
      this.setState({ showMenu: false }, () => {
        document.removeEventListener("click", this.closeMenu)
      })
    }
  }

  render() {
    return (
      <div>
        <button onClick={this.showMenu}>
          <FaBars />
        </button>
        {this.state.showMenu ? (
          <div
            className="hamburgerMenu"
            ref={element => {
              this.dropdownMenu = element
            }}
          >
            <ul>
              <li className="hover:text-red-700">
                <DropdownSearchByYear />
              </li>
              <li className="hover:text-red-700">
                <Link to="/earlyYears">Early Years</Link>
              </li>
              <li className="hover:text-red-700">
                <Link to="/bio">Danceland Bio</Link>
              </li>
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
          </div>
        ) : null}
      </div>
    )
  }
}

export default hamburgerMenu
