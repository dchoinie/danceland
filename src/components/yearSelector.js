import React, { Component } from "react"
import styled from "styled-components"
import { Link } from "gatsby"

class YearSelector extends Component {
  render() {
    return (
      <>
        <h2 className="font-bold text-4xl text-center py-16">Search By Year</h2>
        <div className="container px-4 mx-auto py-8">
          <div class="flex mb-4 text-center">
            <div class="w-1/5 bg-black hover:bg-gray-900">
              <Link to="/1954">
                <h2 className="text-lg font-bold py-4 text-red-700">1954</h2>
              </Link>
            </div>
            <div
              class="w-1/5 bg-white hover:bg-gray-100"
              style={{ border: "2px solid #000" }}
            >
              <Link to="/1955">
                <h2 className="text-lg font-bold py-4 text-red-700">1955</h2>
              </Link>
            </div>
            <div class="w-1/5 bg-black hover:bg-gray-900">
              <Link to="/1956">
                <h2 className="text-lg font-bold py-4 text-red-700">1956</h2>
              </Link>
            </div>
            <div
              class="w-1/5 bg-white hover:bg-gray-100"
              style={{ border: "2px solid #000" }}
            >
              <Link to="/1957">
                <h2 className="text-lg font-bold py-4 text-red-700">1957</h2>
              </Link>
            </div>
            <div class="w-1/5 bg-black hover:bg-gray-900">
              <Link to="/1958">
                <h2 className="text-lg font-bold py-4 text-red-700">1958</h2>
              </Link>
            </div>
          </div>
          <div class="flex mb-4 text-center">
            <div
              class="w-1/5 bg-white hover:bg-gray-100"
              style={{ border: "2px solid #000" }}
            >
              <Link to="/1959">
                <h2 className="text-lg font-bold py-4 text-red-700">1959</h2>
              </Link>
            </div>
            <div class="w-1/5 bg-black hover:bg-gray-900 text-red-700">
              <Link to="/1960">
                <h2 className="text-lg font-bold py-4 text-red-700">1960</h2>
              </Link>
            </div>
            <div
              class="w-1/5 bg-white hover:bg-gray-100"
              style={{ border: "2px solid #000" }}
            >
              <Link to="/1961">
                <h2 className="text-lg font-bold py-4 text-red-700">1961</h2>
              </Link>
            </div>
            <div class="w-1/5 bg-black hover:bg-gray-900 text-red-700">
              <Link to="/1962">
                <h2 className="text-lg font-bold py-4 text-red-700">1962</h2>
              </Link>
            </div>
            <div
              class="w-1/5 bg-white hover:bg-gray-100"
              style={{ border: "2px solid #000" }}
            >
              <Link to="/1963">
                <h2 className="text-lg font-bold py-4 text-red-700">1963</h2>
              </Link>
            </div>
          </div>
          <div class="flex mb-4 text-center">
            <div class="w-1/5 bg-black hover:bg-gray-900">
              <Link to="/1964">
                <h2 className="text-lg font-bold py-4 text-red-700">1964</h2>
              </Link>
            </div>
            <div
              class="w-1/5 bg-white hover:bg-gray-100"
              style={{ border: "2px solid #000" }}
            >
              <Link to="/1965">
                <h2 className="text-lg font-bold py-4 text-red-700">1965</h2>
              </Link>
            </div>
            <div class="w-1/5 bg-black hover:bg-gray-900">
              <Link to="/1966">
                <h2 className="text-lg font-bold py-4 text-red-700">1966</h2>
              </Link>
            </div>
            <div
              class="w-1/5 bg-white hover:bg-gray-100"
              style={{ border: "2px solid #000" }}
            >
              <Link to="/1967">
                <h2 className="text-lg font-bold py-4 text-red-700">1967</h2>
              </Link>
            </div>
            <div class="w-1/5 bg-black hover:bg-gray-900">
              <Link to="/1968">
                <h2 className="text-lg font-bold py-4 text-red-700">1968</h2>
              </Link>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default YearSelector
