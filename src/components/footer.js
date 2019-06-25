import React, { Component } from "react"
import { Link } from "gatsby"

export class footer extends Component {
  render() {
    return (
      <div className="footer bg-gray-800 text-white">
        <div className="row text-center">
          <div className="">
            <ul>
              <li>
                <Link to="/">Archives</Link>
              </li>
              <li>
                <Link to="/dancelandbandstand">Danceland Bandstand</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
          <div className="">
            <p>© {new Date().getFullYear()} | Steve Wilson</p>
            <small>
              Website by{" "}
              <a href="https://github.com/dchoinie" target="_blank">
                Dan Choiniere
              </a>
            </small>
          </div>
          <div className="">Footer 3</div>
        </div>
      </div>
    )
  }
}

export default footer
