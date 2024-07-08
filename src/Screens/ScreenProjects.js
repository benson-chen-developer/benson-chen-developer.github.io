import React, {useState} from 'react'

export const ScreenProjects = React.forwardRef((props, ref) => {

  const [selected, setSelected] = useState('Projects');

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
    },
    {
      title: "NHL Tracker",
      url: 'https://github.com/benson-chen-developer/NHLstats',
      urlName: '',
      description: [
        "Worked with NHL APIs to display team+player stats",
        "React Frontend",
        "Node + Express Backend",
      ]
    }
  ]

  return (
    <div ref={ref} style={{
      display:'flex', minHeight: "110vh", minWidth: "100vw", background:'#2B2B2B',
      alignItems:'center', flexDirection:'column'
    }}>
      
        {/* My Work */}
        <div style={{display:'flex', marginTop: 50, alignItems:'center', width: "100%", flexDirection:'column'}}>
          <div style={{fontSize: 100, color:'#fff', fontWeight:'bold'}}>
            Projects
          </div> 

          <div style={{display:'flex', width: 300, justifyContent: 'space-evenly', marginTop:30}}>
            <Btn 
              text="Projects" isSelected={selected === "Projects"} setSelected={setSelected}
              backgroundColor="#23C033" highlightColor='#0F861B'
            />
            <Btn 
              text="Resume" isSelected={selected === "Resume"} setSelected={setSelected}
              backgroundColor="#23C033" highlightColor='#0F861B'
            />
          </div>
        </div>

        {/* Cards */}
        <div style={{ display: 'flex', width:'100%', flexDirection:'column' }}>
          {cards.map((card, index) => (
            <Card key={index} card={card} />
          ))}
        </div>

    </div>
  )
})

const Btn = ({text, backgroundColor, highlightColor, isSelected, isHover, setSelected}) => {
  return(
    <div 
      style={{width:130, height:40, background: isSelected ? highlightColor : '#D9D9D9', borderRadius:25, cursor:'pointer'}}
      onClick={() => setSelected(text)}
    >
      <div style={{width:"100%", height:38, background: isSelected ? backgroundColor : '#D9D9D9', borderRadius:25, display:'flex', justifyContent:'center', alignItems:'center', cursor:'pointer'}}>
        <p style={{color: isSelected ? '#fff' : '#000', fontSize: 20, fontWeight:'bold'}}>{text}</p>
      </div>   
    </div>
  )
}

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
          alignItems:'flex-start', borderRadius:10
        }}>
          <div style={{height: 295, width: '100%', background: '#fff', borderRadius:10}}>
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