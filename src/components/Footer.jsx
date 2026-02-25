import React from 'react';
import { Mail, Github, Linkedin, Twitter, ChevronUp } from 'lucide-react';
import { CONTACT_DATA } from '../constants';

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="pt-16 pb-12 relative border-t border-white/5">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid md:grid-cols-3 gap-10 md:gap-12 mb-12 md:mb-16">
                    <div className="space-y-4 md:space-y-6">
                        <h3 className="text-xl md:text-2xl font-bold text-diamond tracking-tighter">JUSTICE.</h3>
                        <p className="text-slate-400 max-w-xs leading-relaxed text-sm">
                            Designing and developing professional digital products with a focus on modern aesthetics and technical excellence.
                        </p>
                    </div>

                    <div className="space-y-4 md:space-y-6">
                        <h4 className="font-bold text-xs uppercase tracking-widest text-slate-200">Contact</h4>
                        <ul className="space-y-3">
                            <li className="flex items-center gap-3 text-slate-400 hover:text-diamond transition-colors cursor-pointer group text-sm">
                                <Mail size={16} className="text-diamond group-hover:scale-110 transition-transform" />
                                {CONTACT_DATA.email}
                            </li>
                            <li className="flex items-center gap-3 text-slate-400 text-sm">
                                <div className="w-1.5 h-1.5 rounded-full bg-diamond animate-pulse"></div>
                                Available for new opportunities
                            </li>
                        </ul>
                    </div>

                    <div className="space-y-4 md:space-y-6">
                        <h4 className="font-bold text-xs uppercase tracking-widest text-slate-200">Follow Me</h4>
                        <div className="flex gap-4">
                            {CONTACT_DATA.socials.map((social, i) => {
                                const icons = {
                                    github: <Github size={18} />,
                                    linkedin: <Linkedin size={18} />,
                                    twitter: <Twitter size={18} />
                                };
                                return (
                                    <a
                                        key={i}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-diamond hover:text-white transition-all duration-300 border border-diamond/20"
                                    >
                                        {icons[social.platform]}
                                    </a>
                                );
                            })}
                        </div>
                    </div>
                </div>

                <div className="h-px w-full bg-gradient-to-r from-transparent via-diamond/30 to-transparent mb-10 md:mb-12"></div>

                <div className="flex flex-col md:flex-row justify-between items-center gap-8 text-slate-500 text-xs">
                    <p>© {new Date().getFullYear()} Justice. All rights reserved.</p>
                    <button
                        onClick={scrollToTop}
                        className="flex items-center gap-2 uppercase tracking-widest hover:text-diamond transition-colors"
                    >
                        Back to top <ChevronUp size={16} />
                    </button>
                    <div className="flex gap-8 uppercase tracking-widest">
                        <a href="#" className="hover:text-diamond transition-colors">Privacy</a>
                        <a href="#" className="hover:text-diamond transition-colors">Terms</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
