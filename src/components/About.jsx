import React from 'react';
import { motion } from 'framer-motion';

import { ABOUT_DATA } from '../constants';

const About = () => {
    return (
        <section id="about" className="py-24 relative overflow-hidden">
            {/* Decorative shapes */}
            <div className="absolute top-1/4 -left-20 w-64 h-64 bg-diamond/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-diamond/5 rounded-full blur-3xl"></div>

            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
                {/* Left Side: Image */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative group"
                >
                    <div className="absolute -inset-4 bg-gradient-to-tr from-diamond/20 to-transparent rounded-2xl blur-xl group-hover:from-diamond/40 transition-all duration-500"></div>
                    <div className="relative aspect-[3/4] max-w-[400px] mx-auto rounded-xl overflow-hidden glass dark:glass-dark border-4 border-white shadow-2xl animate-float">
                        <img
                            src={ABOUT_DATA.image}
                            alt="Justice"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="space-y-8"
                >
                    <div className="space-y-4">
                        <h2 className="text-4xl md:text-5xl font-bold mb-8 flex items-center gap-4">
                            <span className="text-diamond font-mono text-xl">01.</span> About Me
                        </h2>

                        <p className="text-xl text-white font-medium leading-relaxed">
                            I am a <span className="text-diamond">Front-End Developer</span> specializing in modern UI/UX. I focus on creating digital experiences that are not only beautiful but also highly functional.
                        </p>

                        <p className="text-lg text-slate-400 leading-relaxed">
                            With a strong foundation in <span className="text-white">HTML, CSS, and Tailwind</span>, I build responsive and interactive web applications that scale. I believe in clean code, modular architecture, and performance-first development.
                        </p>

                        <p className="text-lg text-slate-400 leading-relaxed">
                            Currently, I'm expanding my horizons by learning <span className="text-diamond">Backend Development</span> to transition into a Full-Stack role. My passion lies in solving complex problems through scalable systems and elegant architecture.
                        </p>
                    </div>

                    <div className="pt-8 grid grid-cols-2 gap-6">
                        {ABOUT_DATA.stats.map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 + (index * 0.1) }}
                                className="p-6 rounded-[24px] glass dark:glass-dark border border-diamond/10 hover:border-diamond/30 transition-all duration-500"
                            >
                                <h4 className="text-diamond font-black text-4xl mb-1">{stat.value}</h4>
                                <p className="text-[10px] uppercase font-bold tracking-[0.2em] text-slate-500">{stat.label}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
