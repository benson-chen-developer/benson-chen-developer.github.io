import React from 'react'
import { Iphone } from '../Work/Iphone'
import { Desktop } from '../Work/Desktop'

export const Project = ({selectedProject}) => {
    
    return (
        <div>
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

                <div style={{display: 'flex', marginTop: '-25px', paddingBottom: '50px'}}>
                    <ul style={{ padding: 0, margin: '20px 0px 0px 20px'}}>
                        {selectedProject.points.map((point, index) => 
                            <li style={{fontSize: '17px', color: '#d9d9d9', marginBottom:10}}>
                                {point}
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        </div>
    )
}
