import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send, Github, Linkedin, Twitter, CheckCircle, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

import { CONTACT_DATA } from '../constants';

const Contact = () => {
    const form = useRef();
    const [status, setStatus] = useState({ type: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const socialIcons = {
        github: <Github size={22} />,
        linkedin: <Linkedin size={22} />,
        twitter: <Twitter size={22} />
    };

    const sendEmail = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setStatus({ type: '', message: '' });

        emailjs.sendForm(
            import.meta.env.VITE_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID',
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID',
            form.current,
            import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY'
        )
            .then((result) => {
                setStatus({ type: 'success', message: 'Message sent successfully! I will get back to you soon.' });
                form.current.reset();
            }, (error) => {
                console.error('EmailJS Error:', error);
                setStatus({ type: 'error', message: `Oops! ${error?.text || 'Something went wrong. Please check your EmailJS settings.'}` });
            })
            .finally(() => {
                setIsSubmitting(false);
            });
    };

    return (
        <section id="contact" className="py-24 relative overflow-hidden bg-slate-950/20">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-diamond/5 rounded-full blur-[150px] -z-10 animate-pulse-slow"></div>

            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="text-diamond font-mono text-sm tracking-[0.3em] uppercase mb-4 block">Get In Touch</span>
                        <h2 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
                            Let's Work <span className="text-diamond">Together</span>
                        </h2>
                        <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
                            Have a project in mind or just want to chat? Feel free to reach out. I'm always open to new opportunities and collaborations.
                        </p>
                    </motion.div>
                </div>

                <div className="grid lg:grid-cols-2 gap-16 items-start">
                    {/* Contact Info */}
                    <div className="space-y-12">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="space-y-10"
                        >
                            <h3 className="text-3xl font-bold">Contact Information</h3>

                            <div className="space-y-8">
                                <div className="flex items-center gap-6 group cursor-pointer">
                                    <div className="w-16 h-16 rounded-[22px] glass dark:glass-dark border border-diamond/10 flex items-center justify-center text-diamond transition-all duration-500 group-hover:bg-diamond group-hover:text-white group-hover:scale-110">
                                        <Mail size={28} />
                                    </div>
                                    <div>
                                        <p className="text-xs text-slate-500 uppercase font-bold tracking-[0.2em] mb-1">Email Me</p>
                                        <p className="text-xl font-medium group-hover:text-diamond transition-colors">{CONTACT_DATA.email}</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-6 group cursor-pointer">
                                    <div className="w-16 h-16 rounded-[22px] glass dark:glass-dark border border-diamond/10 flex items-center justify-center text-diamond transition-all duration-500 group-hover:bg-diamond group-hover:text-white group-hover:scale-110">
                                        <Phone size={28} />
                                    </div>
                                    <div>
                                        <p className="text-xs text-slate-500 uppercase font-bold tracking-[0.2em] mb-1">Call Me</p>
                                        <p className="text-xl font-medium group-hover:text-diamond transition-colors">{CONTACT_DATA.phone}</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-6 group">
                                    <div className="w-16 h-16 rounded-[22px] glass dark:glass-dark border border-diamond/10 flex items-center justify-center text-diamond transition-all duration-500 group-hover:bg-diamond group-hover:text-white group-hover:scale-110">
                                        <MapPin size={28} />
                                    </div>
                                    <div>
                                        <p className="text-xs text-slate-500 uppercase font-bold tracking-[0.2em] mb-1">Location</p>
                                        <p className="text-xl font-medium tracking-tight">{CONTACT_DATA.location}</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        <div className="space-y-6">
                            <h4 className="text-lg font-bold tracking-tight">Social Networks</h4>
                            <div className="flex gap-5">
                                {CONTACT_DATA.socials.map((social, i) => (
                                    <motion.a
                                        key={i}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ y: -5, scale: 1.1 }}
                                        className="w-14 h-14 rounded-[18px] glass dark:glass-dark border border-diamond/10 flex items-center justify-center text-slate-400 hover:text-diamond hover:border-diamond/40 transition-all duration-300"
                                    >
                                        {socialIcons[social.platform]}
                                    </motion.a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="p-8 md:p-12 glass dark:glass-dark rounded-[48px] border border-diamond/10 shadow-3xl relative overflow-hidden"
                    >
                        <form ref={form} onSubmit={sendEmail} className="space-y-8 relative z-10 transition-all duration-500">
                            {status.message && (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className={`p-5 rounded-2xl flex items-center gap-4 border ${status.type === 'success' ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400' : 'bg-rose-500/10 border-rose-500/20 text-rose-400'}`}
                                >
                                    {status.type === 'success' ? <CheckCircle size={24} /> : <AlertCircle size={24} />}
                                    <p className="text-sm font-medium">{status.message}</p>
                                </motion.div>
                            )}

                            <div className="grid md:grid-cols-2 gap-8">
                                <div className="space-y-3">
                                    <label className="text-xs uppercase font-bold tracking-widest text-slate-500 ml-1">Full Name</label>
                                    <input
                                        type="text"
                                        name="user_name"
                                        required
                                        placeholder="John Doe"
                                        className="w-full px-7 py-5 bg-slate-900/40 border border-white/5 rounded-2xl focus:border-diamond/50 focus:ring-1 focus:ring-diamond/30 transition-all outline-none text-white placeholder:text-slate-600"
                                    />
                                </div>
                                <div className="space-y-3">
                                    <label className="text-xs uppercase font-bold tracking-widest text-slate-500 ml-1">Email Address</label>
                                    <input
                                        type="email"
                                        name="user_email"
                                        required
                                        placeholder="john@example.com"
                                        className="w-full px-7 py-5 bg-slate-900/40 border border-white/5 rounded-2xl focus:border-diamond/50 focus:ring-1 focus:ring-diamond/30 transition-all outline-none text-white placeholder:text-slate-600"
                                    />
                                </div>
                            </div>
                            <div className="space-y-3">
                                <label className="text-xs uppercase font-bold tracking-widest text-slate-500 ml-1">Subject</label>
                                <input
                                    type="text"
                                    name="subject"
                                    required
                                    placeholder="How can I help you?"
                                    className="w-full px-7 py-5 bg-slate-900/40 border border-white/5 rounded-2xl focus:border-diamond/50 focus:ring-1 focus:ring-diamond/30 transition-all outline-none text-white placeholder:text-slate-600"
                                />
                            </div>
                            <div className="space-y-3">
                                <label className="text-xs uppercase font-bold tracking-widest text-slate-500 ml-1">Your Message</label>
                                <textarea
                                    name="message"
                                    required
                                    rows="5"
                                    placeholder="Write your detailed message here..."
                                    className="w-full px-7 py-5 bg-slate-900/40 border border-white/5 rounded-2xl focus:border-diamond/50 focus:ring-1 focus:ring-diamond/30 transition-all outline-none resize-none text-white placeholder:text-slate-600"
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className={`btn-primary w-full py-5 text-sm uppercase tracking-[0.2em] font-black flex items-center justify-center gap-3 transition-all duration-300 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:scale-[1.02]'}`}
                            >
                                {isSubmitting ? (
                                    <div className="flex items-center gap-3">
                                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                        Sending...
                                    </div>
                                ) : (
                                    <>
                                        <Send size={20} /> Send Message
                                    </>
                                )}
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
