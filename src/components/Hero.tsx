'use client';

import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section id="home" className="min-h-screen flex flex-col justify-center pt-20">
            <div className="container-custom">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl"
                >
                    <span className="text-primary font-black uppercase tracking-[0.4em] text-xs mb-6 block">Hello, I'm</span>
                    <h1 className="text-7xl md:text-9xl font-black text-foreground tracking-tighter mb-10 leading-[0.85] uppercase">
                        Sai Teja <br />
                        <span className="text-primary">Adusumilli.</span>
                    </h1>
                    <p className="text-xl md:text-3xl text-muted leading-relaxed font-medium max-w-3xl mb-12">
                        A Data Analytics & Risk Modeling Professional dedicated to transforming complex markets into strategic financial growth.
                    </p>
                    <div className="flex space-x-8">
                        <a href="#projects" className="text-sm font-black uppercase tracking-widest border-b-4 border-primary pb-2 hover:bg-primary/5 transition-all">View My Work</a>
                        <a href="#experience" className="text-sm font-black uppercase tracking-widest border-b-4 border-transparent hover:border-muted pb-2 transition-all text-muted">My Experience</a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
