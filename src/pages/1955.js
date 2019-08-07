import React, { Component } from "react"
import Layout from "../components/layout"
import styled from "styled-components"
import PageTitle from "../components/pageTitle"
import YearData from "../data/data1955"
import Hr from "../components/Hr"
import StickyYear from "../components/stickyYear"

const StyledImg = styled.img`
  img[src=""] {
    display: none;
  }
`

export class page1954 extends Component {
  render() {
    return (
      <Layout>
        <PageTitle title="1955" />
        <div className="container mx-auto">
          <StickyYear year="1955" />
          <p className="container max-w-4xl mx-auto mb-8">1955 was the year live rock and roll came to Cedar Rapids. The date was October 6th and the band was Bill Haley &amp; His Comets. That would signal the beginning of Danceland being the place for eastern Iowans to witness live rock and roll. Later that month Boyd Bennett &amp; His Rockets, became the second rock and rollers to make an appearance. Also gracing the Danceland stage in 1955 were the innovating orchestra of Sauter-Finegan, polka great “Whoopee” John Wilfahrt &amp; His Orchestra and Yankton South Dakota’s popular WNAX Bohemian Band. Major country acts include Pee Wee King &amp; His Golden West Cowboys and Bob Wills &amp; His Texas Playboys. </p>
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

export default page1954
