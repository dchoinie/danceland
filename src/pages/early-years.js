import React, { Component } from "react"
import Layout from "../components/layout"
import PageTitle from "../components/pageTitle"
import YearData from "../data/dataEarlyYears"
import Hr from "../components/Hr"

export class earlyYears extends Component {
  render() {
    return (
      <Layout>
        <PageTitle title="Early Years" />
        <div className="container mx-auto text-center px-6 lg:px-0">
          {YearData.map((ItemDetail, index) => {
            return (
              <>
                <h4 className="text-3xl">{ItemDetail.artist}</h4>
                <p className="text-xl">{ItemDetail.full_date}</p>
                <div className="flex justify-center flex-wrap">
                  <img
                    src={ItemDetail.img1}
                    alt=""
                    className="self-center"
                    style={{ maxHeight: "400px" }}
                  />
                  <img
                    src={ItemDetail.img2}
                    alt=""
                    className="self-center"
                    style={{ maxHeight: "400px" }}
                  />
                  <img
                    src={ItemDetail.img3}
                    alt=""
                    className="self-center"
                    style={{ maxHeight: "400px" }}
                  />
                  <img
                    src={ItemDetail.img4}
                    alt=""
                    className="self-center"
                    style={{ maxHeight: "400px" }}
                  />
                  <img
                    src={ItemDetail.img5}
                    alt=""
                    className="self-center"
                    style={{ maxHeight: "400px" }}
                  />
                </div>
                <Hr />
              </>
            )
          })}
        </div>
      </Layout>
    )
  }
}

export default earlyYears
