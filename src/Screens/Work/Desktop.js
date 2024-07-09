import React, { useEffect, useState } from 'react';
import './Desktop.css'; // Make sure to import the CSS file

export const Desktop = ({ pathName }) => {
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        setAnimate(true);
    }, []);

    return (
        <div className={`desktop-container ${animate ? 'slide-in' : ''}`} style={{ minWidth: '825px', height: '450px', background: '#000', borderRadius: 20, display: 'inline-flex', justifyContent: 'center', alignItems: 'center', margin: '0 20px' }}>
            <img 
                src={`${process.env.PUBLIC_URL}/${pathName}.png`} alt="Project Pic"
                style={{ width: '99%', height: '99%', borderRadius: 15 }}
            />
        </div>
    );
};
