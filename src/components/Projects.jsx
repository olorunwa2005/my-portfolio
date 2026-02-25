import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

import { PROJECTS_DATA } from '../constants';

const projects = PROJECTS_DATA;

const Projects = () => {
    return (
        <section id="projects" className="py-20 relative">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 md:mb-16 gap-8">
                    <div>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl md:text-5xl font-bold mb-4"
                        >
                            Featured <span className="text-diamond">Projects</span>
                        </motion.h2>
                        <p className="text-slate-400 max-w-xl text-sm md:text-base">
                            A selection of my recent work where I combine design aesthetics with robust technical implementation.
                        </p>
                    </div>
                    <a
                        href="https://github.com/olorunwa2005"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-outline border-none text-slate-500 hover:text-diamond transition-colors py-2 px-0 text-sm"
                    >
                        View All Projects →
                    </a>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                            whileHover={{ y: -10 }}
                            className="group relative"
                        >
                            {/* Card Glow Effect */}
                            <div className="absolute -inset-2 bg-gradient-to-r from-diamond/20 to-blue-500/20 rounded-[32px] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                            <div className="relative glass dark:glass-dark rounded-[30px] overflow-hidden flex flex-col border border-white/5 group-hover:border-diamond/30 transition-all duration-500 h-full">
                                <div className="relative h-48 md:h-60 overflow-hidden">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80"></div>

                                    {/* Project Tags Overlay */}
                                    <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                                        {project.tags.slice(0, 2).map(tag => (
                                            <span key={tag} className="text-[9px] md:text-[10px] uppercase font-bold tracking-widest px-3 py-1 bg-slate-950/80 backdrop-blur-md rounded-full text-diamond border border-diamond/20">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="p-6 md:p-8 flex flex-col flex-grow">
                                    <h3 className="text-xl md:text-2xl font-bold mb-3 group-hover:text-diamond transition-colors tracking-tight">
                                        {project.title}
                                    </h3>
                                    <p className="text-slate-400 text-xs md:text-sm mb-6 md:mb-8 flex-grow leading-relaxed">
                                        {project.description}
                                    </p>

                                    <div className="flex items-center gap-4 pt-4 border-t border-white/5">
                                        <a
                                            href={project.demo}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex-1 btn-primary py-2.5 text-xs font-bold uppercase tracking-widest gap-2"
                                        >
                                            <ExternalLink size={14} /> Live Demo
                                        </a>
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-2.5 glass dark:glass-dark rounded-xl hover:bg-diamond hover:text-white transition-all duration-300 border border-white/5 hover:border-diamond/20"
                                        >
                                            <Github size={20} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
