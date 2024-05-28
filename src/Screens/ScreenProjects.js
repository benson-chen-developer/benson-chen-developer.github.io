import React, {useState} from 'react'

export const ScreenProjects = React.forwardRef((props, ref) => {

  const cards = [
    {
      title: "NBA SideKick",
      url: 'https://github.com/benson-chen-developer/NbaAPI',
      urlName: '',
      description: [
        "An app that allows people to play a side competition while watching NBA games",
        "Built off a React Native frontend and AWS Amplify Backend",
        "Authenticated users via AWS Cognito and stored data via DynamoDb (Queried via GraphQL)",
        "Web scrapes NBA.com for player statistics (JSON processing)",
        "Used Figma to engineer and build the look of the app."
      ]
    },
    {
      title: "Peer to Peer BlockChain Wallet",
      url: 'https://github.com/BrianLuStony/orca-project',
      urlName: '',
      description: [
        "Worked with a team to develop a peer to peer sharing application.",
        "Ability to parse and upload files into our desktop app.",
        "Peers page to see address of fellow users+wallets.",
        "Created the frontend with Electron+React and backend on Go."
      ]
    }
  ]

  return (
    <div ref={ref} style={{
      display:'flex', minHeight: "110vh", minWidth: "100vw", background:'#2B2B2B',
      alignItems:'center', flexDirection:'column'
    }}>
      
        {/* My Work */}
        <div style={{display:'flex', marginTop: 50, marginLeft: 160, width: "100%"}}>
          <div style={{fontSize: 60, color:'#fff', fontWeight:'bold', position:'absolute'}}>
            My Work
          </div> 
          <div style={{fontSize: 60, color:'#F75502',fontWeight:'bold', margin: "-3px 3px"}}>
            My Work
          </div> 
        </div>

        {/* Cards */}
        <div style={{ display: 'flex', marginTop: 70, width:'100%', flexDirection:'column' }}>
          {cards.map((card, index) => (
            <Card key={index} card={card} />
          ))}
        </div>

    </div>
  )
})

const Card = ({card}) => {
  return(
    <div style={{
      width: "100%", height: 500, margin: '0px 80px', display:'flex', 
      alignItems:'flex-start', flexDirection:'column'
    }}>
      <p style={{fontSize: 38, fontWeight:'bold', color:'#fff'}}>{card.title}</p>
      <a href={card.url} style={{ color: '#fff', textDecoration: 'none' }}>
        {card.urlName}
      </a>

      <div style={{width: '100%', display:'flex'}}>

        {/* Picture */}
        <div style={{
          width: "30%", height: 300, display: 'flex', background:'#6118BE', 
          alignItems:'flex-start', borderRadius:20
        }}>
          <div style={{height: 293, width: '100%', background: '#fff', borderRadius:20}}>
          </div>
        </div>

        {/* Text */}
        <div style={{width:"70%"}}>
          <ul style={{}}>
            {card.description.map((des, index) => {
              return(
                <li key={index} style={{color: '#fff', fontSize: 24, marginBottom:10, textAlign:'start'}}>
                  {des}
                </li>
              )
            })}
          </ul>
        </div>

      </div>
    </div>
  )
}