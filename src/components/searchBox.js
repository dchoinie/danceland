import React, { Component } from "react"

export class searchBox extends Component {
  constructor(props) {
    super(props)
    this.state = {
      artistFilter: "",
    }
  }

  handleChange = event => {
    this.setState({
      artistFilter: event.target.value,
    })
    this.props.onChange(event.target.value)
  }

  render() {
    return (
      <div>
        <label htmlFor="filter">Search: </label>
        <input
          type="text"
          id="filter"
          value={this.state.artistFilter}
          onChange={this.handleChange}
        />
      </div>
    )
  }
}

export default searchBox
