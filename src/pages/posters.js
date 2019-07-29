import React, { Component } from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import PageTitle from "../components/pageTitle"
import PosterData from "../data/dataPosters"
import Hr from "../components/Hr"

const PosterImg = styled.img`
  width: 100%;

  @media screen and (min-width: 768px) {
    max-width: 470px;
    margin-left: auto;
    margin-right: auto;
  }
`

export class posters extends Component {
  render() {
    return (
      <Layout>
        <PageTitle title="Danceland Posters" />
        <div className="container mx-auto">
          <p className="my-4 max-w-4xl mx-auto px-4">
            At the entrance to the ballroom Danceland patrons were greeted by a
            poster that would announce upcoming or current shows. Poster is
            probably an under-statement. These were large 28” X 44” hand-painted
            one-of-a kind mini-masterpieces created by talented local artist
            Andy Jennings. The posters were on hard cardboard and rested on an
            easel right across from the box office. Very few of these exist
            today.
          </p>
          <p className="text-3xl text-center my-6 font-bold">
            <em>THE ARTISTRY OF ANDY JENNINGS</em>
          </p>
          {PosterData.map((ItemDetail, index) => {
            return (
              <div className="flex-row justify-center my-2 px-4">
                <PosterImg src={ItemDetail.img} alt="" />
                <p className="text-4xl my-2 font-bold text-center">
                  {ItemDetail.date}
                </p>
                <Hr />
              </div>
            )
          })}
        </div>
      </Layout>
    )
  }
}

export default posters
