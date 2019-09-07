import React, { Component } from "react"
import PropTypes from "prop-types"

export class marquee extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    artists: PropTypes.string.isRequired,
  }

  render() {
    return (
      <div
        className="flex-col text-center max-w-5xl mx-auto my-6"
        style={{
          backgroundColor: "rgba(30,30,30,1)",
          padding: "0.75rem",
          borderRadius: "25px",
        }}
      >
        <h2 className="text-white text-3xl py-2">{this.props.title}</h2>
        <div id="marquee">
          <ul id="top">
            <li className="bulb"></li>
            <li className="bulb"></li>
            <li className="bulb"></li>
            <li className="bulb"></li>
            <li className="bulb"></li>
            <li className="bulb"></li>
            <li className="bulb"></li>
            <li className="bulb"></li>
            <li className="bulb"></li>
            <li className="bulb"></li>
            <li className="bulb"></li>
            <li className="bulb"></li>
            <li className="bulb"></li>
            <li className="bulb"></li>
            <li className="bulb"></li>
            <li className="bulb"></li>
            <li className="bulb"></li>
            <li className="bulb"></li>
            <li className="bulb"></li>
            <li className="bulb"></li>
            <li className="bulb"></li>
            <li className="bulb"></li>
            <li className="bulb"></li>
            <li className="bulb"></li>
            <li className="bulb"></li>
            <li className="bulb"></li>
            <li className="bulb"></li>
            <li className="bulb"></li>
            <li className="bulb"></li>
          </ul>
          <div className="text-white text-xl flex justify-center relative h-full">
            <ul className="flex-col self-center w-full">
              <li
                className="my-2 mx-6"
                style={{
                  borderTop: "1px solid white",
                  borderBottom: "1px solid white",
                }}
              >
                Wayne King &amp; His Orchestra
              </li>
              <li
                className="my-2 mx-6"
                style={{
                  borderTop: "1px solid white",
                  borderBottom: "1px solid white",
                }}
              >
                “Whoopee” John Wilfahrt &amp; His Orchestra
              </li>
              <li
                className="my-2 mx-6"
                style={{
                  borderTop: "1px solid white",
                  borderBottom: "1px solid white",
                }}
              >
                WNAX Bohemian Band
              </li>
              <li
                className="my-2 mx-6"
                style={{
                  borderTop: "1px solid white",
                  borderBottom: "1px solid white",
                }}
              >
                Fezz Fritsche &amp; His Goosetown Band
              </li>
              <li
                className="my-2 mx-6"
                style={{
                  borderTop: "1px solid white",
                  borderBottom: "1px solid white",
                }}
              >
                Six Fat Dutchmen
              </li>
              <li
                className="my-2 mx-6"
                style={{
                  borderTop: "1px solid white",
                  borderBottom: "1px solid white",
                }}
              >
                Frank Yankovic &amp; His Yanks
              </li>
            </ul>
          </div>
          <ul id="right">
            <li className="bulb"></li>
            <li className="bulb"></li>
            <li className="bulb"></li>
            <li className="bulb"></li>
            <li className="bulb"></li>
            <li className="bulb"></li>
            <li className="bulb"></li>
            <li className="bulb"></li>
            <li className="bulb"></li>
            <li className="bulb"></li>
            <li className="bulb"></li>
            <li className="bulb"></li>
          </ul>
          <ul id="bottom">
            <li className="bulb"></li>
            <li className="bulb"></li>
            <li className="bulb"></li>
            <li className="bulb"></li>
            <li className="bulb"></li>
            <li className="bulb"></li>
            <li className="bulb"></li>
            <li className="bulb"></li>
            <li className="bulb"></li>
            <li className="bulb"></li>
            <li className="bulb"></li>
            <li className="bulb"></li>
            <li className="bulb"></li>
            <li className="bulb"></li>
            <li className="bulb"></li>
            <li className="bulb"></li>
            <li className="bulb"></li>
            <li className="bulb"></li>
            <li className="bulb"></li>
            <li className="bulb"></li>
            <li className="bulb"></li>
            <li className="bulb"></li>
            <li className="bulb"></li>
            <li className="bulb"></li>
            <li className="bulb"></li>
            <li className="bulb"></li>
            <li className="bulb"></li>
            <li className="bulb"></li>
            <li className="bulb"></li>
          </ul>
          <ul id="left">
            <li className="bulb"></li>
            <li className="bulb"></li>
            <li className="bulb"></li>
            <li className="bulb"></li>
            <li className="bulb"></li>
            <li className="bulb"></li>
            <li className="bulb"></li>
            <li className="bulb"></li>
            <li className="bulb"></li>
            <li className="bulb"></li>
            <li className="bulb"></li>
            <li className="bulb"></li>
          </ul>
        </div>
      </div>
    )
  }
}

export default marquee
