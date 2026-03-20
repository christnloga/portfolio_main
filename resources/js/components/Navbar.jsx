import { Head, Link, usePage } from '@inertiajs/react';
import React, { useState } from 'react'
import { BsMoon, BsMoonFill, BsMoonStars, BsX } from "react-icons/bs";
import { MdMenu, MdMood } from "react-icons/md";
// import { Dialog, Slide } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { useGlobal } from '../contexts/GlobalContext';
import LanguageSelectorMobile from './LanguageSelectorMobile';
import { useTranslation } from 'react-i18next';
import { BiChevronDown } from 'react-icons/bi';
import { Switch } from '@headlessui/react';
import { About, Contact } from '@/routes';

// const Transition = React.forwardRef(function Transition(props, ref) {
//     return <Slide direction="up" ref={ref} {...props} />;
// });

const Navbar = () => {

    // const cu = window.location.href;
    const { navbarLight } = useGlobal();

    const [mobileMenu, setMobileMenu] = useState(false)
    const [navbarScroll, setNavbarScroll] = useState(false)

    const { t, i18n } = useTranslation();
    const language = i18n.resolvedLanguage;
    const [selectLanguage, setSelectLanguage] = useState(false);
    const [isDark, setIsDark] = useState(false)

    const languages = [
        {
            id: "en",
            name: "English",
            flag: 'https://flagcdn.com/gb.svg',
            flagName: 'gb'
        },
        {
            id: "fr",
            name: "Francais",
            flag: 'https://flagcdn.com/fr.svg',
            flagName: 'fr'
        }
    ];

    const navLinks = [
        { link: "/", title: "Accueil", route: page.url === '/' },
        { link: "/about", title: "À propos", route: page.url === '/about' },
        { link: "/contact", title: "Contact", route: page.url === '/contact' },
    ]

    window.addEventListener('scroll', () => {
        if (window.scrollY >= 600) {
            setNavbarScroll(true)
        } else {
            setNavbarScroll(false)
        }
    })

    const changeLanguage = (lang) => {
        console.log(lang);

        // Langauge change logic...
        setSelectLanguage(false);
    }

    return (
        <nav className={`w-full fixed top-0 left-0 z-50 backdrop-blur-md transition-all duration-500 bg-zinc-900 ` + (navbarScroll || navbarLight ? 'h-[70px] bg-white/70 text-gray-800 ' : 'h-[80px] bg-white/0 text-white ') + (navbarScroll && ' shadow-md ')}>
            <div className="relative w-full h-full px-4">
                <div className="flex items-center  h-full mx-auto lg:max-w-6xl border-x border-dashed border-sky-200/10">
                    <a href={'/'} className="flex items-center hover:shadow-2xl shadow-sky-500">
                        <p className="text-3xl font-black text-sky-300">nloga</p>
                    </a>
                    <div className="items-center hidden h-full navs lg:flex mx-auto">
                        {navLinks.map((link) => {
                            return (
                                <Link key={link.link} href={link.link} className={({ isActive }) => `relative flex items-center px-4 h-full font-medium duration-150 transition-color
                                ${isActive ? 'opacity-100 font-semibold text-sky-300' : 'text-zinc-600 dark:text-zinc-400'}
                                ${navbarScroll ? 'hover:opacity-100' : 'hover:opacity-100'}`}>
                                    {link.title}
                                    {/* <div className={"absolute -left-2 size-6 rounded bg-primary-300/10 " + (cu.match(/${link.link}/g) ? 'opacity-100' : 'opacity-0')}></div> */}
                                </Link>
                            )
                        })}
                    </div>
                    <div className="relative hidden lg:flex gap-4 ml-auto">
                        <a href={'#'} className={'px-4 py-2 font-medium text-white dark:text-zinc-700 duration-150 bg-sky-300 rounded-full hover:text-white active:brightness-90 transition-all hover:border hover:bg-white/10'}>Download CV</a>
                        {/* Language selector */}
                        <div className="flex items-center justify-center w-20 rounded-full group cursor-pointer bg-sky-300/5 hover:bg-sky-300/10">
                            <div className="items-center justify-center w-5 h-5 rounded-full overflow-hidden mr-1">
                                <img
                                    src={'https://flagcdn.com/' + (language === 'en' ? 'gb' : language) + '.svg'}
                                    alt={language}
                                    className="object-cover h-full"
                                />
                            </div>
                            <BiChevronDown size={24} className={'shrink-0 duration-150 text-zinc-800 dark:text-zinc-100'} />
                            <div className="absolute w-2/3 right-0 translate-y-[80px] bg-white dark:bg-zinc-800 border border-sky-300/20 rounded-xl shadow-2xl p-2 opacity-0 group-hover:opacity-100 invisible group-hover:visible group-hover:translate-y-[90px] duration-150">
                                <p className="text-left text-sm text-slate-600 dark:text-slate-400 font-semibold p-2">Site language</p>
                                {languages.map((lang) => {
                                    return (
                                        <div key={lang.id} className="flex flex-col rounded-lg p-2 hover:bg-sky-300/10 active:hover:bg-sky-300/20 duration-150">
                                            <div className="flex items-center">
                                                <div className="items-center justify-center w-5 h-5 rounded-full overflow-hidden mr-2">
                                                    <img
                                                        src={lang?.flag}
                                                        alt={lang?.name}
                                                        className="object-cover h-full"
                                                    />
                                                </div>
                                                <p className='block text-slate-700 dark:text-slate-300'>{lang.name}</p>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                        <div className="">
                            <div className="flex h-full w-11 items-center justify-center rounded-full bg-sky-300/5 hover:bg-sky-300/10">
                                <BsMoonFill className='text-zinc-800 dark:text-sky-300' size={18} />
                            </div>
                        </div>
                    </div>
                    <div className="lg:hidden">
                        <button className='p-1 font-medium text-white duration-150 rounded-lg bg-primary-300 active:bg-primary-300/80 transition-color'
                            onClick={() => setMobileMenu(true)}
                        >
                            <MdMenu size={24} />
                        </button>
                    </div>
                </div>
            </div>
            {/* MOBILE MENU */}
            {/* <Dialog
                Dialog
                fullScreen
                open={mobileMenu}
                onClose={() => setMobileMenu(false)}
                TransitionComponent={Transition}
            >
                <div className="relative flex flex-col w-full h-full bg-white">
                    <div className="flex items-center justify-between h-16 px-4 bg-white border-b border-b-gray-300/20">
                        <span className="text-2xl font-bold">
                            Menu
                        </span>
                        <button className="flex items-center justify-center px-1 py-1 text-sm transition-all duration-150 rounded-lg text-primary-300 bg-primary-300/0 active:bg-primary-300/20 hover:cursor-pointer"
                            onClick={() => setMobileMenu(false)}>
                            <BsX className='' size={28} />
                        </button>
                    </div>
                    <div className="px-6 mt-4">
                        <div className='space-y-6'>
                            <div className="flex flex-col space-y-2">
                                <h3 className="text-sm text-gray-400">Navigation</h3>
                                {navLinks.map((link) => {
                                    return (
                                        <NavLink key={link.link} to={link.link} className="duration-150 hover:text-primary-300"
                                            onClick={() => setMobileMenu(false)}>
                                            {link.title}
                                        </NavLink>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                    <div className="mt-auto">
                        <a href={'#'} className={'flex px-4 py-4 font-medium text-primary-300 duration-150 border-white w-full bg-primary-300/0 active:bg-primary-300/10 transition-all'}>Prendre rendez-vous</a>
                        <LanguageSelectorMobile
                            languages={languages}
                            selectLanguage={selectLanguage}
                            setSelectLanguage={setSelectLanguage}
                            changeLanguage={changeLanguage}
                        />
                    </div>
                </div>
            </Dialog > */}
            {/* MOBILE MENU */}
        </nav>
    )
}

export default Navbar
