import { Link, usePage, router } from '@inertiajs/react';
import { FileText, Menu } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { BiChevronDown } from 'react-icons/bi';
import { useGlobal } from '@/contexts/GlobalContext';
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from './ui/sheet';

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
            link: `/${locale}/initiatives/now-just-create`,
            title: t('Initiatives'),
            isActive: url.startsWith(`/${locale}/initiatives/now-just-create`),
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
            className={`fixed top-0 left-0 z-50 w-full ${!navbarScroll && 'p-1'}`}
        >
            <div
                className={
                    `bg-[#0C242F] backdrop-blur-md transition-all duration-500 ` +
                    (navbarScroll || navbarLight
                        ? 'h-[70px] bg-[#081118]/0 text-gray-800 shadow-md'
                        : 'h-[80px] rounded-sm bg-[#0C242F] text-white')
                }
            >
                <div className="relative h-full w-full px-4">
                    <div className="mx-auto flex h-full items-center lg:max-w-6xl">
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
                        <div className="relative hidden gap-4 lg:flex">
                            <a
                                href={'#'}
                                className={
                                    'flex h-9 items-center gap-2 rounded-lg bg-[#00A6F4] px-4 text-sm font-medium text-white transition-all duration-150 hover:brightness-115 active:brightness-70 dark:text-black'
                                }
                            >
                                <FileText size={20} />
                                {t('Download CV')}
                            </a>
                            {/* Language selector */}
                            <div className="group relative flex w-20 cursor-pointer items-center justify-center rounded-lg bg-sky-300/5 hover:bg-sky-300/10">
                                <div className="mr-1 flex h-5 w-5 items-center justify-center overflow-hidden rounded-md">
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
                                <div className="invisible absolute top-full right-0 mt-2 w-48 rounded-xl border border-sky-300/20 bg-[#0C242F] p-2 opacity-0 shadow-2xl transition-all duration-150 group-hover:visible group-hover:opacity-100">
                                    <p className="p-2 text-left text-sm font-semibold text-slate-400 dark:text-slate-400">
                                        {t('Site language')}
                                    </p>
                                    {languages.map((lang) => {
                                        return (
                                            <div
                                                key={lang.id}
                                                className="flex flex-col rounded-md p-2 duration-150 hover:bg-sky-300/10 active:hover:bg-sky-300/20"
                                                onClick={() =>
                                                    changeLanguage(lang.id)
                                                }
                                            >
                                                <div className="flex items-center">
                                                    <div className="mr-2 flex h-5 w-5 items-center justify-center overflow-hidden rounded-md">
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
                            {/* Night mode toggle */}
                            {/* <div className="">
                            <div className="flex h-full w-11 items-center justify-center rounded-full bg-sky-300/5 hover:bg-sky-300/10">
                                <BsMoonFill
                                    className="text-sky-500 dark:text-sky-500"
                                    size={18}
                                />
                            </div>
                        </div> */}
                        </div>
                        <div className="ml-auto lg:hidden">
                            <Sheet open={mobileMenu} onOpenChange={setMobileMenu}>
                                <SheetTrigger asChild>
                                    <button className="flex h-9 items-center gap-2 rounded-xl bg-[#00A6F4] px-3 text-xs font-bold text-black shadow-lg shadow-[#00A6F4]/20 transition-transform active:scale-95">
                                        <Menu className="h-4 w-4" />
                                        <span>Menu</span>
                                    </button>
                                </SheetTrigger>
                                <SheetContent
                                    side="right"
                                    className="w-[85vw] bg-[#0C242F] border-sky-300/10 p-6 sm:max-w-md text-white"
                                >
                                    <SheetHeader className="pb-6 text-left border-b border-sky-300/10">
                                        <SheetTitle className="text-xs font-bold tracking-wider text-gray-400 uppercase">
                                            {t('Navigation')}
                                        </SheetTitle>
                                    </SheetHeader>
                                    
                                    <div className="mt-8 flex flex-col gap-6">
                                        {navLinks.map((link) => (
                                            <Link
                                                key={link.link}
                                                href={link.link}
                                                className={`text-xl font-medium transition-colors ${link.isActive ? 'text-sky-400' : 'text-zinc-400 hover:text-white'}`}
                                                onClick={() => setMobileMenu(false)}
                                            >
                                                {link.title}
                                            </Link>
                                        ))}
                                    </div>

                                    <div className="mt-auto pt-8 border-t border-sky-300/10">
                                        <p className="mb-4 text-xs font-bold tracking-wider text-gray-400 uppercase">
                                            {t('Site language')}
                                        </p>
                                        <div className="grid grid-cols-2 gap-2">
                                            {languages.map((lang) => (
                                                <button
                                                    key={lang.id}
                                                    onClick={() => {
                                                        changeLanguage(lang.id);
                                                        setMobileMenu(false);
                                                    }}
                                                    className={`flex items-center gap-2 rounded-lg p-2 transition-colors ${locale === lang.id ? 'bg-sky-400/20 text-sky-400' : 'bg-sky-400/5 text-zinc-400 hover:bg-sky-400/10'}`}
                                                >
                                                    <div className="h-4 w-4 overflow-hidden rounded-sm">
                                                        <img src={lang.flag} alt={lang.name} className="h-full w-full object-cover" />
                                                    </div>
                                                    <span className="text-sm font-medium">{lang.name}</span>
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="mt-6">
                                        <a
                                            href="#"
                                            className="flex w-full items-center justify-center gap-2 rounded-xl bg-sky-400/10 py-3 text-sm font-semibold text-sky-400 transition-colors hover:bg-sky-400/20"
                                        >
                                            <FileText className="h-4 w-4" />
                                            {t('Download CV')}
                                        </a>
                                    </div>
                                </SheetContent>
                            </Sheet>
                        </div>
                    </div>
                </div>
            </div>


        </nav>
    );
};

export default Navbar;
