import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import './styles/global.css';

function App() {
    const [darkMode, setDarkMode] = useState(true);

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [darkMode]);

    const toggleDarkMode = () => setDarkMode(!darkMode);

    return (
        <div className={`min-h-screen transition-colors duration-500 ${darkMode ? 'dark bg-slate-950 text-white' : 'bg-white text-slate-900'}`}>
            <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
            <Home />
            <Footer />
        </div>
    );
}

export default App;
