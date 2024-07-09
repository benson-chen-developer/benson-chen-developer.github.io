import React, { useState } from 'react'
import {textGrey} from '../../global'

export const Header = ({index,setIndex, length, setSelectedOption, selectedOption, options}) => {
  return (
    <div style={{width:'100%', display:'flex', justifyContent:'space-between'}}>
        <div style={{display:'flex'}}>
          <h1 style={{fontSize: '25px', margin: '0px 5px 0px 100px', color:'#F4C1C6'}}>{index+1}</h1>
          <h1 style={{fontSize: '25px', margin: '0px 0px 0px 0px', color: '#fff'}}>/ {length}</h1>
          
          <ArrowBtn index={index} length={length} setIndex={setIndex} isBack={true}/>
          <ArrowBtn index={index} length={length} setIndex={setIndex} isBack={false}/>
        </div>

        {/* Right Side */}
        <div style={{display:'flex', marginRight:'100px'}}>
          {options.map((option, index) => 
            <Option setIndex={setIndex} option={option} selectedOption={selectedOption} setSelectedOption={setSelectedOption}/>
          )}
        </div>
    </div>
  )
}

const Option = ({option, setSelectedOption, selectedOption, setIndex}) => {
  if(option === "Resume") return (
    <h1 style={{
      fontSize: '16px',
      margin: '0px 0px 0px 20px', 
      color: '#fff'
    }}>
      <a href={`${process.env.PUBLIC_URL}/Resume.pdf`} target="_blank" rel="noopener noreferrer"
        style={{textDecoration:'none', color:'#fff'}}
      >
        Resume
      </a>
    </h1>
  )

  return (
    <h1 style={{
      fontSize: '16px',
      margin: '0px 0px 0px 20px', cursor:'pointer', 
      color: selectedOption === option ? '#F4C1C6' : '#fff'
    }} onClick={() => {
      setSelectedOption(option);
      setIndex(0);
    }}>
      {option}
    </h1>
  )
}

const btnSize = '25px'; const arrowSize = '16px';
const ArrowBtn = ({index, length, setIndex, isBack}) => {
  if((isBack && index < 1) || (!isBack && index >= length-1)) return(
    <div 
      style={{
        background:'#9F9F9F', width: btnSize, height:btnSize, borderRadius:100, 
        justifyContent:'center', alignItems:'center', display:'flex', 
        margin: isBack ? '2px 0px 0px 20px' : '2px 0px 0px 10px',
        transform: isBack ? 'rotate(-180deg)' : 'rotate(0deg)'
      }} 
    >
      <svg xmlns="http://www.w3.org/2000/svg" width={arrowSize} height={arrowSize} viewBox="0 0 15 15"><path fill="#1d1d1d" d="M8.293 2.293a1 1 0 0 1 1.414 0l4.5 4.5a1 1 0 0 1 0 1.414l-4.5 4.5a1 1 0 0 1-1.414-1.414L11 8.5H1.5a1 1 0 0 1 0-2H11L8.293 3.707a1 1 0 0 1 0-1.414"/></svg>
    </div>
  )

  return(
    <div 
      style={{
        background:'#F4C1C6', width:btnSize, height:btnSize, borderRadius:100, 
        justifyContent:'center', alignItems:'center', display:'flex', 
        margin: isBack ? '2px 0px 0px 20px' : '2px 0px 0px 10px',
        transform: isBack ? 'rotate(-180deg)' : 'rotate(0deg)', cursor:'pointer'
      }} 
      onClick={() => {
        if(isBack){
          setIndex(p => p-1);
        } else {
          setIndex(p => p+1);
        }
      }}
    >
      <svg xmlns="http://www.w3.org/2000/svg" width={arrowSize} height={arrowSize} viewBox="0 0 15 15"><path fill="#1d1d1d" d="M8.293 2.293a1 1 0 0 1 1.414 0l4.5 4.5a1 1 0 0 1 0 1.414l-4.5 4.5a1 1 0 0 1-1.414-1.414L11 8.5H1.5a1 1 0 0 1 0-2H11L8.293 3.707a1 1 0 0 1 0-1.414"/></svg>
    </div>
  )
}