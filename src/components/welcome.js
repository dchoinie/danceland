import React, { Component } from 'react'

export class welcome extends Component {
    render() {
        return (
            <div className="container mx-auto my-16 max-w-4xl shadow-lg">
                <div className="welcomeInner p-6">
                    <p className="my-4"><span className="text-4xl font-bold text-pink-500">Welcome</span> to the website that is dedicated to preserving the history of Danceland Ballroom in Cedar Rapids, Iowa.  You can view the history from the grand opening in 1929 to it’s razing in 1968 (urban renewal). The array of top acts that graced the Danceland stage through the years is impressive to say the least.</p><hr style={{borderTop: "2px solid #e2e8f0"}} />
                    <p className="my-4">The “Big Band” years saw Duke Ellington, Glenn Miller, Count Basie, Tommy Dorsey with Frank Sinatra, Louis Armstrong, Woody Herman, Gene Krupa, Les Brown with Doris Day, Lawrence Welk, Sammy Kaye, Eddy Howard and Stan Kenton all stop by.</p><hr style={{borderTop: "2px solid #e2e8f0"}} />
                    <p className="my-4">The rock era started in 1955 with the booking of Bill Haley & the Comets. Followed by Chuck Berry, Jerry Lee Lewis, Carl Perkins, Del Shannon, the Everly Brothers. Neil Sedaka, Bobby Darin, 4 Seasons, Gene Pitney, Dion & the Belmonts, Roy Orbison, Brenda Lee, Jan & Dean, The Ronettes, Beach Boys, The Animals, the Hollies, the Yardbirds and many more.</p><hr style={{borderTop: "2px solid #e2e8f0"}} />
                    <p className="my-4">Not to forget the great country stars that includes Bob Wills & His Texas Playboys, Kitty Wells, Webb Pierce, Buck Owens, Hank Thompson, Porter Wagoner, Johnny Horton, Faron Young, Jim Reeves, Jimmy Dean, Roger Miller.</p><hr style={{borderTop: "2px solid #e2e8f0"}} />
                    <p className="my-4">It’s all here - the national acts, the local talent, the hits, the misses – the memories.</p><hr style={{borderTop: "2px solid #e2e8f0"}} />
                    <p className="my-4">Check it out!</p>
                </div>
            </div>
        )
    }
}

export default welcome
