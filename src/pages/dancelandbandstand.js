import React, { Component } from "react"
import Layout from "../components/layout"
import styled from "styled-components"
import PageTitle from "../components/pageTitle"
import DancelandBandstandImage from "../images/dancelandBandstand.png"
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
          <PageTitle />
          <div className="container mx-auto">
            <div className="row text-center">
              <div className="col">
                <div
                  className="flex justify-center"
                  style={{ marginTop: "-225px", marginBottom: "75px" }}
                >
                  <img
                    src={DancelandBandstandImage}
                    alt="Danceland Bandstand"
                  />
                </div>
                <p className="my-6 px-4 lg:px-12 text-left">
                  In December 1957 Danceland’s Darlowe Olsen created a local
                  television dance program that was modeled/patterned after Dick
                  Clark’s American Bandstand. He called it Danceland Bandstand,
                  natch. The dances were held on Sunday afternoons from 2-5 PM
                  and telecast over KCRG-TV from 3-4. Local KCRG radio disc
                  jockeys &#40;Dave Etzel, Jim Young, Jim Jensen&#41; served as
                  the host/emcee. The dances were for ages 13-18. Dress-up rules
                  applied and parents were always welcome. It ran for two
                  seasons. Both seasons featured a combination of records hops,
                  local live music and an occasional national act. Sometimes a
                  national act would play Saturday night and hold over for the
                  Sunday slot.
                </p>
                <Hr />
                <p className="text-center my-4 uppercase text-xl font-bold">
                  Season One &#40;1957-1958&#41;
                </p>
                {YearData.map((ItemDetail, index) => {
                  return (
                    <div className="px-4 lg:px-0">
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

export default dancelandBandstand
