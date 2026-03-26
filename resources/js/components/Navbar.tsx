import { Dialog, DialogBackdrop, DialogPanel } from '@headlessui/react';
import { Link, usePage, router } from '@inertiajs/react';
import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { BiChevronDown } from 'react-icons/bi';
import { BsMoonFill, BsX } from 'react-icons/bs';
import { MdMenu } from 'react-icons/md';
import { useGlobal } from '@/contexts/GlobalContext';

const Navbar = () => {
    const { navbarLight } = useGlobal();
    const { url, props } = usePage();
    const locale = (props as any).locale || 'fr';

    const [mobileMenu, setMobileMenu] = useState(false);
    const [navbarScroll, setNavbarScroll] = useState(false);

    const { t, i18n } = useTranslation();

    const languages = [
        {
            id: 'en',
            name: 'English',
            flag: 'https://flagcdn.com/gb.svg',
            flagName: 'gb',
        },
        {
            id: 'fr',
            name: 'Francais',
            flag: 'https://flagcdn.com/fr.svg',
            flagName: 'fr',
        },
    ];

    const navLinks = [
        {
            link: `/${locale}`,
            title: t('Accueil'),
            isActive: url === `/${locale}` || url === `/${locale}/`,
        },
        {
            link: `/${locale}/about`,
            title: t('À propos'),
            isActive: url.startsWith(`/${locale}/about`),
        },
        {
            link: `/${locale}/contact`,
            title: t('Contact'),
            isActive: url.startsWith(`/${locale}/contact`),
        },
    ];

    useEffect(() => {
        console.log('The URL is: ', url);

        const handleScroll = () => {
            if (window.scrollY >= 60) {
                setNavbarScroll(true);
            } else {
                setNavbarScroll(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [url]);

    useEffect(() => {
        if (
            i18n &&
            typeof i18n.changeLanguage === 'function' &&
            i18n.resolvedLanguage !== locale
        ) {
            i18n.changeLanguage(locale);
        }
    }, [locale, i18n]);

    const changeLanguage = (lang: string) => {
        if (lang === locale) return;

        let pathname = window.location.pathname;
        if (pathname === `/${locale}`) {
            pathname = `/${lang}`;
        } else if (pathname.startsWith(`/${locale}/`)) {
            pathname = pathname.replace(`/${locale}/`, `/${lang}/`);
        } else {
            pathname = `/${lang}${pathname === '/' ? '' : pathname}`;
        }

        router.visit(pathname + window.location.search + window.location.hash);
    };

    return (
        <nav
            className={
                `fixed top-0 left-0 z-50 w-full bg-[#081118] backdrop-blur-md transition-all duration-500 ` +
                (navbarScroll || navbarLight
                    ? 'h-[70px] bg-[#081118]/70 text-gray-800 shadow-md'
                    : 'h-[80px] bg-[#081118] text-white')
            }
        >
            <div className="relative h-full w-full px-4">
                <div className="mx-auto flex h-full items-center border-x border-dashed border-sky-200/10 lg:max-w-6xl">
                    <Link
                        href={'/'}
                        className="flex items-center shadow-sky-500 hover:shadow-2xl"
                    >
                        <p className="text-3xl font-black text-sky-500">
                            nloga
                        </p>
                    </Link>
                    <div className="navs mx-auto hidden h-full items-center lg:flex">
                        {navLinks.map((link) => {
                            return (
                                <Link
                                    key={link.link}
                                    href={link.link}
                                    className={`relative flex h-full items-center px-4 font-medium transition-all duration-150 hover:opacity-75 ${link.isActive ? 'font-semibold text-sky-400' : 'text-zinc-400 dark:text-zinc-400'}`}
                                >
                                    {link.title}
                                </Link>
                            );
                        })}
                    </div>
                    <div className="relative ml-auto hidden gap-4 lg:flex">
                        <a
                            href={'#'}
                            className={
                                'rounded-full bg-sky-500 px-4 py-2 font-medium text-white transition-all duration-150 hover:border hover:bg-white/10 hover:text-white active:brightness-90 dark:text-zinc-700'
                            }
                        >
                            {t('Download CV')}
                        </a>
                        {/* Language selector */}
                        <div className="group relative flex w-20 cursor-pointer items-center justify-center rounded-full bg-sky-300/5 hover:bg-sky-300/10">
                            <div className="mr-1 flex h-5 w-5 items-center justify-center overflow-hidden rounded-full">
                                <img
                                    src={
                                        'https://flagcdn.com/' +
                                        (locale === 'en' ? 'gb' : locale) +
                                        '.svg'
                                    }
                                    alt={locale}
                                    className="h-full object-cover"
                                />
                            </div>
                            <BiChevronDown
                                size={24}
                                className={
                                    'shrink-0 text-zinc-100 duration-150 dark:text-zinc-100'
                                }
                            />
                            <div className="invisible absolute top-full right-0 mt-2 w-48 rounded-xl border border-sky-300/20 bg-zinc-800 p-2 opacity-0 shadow-2xl transition-all duration-150 group-hover:visible group-hover:opacity-100">
                                <p className="p-2 text-left text-sm font-semibold text-slate-400 dark:text-slate-400">
                                    {t('Site language')}
                                </p>
                                {languages.map((lang) => {
                                    return (
                                        <div
                                            key={lang.id}
                                            className="flex flex-col rounded-lg p-2 duration-150 hover:bg-sky-300/10 active:hover:bg-sky-300/20"
                                            onClick={() =>
                                                changeLanguage(lang.id)
                                            }
                                        >
                                            <div className="flex items-center">
                                                <div className="mr-2 flex h-5 w-5 items-center justify-center overflow-hidden rounded-full">
                                                    <img
                                                        src={lang?.flag}
                                                        alt={lang?.name}
                                                        className="h-full object-cover"
                                                    />
                                                </div>
                                                <p className="block text-slate-300 dark:text-slate-300">
                                                    {lang.name}
                                                </p>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                        <div className="">
                            <div className="flex h-full w-11 items-center justify-center rounded-full bg-sky-300/5 hover:bg-sky-300/10">
                                <BsMoonFill
                                    className="text-sky-500 dark:text-sky-500"
                                    size={18}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="ml-auto lg:hidden">
                        <button
                            className="rounded-lg bg-sky-300/10 p-1 font-medium text-white transition-colors duration-150 active:bg-sky-300/20"
                            onClick={() => setMobileMenu(true)}
                        >
                            <MdMenu size={24} />
                        </button>
                    </div>
                </div>
            </div>
            {/* Mobile Menu using Headless UI Dialog to solve stacking context / containing block glitch */}
            <Dialog
                open={mobileMenu}
                onClose={() => setMobileMenu(false)}
                className="relative z-100"
            >
                <DialogBackdrop
                    transition
                    className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity duration-300 ease-in-out data-closed:opacity-0"
                />

                <div className="fixed inset-0 flex justify-end">
                    <DialogPanel
                        transition
                        className="w-full max-w-sm transform bg-zinc-900 shadow-2xl transition duration-300 ease-in-out data-closed:translate-x-full sm:w-80"
                    >
                        <div className="flex items-center justify-between p-6">
                            <span className="text-2xl font-bold text-white">
                                {t('Menu')}
                            </span>
                            <button
                                className="text-white transition-colors hover:text-sky-300"
                                onClick={() => setMobileMenu(false)}
                            >
                                <BsX size={32} />
                            </button>
                        </div>
                        <div className="mt-8 flex flex-col gap-6 px-6">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.link}
                                    href={link.link}
                                    className={`text-xl font-medium transition-colors ${link.isActive ? 'text-sky-300' : 'text-zinc-400 hover:text-white'}`}
                                    onClick={() => setMobileMenu(false)}
                                >
                                    {link.title}
                                </Link>
                            ))}
                        </div>
                        {/* Optional extra links */}
                        <div className="absolute bottom-8 mt-auto flex w-full flex-col gap-4 px-6">
                            <a
                                href="#"
                                className="flex w-full items-center justify-center rounded-full bg-sky-300/10 py-3 font-medium text-sky-300 transition-colors hover:bg-sky-300/20"
                            >
                                {t('Download CV')}
                            </a>
                        </div>
                    </DialogPanel>
                </div>
            </Dialog>
        </nav>
    );
};

export default Navbar;
