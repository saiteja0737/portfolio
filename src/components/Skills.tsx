'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, BarChart, Cloud, Brain, Server, Shield } from 'lucide-react';

const SkillCard = ({ title, icon: Icon, skills, delay }: { title: string, icon: any, skills: string[], delay: number }) => (
    <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay, duration: 0.4 }}
        className="p-8 bg-slate-50 rounded-3xl border border-slate-100 hover:border-primary/30 transition-all hover:shadow-xl hover:-translate-y-1 group"
    >
        <div className="flex items-center space-x-4 mb-8">
            <div className="p-3 bg-white rounded-2xl shadow-sm text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                <Icon size={24} />
            </div>
            <h3 className="text-xl font-black text-foreground tracking-tight">{title}</h3>
        </div>
        <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
                <span
                    key={skill}
                    className="px-4 py-2 bg-white text-muted text-xs font-black uppercase tracking-widest rounded-xl border border-slate-100"
                >
                    {skill}
                </span>
            ))}
        </div>
    </motion.div>
);

const Skills = () => {
    const categories = [
        {
            title: 'Languages',
            icon: Code,
            skills: ['Python', 'R', 'SQL', 'HTML', 'CSS', 'JavaScript'],
        },
        {
            title: 'Machine Learning',
            icon: Brain,
            skills: ['Scikit-learn', 'PyTorch', 'Pandas', 'NumPy', 'XGBoost', 'CatBoost'],
        },
        {
            title: 'Visualization',
            icon: BarChart,
            skills: ['Tableau', 'Power BI', 'Seaborn', 'Streamlit'],
        },
        {
            title: 'Cloud & Infrastructure',
            icon: Cloud,
            skills: ['AWS (SageMaker, S3)', 'Git', 'Docker', 'PostgreSQL', 'Redshift'],
        },
    ];

    return (
        <section id="skills" className="section-spacing bg-white">
            <div className="container-custom">
                <div className="mb-20">
                    <span className="text-primary font-black uppercase tracking-[0.4em] text-xs mb-4 block underline decoration-4 underline-offset-8">Competencies</span>
                    <h2 className="text-5xl md:text-7xl font-black mb-8 text-foreground tracking-tighter">
                        Technical Expertise.
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {categories.map((cat, idx) => (
                        <SkillCard key={cat.title} title={cat.title} icon={cat.icon} skills={cat.skills} delay={idx * 0.1} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
