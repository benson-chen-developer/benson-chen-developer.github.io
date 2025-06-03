import React, { useEffect, useState } from 'react';
import './Desktop.css'; // Make sure to import the CSS file

export const Desktop = ({ pathName }) => {
    console.log('pathanme', pathName)
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        setAnimate(true);
    }, []);


    return (
        <div 
            className={`desktop-container ${animate ? 'slide-in' : ''}`} 
            style={{ 
                minWidth: '350px', height: '200px',
                borderRadius: 20, 
                display: 'inline-flex', 
                justifyContent: 'center', alignItems: 'center',
                margin: '0 20px', 
                boxShadow: '10px 10px 25px rgba(000, 000, 000, 0.4)'
            }}>
            <img 
                src={`/${pathName}.webp`} alt="Project Picture"
                style={{ 
                    width: '100%', 
                    height: '100%', 
                    // objectFit: 'contain', 
                    borderRadius: 15, 
                    display: 'block' 
                }}
                loading="lazy"
            />
        </div>
    );
};
