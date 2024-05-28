import React, {useState} from 'react'

const topMargin = '80px';
const leftPush = "0px 100px"

export const ScreenOne = React.forwardRef((props, ref) => {
  return (
    <div style={{
      display:'flex', height: "100vh", width: "100vw", background:'#1D1D1D'}} ref={ref}>
      {/* Left with all the text */}
      <div style={{overflow:'hidden', marginTop: 50}}>
        <div style={{display:'flex', margin: leftPush}}>
          <div style={{fontSize: 70, color:'#fff', fontWeight:'bold', marginTop: topMargin}}>
            Hello
          </div> 
          
          <div style={{width:"10px"}}/>
          <ExclamtionPoint />
          <ExclamtionPoint />
          <ExclamtionPoint />
        </div>

        <div style={{display:'flex', margin: leftPush, alignItems:'flex-end'}}>
          <div style={{display:'flex', fontSize: 40, color:'#fff'}}>
            My Name Is 
          </div> 

          <div style={{display:'flex', marginLeft: 20}}>
            <div style={{fontSize: 75, color:'#feff', fontStyle: 'italic', fontWeight:'bold', position:'absolute'}}>
              Benson Chen
            </div> 
            <div style={{fontSize: 75, color:'#EE2DA1', fontStyle: 'italic', fontWeight:'bold', margin: "-3px 3px"}}>
              Benson Chen
            </div> 
          </div>
        </div>

        <div style={{display:'flex', margin: leftPush}}>
          <div style={{fontSize: 30, color:'#808080', marginTop: 10, fontStyle: 'italic',}}>
            Full Stack Developer +++ UX/UI Designer
          </div> 
        </div>

        <Btn />
      </div>

      {/* Right with the lines */}
      {/* <div style={{overflow:'hidden'}}>
        <div style={{
          width: 40, height: 1000,
          background:'#F4C1C6',
          marginLeft: 250,
          transform: 'rotate(30deg)',
        }} />
        <div style={{
          width: 40, height: 1000,
          background:'#EFF799',
          marginLeft: 300, marginTop: 100,
          transform: 'rotate(30deg)',
        }} />
        <div style={{
          width: 40, height: 1000,
          background:'#B1DEA3',
          transform: 'rotate(30deg)',
        }} />
      </div> */}

    </div>
  )
})

const ExclamtionPoint = () => {
  return(
    <div style={{display:'flex', marginLeft: "5px",marginTop: topMargin}}>
      <div style={{fontSize: 70, color:'#7EE4C2', fontWeight:'bold', position:'absolute'}}>
        !
      </div> 
      <div style={{fontSize: 70, color:'#EE2DA1', fontWeight:'bold', margin: "-3px 3px"}}>
        !
      </div> 
    </div>
  )
}

function Btn() {
  const [isHovered, setIsHovered] = useState(false);

  const containerStyle = {
    border: '1px solid #7EE4C2',
    width: 180,
    height: 50,
    marginLeft: 100,
    marginTop: 200,
    borderRadius: 5,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    backgroundColor: isHovered ? '#7EE4C2' : 'transparent',  // Dynamic background color based on hover state
    transition: 'background-color 0.3s ease',  // Smooth transition for background color change
  };

  const textStyle = {
    fontSize: 25,
    color: isHovered ? '#FFFFFF' : '#7EE4C2',  // Dynamic text color based on hover state
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
    >
      <div style={textStyle}>
        Contact
      </div>
    </div>
  );
}