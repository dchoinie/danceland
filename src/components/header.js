import React from "react"
import styled, { css } from "styled-components"
import PropTypes from "prop-types"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import Dropdown from "react-bootstrap/Dropdown"
import { Link } from "gatsby"

const StyledLink = styled(Link)`
  :hover {
    text-decoration: none;
  }
`

const header = props => {
  return (
    <Navbar expand="lg" variant="dark" bg="dark">
      <Navbar.Brand>
        <StyledLink
          style={{ color: "#fff" }}
          to="/"
          style={{ color: "#fff", textTransform: "uppercase" }}
        >
          Danceland
        </StyledLink>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Dropdown>
            <Dropdown.Toggle
              as={StyledLink}
              style={{ color: "#fff" }}
              className="mx-2"
            >
              Archives
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item>
                <StyledLink style={{ color: "#333" }} to="/1954">
                  1954
                </StyledLink>
              </Dropdown.Item>
              <Dropdown.Item>
                <StyledLink style={{ color: "#333" }} to="/1955">
                  1955
                </StyledLink>
              </Dropdown.Item>
              <Dropdown.Item>
                <StyledLink style={{ color: "#333" }} to="/1956">
                  1956
                </StyledLink>
              </Dropdown.Item>
              <Dropdown.Item>
                <StyledLink style={{ color: "#333" }} to="/1957">
                  1957
                </StyledLink>
              </Dropdown.Item>
              <Dropdown.Item>
                <StyledLink style={{ color: "#333" }} to="/1958">
                  1958
                </StyledLink>
              </Dropdown.Item>
              <Dropdown.Item>
                <StyledLink style={{ color: "#333" }} to="/1959">
                  1959
                </StyledLink>
              </Dropdown.Item>
              <Dropdown.Item>
                <StyledLink style={{ color: "#333" }} to="/1960">
                  1960
                </StyledLink>
              </Dropdown.Item>
              <Dropdown.Item>
                <StyledLink style={{ color: "#333" }} to="/1961">
                  1961
                </StyledLink>
              </Dropdown.Item>
              <Dropdown.Item>
                <StyledLink style={{ color: "#333" }} to="/1962">
                  1962
                </StyledLink>
              </Dropdown.Item>
              <Dropdown.Item>
                <StyledLink style={{ color: "#333" }} to="/1963">
                  1963
                </StyledLink>
              </Dropdown.Item>
              <Dropdown.Item>
                <StyledLink style={{ color: "#333" }} to="/1964">
                  1964
                </StyledLink>
              </Dropdown.Item>
              <Dropdown.Item>
                <StyledLink style={{ color: "#333" }} to="/1965">
                  1965
                </StyledLink>
              </Dropdown.Item>
              <Dropdown.Item>
                <StyledLink style={{ color: "#333" }} to="/1966">
                  1966
                </StyledLink>
              </Dropdown.Item>
              <Dropdown.Item>
                <StyledLink style={{ color: "#333" }} to="/1967">
                  1967
                </StyledLink>
              </Dropdown.Item>
              <Dropdown.Item>
                <StyledLink style={{ color: "#333" }} to="/1967">
                  1968
                </StyledLink>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <StyledLink
            style={{ color: "#fff" }}
            to="/dancelandbandstand"
            style={{ color: "#fff" }}
            className="mx-2"
          >
            Danceland Bandstand
          </StyledLink>
          <StyledLink
            style={{ color: "#fff" }}
            to="/about"
            style={{ color: "#fff" }}
            className="mx-2"
          >
            About
          </StyledLink>
          <StyledLink
            style={{ color: "#fff" }}
            to="/contact"
            style={{ color: "#fff" }}
            className="mx-2"
          >
            Contact
          </StyledLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

header.propTypes = {}

export default header
