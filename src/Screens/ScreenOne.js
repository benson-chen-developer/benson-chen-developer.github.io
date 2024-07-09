import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import { bigH1TextSize } from '../global';
import { AboutMe } from './AboutMe';

const topMargin = '80px';
const leftPush = "0px 100px";
const bigText = 70; const regText = 40;

export const ScreenOne = React.forwardRef((props, ref) => {
  return (
    <div style={{display:'flex', width: "100vw", background:'#1D1D1D',flexDirection: 'column'}} ref={ref} >
      {/* Pic with Stripes */}
      <div style={{width: '100%', position: 'relative', marginTop: '50px', height: '275px', justifyContent: 'flex-end', alignItems: 'center', display: 'flex'}}>
        <img 
          src={`${process.env.PUBLIC_URL}/face.png`} alt="My Face"
          style={{width: '190px', height: '190px', borderRadius: 1000, zIndex: 1, marginRight: '20vw', position: 'relative'}}
        />
        <div style={{ 
          zIndex: 0, position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
          width: '100%', height: '180px', display: 'flex', flexDirection: 'column', justifyContent: 'center'
        }}>
          <div style={{
            width: '100%', height: '30px', marginBottom: '15px',background: '#F4C1C6',
          }} />
          <div style={{
            width: '100%', height: '30px',marginBottom: '15px',background: '#EFF799',
          }} />
          <div style={{
            width: '100%', height: '30px',marginBottom: '15px',background: '#B1DEA3',
          }} />
        </div>
      </div>

      {/* Left with all the text */}
      <div style={{display:'flex', margin: '-50px 0px 10px 100px'}}>
        <p style={{fontSize: bigText, color:'#fff', fontWeight:'bold', marginTop: topMargin, margin: 0}}>
          Hello 👋
        </p> 
      </div>

      <div style={{ display: 'flex', margin: '0px 100px', alignItems: 'flex-end'}}>
        <p style={{ fontSize: regText, color: '#fff', margin: 0, lineHeight: 1 }}>
          My Name Is 
        </p> 
        <p style={{ fontSize: bigText, color: '#EFF799', fontWeight: 'bold', margin: "0px 0px -4px 20px",lineHeight: 1 }}>
          Benson Chen
        </p> 
      </div>

      <div style={{display:'flex', margin: leftPush, marginTop: 30}}>
        <div style={{fontSize: regText-10, color:'#808080'}}>
          Full Stack Developer +++ UX/UI Designer
        </div> 
      </div>

        {/* The Contact and Social Links */}
      <div style={{display:'flex', marginLeft: '100px', flexDirection:'row', marginTop: '30px',}}>
        {/* <Btn /> */}
        <div>
          <h2 style={{margin:0, color:'#B1DEA3'}}>Contact: </h2>
          <p style={{margin:0, color:'#fff'}}>bensonchen456@gmail.com</p>
        </div>

        <a href="https://www.linkedin.com/in/benson-chen-9006231ab/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
          <div style={{width:'50px', height:'50px', display:'flex', justifyContent:'center', alignItems:'center', border: '1px solid #B1DEA3', borderRadius:25, marginLeft: 20, cursor:'pointer'}}>
          <svg xmlns="http://www.w3.org/2000/svg" width="35px" height="35px" viewBox="0 0 24 24"><path fill="#B1DEA3" d="M6.94 5a2 2 0 1 1-4-.002a2 2 0 0 1 4 .002M7 8.48H3V21h4zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.72-2.91z"/></svg>
          </div>
        </a>
        <a href="https://github.com/benson-chen-developer" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
          <div style={{width:'50px', height:'50px', display:'flex', justifyContent:'center', alignItems:'center', border: '1px solid #B1DEA3', borderRadius:25, marginLeft: 20, cursor:'pointer'}}>
            <svg xmlns="http://www.w3.org/2000/svg" width="35px" height="35px" viewBox="0 0 1024 1024"><path fill="#B1DEA3" d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5C64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9c26.4 39.1 77.9 32.5 104 26c5.7-23.5 17.9-44.5 34.7-60.8c-140.6-25.2-199.2-111-199.2-213c0-49.5 16.3-95 48.3-131.7c-20.4-60.5 1.9-112.3 4.9-120c58.1-5.2 118.5 41.6 123.2 45.3c33-8.9 70.7-13.6 112.9-13.6c42.4 0 80.2 4.9 113.5 13.9c11.3-8.6 67.3-48.8 121.3-43.9c2.9 7.7 24.7 58.3 5.5 118c32.4 36.8 48.9 82.7 48.9 132.3c0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9c177.1-59.7 304.6-227 304.6-424.1c0-247.2-200.4-447.3-447.5-447.3"/></svg>
          </div>
        </a>
      </div>

      {/* About Me */}
      <AboutMe />
    </div>
)})


function Btn() {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  const containerStyle = {
    border: '1px solid #B1DEA3',
    width: 180,
    height: 50,
    borderRadius: 20,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    backgroundColor: isHovered ? 'transparent' : '#B1DEA3',  // Dynamic background color based on hover state
    transition: 'background-color 0.3s ease',  // Smooth transition for background color change
  };

  const textStyle = {
    fontSize: 22, fontWeight:'bold',
    color: isHovered ? '#B1DEA3' : '#1D1D1D',  // Dynamic text color based on hover state
  };

  // Event handlers
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      style={containerStyle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={() => navigate('/Contact')}
    >
      <div style={textStyle}>
        Contact
      </div>
    </div>
  );
}