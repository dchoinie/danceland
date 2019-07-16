import React, { Component } from "react"
import Layout from "../components/layout"
import styled from "styled-components"
import PageTitle from "../components/pageTitle"
import YearData from "../data/data1964"
import Hr from "../components/Hr"

const StyledImg = styled.img`
  img[src=""] {
    display: none;
  }
`

export class page1964 extends Component {
  render() {
    return (
      <Layout>
        <PageTitle title="1964" />
        <div className="container mx-auto flex flex-wrap">
          <p className="container max-w-4xl mx-auto mb-8"></p>
          <div className="row text-center">
            <div className="col">
              {YearData.map((ItemDetail, id) => {
                return (
                  <>
                    <p>
                      {ItemDetail.weekday} {ItemDetail.date}
                    </p>
                    <h3 className="text-2xl">{ItemDetail.artist}</h3>
                    <p>{ItemDetail.price}</p>
                    <p>{ItemDetail.comment}</p>
                    <div className="flex flex-wrap justify-center">
                      <StyledImg
                        src={ItemDetail.img1}
                        alt=""
                        className=""
                        style={{
                          // maxHeight: "400px",
                          boxShadow: "2px 2px 10px #333",
                          borderRadius: "0.5rem",
                        }}
                      />
                      <StyledImg
                        src={ItemDetail.img2}
                        alt=""
                        className=""
                        style={{
                          // maxHeight: "400px",
                          boxShadow: "2px 2px 10px #333",
                          borderRadius: "0.5rem",
                        }}
                      />
                      <StyledImg
                        src={ItemDetail.img3}
                        alt=""
                        className=""
                        style={{
                          // maxHeight: "400px",
                          boxShadow: "2px 2px 10px #333",
                          borderRadius: "0.5rem",
                        }}
                      />
                      <StyledImg
                        src={ItemDetail.img4}
                        alt=""
                        className=""
                        style={{
                          // maxHeight: "400px",
                          boxShadow: "2px 2px 10px #333",
                          borderRadius: "0.5rem",
                        }}
                      />
                      <StyledImg
                        src={ItemDetail.img5}
                        alt=""
                        className=""
                        style={{
                          // maxHeight: "400px",
                          boxShadow: "2px 2px 10px #333",
                          borderRadius: "0.5rem",
                        }}
                      />
                      <StyledImg
                        src={ItemDetail.img6}
                        alt=""
                        className=""
                        style={{
                          // maxHeight: "400px",
                          boxShadow: "2px 2px 10px #333",
                          borderRadius: "0.5rem",
                        }}
                      />
                      <StyledImg
                        src={ItemDetail.img7}
                        alt=""
                        className=""
                        style={{
                          // maxHeight: "400px",
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

export default page1964
