import React from 'react'
import { bigH1TextSize, textGrey } from '../global'

export const AboutMe = () => {
    return (
        <div style={{
            marginTop:'100px', width:'100%', display:'flex', justifyContent:'center',
            flexDirection:'column', alignItems: 'center'
        }}>
            <h1 style={{fontSize: bigH1TextSize, color:'#F4C1C6', margin: '0px 0px 20px 0px'}}>About Me</h1>

            <div style={{color: textGrey, marginBottom:'20px', fontSize: 20}}>In 3 years I obtained my Computer Science (B.S.) at Stony Brook University  👨‍🎓 </div>
            <div style={{color: textGrey, marginBottom:'20px', fontSize: 20}}>In my spare time I love dining and playing basketball (Go Celtics!) 🍀 </div>
            <div style={{color: textGrey, marginBottom:'20px', fontSize: 20}}>Currently based in the Boston area.  🏙️</div>
        
            <div style={{width:'75%', display:'flex', justifyContent:'space-evenly'}}>
                <YearPart num={5} text={"years experience"}/>
                <YearPart num={400} text={"github commits"}/>
                <YearPart num={4} text={"technologies mastered"}/>
                <YearPart num={1} text={"cat mastered"}/>
            </div>
        </div>
    )
}

export const YearPart = ({num, text}) => {
    const formattedText = text.split(' ').join('<br />');

    return (
        <div style={{display:'flex'}}>
            <div>
                <h1 style={{color:'#E0E0E0', fontSize:bigH1TextSize, margin:'0px 10px 0px 0px'}}>{num}</h1>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent:'center' }}>
                <p style={{ color: '#E0E0E0', fontSize: '18px', margin:0 }}>{text.split(' ')[0]}</p>
                <p style={{ color: '#E0E0E0', fontSize: '18px', margin:0 }}>{text.split(' ')[1]}</p>
            </div>
        </div>
    )
}
