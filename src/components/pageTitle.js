import React, { Component } from "react"
import PropTypes from "prop-types"
import HeaderImg from "../images/Front_Wider.jpg"

export class pageTitle extends Component {
  static propTypes = {
    title: PropTypes.string,
  }

  render() {
    return (
      <div
        className="flex justify-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(255,255,255,1)), url(${HeaderImg})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          height: "50vh",
          marginTop: "-88px",
        }}
      >
        <div className="self-center text-black">
          <h2
            className="text-center py-4"
            style={{
              fontSize: "4rem",
              fontWeight: "700",
              textDecoration: "underline",
              fontFamily: "Open Sans",
              marginTop: "75px",
            }}
          >
            {this.props.title}
          </h2>
        </div>
      </div>
    )
  }
}

export default pageTitle
