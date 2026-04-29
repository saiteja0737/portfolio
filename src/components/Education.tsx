'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Calendar } from 'lucide-react';

const EducationCard = ({ degree, school, detail, period, gpa, delay }: any) => (
    <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay, duration: 0.5 }}
        className="p-10 bg-slate-50 rounded-[2.5rem] border border-slate-100 mb-8 last:mb-0 hover:bg-white transition-colors"
    >
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div className="flex-1">
                <div className="flex items-center space-x-3 text-primary mb-4">
                    <GraduationCap size={24} />
                    <span className="text-xs font-black uppercase tracking-[0.3em]">{period}</span>
                </div>
                <h3 className="text-3xl font-black text-foreground tracking-tight mb-2 uppercase">{degree}</h3>
                <p className="text-xl text-primary font-black mb-4">{school}</p>
                <div className="flex flex-wrap gap-4">
                    <div className="px-4 py-2 bg-white rounded-full border border-slate-200 text-xs font-black uppercase tracking-widest text-muted flex items-center gap-2">
                        <Award size={14} className="text-primary" />
                        GPA: {gpa}
                    </div>
                </div>
            </div>
        </div>
    </motion.div>
);

const Education = () => {
    return (
        <section id="education" className="section-spacing">
            <div className="container-custom">
                <div className="mb-20">
                    <span className="text-primary font-black uppercase tracking-[0.4em] text-xs mb-4 block underline decoration-4 underline-offset-8">Academic Achievement</span>
                    <h2 className="text-5xl md:text-7xl font-black mb-16 text-foreground tracking-tighter uppercase">Education.</h2>
                </div>

                <div className="max-w-4xl">
                    <EducationCard
                        degree="MS in Business Analytics"
                        school="California State University, Sacramento"
                        period="Aug 2024 – Dec 2025"
                        gpa="3.9 / 4.0"
                        delay={0.1}
                    />
                    <EducationCard
                        degree="MS in Physics"
                        school="Krishna University"
                        period="Completed"
                        gpa="4.0 / 4.0"
                        delay={0.2}
                    />
                    <EducationCard
                        degree="BS in Math, Physics & CS"
                        school="Krishna University"
                        period="Completed"
                        gpa="3.99 / 4.0"
                        delay={0.3}
                    />
                </div>
            </div>
        </section>
    );
};

export default Education;
