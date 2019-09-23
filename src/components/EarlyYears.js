import React from "react"
import Hr from "../components/Hr"
import { useStaticQuery, graphql } from "gatsby"

const EarlyYears = () => {
  const data = useStaticQuery(graphql`
    {
      earlyYears: allAirtable(
        filter: { table: { eq: "earlyYears" } }
        sort: { fields: data___orderId }
      ) {
        nodes {
          recordId
          data {
            artist
            orderId
            img1
            img2
            img3
            img4
            img5
            full_date
          }
        }
      }
    }
  `)
  return (
    <div className="container mx-auto text-center px-6 lg:px-0">
      <ul>
        {data.earlyYears.nodes.map((item, i) => (
          <li key={item.recordId}>
            <h4 className="text-3xl">{item.data.artist}</h4>
            <p className="text-xl pb-4">{item.data.full_date}</p>
            <div className="flex justify-center flex-wrap">
              <img src={item.data.img1} alt="" className="self-center" />
              <img src={item.data.img2} alt="" className="self-center" />
              <img src={item.data.img3} alt="" className="self-center" />
              <img src={item.data.img4} alt="" className="self-center" />
              <img src={item.data.img5} alt="" className="self-center" />
            </div>
            <Hr />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default EarlyYears
