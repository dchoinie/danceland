import React, { Component } from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import DropdownSearchByYear from "../components/dropdownSearchByYear"

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
    <div className="bg-black text-white flex justify-between py-6">
      <div className="mx-12">
        <div className="flex">
          <Link to="/">
            <h2 className="text-4xl">{data.site.siteMetadata.title}</h2>
          </Link>
        </div>
        <div className="flex">
          <h6>{data.site.siteMetadata.description}</h6>
        </div>
      </div>
      <div className="mx-12">
        <ul className="flex justify-end my-2">
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
        <div className="flex justify-end my-2">
          <p className="mx-2">
            © {new Date().getFullYear()} | {data.site.siteMetadata.author}
          </p>
        </div>
        <div className="flex justify-end my-2">
          <p className="text-xs text-gray-700">
            Website by:{" "}
            <a
              href="https://github.com/dchoinie"
              target="_blank"
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
