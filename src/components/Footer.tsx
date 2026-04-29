'use client';

import React from 'react';
import { Mail, Linkedin, Github, FileText, ChevronUp } from 'lucide-react';

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="bg-slate-50 py-24 border-t border-slate-100">
            <div className="container-custom">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-12 mb-20">
                    <div className="max-w-md">
                        <h2 className="text-4xl font-black text-foreground tracking-tighter uppercase mb-6">
                            Sai Teja <span className="text-primary">Adusumilli.</span>
                        </h2>
                        <p className="text-xl text-muted font-medium leading-relaxed">
                            Data-driven strategist and analytics professional focused on business growth. Let's build something impactful together.
                        </p>
                    </div>

                    <div className="flex flex-col gap-6">
                        <span className="text-xs font-black uppercase tracking-[0.4em] text-muted block">Connect</span>
                        <div className="flex space-x-8">
                            <a href="mailto:akhilasaiteja97@gmail.com" className="text-primary hover:scale-125 transition-all">
                                <Mail size={28} />
                            </a>
                            <a href="https://www.linkedin.com/in/adsteja" target="_blank" rel="noopener noreferrer" className="text-primary hover:scale-125 transition-all">
                                <Linkedin size={28} />
                            </a>
                            <a href="https://github.com/saiteja0737" target="_blank" rel="noopener noreferrer" className="text-primary hover:scale-125 transition-all">
                                <Github size={28} />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="pt-12 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-8">
                    <p className="text-xs font-black uppercase tracking-widest text-muted">
                        © 2026 Sai Teja Adusumilli. All Rights Reserved.
                    </p>
                    <button
                        onClick={scrollToTop}
                        className="p-4 bg-white border border-slate-200 rounded-2xl hover:bg-primary hover:text-white transition-all shadow-sm"
                    >
                        <ChevronUp size={20} />
                    </button>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
