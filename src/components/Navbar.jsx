import React, { useState, useEffect } from 'react';
import { Menu, X, Landmark } from 'lucide-react';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Inicio', href: '#' },
        { name: 'Precios', href: '#precios' },
        { name: 'Requisitos', href: '#requisitos' },
        { name: 'Verificar', href: '#verificar' },
    ];

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'glass py-3' : 'py-5'}`}>
            <div className="container flex justify-between items-center">
                <div className="flex items-center gap-2">
                    <Landmark className="h-8 w-8 text-primary" />
                    <span className="text-2xl font-bold serif text-secondary">LIO</span>
                </div>

                {/* Desktop Menu */}
                <div className="sm-hidden md-flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="nav-link font-medium hover:text-primary transition-all text-secondary"
                        >
                            {link.name}
                        </a>
                    ))}
                    <a href="#tramite" className="btn btn-primary text-sm">
                        Iniciar Trámite
                    </a>
                </div>

                {/* Mobile Toggle */}
                <div className="md-hidden">
                    <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-secondary" style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
                        {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md-hidden glass absolute top-0 left-0 w-full py-5 flex flex-col items-center gap-4" style={{ marginTop: '70px', borderTop: '1px solid #eee' }}>
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-lg font-medium text-secondary"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            {link.name}
                        </a>
                    ))}
                    <a href="#tramite" className="btn btn-primary" onClick={() => setIsMobileMenuOpen(false)}>
                        Iniciar Trámite
                    </a>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
