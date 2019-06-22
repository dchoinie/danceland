import React, { Component } from "react"
import Container from "react-bootstrap"
import Row from "react-bootstrap"
import Col from "react-bootstrap"
import YearData from "../data/data1954"

class FetchRandomUser extends Component {
  render() {
    return (
      <div className="container text-center">
        <div className="row">
          <div className="col">
            {YearData.map((ItemDetail, index) => {
              return (
                <>
                  <p>
                    {ItemDetail.Weekday}, {ItemDetail.Date}
                  </p>
                  <p>{ItemDetail.Artist}</p>
                  <p>{ItemDetail.Price}</p>
                  <div className="row">
                    <div className="col-md">
                      <img src={ItemDetail.Img1} alt="" />
                    </div>
                    <div className="col-md">
                      <img src={ItemDetail.Img2} alt="" />
                    </div>
                    <div className="col-md">
                      <img src="https://via.placeholder.com/300" alt="" />
                    </div>
                  </div>
                  <hr />
                </>
              )
            })}
          </div>
        </div>
      </div>
    )
  }
}

export default FetchRandomUser
