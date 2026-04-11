import React from 'react';
import { motion } from 'framer-motion';

import { HERO_DATA } from '../constants';
import CV from './CV';

const Hero = () => {
    return (
        <section id="home" className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-slate-950"></div>

                {/* Animated Grid */}
                <div className="absolute inset-0 bg-grid-slate-900 opacity-20"></div>

                {/* Gradient Blobs */}
                <div className="absolute top-1/4 -left-20 w-96 h-96 bg-diamond/20 rounded-full blur-[120px] animate-pulse-slow"></div>
                <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-diamond/10 rounded-full blur-[120px] animate-pulse-slow" style={{ animationDelay: '2s' }}></div>

                {/* Background Video */}
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-overlay"
                >
                    <source src="https://assets.mixkit.co/videos/preview/mixkit-code-on-a-computer-screen-2213-large.mp4" type="video/mp4" />
                </video>

                <div className="absolute inset-0 bg-gradient-to-b from-slate-950/0 via-slate-950/50 to-slate-950"></div>
            </div>

            <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <span className="inline-block px-4 py-1.5 rounded-full border border-diamond/30 bg-diamond/5 text-diamond text-xs font-bold uppercase tracking-[0.2em] mb-8">
                        Available for new projects
                    </span>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                    className="text-slate-400 font-medium tracking-widest uppercase mb-4 text-sm"
                >
                    Hi, I'm {HERO_DATA.name}
                </motion.p>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-5xl md:text-8xl lg:text-9xl font-black mb-8 tracking-tighter leading-none"
                >
                    {HERO_DATA.title.split(' ')[0]} <br className="md:hidden" />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-diamond via-blue-400 to-diamond-accent animate-gradient-x">
                        {HERO_DATA.title.split(' ')[1]}
                    </span>
                </motion.h1>

                <div className="h-12 md:h-16 mb-12 flex items-center justify-center">
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.4 }}
                        className="text-lg md:text-2xl text-slate-400 font-light max-w-2xl px-4"
                    >
                        {HERO_DATA.subtitle}
                    </motion.p>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-6"
                >
                    <a href="#projects" className="btn-primary w-full sm:w-auto min-w-[200px] py-4 group">
                        Explore My Work
                        <motion.span
                            animate={{ x: [0, 5, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                        >
                            →
                        </motion.span>
                    </a>
                    <CV variant="outline" />
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
            >
                <span className="text-[10px] uppercase tracking-[0.3em] text-slate-500 font-bold">Scroll</span>
                <div className="w-6 h-10 border-2 border-diamond/20 rounded-full flex justify-center p-1">
                    <motion.div
                        animate={{ y: [0, 12, 0] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        className="w-1 h-3 bg-diamond rounded-full"
                    />
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
