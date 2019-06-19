import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import PageTitle from "../components/pageTitle"

const page1954 = props => {
  return (
    <Layout>
      <PageTitle title="1954" />
      <div id="artist1">
        <div className="row text-center">
          <div className="col">
            <p>Friday, Jan 1</p>
            <h3>Kenny Hofer & His Midwesterners</h3>
            <p>82¢ + tax</p>
          </div>
        </div>
        <hr />
      </div>
      <div id="artist2">
        <div className="row text-center">
          <div className="col">
            <p>Saturday, Jan 2</p>
            <h3>Dell Clayton & His Orchestra with Glenna Frazier</h3>
            <p>82¢ till 9 / $1.02 after + tax</p>
          </div>
        </div>
        <hr />
      </div>
      <div id="artist3">
        <div className="row text-center">
          <div className="col">
            <p>Wednesday, Jan 6</p>
            <h3>Jack Cole & His Orchestra</h3>
            <p>69¢ till 9 / 82¢ after + tax</p>
          </div>
        </div>
        <hr />
      </div>
      <div id="artist4">
        <div className="row text-center">
          <div className="col">
            <p>Friday, Jan 8</p>
            <h3>Tom Owen's Cowboys</h3>
            <p>82¢ + tax</p>
          </div>
        </div>
        <hr />
      </div>
      <div id="artist5">
        <div className="row text-center">
          <div className="col">
            <p>Friday, Jan 9</p>
            <h3>Verne Byers & His Orchestra with Audre Lynn</h3>
            <p>82¢ + tax</p>
          </div>
        </div>
        <div className="row text-center">
          <div className="col">
            <Img fluid={props.data.imageOne.childImageSharp.fluid} />
          </div>
          <div className="col">
            <Img fluid={props.data.imageTwo.childImageSharp.fluid} />
          </div>
        </div>
        <hr />
      </div>
      <div id="artist6">
        <div className="row text-center">
          <div className="col">
            <p>Wednesday, Jan 13</p>
            <h3>Verne Byers & His Orchestra with Audre Lynn</h3>
            <p>69¢ till 9 / 82¢ after + tax</p>
          </div>
        </div>
        <hr />
      </div>
      <div id="artist7">
        <div className="row text-center">
          <div className="col">
            <p>Friday, Jan 15</p>
            <h3>Iowa Cornhuskers</h3>
            <p>82¢ + tax</p>
          </div>
        </div>
        <hr />
      </div>
      <div id="artist8">
        <div className="row text-center">
          <div className="col">
            <p>Saturday, Jan 16</p>
            <h3>Don Hoy & His Orchestra</h3>
            <p>82¢ + tax</p>
          </div>
        </div>
        <hr />
      </div>
      <div id="artist9">
        <div className="row text-center">
          <div className="col">
            <p>Wednesday, Jan 20</p>
            <h3>Kenny Hofer & His Midwesterners</h3>
            <p>69¢ till 9 / 82¢ after + tax</p>
          </div>
        </div>
        <hr />
      </div>
      <div id="artist10">
        <div className="row text-center">
          <div className="col">
            <p>Friday, Jan 22</p>
            <h3>Tom Owen's Cowboys</h3>
            <p>82¢ + tax</p>
          </div>
        </div>
        <hr />
      </div>
      <div id="artist11">
        <div className="row text-center">
          <div className="col">
            <p>Saturday, Jan 23</p>
            <h3>Bobby Lindeman & His Orchestra</h3>
            <p>82¢ + tax</p>
          </div>
        </div>
        <hr />
      </div>
      <div id="artist12">
        <div className="row text-center">
          <div className="col">
            <p>Wednesday, Jan 27</p>
            <h3>Don Hoy & His Orchestra</h3>
            <p>69¢ till 9 / 82¢ after + tax</p>
          </div>
        </div>
        <hr />
      </div>
      <div id="artist13">
        <div className="row text-center">
          <div className="col">
            <p>Friday, Jan 29</p>
            <h3>Kenny Hofer & His Midwesterners</h3>
            <p>82¢ + tax</p>
          </div>
        </div>
        <hr />
      </div>
      <div id="artist14">
        <div className="row text-center">
          <div className="col">
            <p>Saturday, Jan 30</p>
            <h3>Hal Wiese with Eugenie Scott</h3>
            <p>82¢ + tax</p>
          </div>
        </div>
        <div className="row text-center">
          <div className="col">
            <Img fluid={props.data.imageThree.childImageSharp.fluid} />
          </div>
          <div className="col">
            <Img fluid={props.data.imageThreeHalf.childImageSharp.fluid} />
          </div>
        </div>
        <hr />
      </div>
      <div id="artist15">
        <div className="row text-center">
          <div className="col">
            <p>Sunday, Jan 31</p>
            <h3>Earl Lanier / Del Taylor</h3>
            <p>March of Dimes Benefit Dance</p>
          </div>
        </div>
        <div className="row text-center">
          <div className="col">
            <Img fluid={props.data.imageFour.childImageSharp.fluid} />
          </div>
          <div className="col">
            <Img fluid={props.data.imageFive.childImageSharp.fluid} />
          </div>
        </div>
        <hr />
      </div>
      <div id="artist16">
        <div className="row text-center">
          <div className="col">
            <p>Wednesday, Feb 3</p>
            <h3>Bob Calame & His Sparkling Rhythms</h3>
            <p>69¢ till 9 / 82¢ after + tax</p>
          </div>
        </div>
        <hr />
      </div>
      <div id="artist17">
        <div className="row text-center">
          <div className="col">
            <p>Friday, Feb 5</p>
            <h3>Tom Owen's Cowboys</h3>
            <p>82¢ + tax</p>
          </div>
        </div>
        <hr />
      </div>
      <div id="artist18">
        <div className="row text-center">
          <div className="col">
            <p>Saturday, Feb 6</p>
            <h3>Bob Calame & His Sparkling Rhythms</h3>
            <p>82¢ + tax</p>
          </div>
        </div>
        <div className="row text-center">
          <div className="col">
            <Img fluid={props.data.imageSix.childImageSharp.fluid} />
          </div>
          <div className="col">
            <Img fluid={props.data.imageSeven.childImageSharp.fluid} />
          </div>
          <div className="col">
            <Img fluid={props.data.imageEight.childImageSharp.fluid} />
          </div>
        </div>
        <hr />
      </div>
      <div id="artist19">
        <div className="row text-center">
          <div className="col">
            <p>Wednesday, Feb 10</p>
            <h3>Jack Cole & His Orchestra</h3>
            <p>69¢ till 9 / 82¢ after + tax</p>
          </div>
        </div>
        <hr />
      </div>
      <div id="artist20">
        <div className="row text-center">
          <div className="col">
            <p>Friday, Feb 12</p>
            <h3>Floyd Warren's Radio Ramblers with Montana Mary</h3>
            <p>82¢ + tax</p>
          </div>
        </div>
        <hr />
      </div>
      <div id="artist21">
        <div className="row text-center">
          <div className="col">
            <p>Saturday, Feb 13</p>
            <h3>Vance Dixon Orchestra</h3>
            <p>82¢ + tax</p>
          </div>
        </div>
        <div className="row text-center">
          <div className="col">
            <Img fluid={props.data.imageNine.childImageSharp.fluid} />
          </div>
          <div className="col">
            <Img fluid={props.data.imageTen.childImageSharp.fluid} />
          </div>
          <div className="col">
            <Img fluid={props.data.imageEleven.childImageSharp.fluid} />
          </div>
        </div>
        <hr />
      </div>
      <div id="artist22">
        <div className="row text-center">
          <div className="col">
            <p>Wednesday, Feb 17</p>
            <h3>Kenny Hofer & His Midwesterners</h3>
          </div>
        </div>
        <hr />
      </div>
      <div id="artist23">
        <div className="row text-center">
          <div className="col">
            <p>Friday, Feb 19</p>
            <h3>Tom Owen's Cowboys</h3>
            <p>82¢ + tax</p>
          </div>
        </div>
        <hr />
      </div>
      <div id="artist24">
        <div className="row text-center">
          <div className="col">
            <p>Saturday, Feb 20</p>
            <h3>Jack Payne with Norma Clark</h3>
            <p>82¢ + tax</p>
          </div>
        </div>
        <hr />
      </div>
      <div id="artist25">
        <div className="row text-center">
          <div className="col">
            <p>Tuesday, Feb 23</p>
            <h3>Frank Yankovic & His Yanks</h3>
            <p>$1.02 + tax</p>
          </div>
        </div>
        <div className="row text-center">
          <div className="col">
            <Img fluid={props.data.imageTwelve.childImageSharp.fluid} />
          </div>
          <div className="col">
            <Img fluid={props.data.imageThirteen.childImageSharp.fluid} />
          </div>
          <div className="col">
            <Img fluid={props.data.imageFourteen.childImageSharp.fluid} />
          </div>
        </div>
        <hr />
      </div>
      <div id="artist26">
        <div className="row text-center">
          <div className="col">
            <p>Wednesday, Feb 24</p>
            <h3>Bobby Lindeman & His Orchestra</h3>
            <p>69¢ till 9 / 82¢ after + tax</p>
          </div>
        </div>
        <hr />
      </div>
      <div id="artist27">
        <div className="row text-center">
          <div className="col">
            <p>Friday, Feb 26</p>
            <h3>Kenny Hofer & His Midwesterners</h3>
            <p>82¢ + tax</p>
          </div>
        </div>
        <hr />
      </div>
      <div id="artist28">
        <div className="row text-center">
          <div className="col">
            <p>Saturday, Feb 27</p>
            <h3>Hal Wiese with Eugenie Scott</h3>
            <p>82¢ + tax</p>
          </div>
        </div>
        <hr />
      </div>
      <div id="artist29">
        <div className="row text-center">
          <div className="col">
            <p>Tuesday, Mar 2</p>
            <h3>Jack Cole & His Orchestra</h3>
          </div>
        </div>
        <hr />
      </div>
      <div id="artist30">
        <div className="row text-center">
          <div className="col">
            <p>Wednesday, Mar 3</p>
            <h3>No Dance - Ash Wednesday</h3>
          </div>
        </div>
        <hr />
      </div>
      <div id="artist31">
        <div className="row text-center">
          <div className="col">
            <p>Friday, Mar 5</p>
            <h3>Tom Owen's Cowboys</h3>
            <p>82¢ + tax</p>
          </div>
        </div>
        <hr />
      </div>
      <div id="artist32">
        <div className="row text-center">
          <div className="col">
            <p>Saturday, Mar 6</p>
            <h3>Jack Cole & His Orchestra</h3>
            <p>82¢ + tax</p>
          </div>
        </div>
        <hr />
      </div>
      <div id="artist33">
        <div className="row text-center">
          <div className="col">
            <p>Wednesday, Mar 10</p>
            <h3>Bobby Lindeman & His Orchestra</h3>
          </div>
        </div>
        <hr />
      </div>
      <div id="artist34">
        <div className="row text-center">
          <div className="col">
            <p>Friday, Mar 12</p>
            <h3>Iowa Cornhuskers / Joe's Troubadors</h3>
            <p>82¢ + tax</p>
          </div>
        </div>
        <hr />
      </div>
      <div id="artist35">
        <div className="row text-center">
          <div className="col">
            <p>Saturday, Mar 13</p>
            <h3>Vance Dixon Orchestra</h3>
            <p>$1.02 + tax</p>
          </div>
        </div>
        <div className="row text-center">
          <div className="col">
            <Img fluid={props.data.imageFifteen.childImageSharp.fluid} />
          </div>
          <div className="col">
            <Img fluid={props.data.imageSixteen.childImageSharp.fluid} />
          </div>
        </div>
        <p>Text can go in here</p>
        <hr />
      </div>
    </Layout>
  )
}

export default page1954

export const imageQuery = graphql`
  query {
    imageOne: file(relativePath: { eq: "1954_Images/1954-1-1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    imageTwo: file(relativePath: { eq: "1954_Images/1954-1-2.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    imageThree: file(relativePath: { eq: "1954_Images/1954-2-1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    imageThreeHalf: file(relativePath: { eq: "1954_Images/1954-2-2.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    imageFour: file(relativePath: { eq: "1954_Images/1954-3-1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    imageFive: file(relativePath: { eq: "1954_Images/1954-3-2.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    imageSix: file(relativePath: { eq: "1954_Images/1954-4-1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    imageSeven: file(relativePath: { eq: "1954_Images/1954-4-2.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    imageEight: file(relativePath: { eq: "1954_Images/1954-4-3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    imageNine: file(relativePath: { eq: "1954_Images/1954-5-1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    imageTen: file(relativePath: { eq: "1954_Images/1954-5-2.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    imageEleven: file(relativePath: { eq: "1954_Images/1954-5-3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    imageTwelve: file(relativePath: { eq: "1954_Images/1954-6-1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    imageThirteen: file(relativePath: { eq: "1954_Images/1954-6-2.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    imageFourteen: file(relativePath: { eq: "1954_Images/1954-6-3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    imageFifteen: file(relativePath: { eq: "1954_Images/1954-7-1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    imageSixteen: file(relativePath: { eq: "1954_Images/1954-7-2.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    imageSeventeen: file(relativePath: { eq: "1954_Images/1954-8-1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    imageEighteen: file(relativePath: { eq: "1954_Images/1954-8-2.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    imageNineteen: file(relativePath: { eq: "1954_Images/1954-9-1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    imageTwenty: file(relativePath: { eq: "1954_Images/1954-9-2.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    imageTwentyOne: file(relativePath: { eq: "1954_Images/1954-10-1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    imageTwentyTwo: file(relativePath: { eq: "1954_Images/1954-10-2.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    imageTwentyThree: file(relativePath: { eq: "1954_Images/1954-11-1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    imageTwentyFour: file(relativePath: { eq: "1954_Images/1954-11-2.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    imageTwentyFive: file(relativePath: { eq: "1954_Images/1954-12-1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    imageTwentySix: file(relativePath: { eq: "1954_Images/1954-12-2.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    imageTwentySeven: file(relativePath: { eq: "1954_Images/1954-13-1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    imageTwentyEight: file(relativePath: { eq: "1954_Images/1954-13-2.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    imageTwentyNine: file(relativePath: { eq: "1954_Images/1954-13-3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    imageThirty: file(relativePath: { eq: "1954_Images/1954-14-1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    imageThirtyOne: file(relativePath: { eq: "1954_Images/1954-14-2.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    imageThirtyTwo: file(relativePath: { eq: "1954_Images/1954-15-1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    imageThirtyThree: file(relativePath: { eq: "1954_Images/1954-15-2.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    imageThirtyFour: file(relativePath: { eq: "1954_Images/1954-15-3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    imageThirtyFive: file(relativePath: { eq: "1954_Images/1954-16-1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    imageThirtySix: file(relativePath: { eq: "1954_Images/1954-16-2.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    imageThirtySeven: file(relativePath: { eq: "1954_Images/1954-17-1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    imageThirtyEight: file(relativePath: { eq: "1954_Images/1954-17-2.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    imageThirtyNine: file(relativePath: { eq: "1954_Images/1954-18-1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    imageForty: file(relativePath: { eq: "1954_Images/1954-19-1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    imageFourtyOne: file(relativePath: { eq: "1954_Images/1954-19-2.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    imageFourtyTwo: file(relativePath: { eq: "1954_Images/1954-20-1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    imageFourtyThree: file(relativePath: { eq: "1954_Images/1954-20-2.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    imageFourtyFour: file(relativePath: { eq: "1954_Images/1954-20-3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    imageFourtyFive: file(relativePath: { eq: "1954_Images/1954-21-1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    imageFourtySix: file(relativePath: { eq: "1954_Images/1954-21-2.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    imageFourtySeven: file(relativePath: { eq: "1954_Images/1954-21-3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    imageFourtyEight: file(relativePath: { eq: "1954_Images/1954-22-1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    imageFourtyNine: file(relativePath: { eq: "1954_Images/1954-22-2.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    imageFifty: file(relativePath: { eq: "1954_Images/1954-23-1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    imageFiftyOne: file(relativePath: { eq: "1954_Images/1954-23-2.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    imageFiftyTwo: file(relativePath: { eq: "1954_Images/1954-24-1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    imageFiftyThree: file(relativePath: { eq: "1954_Images/1954-24-2.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    imageFiftyFour: file(relativePath: { eq: "1954_Images/1954-25-1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    imageFiftyFive: file(relativePath: { eq: "1954_Images/1954-25-2.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    imageFiftySix: file(relativePath: { eq: "1954_Images/1954-26-1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    imageFiftySeven: file(relativePath: { eq: "1954_Images/1954-26-2.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    imageFiftyEight: file(relativePath: { eq: "1954_Images/1954-27-1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    imageFiftyNine: file(relativePath: { eq: "1954_Images/1954-27-2.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    imageSixty: file(relativePath: { eq: "1954_Images/1954-28-1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    imageSixtyOne: file(relativePath: { eq: "1954_Images/1954-28-2.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    imageSixtyTwo: file(relativePath: { eq: "1954_Images/1954-28-3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    imageSixtyThree: file(relativePath: { eq: "1954_Images/1954-29-1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    imageSixtyFour: file(relativePath: { eq: "1954_Images/1954-29-2.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    imageSixtyFive: file(relativePath: { eq: "1954_Images/1954-29-3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    imageSixtySix: file(relativePath: { eq: "1954_Images/1954-29-4.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    imageSixtySeven: file(relativePath: { eq: "1954_Images/1954-30-1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    imageSixtyEight: file(relativePath: { eq: "1954_Images/1954-30-2.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    imageSixtyNine: file(relativePath: { eq: "1954_Images/1954-31-1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    imageSeventy: file(relativePath: { eq: "1954_Images/1954-31-2.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    imageSeventyOne: file(relativePath: { eq: "1954_Images/1954-31-3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    imageSeventyTwo: file(relativePath: { eq: "1954_Images/1954-32-1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    imageSeventyThree: file(relativePath: { eq: "1954_Images/1954-32-2.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    imageSeventyFour: file(relativePath: { eq: "1954_Images/1954-32-3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    imageSeventyFive: file(relativePath: { eq: "1954_Images/1954-33-1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    imageSeventySix: file(relativePath: { eq: "1954_Images/1954-33-2.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    imageSeventySeven: file(relativePath: { eq: "1954_Images/1954-33-3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    imageSeventyEight: file(relativePath: { eq: "1954_Images/1954-34-1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    imageSeventyNine: file(relativePath: { eq: "1954_Images/1954-34-2.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    imageEighty: file(relativePath: { eq: "1954_Images/1954-34-3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    imageEightyOne: file(relativePath: { eq: "1954_Images/1954-35-1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    imageEightyTwo: file(relativePath: { eq: "1954_Images/1954-35-2.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    imageEightyThree: file(relativePath: { eq: "1954_Images/1954-36-1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    imageEightyFour: file(relativePath: { eq: "1954_Images/1954-36-2.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    imageEightyFive: file(relativePath: { eq: "1954_Images/1954-36-3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    imageEightySix: file(relativePath: { eq: "1954_Images/1954-37-1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    imageEightySeven: file(relativePath: { eq: "1954_Images/1954-37-2.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    imageEightyEight: file(relativePath: { eq: "1954_Images/1954-38-1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    imageEightyNine: file(relativePath: { eq: "1954_Images/1954-38-2.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    imageNinety: file(relativePath: { eq: "1954_Images/1954-39-1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    imageNinetyOne: file(relativePath: { eq: "1954_Images/1954-39-2.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    imageNinetyTwo: file(relativePath: { eq: "1954_Images/1954-39-3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    imageNinetyThree: file(relativePath: { eq: "1954_Images/1954-40-1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    imageNinetyFour: file(relativePath: { eq: "1954_Images/1954-40-2.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
