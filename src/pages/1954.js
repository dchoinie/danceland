import React, { Component } from "react"
import Layout from "../components/layout"
import styled from "styled-components"
import PageTitle from "../components/pageTitle"
import YearData from "../data/data1954"

const StyledImg = styled.img`
  img[src=""] {
    display: none;
  }
`

export class page1954 extends Component {
  render() {
    return (
      <Layout>
        <PageTitle title="1954" />
        <div className="container">
          <div className="row text-center">
            <div className="col">
              {YearData.map((ItemDetail, index) => {
                return (
                  <>
                    <p>
                      {ItemDetail.weekday}, {ItemDetail.date}
                    </p>
                    <h3>{ItemDetail.artist}</h3>
                    <p>{ItemDetail.price}</p>
                    <div className="d-flex flex-wrap justify-content-center">
                      <StyledImg
                        src={ItemDetail.img1}
                        alt=""
                        className="mx-2"
                        style={{
                          maxWidth: "300px",
                          boxShadow: "2px 2px 10px #333",
                        }}
                      />
                      <StyledImg
                        src={ItemDetail.img2}
                        alt=""
                        className="mx-2"
                        style={{
                          maxWidth: "300px",
                          boxShadow: "2px 2px 10px #333",
                        }}
                      />
                      <StyledImg
                        src={ItemDetail.img3}
                        alt=""
                        className="mx-2"
                        style={{
                          maxWidth: "300px",
                          boxShadow: "2px 2px 10px #333",
                        }}
                      />
                    </div>
                    <hr />
                  </>
                )
              })}
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default page1954
