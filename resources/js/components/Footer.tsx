import { motion } from 'motion/react';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { BsGithub, BsLinkedin, BsTwitterX } from 'react-icons/bs';

const Footer = () => {
    const { t } = useTranslation();
    const currentYear = new Date().getFullYear();

    const socialLinks = [
        { 
            icon: <BsGithub size={18} />, 
            link: 'https://github.com/christnloga', 
            label: 'GitHub' 
        },
        { 
            icon: <BsLinkedin size={18} />, 
            link: 'https://www.linkedin.com/in/nloga-joseph-christ-7b1651194', 
            label: 'LinkedIn' 
        },
        { 
            icon: <BsTwitterX size={18} />, 
            link: 'https://x.com/_nloga', 
            label: 'Twitter' 
        },
    ];

    return (
        <footer className="relative z-10 border-t border-white/5 bg-[#081118]/50 py-12 backdrop-blur-md">
            <div className="mx-auto max-w-7xl px-4 lg:px-8">
                <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
                    {/* Copyright and Credits */}
                    <div className="flex flex-col items-center gap-2 md:items-start">
                        <p className="text-sm font-medium text-slate-400">
                            © {currentYear} <span className="text-white">Joseph Christ Nloga</span>. 
                            <span className="ml-1 hidden sm:inline">{t('All rights reserved.')}</span>
                        </p>
                        <p className="text-xs text-slate-500">
                            {t('Designed & Engineered with')} <span className="text-[#00A6F4]">❤</span> {t('in Cameroon')}
                        </p>
                    </div>

                    {/* Social Links */}
                    <div className="flex items-center gap-4">
                        {socialLinks.map((social, i) => (
                            <motion.a
                                key={i}
                                href={social.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex size-10 items-center justify-center rounded-lg border border-white/5 bg-white/5 text-slate-400 transition-all hover:border-[#00A6F4]/50 hover:bg-[#00A6F4]/10 hover:text-[#00A6F4]"
                                whileHover={{ y: -2 }}
                                whileTap={{ scale: 0.95 }}
                                aria-label={social.label}
                            >
                                {social.icon}
                            </motion.a>
                        ))}
                    </div>
                </div>

                {/* Optional: Subtle divider or bottom bar if needed, but keeping it minimal for now */}
            </div>
        </footer>
    );
};

export default Footer;
