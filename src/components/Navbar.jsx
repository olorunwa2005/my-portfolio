import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import DarkModeToggle from './DarkModeToggle';
import CV from './CV';

const Navbar = ({ darkMode, toggleDarkMode }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'About Me', href: '#about' },
        { name: 'My Skill', href: '#skills' },
        { name: 'My Project', href: '#projects' },
        { name: 'Ongoing Course', href: '#course' },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'py-4 glass shadow-lg' : 'py-6 bg-transparent'}`}>
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                {/* Logo */}
                <motion.a
                    href="#home"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="text-2xl font-black tracking-tighter text-diamond"
                >
                    JUSTICE.
                </motion.a>

                {/* Desktop Menu */}
                <div className="hidden lg:flex items-center gap-8">
                    <div className="flex gap-8">
                        {navLinks.map((link) => (
                            <motion.a
                                key={link.name}
                                href={link.href}
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="text-sm font-bold uppercase tracking-widest text-slate-400 hover:text-diamond transition-colors relative group"
                            >
                                {link.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-diamond transition-all duration-300 group-hover:w-full"></span>
                            </motion.a>
                        ))}
                    </div>

                    <div className="h-6 w-px bg-white/10 mx-2"></div>

                    <div className="flex items-center gap-6">
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
                            <CV variant="simple" />
                        </motion.div>
                        <DarkModeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
                    </div>
                </div>

                {/* Mobile Menu Toggle */}
                <div className="lg:hidden flex items-center gap-4">
                    <DarkModeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="p-2 text-slate-400 hover:text-diamond transition-colors"
                    >
                        {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="lg:hidden glass border-t border-white/5 overflow-hidden"
                    >
                        <div className="p-8 flex flex-col gap-6 text-center">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="text-lg font-bold uppercase tracking-widest text-slate-300 hover:text-diamond"
                                >
                                    {link.name}
                                </a>
                            ))}
                            <div className="pt-6 border-t border-white/5 flex flex-col gap-4">
                                <CV variant="outline" />
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
