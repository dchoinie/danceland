import React, { Component } from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import aboutImg1 from "../images/aboutImage.jpg"
import aboutImg2 from "../images/marquee.jpg"
import aboutImg3 from "../images/dancelandInterior.jpg"
import PageTitle from "../components/pageTitle"
import Hr from "../components/Hr"

const BioImgGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, auto);
  grid-template-rows: repeat(3, auto);
  place-items: center;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 5px;
  }
`

export class bio extends Component {
  render() {
    return (
      <Layout>
        <div>
          <PageTitle title="Danceland Bio" />
          <BioImgGrid className="px-4">
            <img
              src={aboutImg1}
              alt="aboutImg1"
              className="my-4"
              style={{ minWidth: "350px" }}
            />
            <img
              src={aboutImg2}
              alt="aboutImg2"
              className="my-4"
              style={{ minWidth: "350px" }}
            />
            <img
              src={aboutImg3}
              alt="aboutImg3"
              className="my-4"
              style={{ minWidth: "350px" }}
            />
          </BioImgGrid>
          <div className="container mx-auto px-4 lg:px-12">
            <p className="my-4">
              Danceland was billed as “Iowa’s Smartest Ballroom” and it would be
              hard to argue that point. The ballroom was built in the heart of
              downtown Cedar Rapids in 1926 and soon became a popular social
              destination for all of Eastern Iowa. In the early years the
              ballroom welcomed many of the popular orchestras and big bands of
              the day – Duke Ellington, Glenn Miller, Count Basie, Woody Herman,
              Lawrence Welk and Louis Armstrong were some of the bigger names
              that passed through.
            </p>
            <Hr />
            <p className="my-4">
              Danceland entered the rock ‘n’ roll era on October 6, 1955 with
              the appearance of Bill Haley & the Comets. The ballroom eventually
              evolved into a rock ‘n’ roll hot spot after Darlowe Oleson and
              Bernie Storck became the co-managers in 1956.{" "}
            </p>
            <Hr />
            <p className="my-4">
              Under Darlowe and Bernie’s tutelage Danceland became the place in
              Cedar Rapids to see, hear and dance to live rock ‘n’ roll music.
              In the late ‘50s / early ‘60s the ballroom presented a “who’s who”
              of rock’s pioneers – Chuck Berry, Roy Orbison, Jerry Lee Lewis,
              Brenda Lee, The Everly Brothers, Eddie Cochran, Conway Twitty,
              Gene Vincent & his Blue Caps, Johnny Cash, Carl Perkins, Chubby
              Checker, Bobby Vee, Del Shannon, Joey Dee & the Starliters, The
              Ventures, Bobby Darin, Johnny Horton, Wanda Jackson, Gene Pitney,
              The 4 Seasons, Neil Sedaka, The Fendermen, Marty Robbins, Duane
              Eddy, Brian Hyland, Johnny & the Hurricanes and Bobby Rydell are
              but a mere sampling.{" "}
            </p>
            <Hr />
            <p className="my-4">
              The “Winter Dance Party” tour was scheduled to play Danceland on
              February 6, 1959. Just days before that highly-anticipated concert
              Buddy Holly, Ritchie Valens and J.P. “Big Bopper” Richardson
              perished in rock ‘n’ roll’s first tragic plane crash. The old
              show-biz saying “the show must go on” applied in this case. A
              revamped lineup was rushed together to finish the remaining
              thirteen dates of the tour. The “Winter Dance Party” lineup that
              appeared at Danceland included holdovers Dion & the Belmonts, The
              Crickets (with Ronnie Smith on lead vocals) and Frankie Sardo who
              were joined by Frankie Avalon and Jimmy Clanton.
            </p>
            <Hr />
            <p className="my-4">
              Other 1960s hit-makers that graced the Danceland stage include
              (take a deep breath) The Beach Boys, The Yardbirds, Mitch Ryder &
              the Detroit Wheels, The Animals, The Turtles, Beau Brummels, The
              Ronettes, The Hollies, Gary Lewis & The Playboys, The Music
              Machine, Lonnie Mack, The Strangeloves, Jr. Walker & The All
              Stars, The Castaways, The New Colony Six, The Crystals, ? & the
              Mysterians, Jan & Dean, The Gentrys, The Marketts, Linda Scott,
              Sam The Sham & the Pharaohs, The Left Banke, Jay & The Americans,
              Lou Christie, The McCoys, The Kingsmen, Guess Who, The Trashmen,
              Cannibal & The Headhunters, Bobby Goldsboro, The Fabulous
              Flippers, Dee Jay & the Runaways and The Velaires to name a few!
            </p>
            <Hr />
            <p className="my-4">
              The ballroom also provided a musical proving-ground that allowed
              many of the top bands in the area to “hone their skills”. Regional
              favorites like Eddie Randall & The Downbeats, Dale Thomas & the
              Bandera Boys, The Rock ‘N Flames, The Escorts, Al’s Untouchables,
              The Legends, The Stompers and others all rocked Danceland’s stage
              as headliners or as the opening act for a national touring group.
            </p>
            <Hr />
            <p className="my-4">
              Danceland was a second story ballroom above a bowling alley! At
              the top of the large stairway were large (28” x 44”) hand-painted
              posters that informed the concert-goers of upcoming shows. These
              beautiful one-of-a-kind posters were the creative work of local
              artist Andy Jennings. The surviving posters from the “Legendary
              Danceland Poster Collection” have become quite the collector’s
              item today.
            </p>
            <Hr />
            <p className="my-4">
              Danceland remained an active ballroom until 1968. The building
              then became the victim of urban renewal and was torn down to make
              room for the Cedar Rapids Five Seasons Center. Cedar Rapids lost
              not only a terrific music venue but it also lost one of its most
              popular gathering places and the hub the local music community
              revolved around.
            </p>
            <Hr />
          </div>
        </div>
      </Layout>
    )
  }
}

export default bio
