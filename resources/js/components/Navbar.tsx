import { Link, router, usePage } from '@inertiajs/react';
import { ChevronDown, FileText, Globe, Menu } from 'lucide-react';
import { motion } from 'motion/react';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useGlobal } from '@/contexts/GlobalContext';
import { cn } from '@/lib/utils';
import ThemeToggle from './ThemeToggle';
import {
    Sheet,
    SheetClose,
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

    const isScrolled = navbarScroll || navbarLight;

    const { t, i18n } = useTranslation();

    const languages = [
        {
            id: 'en',
            name: 'English',
            flag: 'https://flagcdn.com/gb.svg',
        },
        {
            id: 'fr',
            name: 'Français',
            flag: 'https://flagcdn.com/fr.svg',
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
        const handleScroll = () => {
            setNavbarScroll(window.scrollY >= 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

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
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${
                isScrolled ? 'py-4' : 'py-6'
            }`}
        >
            <div className="container mx-auto max-w-6xl px-4">
                <div
                    className={`relative flex items-center justify-between rounded-2xl border border-border bg-card/80 px-6 py-3 shadow-2xl backdrop-blur-xl transition-all duration-500 ${
                        isScrolled
                            ? 'scale-[0.98] border-primary/20 shadow-[0_0_30px_-10px_rgba(0,166,244,0.3)]'
                            : 'scale-100'
                    }`}
                >
                    {/* Background Glows */}
                    <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-2xl">
                        <div className="absolute -top-10 -left-10 h-32 w-32 rounded-full bg-primary/5 blur-2xl" />
                        <div className="absolute -right-10 -bottom-10 h-32 w-32 rounded-full bg-purple-500/5 blur-2xl" />
                    </div>

                    {/* Logo */}
                    <Link
                        href={`/${locale}`}
                        className="relative z-10 flex items-center gap-2"
                    >
                        <span className="text-2xl font-black tracking-tighter text-foreground">
                            nloga<span className="text-primary">.</span>
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="relative z-10 hidden items-center gap-1 lg:flex">
                        {navLinks.map((link) => (
                            <Link
                                key={link.link}
                                href={link.link}
                                className={`group relative px-4 py-2 text-sm font-medium transition-colors ${
                                    link.isActive
                                        ? 'text-foreground'
                                        : 'text-muted-foreground hover:text-foreground'
                                }`}
                            >
                                {link.title}
                                {link.isActive && (
                                    <motion.div
                                        layoutId="nav-active"
                                        className="absolute right-4 bottom-0 left-4 h-0.5 bg-linear-to-r from-primary to-purple-500"
                                    />
                                )}
                                <div className="absolute inset-0 -z-10 rounded-lg bg-foreground/5 opacity-0 transition-opacity group-hover:opacity-100" />
                            </Link>
                        ))}
                    </div>

                    {/* Desktop Actions */}
                    <div className="relative z-10 hidden items-center gap-4 lg:flex">
                        <ThemeToggle />

                        {/* Language Selector */}
                        <div className="group relative">
                            <button className="flex items-center gap-2 rounded-lg bg-foreground/5 px-3 py-2.5 text-xs font-semibold text-muted-foreground transition-colors hover:bg-foreground/10 hover:text-foreground">
                                <Globe className="h-4.5 w-4.5 text-primary" />
                                <span className="uppercase">{locale}</span>
                                <ChevronDown className="h-3.5 w-3.5 transition-transform group-hover:rotate-180" />
                            </button>

                            <div className="invisible absolute top-full right-0 mt-2 w-40 origin-top-right scale-95 rounded-xl border border-border bg-card p-1.5 opacity-0 shadow-2xl backdrop-blur-xl transition-all duration-200 group-hover:visible group-hover:scale-100 group-hover:opacity-100">
                                {languages.map((lang) => (
                                    <button
                                        key={lang.id}
                                        onClick={() => changeLanguage(lang.id)}
                                        className={cn(
                                            'flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors',
                                            locale === lang.id
                                                ? 'bg-primary/10 text-primary'
                                                : 'text-muted-foreground hover:bg-foreground/5 hover:text-foreground',
                                        )}
                                    >
                                        <img
                                            src={lang.flag}
                                            alt={lang.name}
                                            className="h-3.5 w-5 rounded-sm object-cover"
                                        />
                                        <span>{lang.name}</span>
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* CV Button */}
                        <a
                            href="https://s3.christnloga.com/portfolio-assets/Professional_Resume_Christ Nloga_v2.pdf"
                            className="group relative flex items-center gap-2 overflow-hidden rounded-xl bg-linear-to-r from-primary to-purple-500 px-5 py-2.5 text-sm font-bold text-white shadow-lg transition-all hover:scale-105 hover:shadow-[0_0_20px_-5px_rgba(0,166,244,0.5)]"
                        >
                            <div className="absolute inset-0 bg-white/20 opacity-0 transition-opacity group-hover:opacity-100" />
                            <FileText className="h-4 w-4" />
                            <span>{t('Download CV')}</span>
                        </a>
                    </div>

                    {/* Mobile Menu Trigger & Theme Toggle */}
                    <div className="relative z-10 flex items-center gap-3 lg:hidden">
                        <ThemeToggle />
                        <Sheet open={mobileMenu} onOpenChange={setMobileMenu}>
                            <SheetTrigger asChild>
                                <button className="flex h-10 w-10 items-center justify-center rounded-xl bg-foreground/5 text-foreground transition-colors hover:bg-foreground/10 active:scale-95">
                                    <Menu className="h-5 w-5" />
                                </button>
                            </SheetTrigger>
                            <SheetContent
                                side="right"
                                className="w-full border-border bg-card/95 p-0 backdrop-blur-2xl sm:max-w-sm"
                            >
                                <div className="flex h-full flex-col p-8">
                                    <SheetHeader className="mb-12 text-left">
                                        <SheetTitle className="text-2xl font-black text-foreground">
                                            nloga
                                            <span className="text-primary">
                                                .
                                            </span>
                                        </SheetTitle>
                                    </SheetHeader>

                                    <div className="flex flex-col gap-4">
                                        {navLinks.map((link, i) => (
                                            <motion.div
                                                key={link.link}
                                                initial={{ x: 20, opacity: 0 }}
                                                animate={{ x: 0, opacity: 1 }}
                                                transition={{ delay: i * 0.1 }}
                                            >
                                                <SheetClose asChild>
                                                    <Link
                                                        href={link.link}
                                                        className={`flex items-center justify-between rounded-2xl border px-6 py-4 transition-all ${
                                                            link.isActive
                                                                ? 'border-primary/30 bg-primary/10 text-foreground'
                                                                : 'border-border bg-foreground/5 text-muted-foreground'
                                                        }`}
                                                    >
                                                        <span className="text-lg font-bold">
                                                            {link.title}
                                                        </span>
                                                        <ChevronDown className="h-5 w-5 -rotate-90 text-primary" />
                                                    </Link>
                                                </SheetClose>
                                            </motion.div>
                                        ))}
                                    </div>

                                    <div className="mt-auto space-y-6">
                                        <div className="space-y-3">
                                            <p className="text-xs font-bold tracking-widest text-muted-foreground uppercase">
                                                Language
                                            </p>
                                            <div className="grid grid-cols-2 gap-3">
                                                {languages.map((lang) => (
                                                    <button
                                                        key={lang.id}
                                                        onClick={() => {
                                                            changeLanguage(
                                                                lang.id,
                                                            );
                                                            setMobileMenu(
                                                                false,
                                                            );
                                                        }}
                                                        className={`flex items-center justify-center gap-2 rounded-xl border py-3 transition-all ${
                                                            locale === lang.id
                                                                ? 'border-primary/30 bg-primary/10 text-foreground'
                                                                : 'border-border bg-foreground/5 text-muted-foreground'
                                                        }`}
                                                    >
                                                        <img
                                                            src={lang.flag}
                                                            alt={lang.name}
                                                            className="h-3 w-4 rounded-sm object-cover"
                                                        />
                                                        <span className="text-sm font-bold">
                                                            {lang.name}
                                                        </span>
                                                    </button>
                                                ))}
                                            </div>
                                        </div>

                                        <a
                                            href="https://s3.christnloga.com/portfolio-assets/Professional_Resume_Christ Nloga_v2.pdf"
                                            className="flex w-full items-center justify-center gap-3 rounded-2xl bg-linear-to-r from-primary to-purple-500 py-4 text-lg font-bold text-white shadow-xl shadow-primary/20"
                                        >
                                            <FileText className="h-5 w-5" />
                                            <span>{t('Download CV')}</span>
                                        </a>
                                    </div>
                                </div>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </div>
        </motion.nav>
    );
};

export default Navbar;
