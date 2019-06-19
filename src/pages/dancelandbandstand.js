import React, { Component } from "react"
import Layout from "../components/layout"
import dbImg from "../images/dancelandbandstand/title.jpg"
import db1_1 from "../images/dancelandbandstand/db1-1.jpg"
import db1_2 from "../images/dancelandbandstand/db1-2.jpg"
import db1_3 from "../images/dancelandbandstand/db2-1.jpg"
import db1_4 from "../images/dancelandbandstand/db2-2.jpg"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap"
import Col from "react-bootstrap"

const dancelandbandstand = props => {
  return (
    <Layout>
      <Container>
        <div className="d-flex justify-content-center my-3">
          <img src={dbImg} alt="dancelandbandstand" />
        </div>
        <p>
          In December 1957 Danceland’s Darlowe Olsen created a local television
          dance program that was modeled/patterned after Dick Clark’s American
          Bandstand. He called it Danceland Bandstand, natch. The dances were
          held on Sunday afternoons from 2-5 PM and telecast over KCRG-TV from
          3-4. Local KCRG radio disc jockeys (Dave Etzel, Jim Young, Jim Jensen)
          served as the host/emcee. The dances were for ages 13-18. Dress-up
          rules applied and parents were always welcome. It ran for two seasons.
          Both seasons featured a combination of records hops, local live music
          and an occasional national act. Sometimes a national act would play
          Saturday night and hold over for the Sunday slot.
        </p>
        <div className="season_one my-3">
          <h3 className="text-center">Season One (1957 - 1958)</h3>
          <p>12-15-57 – BUDDY KNOX / JIMMY BOWEN & RTHYTHM ORCHIDS (90¢)</p>
          <div className="row">
            <div className="col d-flex justify-content-center">
              <img src={db1_1} alt="db1_1" />
              <img src={db1_2} alt="db1_2" />
            </div>
          </div>
          <p>12-22-57 – RECORD HOP with KCRG’s Dave Etzel (50¢)</p>
          <p>12-29-57 – RECORD HOP (50¢)</p>
          <div className="row">
            <div className="col d-flex justify-content-center">
              <img src={db1_3} alt="db1_3" className="mx-4" />
              <img src={db1_4} alt="db1_4" />
            </div>
          </div>
        </div>
      </Container>
    </Layout>
  )
}

export default dancelandbandstand
