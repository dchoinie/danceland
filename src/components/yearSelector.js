import React, { Component } from "react"
import styled from "styled-components"
import { Link } from "gatsby"

class YearSelector extends Component {
  render() {
    return (
      <>
        <h2 className="font-bold text-4xl text-center my-16">Search By Year</h2>
        <div className="container px-4 mx-auto my-8">
          <div class="flex mb-4 text-center">
            <div class="w-1/5 bg-gray-800 hover:bg-gray-700">
              <Link to="/1954">
                <h2 className="text-lg font-bold py-4 text-white">1954</h2>
              </Link>
            </div>
            <div class="w-1/5 bg-gray-400 hover:bg-gray-500">
              <Link to="/1955">
                <h2 className="text-lg font-bold py-4 text-gray-800">1955</h2>
              </Link>
            </div>
            <div class="w-1/5 bg-gray-800 hover:bg-gray-700">
              <Link to="/1956">
                <h2 className="text-lg font-bold py-4 text-white">1956</h2>
              </Link>
            </div>
            <div class="w-1/5 bg-gray-400 hover:bg-gray-500 text-gray-800">
              <Link to="/1957">
                <h2 className="text-lg font-bold py-4 text-gray-800">1957</h2>
              </Link>
            </div>
            <div class="w-1/5 bg-gray-800 hover:bg-gray-700">
              <Link to="/1958">
                <h2 className="text-lg font-bold py-4 text-white">1958</h2>
              </Link>
            </div>
          </div>
          <div class="flex mb-4 text-center">
            <div class="w-1/5 bg-gray-400 hover:bg-gray-500 text-gray-800">
              <Link to="/1959">
                <h2 className="text-lg font-bold py-4">1959</h2>
              </Link>
            </div>
            <div class="w-1/5 bg-gray-800 hover:bg-gray-700 text-white">
              <Link to="/1960">
                <h2 className="text-lg font-bold py-4">1960</h2>
              </Link>
            </div>
            <div class="w-1/5 bg-gray-400 hover:bg-gray-500 text-gray-800">
              <Link to="/1961">
                <h2 className="text-lg font-bold py-4">1961</h2>
              </Link>
            </div>
            <div class="w-1/5 bg-gray-800 hover:bg-gray-700 text-white">
              <Link to="/1962">
                <h2 className="text-lg font-bold py-4">1962</h2>
              </Link>
            </div>
            <div class="w-1/5 bg-gray-400 hover:bg-gray-500 text-gray-800">
              <Link to="/1963">
                <h2 className="text-lg font-bold py-4">1963</h2>
              </Link>
            </div>
          </div>
          <div class="flex mb-4 text-center">
            <div class="w-1/5 bg-gray-800 hover:bg-gray-700">
              <Link to="/1964">
                <h2 className="text-lg font-bold py-4 text-white">1964</h2>
              </Link>
            </div>
            <div class="w-1/5 bg-gray-400 hover:bg-gray-500">
              <Link to="/1965">
                <h2 className="text-lg font-bold py-4 text-gray-800">1965</h2>
              </Link>
            </div>
            <div class="w-1/5 bg-gray-800 hover:bg-gray-700">
              <Link to="/1966">
                <h2 className="text-lg font-bold py-4 text-white">1966</h2>
              </Link>
            </div>
            <div class="w-1/5 bg-gray-400 hover:bg-gray-500 text-gray-800">
              <Link to="/1967">
                <h2 className="text-lg font-bold py-4 text-gray-800">1967</h2>
              </Link>
            </div>
            <div class="w-1/5 bg-gray-800 hover:bg-gray-700">
              <Link to="/1968">
                <h2 className="text-lg font-bold py-4 text-white">1968</h2>
              </Link>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default YearSelector
