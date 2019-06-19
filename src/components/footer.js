import React, { Component } from "react"
import { Link } from "gatsby"
import "bootstrap/dist/css/bootstrap.css"

export class footer extends Component {
  render() {
    return (
      <div className="row text-center">
        <div className="col">Footer 1</div>
        <div className="col">© {new Date().getFullYear()} | Steve Wilson</div>
        <div className="col">Footer 3</div>
      </div>
    )
  }
}

export default footer
