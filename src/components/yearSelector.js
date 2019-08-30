import React, { Component } from "react"
import { Link } from "gatsby"
import RecordSpinner from "../components/recordSpinner"

class YearSelector extends Component {
  state = {
    isHovered: false,
  }

  render() {
    console.log(this.state.isHovered)
    return (
      <div className="my-12">
        <h2 className="text-center text-4xl font-bold">Search By Year</h2>
        <div id="yearSelectorWrapper" className="container mx-auto">
          <RecordSpinner year="1954" to="/1954" />
          <RecordSpinner year="1955" to="/1955" />
          <RecordSpinner year="1956" to="/1956" />
          <RecordSpinner year="1957" to="/1957" />
          <RecordSpinner year="1958" to="/1958" />
          <RecordSpinner year="1959" to="/1959" />
          <RecordSpinner year="1960" to="/1960" />
          <RecordSpinner year="1961" to="/1961" />
          <RecordSpinner year="1962" to="/1962" />
          <RecordSpinner year="1963" to="/1963" />
          <RecordSpinner year="1964" to="/1964" />
          <RecordSpinner year="1965" to="/1965" />
          <RecordSpinner year="1966" to="/1966" />
          <RecordSpinner year="1967" to="/1967" />
          <RecordSpinner year="1968" to="/1968" />
        </div>
      </div>
    )
  }
}

export default YearSelector

{
  /* <>
        <h2 className="text-center text-5xl font-bold">Search By Year</h2>
        <div
          id="yearSelectorWrapper"
          className="container mx-auto px-6 text-white mb-12 text-center"
        >
          <Link className="yearLink"
            to="/1954"
            className="bg-gray-900 text-3xl flex justify-center hover:bg-gray-800 hover:text-white"
            style={{ borderRadius: "50%", height: "12rem" }}
          >
            <div className="self-center">
              <h2>1954</h2>
            </div>
          </Link>
          <Link className="yearLink"
            to="/1955"
            className="bg-gray-900 text-3xl flex justify-center rounded-xl hover:bg-gray-800 hover:text-white"
            style={{ borderRadius: "50%", height: "12rem" }}
          >
            <div className="self-center">
              <h2>1955</h2>
            </div>
          </Link>
          <Link className="yearLink"
            to="/1956"
            className="bg-gray-900 text-3xl flex justify-center rounded-xl hover:bg-gray-800 hover:text-white"
            style={{ borderRadius: "50%", height: "12rem" }}
          >
            <div className="self-center">
              <h2>1956</h2>
            </div>
          </Link>
          <Link className="yearLink"
            to="/1957"
            className="bg-gray-900 text-3xl flex justify-center rounded-xl hover:bg-gray-800 hover:text-white"
            style={{ borderRadius: "50%", height: "12rem" }}
          >
            <div className="self-center">
              <h2>1957</h2>
            </div>
          </Link>
          <Link className="yearLink"
            to="/1958"
            className="bg-gray-900 text-3xl flex justify-center rounded-xl hover:bg-gray-800 hover:text-white"
            style={{ borderRadius: "50%", height: "12rem" }}
          >
            <div className="self-center">
              <h2>1958</h2>
            </div>
          </Link>
          <Link className="yearLink"
            to="/1959"
            className="bg-gray-900 text-3xl flex justify-center rounded-xl hover:bg-gray-800 hover:text-white"
            style={{ borderRadius: "50%", height: "12rem" }}
          >
            <div className="self-center">
              <h2>1959</h2>
            </div>
          </Link>
          <Link className="yearLink"
            to="/1960"
            className="bg-gray-900 text-3xl flex justify-center rounded-xl hover:bg-gray-800 hover:text-white"
            style={{ borderRadius: "50%", height: "12rem" }}
          >
            <div className="self-center">
              <h2>1960</h2>
            </div>
          </Link>
          <Link className="yearLink"
            to="/1961"
            className="bg-gray-900 text-3xl flex justify-center rounded-xl hover:bg-gray-800 hover:text-white"
            style={{ borderRadius: "50%", height: "12rem" }}
          >
            <div className="self-center">
              <h2>1961</h2>
            </div>
          </Link>
          <Link className="yearLink"
            to="/1962"
            className="bg-gray-900 text-3xl flex justify-center rounded-xl hover:bg-gray-800 hover:text-white"
            style={{ borderRadius: "50%", height: "12rem" }}
          >
            <div className="self-center">
              <h2>1962</h2>
            </div>
          </Link>
          <Link className="yearLink"
            to="/1963"
            className="bg-gray-900 text-3xl flex justify-center rounded-xl hover:bg-gray-800 hover:text-white"
            style={{ borderRadius: "50%", height: "12rem" }}
          >
            <div className="self-center">
              <h2>1963</h2>
            </div>
          </Link>
          <Link className="yearLink"
            to="/1964"
            className="bg-gray-900 text-3xl flex justify-center rounded-xl hover:bg-gray-800 hover:text-white"
            style={{ borderRadius: "50%", height: "12rem" }}
          >
            <div className="self-center">
              <h2>1964</h2>
            </div>
          </Link>
          <Link className="yearLink"
            to="/1965"
            className="bg-gray-900 text-3xl flex justify-center rounded-xl hover:bg-gray-800 hover:text-white"
            style={{ borderRadius: "50%", height: "12rem" }}
          >
            <div className="self-center">
              <h2>1965</h2>
            </div>
          </Link>
          <Link className="yearLink"
            to="/1966"
            className="bg-gray-900 text-3xl flex justify-center rounded-xl hover:bg-gray-800 hover:text-white"
            style={{ borderRadius: "50%", height: "12rem" }}
          >
            <div className="self-center">
              <h2>1966</h2>
            </div>
          </Link>
          <Link className="yearLink"
            to="/1967"
            className="bg-gray-900 text-3xl flex justify-center rounded-xl hover:bg-gray-800 hover:text-white"
            style={{ borderRadius: "50%", height: "12rem" }}
          >
            <div className="self-center">
              <h2>1967</h2>
            </div>
          </Link>
          <Link className="yearLink"
            to="/1968"
            className="bg-gray-900 text-3xl flex justify-center rounded-xl hover:bg-gray-800 hover:text-white"
            style={{ borderRadius: "50%", height: "12rem" }}
          >
            <div className="self-center">
              <h2>1968</h2>
            </div>
          </Link>
        </div>
      </> */
}
