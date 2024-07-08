import React, { useEffect, useState } from 'react'

export const Iphone = ({pathName}) => {
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        setAnimate(true);
    }, []);

    return (
        <div className={`desktop-container ${animate ? 'slide-in' : ''}`} style={{width:'230px', height:' 500px', background:'#000', borderRadius:15, display:'flex', justifyContent:'center', alignItems:'center', margin: '0 20px'}}>
            <img 
                src={`${process.env.PUBLIC_URL}/${pathName}.png`} alt="Project Pic"
                style={{width: '98%', height: '99%', borderRadius: 20}}
            />
        </div>
    )
}
