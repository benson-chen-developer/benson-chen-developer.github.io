import './App.css';
import { ScreenOne } from './Screens/ScreenOne.js';
import { ScreenProjects } from './Screens/ScreenProjects';
import { useRef, useState, useEffect } from 'react';

function App() {

  const screenOneRef = useRef();
  const screenProjectsRef = useRef();

  const [scrollPosition, setScrollPosition] = useState(0);
  const [navSelected, setNavSelected] = useState("Home");

  useEffect(() => {
    const handleScroll = () => {
      const screenOneElement = screenOneRef.current;
      const screenProjectsElement = screenProjectsRef.current;

      if (screenOneElement && screenProjectsElement) {
        const { top: screenOneTop, bottom: screenOneBottom } = screenOneElement.getBoundingClientRect();
        const { top: screenProjectsTop, bottom: screenProjectsBottom } = screenProjectsElement.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        const bufferZone = 100;

        if (screenOneTop + bufferZone < windowHeight && screenOneBottom > 0) {
          setNavSelected('Home');
        }
        if (screenProjectsTop + bufferZone < windowHeight && screenProjectsBottom > 0) {
          setNavSelected('Work');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
    <main className="App">
      <nav style={{minWidth: "100vw", height: 60, background:'#000', position:'fixed', display:'flex', justifyContent:'space-between'}}>
        
        {/* Left Side */}
        <div style={{display:'flex', height:'100%', justifyContent:'center', alignItems:'center'}}>
          <div style={{color:'#AAAAAA', fontSize: 30, fontWeight:'bold', marginLeft: 20, marginBottom: 5}}>
            &lt;/&gt;
          </div>

          <div style={{display:'flex', marginLeft: 10}}>
            <div style={{fontSize: 30, color:'#feff', fontStyle: 'italic', fontWeight:'bold', position:'absolute'}}>
              Benson Chen
            </div> 
            <div style={{fontSize: 30, color:'#EE2DA1', fontStyle: 'italic', fontWeight:'bold', marginTop:3, marginLeft: 3}}>
              Benson Chen
            </div> 
          </div>
        </div>

        {/* Text Selection */}
        <div style={{display:'flex', height:'100%', marginRight: 20}}>
          <NavBarItem setNavSelected={setNavSelected} targetRef={screenOneRef} name={"Home"} navSelected={navSelected}/>
          <NavBarItem setNavSelected={setNavSelected} targetRef={screenProjectsRef} name={"Work"} navSelected={navSelected}/>
          <NavBarItem setNavSelected={setNavSelected} targetRef={screenProjectsRef} name={"Contact"} navSelected={navSelected}/>
        </div>

      </nav>

      <ScreenOne ref={screenOneRef}/>
      <ScreenProjects ref={screenProjectsRef}/>
    </main>
  );
}

export default App;

const NavBarItem = ({targetRef, name, navSelected, setNavSelected}) => {
  return(
    <div onClick={() => {
      targetRef.current?.scrollIntoView({behavior: 'smooth'});
    }} style={{
      width: 100, minHeight: "100%", background:'#000',
      display:'flex', justifyContent:'center', alignItems:'center',
      cursor:'pointer', 
      borderBottom: navSelected === name ? '5px solid #7EE4C2' : 'none', 
    }}>
      <div style={{fontSize: 20, color:'#fff', fontWeight: 'bold'}}>
        {name}
      </div>
    </div>
  )
}