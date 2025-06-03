import React from 'react'
import { Iphone } from '../Work/Iphone'
import { Desktop } from '../Work/Desktop'

export const Project = ({selectedProject}) => {
    
    return (
        <div style={{marginBottom:'100px'}}>
            {/* Pictures */}
            <div style={{ display: 'flex', width: '100%', justifyContent: 'center', position: 'relative', overflow: 'hidden' }}>
                
                {selectedProject.mobile ? 
                    <div style={{ width: '90vw', display: 'flex', overflowX: 'auto', whiteSpace: 'nowrap', padding: '0 30px' }}>
                        {selectedProject.picLinks.map((link, index) => 
                            <Iphone pathName={link} />
                        )}
                    </div>
                        :
                    <div style={{ width: '100%', display: 'flex', overflowX: 'auto', whiteSpace: 'nowrap', padding: '0 30px' }}>
                        {selectedProject.picLinks.map((link, index) => 
                            <Desktop pathName={link} />
                        )}
                    </div>
                }

            </div>

            {/* Info */}
            <div style={{width:'100%', margin: '10px 0px 0px 100px'}}>
                <div style={{display:'flex'}}>
                    <h1 style={{fontSize:'25px', fontWeight:'bold', color:'#fff'}}>{selectedProject.title}</h1>
                </div>

                <div style={{display: 'flex', marginTop: '-25px'}}>
                    <ul style={{ padding: 0, margin: '20px 0px 0px 20px'}}>
                        {selectedProject.points.map((point, index) => 
                            <li style={{fontSize: '17px', color: '#d9d9d9', marginBottom:10}}>
                                {point}
                            </li>
                        )}
                    </ul>
                </div>

                {selectedProject.link ? 
                    <a 
                        target='_blank'
                        href={selectedProject.link}
                        style={{color:'#fff', display:'flex', alignItems:'center'}}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 8h2c1.333 0 4 .8 4 4s-2.667 4-4 4h-2M9 8H7c-1.333 0-4 .8-4 4s2.667 4 4 4h2m-1-4h8"/></svg>
                        <span style={{marginLeft:'5px'}}>Link</span> 
                    </a> : null
                }
            </div>
        </div>
    )
}
