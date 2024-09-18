import React, { useEffect, useState } from 'react';
import './Desktop.css';

export const Desktop = ({ pathName }) => {
    const [animate, setAnimate] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setAnimate(true);
        setIsLoading(true);  
        console.log("pathName", pathName)
    }, [pathName]);  

    const handleImageLoad = () => {
        setIsLoading(false); 
    };

    return (
        <div className={`desktop-container ${animate ? 'slide-in' : ''}`} style={{ minWidth: '800px', height: '400px', background: '#000', borderRadius: 20, display: 'inline-flex', justifyContent: 'center', alignItems: 'center', margin: '0 20px', position: 'relative' }}>
            {isLoading && (
                <img 
                    src={`/loading.png`} alt="Loading"
                    style={{ position: 'absolute', width: '99%', height: '99%', borderRadius: 15 }}
                />
            )}
            <img 
                src={`/images/${pathName}.png`} alt="Project Pic"
                style={{ width: '99%', height: '99%', borderRadius: 15, display: isLoading ? 'none' : 'block' }}
                onLoad={handleImageLoad}
            />
        </div>
    );
};