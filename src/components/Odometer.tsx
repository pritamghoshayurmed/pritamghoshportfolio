import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import './Odometer.css';

interface OdometerProps {
    value: string;
}

const OdometerDigit: React.FC<{ digit: string; delay: number; inView: boolean }> = ({ digit, delay, inView }) => {
    const columnRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!columnRef.current || !inView) return;

        const targetValue = parseInt(digit, 10);
        if (isNaN(targetValue)) {
            return;
        }

        const numbers = columnRef.current.children;
        const totalItems = numbers.length;
        // We append 0-9 at the end, so target index is totalItems - 10 + targetValue
        const targetIndex = totalItems - 10 + targetValue;

        gsap.fromTo(columnRef.current, {
            y: "0em",
        }, {
            y: `-${targetIndex}em`,
            duration: 2.5,
            delay: delay,
            ease: "power3.inOut",
        });

    }, [digit, delay, inView]);

    const parsed = parseInt(digit, 10);
    if (isNaN(parsed)) {
        return <span className="odometer-static">{digit}</span>;
    }

    // Generate a sequence of random numbers for the slot machine effect.
    // We'll generate 20 random digits, followed by the exact final digits 0-9.
    const randomSequence = Array.from({ length: 30 }, () => Math.floor(Math.random() * 10));
    const finalSequence = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    const sequence = [...randomSequence, ...finalSequence];

    return (
        <div className="odometer-digit-window">
            <div className="odometer-digit-column" ref={columnRef}>
                {sequence.map((num, i) => (
                    <div key={i} className="odometer-value">{num}</div>
                ))}
            </div>
        </div>
    );
};

const Odometer: React.FC<OdometerProps> = ({ value }) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [inView, setInView] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setInView(true);
            }
        }, { threshold: 0.1 });

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => observer.disconnect();
    }, []);

    const chars = value.split('');

    return (
        <div className="odometer-container" ref={containerRef}>
            {chars.map((char, index) => (
                <OdometerDigit
                    key={index}
                    digit={char}
                    delay={index * 0.15}
                    inView={inView}
                />
            ))}
        </div>
    );
};

export default Odometer;
