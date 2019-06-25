import React, { Component } from "react"
import styled from "styled-components"

const StyledHr = styled.hr`
  overflow: visible; /* For IE */
  border: none;
  border-top: medium double #333;
  color: #333;
  text-align: center;

  :after {
    content: "D";
    display: inline-block;
    position: relative;
    top: -0.8em;
    font-size: 1em;
    padding: 0 0.25em;
    background: white;
  }
`

class Hr extends Component {
  render() {
    return (
      <div className="py-2 max-w-4xl mx-auto">
        <StyledHr />
      </div>
    )
  }
}

export default Hr
