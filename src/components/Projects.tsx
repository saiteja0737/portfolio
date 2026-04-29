'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Zap, ShieldCheck, BarChart4, Globe, Database } from 'lucide-react';

const ProjectCard = ({ title, description, tech, results, idx, icon: Icon }: any) => (
    <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="bg-slate-50 rounded-[3rem] p-12 lg:p-16 border border-slate-100 hover:border-primary/50 transition-all hover:bg-white hover:shadow-2xl group mb-16 last:mb-0"
    >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
                <div className="flex items-center space-x-4 mb-8">
                    <div className="p-4 bg-primary/10 text-primary rounded-2xl group-hover:bg-primary group-hover:text-white transition-all">
                        <Icon size={32} />
                    </div>
                    <span className="text-sm font-black text-muted uppercase tracking-[0.4em]">Project 0{idx + 1}</span>
                </div>
                <h3 className="text-4xl md:text-5xl font-black text-foreground tracking-tighter uppercase mb-6 leading-[0.9]">{title}</h3>
                <p className="text-xl text-muted font-medium leading-relaxed mb-10">
                    {description}
                </p>
                <div className="flex flex-wrap gap-3 mb-12">
                    {tech.map((t: string) => (
                        <span key={t} className="text-[10px] font-black uppercase tracking-[0.2em] px-4 py-2 bg-white border border-slate-200 rounded-full">{t}</span>
                    ))}
                </div>
                <div className="flex space-x-6">
                    <a href="#" className="flex items-center space-x-2 text-sm font-black uppercase tracking-widest text-primary hover:underline underline-offset-8 decoration-2">
                        <Github size={18} />
                        <span>Source Code</span>
                    </a>
                    <a href="#" className="flex items-center space-x-2 text-sm font-black uppercase tracking-widest text-primary hover:underline underline-offset-8 decoration-2">
                        <ExternalLink size={18} />
                        <span>Live Demo</span>
                    </a>
                </div>
            </div>

            <div className="space-y-4">
                <h4 className="text-xs font-black uppercase tracking-[0.4em] text-muted mb-8 block">Key Results & Impact</h4>
                {results.map((result: string, rIdx: number) => (
                    <div key={rIdx} className="p-6 bg-white rounded-2xl border border-slate-100 flex items-start space-x-4 group/item hover:border-primary/30 transition-all">
                        <div className="mt-1">
                            <ShieldCheck size={20} className="text-primary group-hover/item:scale-125 transition-transform" />
                        </div>
                        <span className="text-lg text-muted font-bold leading-tight">{result}</span>
                    </div>
                ))}
            </div>
        </div>
    </motion.div>
);

const Projects = () => {
    const projects = [
        {
            title: "Credit Risk Insights Dashboard",
            description: "Engineered a robust feature pipeline from 27M+ records to build an explainable AI dashboard for real-time probability-of-default (PD) scoring and risk threshold simulation.",
            tech: ['LightGBM', 'XGBoost', 'CatBoost', 'Streamlit', 'SHAP'],
            icon: ShieldCheck,
            results: [
                'Achieved 0.78 AUC-ROC and 69% recall',
                'Integrated explainability using SHAP values',
                'Real-time risk scoring simulation'
            ]
        },
        {
            title: "Property Management Data Warehouse",
            description: "Developed a centralized MySQL database and data warehouse architecture for a property management firm to automate leasing tracking and tenant analytics.",
            tech: ['MySQL', 'ETL', 'Tableau', 'Data Modeling', 'Business Intelligence'],
            icon: Database,
            results: [
                'Automated ETL processes for tenant data',
                'Created interactive Tableau BI reports',
                'Optimized property management strategies'
            ]
        },
        {
            title: "SBA Loan Default Prediction",
            description: "Profit optimization analysis across 890K loan records using 14 machine learning algorithms to identify the ideal risk-reward probability threshold.",
            tech: ['Python', 'Bagging', 'Decision Trees', 'Neural Networks'],
            icon: BarChart4,
            results: [
                'Estimated $2.64B in net profit at 0.4 cutoff',
                'Optimized risk-reward probability thresholds',
                'Performance audit across 14 algorithm types'
            ]
        },
        {
            title: "Fake News Analysis using NLP",
            description: "Stylometric and sentiment analysis to identify patterns in information integrity, focusing on vocabulary complexity and emotional framing.",
            tech: ['NLP', 'n-gram', 'Stylometric Analysis', 'LDA Topic Modeling'],
            icon: Globe,
            results: [
                'Identified 26% lower vocabulary complexity',
                'Isolated fear-based language patterns',
                'Automated topic categorization using LDA'
            ]
        }
    ];

    return (
        <section id="projects" className="section-spacing bg-white">
            <div className="container-custom">
                <div className="mb-24">
                    <span className="text-primary font-black uppercase tracking-[0.4em] text-xs mb-4 block underline decoration-4 underline-offset-8">Implementation</span>
                    <h2 className="text-5xl md:text-7xl font-black mb-16 text-foreground tracking-tighter uppercase">Featured Projects.</h2>
                </div>

                <div>
                    {projects.map((proj, idx) => (
                        <ProjectCard key={idx} {...proj} idx={idx} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
