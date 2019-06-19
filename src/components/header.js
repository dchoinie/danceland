import React from "react"
import styled, { css } from "styled-components"
import PropTypes from "prop-types"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import Dropdown from "react-bootstrap/Dropdown"
import { Link } from "gatsby"

const header = props => {
  return (
    <Navbar expand="lg" variant="dark" bg="dark">
      <Navbar.Brand>
        <Link
          style={{ color: "#fff" }}
          to="/"
          style={{ color: "#fff", textTransform: "uppercase" }}
        >
          Danceland
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Dropdown>
            <Dropdown.Toggle
              as={Link}
              style={{ color: "#fff" }}
              className="mx-2"
            >
              Archives
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item>
                <Link style={{ color: "#333" }} to="/1954">
                  1954
                </Link>
              </Dropdown.Item>
              <Dropdown.Item>
                <Link style={{ color: "#333" }} to="/1955">
                  1955
                </Link>
              </Dropdown.Item>
              <Dropdown.Item>
                <Link style={{ color: "#333" }} to="/1956">
                  1956
                </Link>
              </Dropdown.Item>
              <Dropdown.Item>
                <Link style={{ color: "#333" }} to="/1957">
                  1957
                </Link>
              </Dropdown.Item>
              <Dropdown.Item>
                <Link style={{ color: "#333" }} to="/1958">
                  1958
                </Link>
              </Dropdown.Item>
              <Dropdown.Item>
                <Link style={{ color: "#333" }} to="/1959">
                  1959
                </Link>
              </Dropdown.Item>
              <Dropdown.Item>
                <Link style={{ color: "#333" }} to="/1960">
                  1960
                </Link>
              </Dropdown.Item>
              <Dropdown.Item>
                <Link style={{ color: "#333" }} to="/1961">
                  1961
                </Link>
              </Dropdown.Item>
              <Dropdown.Item>
                <Link style={{ color: "#333" }} to="/1962">
                  1962
                </Link>
              </Dropdown.Item>
              <Dropdown.Item>
                <Link style={{ color: "#333" }} to="/1963">
                  1963
                </Link>
              </Dropdown.Item>
              <Dropdown.Item>
                <Link style={{ color: "#333" }} to="/1964">
                  1964
                </Link>
              </Dropdown.Item>
              <Dropdown.Item>
                <Link style={{ color: "#333" }} to="/1965">
                  1965
                </Link>
              </Dropdown.Item>
              <Dropdown.Item>
                <Link style={{ color: "#333" }} to="/1966">
                  1966
                </Link>
              </Dropdown.Item>
              <Dropdown.Item>
                <Link style={{ color: "#333" }} to="/1967">
                  1967
                </Link>
              </Dropdown.Item>
              <Dropdown.Item>
                <Link style={{ color: "#333" }} to="/1967">
                  1968
                </Link>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Link
            style={{ color: "#fff" }}
            to="/dancelandbandstand"
            style={{ color: "#fff" }}
            className="mx-2"
          >
            Danceland Bandstand
          </Link>
          <Link
            style={{ color: "#fff" }}
            to="/about"
            style={{ color: "#fff" }}
            className="mx-2"
          >
            About
          </Link>
          <Link
            style={{ color: "#fff" }}
            to="/contact"
            style={{ color: "#fff" }}
            className="mx-2"
          >
            Contact
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

header.propTypes = {}

export default header
