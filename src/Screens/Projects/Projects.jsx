import React, { useState } from 'react'
import  { Desktop } from '../Work/Desktop';
import {Iphone} from '../Work/Iphone';
import {Header} from '../Work/Header';

import "react-multi-carousel/lib/styles.css";
import { Project } from './Project';

const projects = [
    {
        title: 'inStorify Shopify Website (Square Integration)',
        mobile: false,
        points: [
            "Worked on a Shopify app within gadget.dev that supplied the admin dashboard access for inStorify.com. (Used by over 100+ stores and brands, with hundreds of products in total).",
            "Integrated Square payments allowing us to view store payments from their POS system.",
            "Used webhooks+GraphQL to auto populate our database whenever stores would record an order.",
            "Used Cursor AI programming ide for fast, ai assisted development."
        ],
        picLinks: ["projects/instorify1", "projects/instorify2", "projects/instorify3"],
        link: "https://youtu.be/j18fBLE8T88"
    },
    {
        title: 'ProReport.bet',
        mobile: false,
        points: [
            "Built an interactive barchart that would display and highlight match data making it easy to compare previous results to current bookkeeper prices",
            "Constantly monitoring performance by changing caching, apis, and asset loading to maintain an under 3 second load time for pages with megabytes of data.",
            "Created web scraping softwares to get custom data from various leagues",
            "Deployed and maintained on Vercel with a GoDaddy domain, following best SEO practice",
            "Stack: React.js, Next.js, Node.js, Express.js, MongoDB, Vercel, Figma"
        ],
        picLinks: ["projects/pro1", "projects/pro2", "projects/pro3"],
        link: "https://www.proreport.bet/"
    },
    {
        title: 'Designity Website',
        mobile: false,
        points: [
            'Intro project that got me accepted to Designity',
            "Designed the whole board in an 1 hr timed test",
            'Designity hires only the top 3% of applicants',
            "Stack: Figma, UX/UI"
        ],
        picLinks: ["designs/design1", "designs/design3", "designs/design2"],
        link: "https://www.figma.com/design/tQHVlAU6g9Yxf3P2XpcVLy/Designity?node-id=0-1&t=P9Kz3YWkikGooVEj-1"
    },
    {
        title: 'NBA SideKick',
        mobile: true,
        points: [
            'An app that allows people to play a side competition while watching NBA games',
            'Built off a React Native frontend and AWS Amplify backend',
            'Authenticated users via AWS Cognito and stored data via DynamoDb (Queried via GraphQL)',
            'Web scrapes NBA.com for player statistics (JSON processing)',
            'Used Figma to engineer and build the look of the app.',
            "Stack: React-Native, AWS Amplify, Node.js, Figma"
        ],
        picLinks: [
            "projects/nbasidekick2",
            "projects/nbasidekick3"
        ]
    },
]

export const Projects = () => {
    return (
        <div style={{display:'flex', width: "100vw", minHeight:"100vh", background:'#1D1D1D',flexDirection: 'column', alignItems:'center'}}>
            <h1 style={{fontSize: '70px', color:'#EEF799', margin: '100px 0px 20px 0px'}}>Projects</h1>
            <div style={{color: '#9F9F9F', marginBottom:'50px', fontSize: 20}}>
                Previous projects to showcase my skills
            </div>
                        
            {projects.map((project, i) => 
                <div key={i} >
                    <Project selectedProject={project}/>
                </div>
            )}
        </div>
    )
}
