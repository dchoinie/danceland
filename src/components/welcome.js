import React, { Component } from "react"
import Music1 from "../images/musicnotes1.jpg"
import Music2 from "../images/musicnotes2.jpg"
import Music3 from "../images/musicnotes3.jpg"
import Music4 from "../images/musicnotes4.jpg"

export class welcome extends Component {
  render() {
    return (
      <div
        style={{
          marginTop: "4rem",
          marginBottom: "4rem",
        }}
      >
        <div className="flex justify-center container mx-auto py-2">
          <img
            src={Music1}
            alt=""
            className="self-center px-6 py-4"
            style={{ maxHeight: "208px" }}
          />
          <p
            className="self-center px-6 py-4 max-w-4xl"
            style={{ fontFamily: "Hepta Slab" }}
          >
            Welcome to the website that is dedicated to preserving the history
            of Danceland Ballroom in Cedar Rapids, Iowa. You can view the
            history from the grand opening in 1929 to it’s razing in 1968 (urban
            renewal). The array of top acts that graced the Danceland stage
            through the years is impressive to say the least.
          </p>
        </div>
        <div className="flex justify-center container mx-auto py-2">
          <p
            className="self-center px-6 py-4 max-w-4xl"
            style={{ fontFamily: "Hepta Slab" }}
          >
            The “Big Band” years saw Duke Ellington, Glenn Miller, Count Basie,
            Tommy Dorsey with Frank Sinatra, Louis Armstrong, Woody Herman, Gene
            Krupa, Les Brown with Doris Day, Lawrence Welk, Sammy Kaye, Eddy
            Howard and Stan Kenton all stop by.
          </p>
          <img
            src={Music2}
            alt=""
            className="self-center px-6 py-4"
            style={{ maxWidth: "300px" }}
          />
        </div>
        <div className="flex justify-center container mx-auto py-2">
          <img
            src={Music3}
            alt=""
            className="self-center px-6 py-4"
            style={{ maxWidth: "300px" }}
          />
          <p
            className="self-center px-6 py-4 max-w-4xl"
            style={{ fontFamily: "Hepta Slab" }}
          >
            The rock era started in 1955 with the booking of Bill Haley & the
            Comets. Followed by Chuck Berry, Jerry Lee Lewis, Carl Perkins, Del
            Shannon, the Everly Brothers. Neil Sedaka, Bobby Darin, 4 Seasons,
            Gene Pitney, Dion & the Belmonts, Roy Orbison, Brenda Lee, Jan &
            Dean, The Ronettes, Beach Boys, The Animals, the Hollies, the
            Yardbirds and many more.
          </p>
        </div>
        <div className="flex justify-center container mx-auto py-2">
          <p
            className="self-center px-6 py-4 max-w-4xl"
            style={{ fontFamily: "Hepta Slab" }}
          >
            Not to forget the great country stars that includes Bob Wills & His
            Texas Playboys, Kitty Wells, Webb Pierce, Buck Owens, Hank Thompson,
            Porter Wagoner, Johnny Horton, Faron Young, Jim Reeves, Jimmy Dean,
            Roger Miller.
          </p>
          <img
            src={Music4}
            alt=""
            className="self-center px-6 py-4"
            style={{ maxWidth: "300px" }}
          />
        </div>
        <div className="text-center">
          <p className="py-4" style={{ fontFamily: "Hepta Slab" }}>
            It’s all here - the national acts, the local talent, the hits, the
            misses – the memories.
          </p>
          <h2 className="py-4 text-4xl">Check it out!</h2>
        </div>
      </div>
    )
  }
}

export default welcome

{
  /* <div className="container mx-auto my-16 max-w-4xl">
        <div className="welcomeInner p-6">
          <p className="my-4">
            <span className="text-4xl font-bold text-red-700">Welcome</span> to
            the website that is dedicated to preserving the history of Danceland
            Ballroom in Cedar Rapids, Iowa. You can view the history from the
            grand opening in 1929 to it’s razing in 1968 (urban renewal). The
            array of top acts that graced the Danceland stage through the years
            is impressive to say the least.
          </p>
          <hr style={{ borderTop: "2px solid #e2e8f0" }} />
          <p className="my-4">
            The “Big Band” years saw Duke Ellington, Glenn Miller, Count Basie,
            Tommy Dorsey with Frank Sinatra, Louis Armstrong, Woody Herman, Gene
            Krupa, Les Brown with Doris Day, Lawrence Welk, Sammy Kaye, Eddy
            Howard and Stan Kenton all stop by.
          </p>
          <hr style={{ borderTop: "2px solid #e2e8f0" }} />
          <p className="my-4">
            The rock era started in 1955 with the booking of Bill Haley & the
            Comets. Followed by Chuck Berry, Jerry Lee Lewis, Carl Perkins, Del
            Shannon, the Everly Brothers. Neil Sedaka, Bobby Darin, 4 Seasons,
            Gene Pitney, Dion & the Belmonts, Roy Orbison, Brenda Lee, Jan &
            Dean, The Ronettes, Beach Boys, The Animals, the Hollies, the
            Yardbirds and many more.
          </p>
          <hr style={{ borderTop: "2px solid #e2e8f0" }} />
          <p className="my-4">
            Not to forget the great country stars that includes Bob Wills & His
            Texas Playboys, Kitty Wells, Webb Pierce, Buck Owens, Hank Thompson,
            Porter Wagoner, Johnny Horton, Faron Young, Jim Reeves, Jimmy Dean,
            Roger Miller.
          </p>
          <hr style={{ borderTop: "2px solid #e2e8f0" }} />
          <p className="my-4">
            It’s all here - the national acts, the local talent, the hits, the
            misses – the memories.
          </p>
          <hr style={{ borderTop: "2px solid #e2e8f0" }} />
          <p className="my-4">Check it out!</p>
        </div>
      </div> */
}
