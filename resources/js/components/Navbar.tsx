import { Link, usePage } from '@inertiajs/react';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { BiChevronDown } from 'react-icons/bi';
import { BsMoonFill, BsX } from 'react-icons/bs';
import { MdMenu } from 'react-icons/md';

const Navbar = () => {
    const { url } = usePage();

    const [mobileMenu, setMobileMenu] = useState(false);
    const [navbarScroll, setNavbarScroll] = useState(false);

    const { i18n } = useTranslation();
    const language = i18n.resolvedLanguage;

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
        { link: '/', title: 'Accueil', isActive: url === '/' },
        {
            link: '/about',
            title: 'À propos',
            isActive: url.startsWith('/about'),
        },
        {
            link: '/contact',
            title: 'Contact',
            isActive: url.startsWith('/contact'),
        },
    ];

    React.useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY >= 60) {
                setNavbarScroll(true);
            } else {
                setNavbarScroll(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const changeLanguage = (lang: string) => {
        console.log(lang);

        // Language change logic...
    };

    return (
        <nav
            className={
                `fixed top-0 left-0 z-50 w-full bg-zinc-900 backdrop-blur-md transition-all duration-500 ` +
                (navbarScroll
                    ? 'h-[70px] bg-white/70 text-gray-800 shadow-md'
                    : 'h-[80px] bg-white/0 text-white')
            }
        >
            <div className="relative h-full w-full px-4">
                <div className="mx-auto flex h-full items-center border-x border-dashed border-sky-200/10 lg:max-w-6xl">
                    <Link
                        href={'/'}
                        className="flex items-center shadow-sky-500 hover:shadow-2xl"
                    >
                        <p className="text-3xl font-black text-sky-300">
                            nloga
                        </p>
                    </Link>
                    <div className="navs mx-auto hidden h-full items-center lg:flex">
                        {navLinks.map((link) => {
                            return (
                                <Link
                                    key={link.link}
                                    href={link.link}
                                    className={`relative flex h-full items-center px-4 font-medium transition-colors duration-150 ${link.isActive ? 'font-semibold text-sky-300' : 'text-zinc-400 hover:text-sky-300 dark:text-zinc-400'}`}
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
                                'rounded-full bg-sky-300 px-4 py-2 font-medium text-white transition-all duration-150 hover:border hover:bg-white/10 hover:text-white active:brightness-90 dark:text-zinc-700'
                            }
                        >
                            Download CV
                        </a>
                        {/* Language selector */}
                        <div className="group relative flex w-20 cursor-pointer items-center justify-center rounded-full bg-sky-300/5 hover:bg-sky-300/10">
                            <div className="mr-1 flex h-5 w-5 items-center justify-center overflow-hidden rounded-full">
                                <img
                                    src={
                                        'https://flagcdn.com/' +
                                        (language === 'en' ? 'gb' : language) +
                                        '.svg'
                                    }
                                    alt={language}
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
                                    Site language
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
                                    className="text-sky-300 dark:text-sky-300"
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
            {/* Mobile Menu Simplified placeholder  */}
            {mobileMenu && (
                <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm">
                    <div className="absolute top-0 right-0 h-full w-64 bg-zinc-900 p-6 shadow-2xl">
                        <button
                            className="absolute top-4 right-4 text-white"
                            onClick={() => setMobileMenu(false)}
                        >
                            <BsX size={32} />
                        </button>
                        <div className="mt-16 flex flex-col gap-6">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.link}
                                    href={link.link}
                                    className={`text-xl font-medium ${link.isActive ? 'text-sky-300' : 'text-white'}`}
                                    onClick={() => setMobileMenu(false)}
                                >
                                    {link.title}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
