import React, { Component } from "react"
import Layout from "../components/layout"
import styled from "styled-components"
import PageTitle from "../components/pageTitle"
import YearData from "../data/data1955"
import Hr from "../components/Hr"

const StyledImg = styled.img`
  img[src=""] {
    display: none;
  }
`
export class page1955 extends Component {
  render() {
    return (
      <Layout>
        <PageTitle title="1955" />
        <div className="container mx-auto flex flex-wrap">
          <p className="container max-w-4xl mx-auto mb-8">
            1955 was the year live rock and roll came to Cedar Rapids. The date
            was October 6th and the band was Bill Haley & His Comets. That would
            signal the beginning of Danceland being the place for eastern Iowans
            to witness live rock and roll. Later that month Boyd Bennett & His
            Rockets, became the second rock and rollers to make an appearance.
            Also gracing the Danceland stage in 1955 were the innovating
            orchestra of Sauter-Finegan, polka great “Whoopee” John Wilfahrt &
            His Orchestra and Yankton South Dakota’s popular WNAX Bohemian Band.
            Major country acts include Pee Wee King & His Golden West Cowboys
            and Bob Wills & His Texas Playboys.{" "}
          </p>
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

export default page1955
