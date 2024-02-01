import React, { useRef, useEffect } from 'react';

function Starfield() {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        const stars = 500; // Number of stars
        let speed = 2; // Speed of star movement

        // Array to hold star positions and speeds
        let starArray = [];
        for (let i = 0; i < stars; i++) {
            starArray.push({
                x: Math.random() * canvas.offsetWidth,
                y: Math.random() * canvas.offsetHeight,
                size: Math.random() * 1.5,
                speed: Math.random() * 0.5 + 0.5
            });
        }

        // Function to update star positions
        const animate = () => {
            console.log('Animating'); 
            ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);

            starArray.forEach(star => {
                ctx.beginPath();
                ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2, false);
                ctx.fillStyle = 'white';
                ctx.fill();
                ctx.closePath();

                // Update star position
                star.y -= star.speed * speed;
                if (star.y < 0) {
                    star.y = canvas.offsetHeight;
                    star.x = Math.random() * canvas.offsetWidth;
                }
            });

            requestAnimationFrame(animate);
        };

        // Start the animation
        animate();

        // Handle resizing
        window.addEventListener('resize', () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        });
    }, []);

    return <canvas ref={canvasRef} width={window.innerWidth} height={window.innerHeight} style={{ position: 'fixed', top: 0, left: 0, zIndex: -1 }} />;
}

export default Starfield;
