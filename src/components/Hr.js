import React, { Component } from "react"
import styled from "styled-components"

const StyledHr = styled.hr`
  overflow: visible; /* For IE */
  border: none;
  border-top: medium double #333;
  color: #333;
  text-align: center;
  z-index: 1;

  :after {
    content: "D";
    display: inline-block;
    position: relative;
    top: -0.8em;
    font-size: 1em;
    padding: 0 0.25rem;
    background: rgba(255, 255, 255, 1);
    z-index: 40;
  }
`

class Hr extends Component {
  render() {
    return (
      <div className="py-2 max-w-4xl mx-auto my-2">
        <StyledHr />
      </div>
    )
  }
}

export default Hr
