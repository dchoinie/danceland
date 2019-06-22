import React, { Component } from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Card from "react-bootstrap"

const YearWrapper = styled.div`
  border: 2px solid #333;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  background-color: #333;
  border-radius: 0.25rem;
  :hover {
    background-color: #fff;
  }
`

const StyledLink = styled(Link)`
  color: #fff;
  :hover {
    text-decoration: none;
    color: #333;
  }
`

export class YearSelector extends Component {
  render() {
    return (
      <Container className="my-4">
        <h2 className="text-center my-4">Explore The Archives</h2>
        <div className="row">
          <div className="col-md">
            <StyledLink to="/1954">
              <YearWrapper className="year-wrapper">
                <h3 className="year-header py-3" style={{ marginBottom: "0" }}>
                  1954
                </h3>
              </YearWrapper>
            </StyledLink>
          </div>
          <div className="col-md">
            <StyledLink to="/1955">
              <YearWrapper className="year-wrapper">
                <h3 className="year-header py-3" style={{ marginBottom: "0" }}>
                  1955
                </h3>
              </YearWrapper>
            </StyledLink>
          </div>
          <div className="col-md">
            <StyledLink to="/1956">
              <YearWrapper className="year-wrapper">
                <h3 className="year-header py-3" style={{ marginBottom: "0" }}>
                  1956
                </h3>
              </YearWrapper>
            </StyledLink>
          </div>
          <div className="col-md">
            <StyledLink to="/1957">
              <YearWrapper className="year-wrapper">
                <h3 className="year-header py-3" style={{ marginBottom: "0" }}>
                  1957
                </h3>
              </YearWrapper>
            </StyledLink>
          </div>
          <div className="col-md">
            <StyledLink to="/1958">
              <YearWrapper className="year-wrapper">
                <h3 className="year-header py-3" style={{ marginBottom: "0" }}>
                  1958
                </h3>
              </YearWrapper>
            </StyledLink>
          </div>
        </div>
        <div className="row">
          <div className="col-md">
            <StyledLink to="/1959">
              <YearWrapper className="year-wrapper">
                <h3 className="year-header py-3" style={{ marginBottom: "0" }}>
                  1959
                </h3>
              </YearWrapper>
            </StyledLink>
          </div>
          <div className="col-md">
            <StyledLink to="/1960">
              <YearWrapper className="year-wrapper">
                <h3 className="year-header py-3" style={{ marginBottom: "0" }}>
                  1960
                </h3>
              </YearWrapper>
            </StyledLink>
          </div>
          <div className="col-md">
            <StyledLink to="/1961">
              <YearWrapper className="year-wrapper">
                <h3 className="year-header py-3" style={{ marginBottom: "0" }}>
                  1961
                </h3>
              </YearWrapper>
            </StyledLink>
          </div>
          <div className="col-md">
            <StyledLink to="/1962">
              <YearWrapper className="year-wrapper">
                <h3 className="year-header py-3" style={{ marginBottom: "0" }}>
                  1962
                </h3>
              </YearWrapper>
            </StyledLink>
          </div>
          <div className="col-md">
            <StyledLink to="/1963">
              <YearWrapper className="year-wrapper">
                <h3 className="year-header py-3" style={{ marginBottom: "0" }}>
                  1963
                </h3>
              </YearWrapper>
            </StyledLink>
          </div>
        </div>
        <div className="row">
          <div className="col-md">
            <StyledLink to="/1964">
              <YearWrapper className="year-wrapper">
                <h3 className="year-header py-3" style={{ marginBottom: "0" }}>
                  1964
                </h3>
              </YearWrapper>
            </StyledLink>
          </div>
          <div className="col-md">
            <StyledLink to="/1965">
              <YearWrapper className="year-wrapper">
                <h3 className="year-header py-3" style={{ marginBottom: "0" }}>
                  1965
                </h3>
              </YearWrapper>
            </StyledLink>
          </div>
          <div className="col-md">
            <StyledLink to="/1966">
              <YearWrapper className="year-wrapper">
                <h3 className="year-header py-3" style={{ marginBottom: "0" }}>
                  1966
                </h3>
              </YearWrapper>
            </StyledLink>
          </div>
          <div className="col-md">
            <StyledLink to="/1967">
              <YearWrapper className="year-wrapper">
                <h3 className="year-header py-3" style={{ marginBottom: "0" }}>
                  1967
                </h3>
              </YearWrapper>
            </StyledLink>
          </div>
          <div className="col-md">
            <StyledLink to="/1968">
              <YearWrapper className="year-wrapper">
                <h3 className="year-header py-3" style={{ marginBottom: "0" }}>
                  1968
                </h3>
              </YearWrapper>
            </StyledLink>
          </div>
        </div>
      </Container>
    )
  }
}

export default YearSelector
