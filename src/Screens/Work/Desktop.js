import React, { useEffect, useState } from 'react';
import './Desktop.css'; // Make sure to import the CSS file

export const Desktop = ({ pathName }) => {
    const [animate, setAnimate] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setAnimate(true);
    }, []);

    const handleImageLoad = () => {
        setIsLoading(false);
    };

    return (
        <div className={`desktop-container ${animate ? 'slide-in' : ''}`} style={{ minWidth: '825px', height: '450px', background: '#000', borderRadius: 20, display: 'inline-flex', justifyContent: 'center', alignItems: 'center', margin: '0 20px', position: 'relative' }}>
            {isLoading && (
                <img 
                    src={`${process.env.PUBLIC_URL}/loading.png`} alt="Loading"
                    style={{ position: 'absolute', width: '99%', height: '99%', borderRadius: 15 }}
                    loading="lazy"
                />
            )}
            <img 
                src={`${process.env.PUBLIC_URL}/${pathName}.png`} alt="Project Pic"
                style={{ width: '99%', height: '99%', borderRadius: 15, display: isLoading ? 'none' : 'block' }}
                onLoad={handleImageLoad} loading="lazy"
            />
        </div>
    );
};
