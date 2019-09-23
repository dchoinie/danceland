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
              <div>
                <h4 className="text-3xl font-bold">{ItemDetail.artist}</h4>
                <p className="text-xl pb-4">{ItemDetail.full_date}</p>
                <div className="flex justify-center flex-wrap">
                  <img
                    src={ItemDetail.img1}
                    alt=""
                    className={ItemDetail.black_white}
                    className="self-center"
                    style={{
                      maxHeight: "400px",
                    }}
                  />
                  <img
                    src={ItemDetail.img2}
                    alt=""
                    className={ItemDetail.black_white}
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
              </div>
            )
          })}
        </div>
      </Layout>
    )
  }
}

export default earlyYears
