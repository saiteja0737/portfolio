'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, ChevronRight, CornerDownRight } from 'lucide-react';

const ExperienceItem = ({ role, company, location, period, details, delay }: any) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay, duration: 0.6 }}
        className="mb-24 last:mb-0 group"
    >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
                <div className="sticky top-32">
                    <div className="flex items-center space-x-3 text-primary mb-6">
                        <Calendar size={18} />
                        <span className="text-sm font-black uppercase tracking-[0.3em]">{period}</span>
                    </div>
                    <h3 className="text-4xl font-black text-foreground tracking-tighter uppercase mb-2 leading-none">{role}</h3>
                    <p className="text-2xl text-primary font-black italic mb-6">@{company}</p>
                    <div className="flex items-center space-x-2 text-muted text-xs font-black uppercase tracking-widest">
                        <MapPin size={14} />
                        <span>{location}</span>
                    </div>
                </div>
            </div>
            <div className="lg:col-span-8">
                <ul className="space-y-8">
                    {details.map((item: string, idx: number) => (
                        <li key={idx} className="flex items-start text-xl text-muted font-medium leading-relaxed group/item transition-colors">
                            <CornerDownRight size={24} className="text-primary mt-1 mr-6 shrink-0 group-hover/item:translate-x-2 transition-transform" />
                            <span>{item}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
        <div className="mt-20 h-px bg-slate-100 w-full group-last:hidden" />
    </motion.div>
);

const Experience = () => {
    const experiences = [
        {
            role: 'Associate / Junior Associate',
            company: 'State Bank of India',
            location: 'India',
            period: 'Jan 2021 – Jan 2023',
            details: [
                'Led Risk-Focused Internal Audit (RFIA) across loan/branch operations, analyzing 8 years of archival records to ensure process integrity; achieved an "A" rating with zero findings.',
                'Evaluated 60+ loan applications totaling $1M+, improving approval efficiency by 35% and reducing potential defaults through early-risk detection.',
                'Analyzed transaction patterns using statistical methods to identify cross-sell opportunities, resulting in a 35% boost in product sales.',
                'Managed the reactivation of dormant portfolios by coordinating KYC documentation for 200+ profiles, reducing onboarding errors by 30%.'
            ]
        },
        {
            role: 'Volunteer Research Assistant',
            company: 'CSU Sacramento',
            location: 'Sacramento, CA',
            period: 'Aug 2024 – Jan 2025',
            details: [
                'Optimized data extraction for metadata analysis by reducing a corpus of 2,000 research articles to 1,300 using BERTopic, significantly improving clustering quality.',
                'Engineered a Python pipeline utilizing TF-IDF and NLP for semantic categorization of articles under the STS framework.',
                'Assisted in developing reproducible data science workflows for business analytics research.'
            ]
        }
    ];

    return (
        <section id="experience" className="section-spacing bg-white">
            <div className="container-custom">
                <div className="mb-24">
                    <span className="text-primary font-black uppercase tracking-[0.4em] text-xs mb-4 block underline decoration-4 underline-offset-8">Career Path</span>
                    <h2 className="text-5xl md:text-7xl font-black mb-2 text-foreground tracking-tighter uppercase">Professional Journey.</h2>
                </div>

                <div>
                    {experiences.map((exp, idx) => (
                        <ExperienceItem key={idx} {...exp} delay={idx * 0.15} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
