import React, { Component } from "react"
import { Link } from "gatsby"
import Vinyl from "../images/vinyl.png"

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
          <Link className="yearLink" to="/1954">
            <div
              onMouseOver={() => this.setState({ isHovered: true })}
              onMouseLeave={() => this.setState({ isHovered: false })}
              className={this.state.isHovered ? "rotate" : ""}
              style={{
                backgroundImage: `url(${Vinyl})`,
                backgroundPosition: "center",
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                height: "12rem",
                position: "relative",
              }}
            >
              <h2
                className="text-5xl text-white font-bold"
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                }}
              >
                1954
              </h2>
            </div>
          </Link>
          <Link className="yearLink" to="/1955">
            <div
              style={{
                backgroundImage: `url(${Vinyl})`,
                backgroundPosition: "center",
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                height: "12rem",
                position: "relative",
              }}
            >
              <h2
                className="text-5xl text-white font-bold"
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                }}
              >
                1955
              </h2>
            </div>
          </Link>
          <Link className="yearLink" to="/1956">
            <div
              style={{
                backgroundImage: `url(${Vinyl})`,
                backgroundPosition: "center",
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                height: "12rem",
                position: "relative",
              }}
            >
              <h2
                className="text-5xl text-white font-bold"
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                }}
              >
                1956
              </h2>
            </div>
          </Link>
          <Link className="yearLink" to="/1957">
            <div
              style={{
                backgroundImage: `url(${Vinyl})`,
                backgroundPosition: "center",
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                height: "12rem",
                position: "relative",
              }}
            >
              <h2
                className="text-5xl text-white font-bold"
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                }}
              >
                1957
              </h2>
            </div>
          </Link>
          <Link className="yearLink" to="/1958">
            <div
              style={{
                backgroundImage: `url(${Vinyl})`,
                backgroundPosition: "center",
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                height: "12rem",
                position: "relative",
              }}
            >
              <h2
                className="text-5xl text-white font-bold"
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                }}
              >
                1958
              </h2>
            </div>
          </Link>
          <Link className="yearLink" to="/1959">
            <div
              style={{
                backgroundImage: `url(${Vinyl})`,
                backgroundPosition: "center",
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                height: "12rem",
                position: "relative",
              }}
            >
              <h2
                className="text-5xl text-white font-bold"
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                }}
              >
                1959
              </h2>
            </div>
          </Link>
          <Link className="yearLink" to="/1960">
            <div
              style={{
                backgroundImage: `url(${Vinyl})`,
                backgroundPosition: "center",
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                height: "12rem",
                position: "relative",
              }}
            >
              <h2
                className="text-5xl text-white font-bold"
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                }}
              >
                1960
              </h2>
            </div>
          </Link>
          <Link className="yearLink" to="/1961">
            <div
              style={{
                backgroundImage: `url(${Vinyl})`,
                backgroundPosition: "center",
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                height: "12rem",
                position: "relative",
              }}
            >
              <h2
                className="text-5xl text-white font-bold"
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                }}
              >
                1961
              </h2>
            </div>
          </Link>
          <Link className="yearLink" to="/1962">
            <div
              style={{
                backgroundImage: `url(${Vinyl})`,
                backgroundPosition: "center",
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                height: "12rem",
                position: "relative",
              }}
            >
              <h2
                className="text-5xl text-white font-bold"
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                }}
              >
                1962
              </h2>
            </div>
          </Link>
          <Link className="yearLink" to="/1963">
            <div
              style={{
                backgroundImage: `url(${Vinyl})`,
                backgroundPosition: "center",
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                height: "12rem",
                position: "relative",
              }}
            >
              <h2
                className="text-5xl text-white font-bold"
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                }}
              >
                1963
              </h2>
            </div>
          </Link>
          <Link className="yearLink" to="/1964">
            <div
              style={{
                backgroundImage: `url(${Vinyl})`,
                backgroundPosition: "center",
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                height: "12rem",
                position: "relative",
              }}
            >
              <h2
                className="text-5xl text-white font-bold"
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                }}
              >
                1964
              </h2>
            </div>
          </Link>
          <Link className="yearLink" to="/1965">
            <div
              style={{
                backgroundImage: `url(${Vinyl})`,
                backgroundPosition: "center",
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                height: "12rem",
                position: "relative",
              }}
            >
              <h2
                className="text-5xl text-white font-bold"
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                }}
              >
                1965
              </h2>
            </div>
          </Link>
          <Link className="yearLink" to="/1966">
            <div
              style={{
                backgroundImage: `url(${Vinyl})`,
                backgroundPosition: "center",
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                height: "12rem",
                position: "relative",
              }}
            >
              <h2
                className="text-5xl text-white font-bold"
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                }}
              >
                1966
              </h2>
            </div>
          </Link>
          <Link className="yearLink" to="/1967">
            <div
              style={{
                backgroundImage: `url(${Vinyl})`,
                backgroundPosition: "center",
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                height: "12rem",
                position: "relative",
              }}
            >
              <h2
                className="text-5xl text-white font-bold"
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                }}
              >
                1967
              </h2>
            </div>
          </Link>
          <Link className="yearLink" to="/1968">
            <div
              style={{
                backgroundImage: `url(${Vinyl})`,
                backgroundPosition: "center",
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                height: "12rem",
                position: "relative",
              }}
            >
              <h2
                className="text-5xl text-white font-bold"
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                }}
              >
                1968
              </h2>
            </div>
          </Link>
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
