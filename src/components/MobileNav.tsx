'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const MobileNav = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: 'About', href: '#home' },
        { name: 'Skills', href: '#skills' },
        { name: 'Education', href: '#education' },
        { name: 'Professional Experience', href: '#experience' },
        { name: 'Projects', href: '#projects' },
    ];

    return (
        <div className="xl:hidden fixed top-0 right-0 p-6 z-[60]">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-3 bg-primary text-white rounded-full shadow-2xl border-2 border-white/20"
                aria-label="Toggle menu"
            >
                {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 100 }}
                        className="fixed inset-0 bg-primary text-white flex flex-col p-12 z-[55]"
                    >
                        <div className="mb-12">
                            <h1 className="text-5xl font-black tracking-tighter mb-6">Portfolio</h1>
                            <p className="text-white/90 text-lg leading-relaxed font-medium">
                                Data-driven strategist and analytics professional focused on business growth.
                            </p>
                        </div>

                        <nav className="flex flex-col space-y-8 mt-12">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="text-2xl font-black border-b border-white/20 pb-4"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default MobileNav;
