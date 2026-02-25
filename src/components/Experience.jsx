import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Calendar } from 'lucide-react';

import { EXPERIENCE_DATA } from '../constants';

const experiences = EXPERIENCE_DATA;

const Experience = () => {
    return (
        <section id="experience" className="py-20 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-12 md:mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold mb-4"
                    >
                        Professional <span className="text-diamond">Journey</span>
                    </motion.h2>
                    <p className="text-slate-400 max-w-2xl mx-auto text-sm md:text-base">
                        A timeline of my professional growth, educational background, and major milestones.
                    </p>
                </div>

                <div className="relative">
                    {/* Vertical Line */}
                    <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-diamond/20 hidden md:block"></div>

                    <div className="space-y-8 md:space-y-12">
                        {experiences.map((exp, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className={`flex flex-col md:flex-row items-center gap-6 md:gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                            >
                                {/* Content Card */}
                                <div className={`flex-1 w-full ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                                    <div className="p-6 md:p-8 glass dark:glass-dark rounded-3xl border border-diamond/10 hover:border-diamond/40 transition-all duration-500 group">
                                        <div className={`flex items-center gap-4 mb-4 ${index % 2 === 0 ? 'md:flex-row-reverse' : 'flex-row'}`}>
                                            <div className="p-3 bg-diamond/10 rounded-xl text-diamond group-hover:bg-diamond group-hover:text-white transition-all duration-300">
                                                {exp.type === 'work' ? <Briefcase size={18} md={20} /> : <GraduationCap size={18} md={20} />}
                                            </div>
                                            <div>
                                                <h3 className="text-lg md:text-xl font-bold">{exp.title}</h3>
                                                <p className="text-diamond text-xs md:text-sm font-medium">{exp.company}</p>
                                            </div>
                                        </div>
                                        <div className={`flex items-center mb-4 text-slate-500 text-[10px] md:text-xs font-bold uppercase tracking-widest gap-2 ${index % 2 === 0 ? 'md:justify-end' : 'justify-start'}`}>
                                            <Calendar size={12} /> {exp.period}
                                        </div>
                                        <p className="text-slate-400 text-xs md:text-sm leading-relaxed">
                                            {exp.description}
                                        </p>
                                    </div>
                                </div>

                                {/* Center Dot */}
                                <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-diamond border-4 border-slate-950 z-20 hidden md:block"></div>

                                {/* Spacer */}
                                <div className="flex-1 hidden md:block"></div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
