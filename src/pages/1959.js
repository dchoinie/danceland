import React, { Component } from "react"
import Layout from "../components/layout"
import styled from "styled-components"
import PageTitle from "../components/pageTitle"
import YearData from "../data/data1959"
import Hr from "../components/Hr"
import StickyYear from "../components/stickyYear"

const StyledImg = styled.img`
  img[src=""] {
    display: none;
  }
`

export class page1959 extends Component {
  render() {
    return (
      <Layout>
        <PageTitle title="1959" />
        <div className="container mx-auto">
          <StickyYear year="1959" />
          <p className="container max-w-4xl mx-auto mb-8 px-4 lg:px-0">
            National acts that played at Danceland in 1959 include - Eddie
            Cochran, Dion &amp; The Belmonts, Johnny Horton, The Diamonds, Duane
            Eddy, Conway Twitty, Dale Hawkins, Johnny Cash &amp; The Tennessee
            Two, Frankie Avalon, Jimmy Clanton, Fabian, The Rockin’ R’s, Freddy
            Cannon, The Tempos, Buddy Knox, Johnny &amp; The Hurricanes, Tommy
            Edwards, The Big Beats, Santo &amp; Johnny, Frankie Ford, Gary
            Stites, Barbara Evans, The Rock-A-Teens, Jimmy Bowen, Johnny
            Carroll, Bill Sherrell &amp; The Dell-Tones, Sandy Nelson, Frankie
            Sardo, The Crickets with Ronnie Smith, The Mystics, Carl Dobkins,
            Jr., Skip &amp; Flip, Joe London, Floyd Robinson, Roscoe &amp; The
            Little Green Men, Kenny Loran, Dick Caruso, The Bell Notes, Tony
            Bellus, The Passions, Tommy Facenda, Bucky &amp; The Premieres,
            Debbie Stevens, Gary Shelton, Steve Bledsoe &amp; The Blue Jays,
            Tommy Dee, Suzi Arden, Jim Reeves, Judy Lynn, Cowboy Copas, Little
            Della Rae, Grandpa Jones, Pat Kelly &amp; The Shamrocks, Big Tiny
            Little, Bob &amp; Bobbie Thomas, “Whoopee” John Wilfahrt &amp; His
            Orchestra, Blue Barron &amp; His Orchestra, Paul Neighbors &amp; His
            Orchestra.
          </p>
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

export default page1959
