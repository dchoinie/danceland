import React, { Component } from "react"
import PropTypes from "prop-types"

export class pageTitle extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
  }

  render() {
    return (
      <div>
        <h2
          className="text-center my-4"
          style={{
            fontSize: "3rem",
            fontWeight: "700",
            textDecoration: "underline",
            fontFamily: "Open Sans",
          }}
        >
          {this.props.title}
        </h2>
      </div>
    )
  }
}

export default pageTitle
