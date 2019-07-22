import React, { Component } from "react"
import styled from "styled-components"
import { Link } from "gatsby"

class YearSelector extends Component {
  render() {
    return (
      <>
        <h2 className="font-bold text-4xl text-center py-16">Browse By Year</h2>
        <div className="container px-4 mx-auto py-8">
          <div class="flex mb-4 text-center">
            <div class="w-1/5 bg-gray-800 hover:bg-gray-700">
              <Link to="/1954">
                <h2 className="text-lg font-bold py-4 text-pink-500">1954</h2>
              </Link>
            </div>
            <div class="w-1/5 bg-gray-400 hover:bg-gray-500">
              <Link to="/1955">
                <h2 className="text-lg font-bold py-4 text-pink-500">1955</h2>
              </Link>
            </div>
            <div class="w-1/5 bg-gray-800 hover:bg-gray-700">
              <Link to="/1956">
                <h2 className="text-lg font-bold py-4 text-pink-500">1956</h2>
              </Link>
            </div>
            <div class="w-1/5 bg-gray-400 hover:bg-gray-500">
              <Link to="/1957">
                <h2 className="text-lg font-bold py-4 text-pink-500">1957</h2>
              </Link>
            </div>
            <div class="w-1/5 bg-gray-800 hover:bg-gray-700">
              <Link to="/1958">
                <h2 className="text-lg font-bold py-4 text-pink-500">1958</h2>
              </Link>
            </div>
          </div>
          <div class="flex mb-4 text-center">
            <div class="w-1/5 bg-gray-400 hover:bg-gray-500">
              <Link to="/1959">
                <h2 className="text-lg font-bold py-4 text-pink-500">1959</h2>
              </Link>
            </div>
            <div class="w-1/5 bg-gray-800 hover:bg-gray-700 text-pink-500">
              <Link to="/1960">
                <h2 className="text-lg font-bold py-4 text-pink-500">1960</h2>
              </Link>
            </div>
            <div class="w-1/5 bg-gray-400 hover:bg-gray-500">
              <Link to="/1961">
                <h2 className="text-lg font-bold py-4 text-pink-500">1961</h2>
              </Link>
            </div>
            <div class="w-1/5 bg-gray-800 hover:bg-gray-700 text-pink-500">
              <Link to="/1962">
                <h2 className="text-lg font-bold py-4 text-pink-500">1962</h2>
              </Link>
            </div>
            <div class="w-1/5 bg-gray-400 hover:bg-gray-500">
              <Link to="/1963">
                <h2 className="text-lg font-bold py-4 text-pink-500">1963</h2>
              </Link>
            </div>
          </div>
          <div class="flex mb-4 text-center">
            <div class="w-1/5 bg-gray-800 hover:bg-gray-700">
              <Link to="/1964">
                <h2 className="text-lg font-bold py-4 text-pink-500">1964</h2>
              </Link>
            </div>
            <div class="w-1/5 bg-gray-400 hover:bg-gray-500">
              <Link to="/1965">
                <h2 className="text-lg font-bold py-4 text-pink-500">1965</h2>
              </Link>
            </div>
            <div class="w-1/5 bg-gray-800 hover:bg-gray-700">
              <Link to="/1966">
                <h2 className="text-lg font-bold py-4 text-pink-500">1966</h2>
              </Link>
            </div>
            <div class="w-1/5 bg-gray-400 hover:bg-gray-500">
              <Link to="/1967">
                <h2 className="text-lg font-bold py-4 text-pink-500">1967</h2>
              </Link>
            </div>
            <div class="w-1/5 bg-gray-800 hover:bg-gray-700">
              <Link to="/1968">
                <h2 className="text-lg font-bold py-4 text-pink-500">1968</h2>
              </Link>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default YearSelector
