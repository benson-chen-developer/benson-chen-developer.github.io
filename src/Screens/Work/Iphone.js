import React, { useEffect, useState } from 'react'

export const Iphone = ({pathName}) => {
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        setAnimate(true);
    }, []);

    return (
        <div 
            className={`desktop-container ${animate ? 'slide-in' : ''}`} 
            style={{
                width:'140px', height:' 300px', 
                background:'#000', borderRadius:15, display:'flex', 
                alignItems:'center', margin: '0 20px',
                boxShadow: '10px 10px 25px rgba(000, 000, 000, 0.4)'
            }}
        >
            <img 
                src={`/${pathName}.webp`} alt="Project Pic"
                style={{ 
                    width: '100%', 
                    height: '100%', 
                    objectFit: 'contain', 
                    borderRadius: 15, 
                    display: 'block' 
                }}
                loading="lazy"
            />
        </div>
    )
}
