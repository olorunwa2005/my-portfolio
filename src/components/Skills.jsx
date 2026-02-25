import React from 'react';
import { motion } from 'framer-motion';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';
import { Code2, Palette, Globe, Cpu } from 'lucide-react';

import { SKILLS_DATA } from '../constants';

const skills = SKILLS_DATA;
const chartData = skills.map(s => ({ subject: s.name, A: s.level, fullMark: 100 }));

const Skills = () => {
    return (
        <section id="skills" className="py-24 bg-slate-900/50">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl font-bold mb-4"
                    >
                        Technical <span className="text-diamond">Expertise</span>
                    </motion.h2>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        I specialize in building performant, responsive, and visually stunning web interfaces using a modern front-end stack.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Skill Bars */}
                    <div className="space-y-8">
                        {skills.map((skill, index) => (
                            <motion.div
                                key={skill.name}
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="group"
                            >
                                <div className="flex justify-between items-center mb-2">
                                    <span className="font-semibold group-hover:text-diamond transition-colors">{skill.name}</span>
                                    <span className="text-sm text-slate-500">{skill.level}%</span>
                                </div>
                                <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        whileInView={{ width: `${skill.level}%` }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 1.5, ease: "easeOut" }}
                                        className="h-full bg-diamond shadow-[0_0_15px_rgba(0,191,255,0.5)]"
                                    ></motion.div>
                                </div>
                            </motion.div>
                        ))}

                        <div className="pt-8 grid grid-cols-2 gap-6">
                            <div className="flex gap-4 items-start">
                                <Globe className="text-diamond shrink-0" size={24} />
                                <div>
                                    <h4 className="font-bold text-sm uppercase tracking-wide">Responsive Design</h4>
                                    <p className="text-xs text-slate-500">Mobile-first, fluid layouts</p>
                                </div>
                            </div>
                            <div className="flex gap-4 items-start">
                                <Cpu className="text-diamond shrink-0" size={24} />
                                <div>
                                    <h4 className="font-bold text-sm uppercase tracking-wide">Performance</h4>
                                    <p className="text-xs text-slate-500">Asset optimization & lazy loading</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Chart */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="h-[400px] glass dark:glass-dark rounded-3xl p-6 flex flex-col items-center justify-center relative border border-diamond/10"
                    >
                        <div className="absolute inset-0 bg-diamond/5 blur-3xl rounded-full"></div>
                        <div className="w-full h-full min-h-[300px] relative z-20">
                            <ResponsiveContainer width="100%" height="100%">
                                <RadarChart cx="50%" cy="50%" outerRadius="70%" data={chartData}>
                                    <PolarGrid stroke="#00BFFF22" />
                                    <PolarAngleAxis dataKey="subject" tick={{ fill: '#94a3b8', fontSize: 12 }} />
                                    <Radar
                                        name="Proficiency"
                                        dataKey="A"
                                        stroke="#00BFFF"
                                        fill="#00BFFF"
                                        fillOpacity={0.5}
                                    />
                                </RadarChart>
                            </ResponsiveContainer>
                        </div>
                        <p className="text-xs text-slate-500 mt-4 italic text-center px-8">
                            "Strong layout control • Component-based architecture • Advanced responsive design"
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
