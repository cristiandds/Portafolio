import React, { useState, useEffect } from 'react';

function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="nav-container">
                <a href="#home" className="nav-logo">
                    Cristian<span>.dev</span>
                </a>
                <ul className="nav-links">
                    <li><a href="#home" className="nav-item">Inicio</a></li>
                    <li><a href="#about" className="nav-item">Sobre Mí</a></li>
                    <li><a href="#projects" className="nav-item">Proyectos</a></li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
