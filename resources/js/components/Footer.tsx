import { Link, usePage } from '@inertiajs/react';
import { motion } from 'motion/react';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { BsGithub, BsLinkedin, BsTwitterX } from 'react-icons/bs';

const Footer = () => {
    const { t } = useTranslation();
    const { props } = usePage();
    const locale = (props as any).locale || 'fr';
    const currentYear = new Date().getFullYear();

    const navLinks = [
        {
            link: `/${locale}`,
            title: t('Accueil'),
        },
        {
            link: `/${locale}/about`,
            title: t('À propos'),
        },
        {
            link: `/${locale}/initiatives/now-just-create`,
            title: t('Initiatives'),
        },
        {
            link: `/${locale}/contact`,
            title: t('Contact'),
        },
    ];

    const socialLinks = [
        {
            icon: <BsGithub size={18} />,
            link: 'https://github.com/christnloga',
            label: 'GitHub',
        },
        {
            icon: <BsLinkedin size={18} />,
            link: 'https://www.linkedin.com/in/nloga-joseph-christ-7b1651194',
            label: 'LinkedIn',
        },
        {
            icon: <BsTwitterX size={18} />,
            link: 'https://x.com/_nloga',
            label: 'Twitter',
        },
    ];

    return (
        <footer className="relative z-10 border-t border-border bg-card/50 py-12 backdrop-blur-md">
            <div className="mx-auto max-w-6xl px-4 lg:px-8">
                <div className="flex flex-col gap-10">
                    {/* Top Row: Logo, Navigation & Socials */}
                    <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
                        {/* Logo */}
                        <Link
                            href={`/${locale}`}
                            className="flex items-center gap-2"
                        >
                            <span className="text-2xl font-black tracking-tighter text-foreground">
                                nloga<span className="text-primary">.</span>
                            </span>
                        </Link>

                        {/* Navigation */}
                        <nav className="flex flex-wrap justify-center gap-x-8 gap-y-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.link}
                                    href={link.link}
                                    className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                                >
                                    {link.title}
                                </Link>
                            ))}
                        </nav>

                        {/* Social Icons */}
                        <div className="flex items-center gap-3">
                            {socialLinks.map((social, i) => (
                                <motion.a
                                    key={i}
                                    href={social.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex size-9 items-center justify-center rounded-lg border border-border bg-foreground/5 text-muted-foreground transition-all hover:border-primary/30 hover:bg-primary/5 hover:text-primary"
                                    whileHover={{ y: -2 }}
                                    whileTap={{ scale: 0.95 }}
                                    aria-label={social.label}
                                >
                                    {social.icon}
                                </motion.a>
                            ))}
                        </div>
                    </div>

                    {/* Bottom Row: Copyright */}
                    <div className="flex flex-col items-center justify-between gap-6 border-t border-border pt-8 md:flex-row">
                        <div className="flex w-full flex-col items-center justify-between gap-2 lg:flex-row">
                            <p className="text-sm font-medium text-muted-foreground">
                                © {currentYear}{' '}
                                <span className="text-foreground">
                                    Joseph Christ Nloga
                                </span>
                                .
                                <span className="ml-1 hidden sm:inline">
                                    {t('All rights reserved.')}
                                </span>
                            </p>
                            <p className="text-[10px] tracking-widest text-muted-foreground/60 uppercase">
                                {t('Designed & Engineered with')}{' '}
                                <span className="text-primary">❤</span>{' '}
                                {t('in Cameroon')}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
