import React, { useState, useEffect, useRef } from 'react';

const useOnScreen = (options) => {
    const ref = useRef();
    const [isIntersecting, setIntersecting] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            setIntersecting(entry.isIntersecting);
        }, options);

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, [ref, options]);

    return [ref, isIntersecting];
};

const CountUp = ({ end, duration, trigger }) => {
    const [count, setCount] = useState(0);
    const [hasPlayed, setHasPlayed] = useState(false);

    useEffect(() => {
        if (trigger && !hasPlayed) {
            let start = 0;
            const increment = end / (duration / 10);
            const timer = setInterval(() => {
                start += increment;
                if (start >= end) {
                    clearInterval(timer);
                    setCount(end);
                    setHasPlayed(true);
                } else {
                    setCount(Math.ceil(start));
                }
            }, 10);

            return () => clearInterval(timer);
        }
    }, [end, duration, trigger, hasPlayed]);

    return <h1 style={{ color: '#E0E0E0', fontSize: '50px', margin: '0px 10px 0px 0px' }}>{count}</h1>;
};

const YearPart = ({ num, text }) => {
    const [ref, isVisible] = useOnScreen({ threshold: 0.1 });
    const [triggerAnimation, setTriggerAnimation] = useState(false);

    useEffect(() => {
        if (isVisible && !triggerAnimation) {
            setTriggerAnimation(true);
        }
    }, [isVisible, triggerAnimation]);

    return (
        <div ref={ref} style={{ display: 'flex' }}>
            <div>
                <CountUp end={num} duration={2000} trigger={triggerAnimation} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center' }}>
                {text.split(' ').map((word, index) => (
                    <p key={index} style={{ color: '#E0E0E0', fontSize: '20px', margin: 0 }}>{word}</p>
                ))}
            </div>
        </div>
    );
};

export default YearPart;
