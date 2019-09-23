import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import PageTitle from "../components/pageTitle"
import Hr from "../components/Hr"

// export const query = graphql`
//   {
//     allAirtable(filter: { table: { eq: "data1955" } }) {
//       nodes {
//         data {
//           artist
//           comment1
//           comment2
//           fullDate
//           iheight
//           img1
//           img1caption
//           img2
//           img3
//           img4
//           img5
//           img6
//           img7
//           iwidth
//           orderId
//           price
//           spotify1
//           spotify2
//           spotify3
//           weekday
//           year
//         }
//       }
//     }
//   }
// `

// export default ({ data }) => (
//   <Layout>
//     <PageTitle title="1955" />
//     <p className="text-center max-w-5xl mx-auto pb-12">
//       1955 was the year live rock and roll came to Cedar Rapids. The date was
//       October 6th and the band was Bill Haley &amp; His Comets. That would
//       signal the beginning of Danceland being the place for eastern Iowans to
//       witness live rock and roll. Later that month Boyd Bennett &amp; His
//       Rockets, became the second rock and rollers to make an appearance. Also
//       gracing the Danceland stage in 1955 were the innovating orchestra of
//       Sauter-Finegan, polka great “Whoopee” John Wilfahrt &amp; His Orchestra
//       and Yankton South Dakota’s popular WNAX Bohemian Band. Major country acts
//       include Pee Wee King &amp; His Golden West Cowboys and Bob Wills &amp; His
//       Texas Playboys.
//     </p>
//     <div className="container mx-auto text-center px-6 lg:px-0">
//       {data.allAirtable.nodes.map(node => (
//         <div key={node.recordId}>
//           <p>
//             {node.data.fullDate}, {node.data.weekday}
//           </p>
//           <p className="text-3xl font-bold">{node.data.artist}</p>
//           <p>{node.data.price}</p>
//           <p>{node.data.comment1}</p>
//           <div className="lg:flex lg:flex-row lg:items-center lg:justify-center lg:mx-auto flex-wrap lg:no-wrap">
//             <figure>
//               <img
//                 src={node.data.img1}
//                 alt=""
//                 style={{ maxWidth: "500px", maxHeight: "500px" }}
//                 className="w-full"
//               />
//               <figcaption>{node.data.img1caption}</figcaption>
//             </figure>
//             <figure>
//               <img
//                 src={node.data.img2}
//                 alt=""
//                 style={{ maxWidth: "500px", maxHeight: "500px" }}
//                 className="w-full"
//               />
//             </figure>
//             <figure>
//               <img
//                 src={node.data.img3}
//                 alt=""
//                 style={{ maxWidth: "500px", maxHeight: "500px" }}
//                 className="w-full"
//               />
//             </figure>
//             <figure>
//               <img
//                 src={node.data.img4}
//                 alt=""
//                 style={{ maxWidth: "500px", maxHeight: "500px" }}
//                 className="w-full"
//               />
//             </figure>
//             <figure>
//               <img
//                 src={node.data.img5}
//                 alt=""
//                 style={{ maxWidth: "500px", maxHeight: "500px" }}
//                 className="w-full"
//               />
//             </figure>
//             <figure>
//               <img
//                 src={node.data.img6}
//                 alt=""
//                 style={{ maxWidth: "500px", maxHeight: "500px" }}
//                 className="w-full"
//               />
//             </figure>
//             <figure>
//               <img
//                 src={node.data.img7}
//                 alt=""
//                 style={{ maxWidth: "500px", maxHeight: "500px" }}
//                 className="w-full"
//               />
//             </figure>
//           </div>
//           <p>{node.data.comment2}</p>
//           <div className="spotify flex justify-center my-4">
//             <iframe
//               src={node.data.spotify1}
//               width={node.data.iwidth}
//               height={node.data.iheight}
//               frameborder="0"
//               allowtransparency="true"
//               allow="encrypted-media"
//             ></iframe>
//           </div>
//           <Hr />
//         </div>
//       ))}
//     </div>
//   </Layout>
// )

export default () => <div>1955 making this delpoy</div>
