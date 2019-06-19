import React, { Component } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import "bootstrap/dist/css/bootstrap.css"

const Footer = styled.div`
  background-color: #343a40;
  color: #fff;
`

export class footer extends Component {
  render() {
    return (
      <Footer>
        <div className="row text-center">
          <div className="col-md my-3">
            <ul style={{ marginLeft: "0", listStyleType: "none" }}>
              <li>
                <Link to="/" style={{ color: "#fff" }}>
                  Archives
                </Link>
              </li>
              <li>
                <Link to="/dancelandbandstand" style={{ color: "#fff" }}>
                  Danceland Bandstand
                </Link>
              </li>
              <li>
                <Link to="/about" style={{ color: "#fff" }}>
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" style={{ color: "#fff" }}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-md my-3">
            <p>© {new Date().getFullYear()} | Steve Wilson</p>
            <small>
              Website by{" "}
              <a
                href="https://github.com/dchoinie"
                target="_blank"
                style={{ color: "#fff" }}
              >
                Dan Choiniere
              </a>
            </small>
          </div>
          <div className="col-md my-3">Footer 3</div>
        </div>
      </Footer>
    )
  }
}

export default footer
