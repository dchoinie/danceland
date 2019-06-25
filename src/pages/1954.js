import React, { Component } from "react"
import Layout from "../components/layout"
import styled from "styled-components"
import PageTitle from "../components/pageTitle"
import YearData from "../data/data1954"
import Hr from "../components/Hr"

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
        <div className="container mx-auto">
          <div className="row text-center">
            <div className="col">
              {YearData.map((ItemDetail, index) => {
                return (
                  <>
                    <p>
                      {ItemDetail.weekday} {ItemDetail.date}
                    </p>
                    <h3 className="text-2xl">{ItemDetail.artist}</h3>
                    <p>{ItemDetail.price}</p>
                    <div className="flex flex-wrap justify-center">
                      <StyledImg
                        src={ItemDetail.img1}
                        alt=""
                        className=""
                        style={{
                          maxHeight: "400px",
                          boxShadow: "2px 2px 10px #333",
                          borderRadius: "0.5rem",
                        }}
                      />
                      <StyledImg
                        src={ItemDetail.img2}
                        alt=""
                        className=""
                        style={{
                          maxHeight: "400px",
                          boxShadow: "2px 2px 10px #333",
                          borderRadius: "0.5rem",
                        }}
                      />
                      <StyledImg
                        src={ItemDetail.img3}
                        alt=""
                        className=""
                        style={{
                          maxHeight: "400px",
                          boxShadow: "2px 2px 10px #333",
                          borderRadius: "0.5rem",
                        }}
                      />
                    </div>
                    <Hr />
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
