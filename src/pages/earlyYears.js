import React, { Component } from "react"
import Layout from "../components/layout"
import styled from "styled-components"
import PageTitle from "../components/pageTitle"
import YearData from "../data/dataEarlyYears"
import Hr from "../components/Hr"

const StyledImg = styled.img`
  img[src=""] {
    display: none;
  }
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
`

export class earlyYears extends Component {
  render() {
    return (
      <Layout>
        <div>
          <PageTitle title="Early Years" />
          <div className="container mx-auto">
            <div className="row text-center">
              <div className="col">
                {YearData.map((ItemDetail, index) => {
                  return (
                    <div className="px-4 lg:px-0">
                      <p>{ItemDetail.Full_Date}</p>
                      <h3 className="text-2xl">{ItemDetail.Artist}</h3>
                      <div className="flex flex-wrap justify-center">
                        <StyledImg
                          src={ItemDetail.Img1}
                          alt=""
                          className=""
                          style={{
                            maxHeight: "400px",
                            // maxWidth: "400px",
                          }}
                        />
                        <StyledImg
                          src={ItemDetail.Img2}
                          alt=""
                          className=""
                          style={{
                            maxHeight: "400px",
                          }}
                        />
                        <StyledImg
                          src={ItemDetail.Img3}
                          alt=""
                          className=""
                          style={{
                            maxHeight: "400px",
                          }}
                        />
                        <StyledImg
                          src={ItemDetail.Img4}
                          alt=""
                          className=""
                          style={{
                            maxHeight: "400px",
                          }}
                        />
                        <StyledImg
                          src={ItemDetail.Img5}
                          alt=""
                          className=""
                          style={{
                            maxHeight: "400px",
                          }}
                        />
                      </div>
                      <Hr />
                    </div>
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

export default earlyYears
