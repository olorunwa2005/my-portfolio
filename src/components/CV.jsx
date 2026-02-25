import React from 'react';
import { Download, FileText } from 'lucide-react';
import { HERO_DATA } from '../constants';

const CV = ({ variant = "outline" }) => {
    const baseStyles = "flex items-center justify-center gap-2 font-semibold transition-all duration-500 transform hover:scale-105 active:scale-95";
    const variants = {
        primary: `${baseStyles} btn-primary`,
        outline: `${baseStyles} btn-outline`,
        simple: "flex items-center gap-2 text-slate-400 hover:text-diamond transition-colors"
    };

    return (
        <a
            href={HERO_DATA.resumeLink}
            className={variants[variant]}
            download
        >
            <Download size={18} />
            <span>Download CV</span>
        </a>
    );
};

export default CV;
