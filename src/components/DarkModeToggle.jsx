import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { motion } from 'framer-motion';

const DarkModeToggle = ({ darkMode, toggleDarkMode }) => {
    return (
        <motion.button
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.1 }}
            onClick={toggleDarkMode}
            className="p-2.5 rounded-xl glass dark:glass-dark border border-diamond/20 text-diamond hover:bg-diamond hover:text-white transition-all duration-300"
            aria-label="Toggle Dark Mode"
        >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
        </motion.button>
    );
};

export default DarkModeToggle;
