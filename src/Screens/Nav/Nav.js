import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom';

export const Nav = () => {
  return (
    <nav style={{minWidth: "100vw", height: 60, background:'#1D1D1D', position:'fixed', display:'flex', justifyContent:'space-between', zIndex: 2}}>
        {/* Left Side */}
        <div style={{display:'flex', height:'100%', justifyContent:'center', alignItems:'center', marginLeft:'100px'}}>
          <h1 style={{fontSize: 30, color:'#fff', fontWeight:'bold'}}>
            Benson
          </h1> 
          <h1 style={{fontSize: 30, color:'#F4C1C6', fontWeight:'bold'}}>
            .
          </h1>
        </div>

        {/* Text Selection */}
        <div style={{display:'flex', height:'100%', marginRight: '100px'}}>
          <NavBarItem name={"Home"} />
          <NavBarItem name={"Projects"}/>
          <NavBarItem name={"Contact"}/>
        </div>
      </nav>
  )
}

const NavBarItem = ({name}) => {
    const navigate = useNavigate();
    const location = useLocation();
    return(
        <div onClick={() => {
            if(name === "Home"){
                navigate('/')
            } else {
                navigate(name);
            }
        }} style={{
            minHeight: "100%", cursor:'pointer', marginLeft: '50px',
            display:'flex', justifyContent:'center', alignItems:'center',
        }}>
            <h1 style={{fontSize: 16, fontWeight: 'bold', color: location.pathname.slice(1, location.length) === name ? '#F4C1C6' : '#fff'}}>
                {name}
            </h1>
        </div>
    )
}
