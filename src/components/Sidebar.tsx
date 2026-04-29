'use client';

import React from 'react';
import Link from 'next/link';
import { Mail, Linkedin, Github, FileText, ExternalLink } from 'lucide-react';

const Sidebar = () => {
    const navLinks = [
        { name: 'About', href: '#home' },
        { name: 'Skills', href: '#skills' },
        { name: 'Education', href: '#education' },
        { name: 'Professional Experience', href: '#experience' },
        { name: 'Projects', href: '#projects' },
    ];

    return (
        <aside className="fixed top-0 right-0 h-screen w-[380px] bg-primary text-white hidden xl:flex flex-col p-12 z-50">
            <div className="flex-1 overflow-y-auto">
                <div className="mb-12">
                    <h1 className="text-5xl font-black tracking-tighter mb-6">Portfolio</h1>
                    <p className="text-white/90 text-lg leading-relaxed font-medium">
                        Data-driven strategist and analytics professional with a passion for leveraging insights to drive strategic decision-making and fuel business growth. Data Science Enthusiast!
                    </p>
                </div>

                <nav className="flex flex-col space-y-6">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-xl font-bold hover:text-white/70 transition-all uppercase tracking-widest border-b border-white/20 pb-2 flex justify-between items-center group"
                        >
                            <span>{link.name}</span>
                            <ExternalLink size={18} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                        </Link>
                    ))}
                </nav>
            </div>

            <div className="pt-8 border-t border-white/20">
                <div className="flex justify-between items-center">
                    <div className="flex space-x-6">
                        <a href="https://www.linkedin.com/in/adsteja" target="_blank" rel="noopener noreferrer" className="hover:scale-125 transition-transform">
                            <Linkedin size={24} />
                        </a>
                        <a href="https://github.com/saiteja0737" target="_blank" rel="noopener noreferrer" className="hover:scale-125 transition-transform">
                            <Github size={24} />
                        </a>
                        <a href="mailto:akhilasaiteja97@gmail.com" className="hover:scale-125 transition-transform">
                            <Mail size={24} />
                        </a>
                        <a href="#" className="hover:scale-125 transition-transform shadow-lg">
                            <FileText size={24} />
                        </a>
                    </div>
                    <span className="text-white/60 font-mono text-[10px] uppercase tracking-tighter">Sai Teja © 2026</span>
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;
