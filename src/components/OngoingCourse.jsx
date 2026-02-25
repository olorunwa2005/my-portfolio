import React from 'react';
import { motion } from 'framer-motion';
import { Server, Database, ShieldCheck, Zap, Globe2, Layers } from 'lucide-react';

import { COURSES_DATA } from '../constants';

const icons = {
    "Node.js & Express.js": <Server className="text-diamond" size={24} />,
    "Supabase & Database Design": <Database className="text-diamond" size={24} />,
    "Authentication Systems": <ShieldCheck className="text-diamond" size={24} />
};

const courses = COURSES_DATA.map(course => ({
    ...course,
    icon: icons[course.title] || <Layers className="text-diamond" size={24} />
}));

const OngoingCourse = () => {
    return (
        <section id="course" className="py-24 bg-slate-900/30 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center gap-12">
                    <div className="md:w-1/2">
                        <motion.h2
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl font-bold mb-6"
                        >
                            Ongoing Course: <br />
                            <span className="text-diamond">Backend Development</span>
                        </motion.h2>
                        <p className="text-slate-400 mb-8 leading-relaxed">
                            Transitioning into a Full-Stack Developer by mastering the server-side ecosystem. Currently diving deep into runtime environments, database orchestration, and security protocols.
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-500">
                                <Zap size={14} className="text-diamond" /> Active Learning
                            </div>
                            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-500">
                                <Globe2 size={14} className="text-diamond" /> Global Standard
                            </div>
                        </div>
                    </div>

                    <div className="md:w-1/2 relative">
                        <div className="absolute left-[39px] top-0 bottom-0 w-0.5 bg-diamond/20 block md:hidden lg:block"></div>

                        <div className="space-y-12">
                            {courses.map((course, index) => (
                                <motion.div
                                    key={course.title}
                                    initial={{ opacity: 0, x: 30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.2 }}
                                    className="relative pl-16 md:pl-20"
                                >
                                    <div className="absolute left-0 top-0 w-20 h-20 flex items-center justify-center">
                                        <div className="absolute inset-0 bg-diamond/5 rounded-2xl blur-lg scale-75 group-hover:scale-100 transition-transform"></div>
                                        <div className="relative z-10 w-12 h-12 bg-slate-950 border border-diamond/30 rounded-2xl flex items-center justify-center shadow-lg shadow-diamond/10 group-hover:border-diamond transition-colors">
                                            {course.icon}
                                        </div>
                                    </div>

                                    <div>
                                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-diamond/60 mb-2 block">
                                            {course.status}
                                        </span>
                                        <h3 className="text-xl font-bold mb-2">{course.title}</h3>
                                        <p className="text-slate-400 text-sm leading-relaxed">
                                            {course.desc}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OngoingCourse;
