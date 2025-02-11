import { useRef, useEffect } from 'react';

const useMouseRotate = () => {
    const cardRef = useRef(null);

    useEffect(() => {
        const card = cardRef.current;
        let bounds;

        const rotateToMouse = (e) => {
            const mouseX = e.clientX;
            const mouseY = e.clientY;
            const leftX = mouseX - bounds.x;
            const topY = mouseY - bounds.y;
            const center = {
                x: leftX - bounds.width / 2,
                y: topY - bounds.height / 2
            };
            const distance = Math.sqrt(center.x ** 2 + center.y ** 2);

            card.style.transform = `
                scale3d(1.07, 1.07, 1.07)
                rotate3d(
                    ${center.y / 100},
                    ${-center.x / 100},
                    0,
                    ${Math.log(distance) * 2}deg
                )
            `;

            const glowElement = card.querySelector('.glow');
            if (glowElement) {
                glowElement.style.backgroundImage = `
                    radial-gradient(
                        circle at
                        ${center.x * 2 + bounds.width / 2}px
                        ${center.y * 2 + bounds.height / 2}px,
                        #ffffff55,
                        #0000000f
                    )
                `;
            }
        };

        const addListeners = () => {
            bounds = card.getBoundingClientRect();
            document.addEventListener('mousemove', rotateToMouse);
        };

        const removeListeners = () => {
            document.removeEventListener('mousemove', rotateToMouse);
            card.style.transform = '';
            const glowElement = card.querySelector('.glow');
            if (glowElement) {
                glowElement.style.backgroundImage = '';
            }
        };

        card.addEventListener('mouseenter', addListeners);
        card.addEventListener('mouseleave', removeListeners);

        return () => {
            card.removeEventListener('mouseenter', addListeners);
            card.removeEventListener('mouseleave', removeListeners);
        };
    }, []);

    return cardRef;
};

export  {useMouseRotate};
