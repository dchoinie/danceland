import React, { Component } from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import Vinyl from "../images/vinyl.png"

export class recordSpinner extends Component {
  state = {
    isHovered: false,
  }

  static propTypes = {
    year: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
  }
  render() {
    return (
      <div className="">
        <Link to={this.props.to}>
          <div className="flex justify-center" style={{ position: "relative" }}>
            <img
              onMouseOver={() => this.setState({ isHovered: true })}
              onMouseLeave={() => this.setState({ isHovered: false })}
              className={this.state.isHovered ? "rotate" : ""}
              src={Vinyl}
              alt=""
              style={{ maxWidth: "200px" }}
            />
            <h2
              onMouseOver={() => this.setState({ isHovered: true })}
              onMouseLeave={() => this.setState({ isHovered: false })}
              className="text-5xl text-white font-bold"
              style={{
                position: "absolute",
                top: "15%",
                left: "50%",
                transform: "translate(-50%, 50%)",
              }}
            >
              {this.props.year}
            </h2>
          </div>
        </Link>
      </div>
    )
  }
}

export default recordSpinner
