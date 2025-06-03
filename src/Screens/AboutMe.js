import React from 'react'
import { bigH1TextSize, textGrey } from '../global'
import YearPart from './YearPart'

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
        
            <div style={{width:'75%', display:'flex', justifyContent:'space-evenly', paddingBottom:'100px', marginTop:'20px'}}>
                <YearPart num={2} text={"years experience"}/>
                <YearPart num={550} text={"+github commits"}/>
                {/* <YearPart num={4} text={"technologies mastered"}/> */}
                <YearPart num={1} text={"cat raised"}/>
            </div>
        </div>
    )
}