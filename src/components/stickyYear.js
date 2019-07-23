import React, { Component } from "react"
import PropTypes from "prop-types"

export class stickyYear extends Component {
  static propTypes = {
    year: PropTypes.string.isRequired,
  }

  render() {
    return (
      <div id="stickyYear" className="text-black flex">
        <p className="text-gray-900 text-xl">{this.props.year}</p>
      </div>
    )
  }
}

export default stickyYear
