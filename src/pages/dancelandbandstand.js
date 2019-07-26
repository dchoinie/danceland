import React, { Component } from "react"
import Layout from "../components/layout"
import styled from "styled-components"
import PageTitle from "../components/pageTitle"
import YearData from "../data/dataDancelandBandstand"
import Hr from "../components/Hr"

const StyledImg = styled.img`
  img[src=""] {
    display: none;
  }
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
`

export class dancelandBandstand extends Component {
  render() {
    return (
      <Layout>
        <div>
          <PageTitle title="Danceland Bandstand" />
          <div className="container mx-auto">
            <div className="row text-center">
              <div className="col">
                {YearData.map((ItemDetail, index) => {
                  return (
                    <>
                      <p>{ItemDetail.date}</p>
                      <h3 className="text-2xl">{ItemDetail.artist}</h3>
                      <p>{ItemDetail.price}</p>
                      <div className="flex flex-wrap justify-center">
                        <StyledImg
                          src={ItemDetail.img1}
                          alt=""
                          className=""
                          style={{
                            maxHeight: "400px",
                            maxWidth: "400px",
                          }}
                        />
                        <StyledImg
                          src={ItemDetail.img2}
                          alt=""
                          className=""
                          style={{
                            maxHeight: "400px",
                          }}
                        />
                        <StyledImg
                          src={ItemDetail.img3}
                          alt=""
                          className=""
                          style={{
                            maxHeight: "400px",
                          }}
                        />
                        <StyledImg
                          src={ItemDetail.img4}
                          alt=""
                          className=""
                          style={{
                            maxHeight: "400px",
                          }}
                        />
                        <StyledImg
                          src={ItemDetail.img5}
                          alt=""
                          className=""
                          style={{
                            maxHeight: "400px",
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
        </div>
      </Layout>
    )
  }
}

export default dancelandBandstand
