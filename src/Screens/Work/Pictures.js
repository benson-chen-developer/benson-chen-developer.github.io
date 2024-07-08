import React, { useRef } from 'react';
import { Desktop } from './Desktop';

export const Work = () => {
    const scrollContainerRef = useRef(null);

    const handleMouseDown = (e) => {
        const scrollContainer = scrollContainerRef.current;
        scrollContainer.isDown = true;
        scrollContainer.startX = e.pageX - scrollContainer.offsetLeft;
        scrollContainer.scrollLeftStart = scrollContainer.scrollLeft;
        scrollContainer.style.cursor = 'grabbing';
    };

    const handleMouseLeave = () => {
        const scrollContainer = scrollContainerRef.current;
        scrollContainer.isDown = false;
        scrollContainer.style.cursor = 'grab';
    };

    const handleMouseUp = () => {
        const scrollContainer = scrollContainerRef.current;
        scrollContainer.isDown = false;
        scrollContainer.style.cursor = 'grab';
    };

    const handleMouseMove = (e) => {
        const scrollContainer = scrollContainerRef.current;
        if (!scrollContainer.isDown) return;
        e.preventDefault();
        const x = e.pageX - scrollContainer.offsetLeft;
        const walk = (x - scrollContainer.startX) * 2; // The multiplier controls the scroll speed
        scrollContainer.scrollLeft = scrollContainer.scrollLeftStart - walk;
    };

    return (
        <div style={{ display: 'flex', width: '100%', justifyContent: 'center', position: 'relative', overflow: 'hidden' }}>
            <div style={{ width: '100%', height: '40px', background: '#EFF799', zIndex: 0, position: 'absolute', top: '350px', left: 0 }} />
            <div
                ref={scrollContainerRef}
                style={{ zIndex: 1, width: '100%', display: 'flex', overflowX: 'auto', overflowY: 'hidden', whiteSpace: 'nowrap', padding: '0 30px', cursor: 'grab' }}
                onMouseDown={handleMouseDown}
                onMouseLeave={handleMouseLeave}
                onMouseUp={handleMouseUp}
                onMouseMove={handleMouseMove}
            >
                <Desktop pathName={"projects/postman"} />
                <Desktop pathName={"projects/postman"} />
                <Desktop pathName={"projects/postman"} />
            </div>
        </div>
    );
};
