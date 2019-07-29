import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import DropdownSearchByYear from "../components/dropdownSearchByYear"
import { FaFacebook, FaTwitter } from "react-icons/fa"

export default () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          author
          summary
          developer
        }
      }
    }
  `)
  return (
    <div className="bg-gray-900 text-white flex-row text-center lg:text-left lg:flex lg:justify-between py-6">
      <div className="my-4 lg:my-0 lg:mx-12">
        <div className="lg:flex">
          <Link to="/">
            <h2 className="text-4xl">{data.site.siteMetadata.title}</h2>
          </Link>
        </div>
        <div className="lg:flex">
          <h6>{data.site.siteMetadata.description}</h6>
        </div>
      </div>
      <div className="my-4 lg:my-0 lg:mx-12">
        <ul className="lg:flex lg:justify-end my-2">
          <li className="mx-2">
            <DropdownSearchByYear />
          </li>
          <Link to="/bio">
            <li className="mx-2">Danceland Bio</li>
          </Link>
          <Link to="/earlyYears">
            <li className="mx-2">Early Years</li>
          </Link>
          <Link to="/darloweOleson">
            <li className="mx-2">Darlowe Oleson</li>
          </Link>
          <Link to="/posters">
            <li className="mx-2">Posters</li>
          </Link>
          <Link to="/dancelandBandstand">
            <li className="mx-2">Danceland Bandstand</li>
          </Link>
        </ul>
        <ul className="lg:flex lg:justify-end my-2 text-sm text-gray-600">
          <li className="mx-2 self-center">
            <FaFacebook />
          </li>
          <li className="mx-2 self-center">
            <FaTwitter />
          </li>
          <li className="mx-2 self-center">Privacy Policy</li>
          <li className="mx-2 self-center">Terms &amp; Conditions</li>
          <li className="mx-2 self-center">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
        <div className="my-4 lg:my-0 lg:flex lg:justify-end my-2">
          <p className="mx-2">
            Copyright © {new Date().getFullYear()} |{" "}
            {data.site.siteMetadata.author}
          </p>
        </div>
        <div className="lg:flex lg:justify-end my-2">
          <p className="text-xs text-gray-700">
            Website by:{" "}
            <a
              href="https://github.com/dchoinie"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer"
            >
              {data.site.siteMetadata.developer}
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
