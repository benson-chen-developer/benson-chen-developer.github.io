import React, { useState } from 'react'
import { textGrey } from '../../global'
import { WorkCarasol } from './Carasol'
import { Desktop } from './Desktop'
import { Header } from './Header'
import { Iphone } from './Iphone'

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

const ProjectArray = [
    [
        {
            title: 'NBA SideKick',
            mobile: true,
            points: [
                'An app that allows people to play a side competition while watching NBA games',
                'Built off a React Native frontend and AWS Amplify backend',
                'Authenticated users via AWS Cognito and stored data via DynamoDb (Queried via GraphQL)',
                'Web scrapes NBA.com for player statistics (JSON processing)',
                'Used Figma to engineer and build the look of the app.'
            ],
            picLinks: [
                "projects/nbasidekick2",
                "projects/nbasidekick3"
            ]
        },
        {
            title: 'ProStats',
            mobile: false,
            points: [
               "A website that allows users to see detailed play by play and quarterly details on athletes",
                "Built on a React+Next and hosted on a Node backend",
                "Webscrapes and calls sports’ APIs to get JSON data",
                "Hosted on Vercel",
                "Follow best SEO practices such as using h tags, meta tags, etc",

            ],
            picLinks: [
                "projects/prostats/AngelReese", 
                "projects/prostats/donk", 
                "projects/prostats/SearchBar"
            ]
        }
    ],
    [
        {
            title: 'Designity Website',
            mobile: false,
            points: [
                'Project that got me accepted to Designity',
            ],
            picLinks: ["designs/design1", "designs/design3", "designs/design2"]
        },
        {
            title: 'NFT Project',
            mobile: false,
            points: [
                'Followed a tutorial to learn and design this webiste',
            ],
            picLinks: ["designs/nft", "designs/nft2", "designs/nft3", "designs/nft4"]
        },
    ]
]

export const Work = () => {
    const [index, setIndex] = useState(0);
    const [selectedOption, setSelectedOption] = useState("Full Apps");
    const options = ["Full Apps", "Designs", "Resume"]

    return (
        <div style={{display:'flex', width: "100vw", minHeight:"100vh", background:'#1D1D1D',flexDirection: 'column', alignItems:'center'}}>
            <div style={{marginTop: '75px'}}/>
            <Header index={index} setIndex={setIndex} length={ProjectArray[selectedOption === "Full Apps" ? 0 : 1].length} selectedOption={selectedOption} setSelectedOption={setSelectedOption} options={options}/>
            
            {/* Name of Project */}
            <div style={{width:'100%', margin: '0px 0px 20px 200px'}}>
                <h1 style={{fontSize:'15px', color:'#F4C1C6'}}>{ProjectArray[selectedOption === "Full Apps" ? 0 : 1][index].title}</h1>
            </div>

            {/* Pictures */}
            <div style={{ display: 'flex', width: '100%', justifyContent: 'center', position: 'relative', overflow: 'hidden' }}>
                <div style={{ width: '100%', height: '40px', background: '#EFF799', zIndex: 0, position: 'absolute', top: '350px', left: 0 }} />
                {ProjectArray[selectedOption === "Full Apps" ? 0 : 1][index].mobile ? 
                    <div style={{ zIndex: 1, width: '100%', display: 'flex', overflowX: 'auto', whiteSpace: 'nowrap', padding: '0 30px' }}>
                        {ProjectArray[selectedOption === "Full Apps" ? 0 : 1][index].picLinks.map((link, index) => 
                            <Iphone key={index} pathName={link} />
                        )}
                    </div>
                        :
                    <div style={{ zIndex: 1, width: '100%', display: 'flex', overflowX: 'auto', whiteSpace: 'nowrap', padding: '0 30px' }}>
                        {ProjectArray[selectedOption === "Full Apps" ? 0 : 1][index].picLinks.map((link, index) => 
                            <Desktop key={index} pathName={link} />
                        )}
                    </div>
                }
            </div>

            {/* Info */}
            <div style={{width:'100%', margin: '10px 0px 0px 100px'}}>
                <div style={{display:'flex'}}>
                    <h1 style={{fontSize:'25px', fontWeight:'bold', color:'#fff'}}>{ProjectArray[selectedOption === "Full Apps" ? 0 : 1][index].title}</h1>
                </div>

                <div style={{display: 'flex', marginTop: '-25px', paddingBottom: '50px'}}>
                    <ul style={{ padding: 0, margin: '20px 0px 0px 20px'}}>
                        {ProjectArray[selectedOption === "Full Apps" ? 0 : 1][index].points.map((point, index) => 
                            <li style={{fontSize: '17px', color: '#d9d9d9', marginBottom:10}}>
                                {point}
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        </div>
    )
}
