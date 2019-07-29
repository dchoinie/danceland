import React, { Component } from "react"
import Layout from "../components/layout"
import styled from "styled-components"
import PageTitle from "../components/pageTitle"
import YearData from "../data/data1957"
import Hr from "../components/Hr"
import StickyYear from "../components/stickyYear"

const StyledImg = styled.img`
  img[src=""] {
    display: none;
  }
`

export class page1957 extends Component {
  render() {
    return (
      <Layout>
        <PageTitle title="1957" />
        <div className="container mx-auto">
          <StickyYear year="1957" />
          <p className="container max-w-4xl mx-auto mb-8"></p>
          <div className="row text-center">
            <div className="col px-4 lg:px-0">
              {YearData.map((ItemDetail, index) => {
                return (
                  <>
                    <p>
                      {ItemDetail.fullDate}, {ItemDetail.weekday}
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
                      <StyledImg
                        src={ItemDetail.img6}
                        alt=""
                        className=""
                        style={{
                          maxHeight: "400px",
                        }}
                      />
                      <StyledImg
                        src={ItemDetail.img7}
                        alt=""
                        className=""
                        style={{
                          maxHeight: "400px",
                        }}
                      />
                      <StyledImg
                        src={ItemDetail.img8}
                        alt=""
                        className=""
                        style={{
                          maxHeight: "400px",
                        }}
                      />
                      <StyledImg
                        src={ItemDetail.img9}
                        alt=""
                        className=""
                        style={{
                          maxHeight: "400px",
                        }}
                      />
                      <StyledImg
                        src={ItemDetail.img10}
                        alt=""
                        className=""
                        style={{
                          maxHeight: "400px",
                        }}
                      />
                      <StyledImg
                        src={ItemDetail.img11}
                        alt=""
                        className=""
                        style={{
                          maxHeight: "400px",
                        }}
                      />
                      <StyledImg
                        src={ItemDetail.img12}
                        alt=""
                        className=""
                        style={{
                          maxHeight: "400px",
                        }}
                      />
                      <StyledImg
                        src={ItemDetail.img13}
                        alt=""
                        className=""
                        style={{
                          maxHeight: "400px",
                        }}
                      />
                      <StyledImg
                        src={ItemDetail.img14}
                        alt=""
                        className=""
                        style={{
                          maxHeight: "400px",
                        }}
                      />
                      <StyledImg
                        src={ItemDetail.img15}
                        alt=""
                        className=""
                        style={{
                          maxHeight: "400px",
                        }}
                      />
                      <StyledImg
                        src={ItemDetail.img16}
                        alt=""
                        className=""
                        style={{
                          maxHeight: "400px",
                        }}
                      />
                      <StyledImg
                        src={ItemDetail.img17}
                        alt=""
                        className=""
                        style={{
                          maxHeight: "400px",
                        }}
                      />
                      <StyledImg
                        src={ItemDetail.img18}
                        alt=""
                        className=""
                        style={{
                          maxHeight: "400px",
                        }}
                      />
                      <StyledImg
                        src={ItemDetail.img19}
                        alt=""
                        className=""
                        style={{
                          maxHeight: "400px",
                        }}
                      />
                      <StyledImg
                        src={ItemDetail.img20}
                        alt=""
                        className=""
                        style={{
                          maxHeight: "400px",
                        }}
                      />
                      <StyledImg
                        src={ItemDetail.img21}
                        alt=""
                        className=""
                        style={{
                          maxHeight: "400px",
                        }}
                      />
                      <StyledImg
                        src={ItemDetail.img22}
                        alt=""
                        className=""
                        style={{
                          maxHeight: "400px",
                        }}
                      />
                      <StyledImg
                        src={ItemDetail.img23}
                        alt=""
                        className=""
                        style={{
                          maxHeight: "400px",
                        }}
                      />
                      <StyledImg
                        src={ItemDetail.img24}
                        alt=""
                        className=""
                        style={{
                          maxHeight: "400px",
                        }}
                      />
                      <StyledImg
                        src={ItemDetail.img25}
                        alt=""
                        className=""
                        style={{
                          maxHeight: "400px",
                        }}
                      />
                      <StyledImg
                        src={ItemDetail.img26}
                        alt=""
                        className=""
                        style={{
                          maxHeight: "400px",
                        }}
                      />
                      <StyledImg
                        src={ItemDetail.img27}
                        alt=""
                        className=""
                        style={{
                          maxHeight: "400px",
                        }}
                      />
                      <StyledImg
                        src={ItemDetail.img28}
                        alt=""
                        className=""
                        style={{
                          maxHeight: "400px",
                        }}
                      />
                      <StyledImg
                        src={ItemDetail.img29}
                        alt=""
                        className=""
                        style={{
                          maxHeight: "400px",
                        }}
                      />
                      <StyledImg
                        src={ItemDetail.img30}
                        alt=""
                        className=""
                        style={{
                          maxHeight: "400px",
                        }}
                      />
                      <StyledImg
                        src={ItemDetail.img31}
                        alt=""
                        className=""
                        style={{
                          maxHeight: "400px",
                        }}
                      />
                      <StyledImg
                        src={ItemDetail.img32}
                        alt=""
                        className=""
                        style={{
                          maxHeight: "400px",
                        }}
                      />
                      <StyledImg
                        src={ItemDetail.img33}
                        alt=""
                        className=""
                        style={{
                          maxHeight: "400px",
                        }}
                      />
                      <StyledImg
                        src={ItemDetail.img34}
                        alt=""
                        className=""
                        style={{
                          maxHeight: "400px",
                        }}
                      />
                      <StyledImg
                        src={ItemDetail.img35}
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
      </Layout>
    )
  }
}

export default page1957
