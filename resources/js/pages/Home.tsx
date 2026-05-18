// import "./App.css";
import { Head, Link, useForm } from '@inertiajs/react';
import { useEffect, useState } from 'react';
import CountUp from 'react-countup';
import { useTranslation } from 'react-i18next';
import {
    BiLogoGit,
    BiLogoGithub,
    BiLogoNodejs,
    BiLogoReact,
    BiLogoTailwindCss,
    BiLogoTypescript,
} from 'react-icons/bi';
import { BsArrowRight, BsChatRightText, BsEnvelope } from 'react-icons/bs';
import { FiUser } from 'react-icons/fi';
import { LuCalendarCheck, LuGitPullRequestArrow } from 'react-icons/lu';
import { PiPaintBrush } from 'react-icons/pi';
import {
    SiFigma,
    SiFramer,
    SiLaravel,
    SiMysql,
    SiNextdotjs,
    SiPostgresql,
} from 'react-icons/si';
import { TbBlocks } from 'react-icons/tb';
import { store as contactStore } from '@/actions/App/Http/Controllers/ContactController';
import Header from '@/components/home/Header';
import InfiniteCarousel from '@/components/InfiniteCarousel';
import { useGlobal } from '@/contexts/GlobalContext';
import CaseStudies from '../components/CaseStudies';
import RevealElement from '../components/RevealElement';
import ServiceCard from '../components/ServiceCard';
import MainLayout from '../layouts/MainLayout';

function Home() {
    const { t, i18n } = useTranslation();
    const locale = i18n.resolvedLanguage || 'en';

    const contactForm = useForm({
        name: '',
        email: '',
        message: '',
    });

    const [showSuccess, setShowSuccess] = useState(false);

    const submitContact = (e: React.FormEvent) => {
        e.preventDefault();
        contactForm.post(contactStore().url, {
            preserveScroll: true,
            onSuccess: () => {
                contactForm.reset();
                setShowSuccess(true);
                setTimeout(() => setShowSuccess(false), 5000);
            },
        });
    };

    const services_en = [
        {
            id: 1,
            title: 'End‑to‑End Product Development',
            description:
                'From concept to deployment, I build complete digital products focused on scalability and market readiness.',
            subTitle: 'What is included:',
            icon: <LuGitPullRequestArrow className="m-auto" size={30} />,
            features: [
                'Product discovery & requirements analysis',
                'UX strategy and information architecture',
                'UI design and design systems',
                'Frontend and backend development',
                'Deployment, optimization, and iteration',
            ],
        },
        {
            id: 2,
            title: 'UX/UI Design',
            description:
                'Creating intuitive, high-converting interfaces that bridge the gap between user needs and aesthetic polish.',
            subTitle: 'Deliverables:',
            icon: <PiPaintBrush className="m-auto" size={30} />,
            features: [
                'User research & flows',
                'Wireframes and prototypes',
                'High‑fidelity UI designs',
                'Design systems and reusable components',
                'Fully responsive, mobile‑first layouts',
            ],
        },
        {
            id: 3,
            title: 'Frontend Engineering',
            description:
                'Developing high-performance, visually refined web applications with a focus on speed and responsiveness.',
            subTitle: 'Core technologies:',
            icon: <BiLogoReact className="m-auto" size={30} />,
            features: [
                'React & Next.js',
                'TypeScript',
                'High‑fidelity UI designs',
                'Framer Motion',
                'Modern CSS / Tailwind',
            ],
        },
        {
            id: 4,
            title: 'Systems design',
            description:
                'Architecting robust, secure backend infrastructures designed to handle complex logic and rapid growth.',
            subTitle: 'Expertise:',
            icon: <TbBlocks className="m-auto" size={30} />,
            features: [
                'Laravel & Node.js',
                'RESTful API design',
                'Authentication & authorization',
                'Database modeling and optimization',
            ],
        },
    ];

    const services_fr = [
        {
            id: 1,
            title: 'Développement de produits de bout en bout',
            description:
                "Je livre des produits numériques complets — du concept initial à la production — avec un accent particulier sur la valeur commerciale, l'utilisabilité et l'évolutivité à long terme.",
            subTitle: 'Ce qui est inclus :',
            icon: <LuGitPullRequestArrow className="m-auto" size={30} />,
            features: [
                'Découverte de produit et analyse des besoins',
                "Stratégie UX et architecture de l'information",
                'Design UI et systèmes de design',
                'Développement frontend et backend',
                'Déploiement, optimisation et itération',
            ],
        },
        {
            id: 2,
            title: 'Design UX/UI',
            description:
                'Je conçois des interfaces claires, intuitives et axées sur la conversion, basées sur les besoins réels des utilisateurs et les principes de design modernes.',
            subTitle: 'Livrables :',
            icon: <PiPaintBrush className="m-auto" size={30} />,
            features: [
                'Recherche utilisateur et flux',
                'Wireframes et prototypes',
                'Designs UI haute fidélité',
                'Systèmes de design et composants réutilisables',
                'Mises en page entièrement responsives et mobile-first',
            ],
        },
        {
            id: 3,
            title: 'Ingénierie Frontend',
            description:
                'Je construis des interfaces utilisateur rapides, maintenables et visuellement raffinées en utilisant des frameworks modernes et des meilleures pratiques axées sur la performance.',
            subTitle: 'Technologies clés :',
            icon: <BiLogoReact className="m-auto" size={30} />,
            features: [
                'React & Next.js',
                'TypeScript',
                'Designs UI haute fidélité',
                'Framer Motion',
                'CSS moderne / Tailwind',
            ],
        },
        {
            id: 4,
            title: 'Conception de systèmes',
            description:
                "J'architecture des systèmes backend sécurisés et évolutifs qui alimentent des applications réelles et soutiennent la croissance.",
            subTitle: 'Expertise :',
            icon: <TbBlocks className="m-auto" size={30} />,
            features: [
                'Laravel & Node.js',
                "Conception d'API RESTful",
                'Authentification et autorisation',
                'Modélisation et optimisation de bases de données',
            ],
        },
    ];

    const services = locale === 'en' ? services_en : services_fr;

    const myStats = [
        {
            id: 1,
            title:
                locale === 'en' ? 'Years of Experience' : "Années d'expérience",
            value: '08',
        },
        {
            id: 2,
            title: locale === 'en' ? 'Projects Completed' : 'Projets réalisés',
            value: '20+',
        },
        {
            id: 3,
            title: locale === 'en' ? 'Users Generated' : 'Utilisateurs générés',
            value: '30k+',
        },
        {
            id: 4,
            title: locale === 'en' ? 'Happy Clients' : 'Clients satisfaits',
            value: '10+',
        },
    ];

    const tools = [
        { id: 1, title: 'Figma', icon: <SiFigma /> },
        { id: 2, title: 'React', icon: <BiLogoReact /> },
        { id: 3, title: 'Next.js', icon: <SiNextdotjs /> },
        { id: 4, title: 'TypeScript', icon: <BiLogoTypescript /> },
        { id: 5, title: 'Tailwind CSS', icon: <BiLogoTailwindCss /> },
        { id: 6, title: 'Laravel', icon: <SiLaravel /> },
        { id: 7, title: 'Node.js', icon: <BiLogoNodejs /> },
        { id: 8, title: 'MySQL', icon: <SiMysql /> },
        { id: 9, title: 'PostgreSQL', icon: <SiPostgresql /> },
        { id: 10, title: 'Git', icon: <BiLogoGit /> },
        { id: 11, title: 'GitHub', icon: <BiLogoGithub /> },
        { id: 12, title: 'Framer Motion', icon: <SiFramer /> },
    ];

    const { setNavbarLight } = useGlobal();

    useEffect(() => {
        setNavbarLight(false);
    }, [setNavbarLight]);

    return (
        <>
            <Head title={t('Accueil')}>
                {/* <link rel="preconnect" href="https://fonts.bunny.net" />
                <link
                    href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600"
                    rel="stylesheet"
                /> */}
            </Head>
            <div className="overflow-x-hidden bg-background">
                <Header />

                {/* About Me (Bento Layout) */}
                <section className="relative z-10 flex flex-col items-center py-16 lg:py-28">
                    <div className="w-full max-w-6xl px-4">
                        <div className="mb-12 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
                            <h2 className="text-3xl font-bold text-foreground lg:text-5xl">
                                <span className="bg-linear-to-r from-primary to-purple-500 bg-clip-text text-transparent">
                                    {t('The Person You Need')}
                                </span>
                            </h2>
                            <Link
                                href={`/${locale}/about`}
                                className="group hidden w-fit items-center gap-2 rounded-full border border-border bg-foreground/5 px-5 py-2.5 text-sm font-medium text-foreground backdrop-blur-md transition-all hover:border-primary/50 hover:bg-primary/10 hover:text-primary lg:inline-flex"
                            >
                                {t('Read more')}{' '}
                                <BsArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </Link>
                        </div>

                        <div className="grid gap-4 lg:grid-cols-3 lg:grid-rows-2">
                            {/* Card 2: Profile summary (Mobile) */}
                            <div className="group relative col-span-1 flex flex-col items-center justify-center overflow-hidden rounded-[2.5rem] border border-border bg-card p-8 text-center shadow-lg shadow-foreground/5 backdrop-blur-xl transition-all hover:border-purple-500/30 lg:row-span-2 lg:hidden dark:shadow-2xl dark:shadow-black/50">
                                <div className="absolute bottom-0 left-0 h-1/2 w-full bg-linear-to-t from-purple-500/20 to-transparent opacity-50 transition-opacity duration-700 group-hover:opacity-100" />
                                <div className="relative z-10 mb-6 size-[140px] overflow-hidden rounded-3xl border-2 border-primary/30 shadow-[0_0_30px_rgba(0,166,244,0.3)]">
                                    <img
                                        src="/my-photo-3.jpg"
                                        alt="Joseph Christ"
                                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                </div>
                                <h3 className="text-xl font-bold text-foreground">
                                    Joseph Christ NLOGA
                                </h3>
                                <p className="mb-4 font-medium text-primary">
                                    Solution Architect & UX Engineer
                                </p>
                                <p className="text-sm text-muted-foreground">
                                    Bridging the gap between aesthetic
                                    excellence and technical scalability.
                                </p>
                            </div>
                            {/* Card 1: Core Philosophy */}
                            <div className="group relative col-span-1 flex flex-col justify-center overflow-hidden rounded-[2.5rem] border border-border bg-card/80 p-8 shadow-lg shadow-foreground/5 backdrop-blur-xl transition-all hover:border-primary/30 lg:col-span-2 lg:row-span-1 dark:shadow-2xl dark:shadow-black/50">
                                <div className="absolute top-0 right-0 h-64 w-64 translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-[80px] transition-transform duration-700 group-hover:scale-150" />
                                <RevealElement>
                                    <h3 className="mb-4 text-2xl font-bold text-foreground lg:text-3xl">
                                        {t('Transforming Complex Ideas')}
                                    </h3>
                                    <p className="text-lg leading-relaxed text-muted-foreground">
                                        {t(
                                            'Behind every complex idea is a real human need. I specialize in breaking down intricate problems into clear, meaningful solutions that prioritize usability and impact. By combining design thinking with engineering expertise, I create products that are genuinely valuable to the people they serve.',
                                        )}
                                    </p>
                                </RevealElement>
                            </div>

                            {/* Card 2: Profile summary (Desktop) */}
                            <div className="group relative col-span-1 hidden flex-col items-center justify-center overflow-hidden rounded-[2.5rem] border border-border bg-card p-8 text-center shadow-lg shadow-foreground/5 backdrop-blur-xl transition-all hover:border-purple-500/30 lg:row-span-2 lg:flex dark:shadow-2xl dark:shadow-black/50">
                                <div className="absolute bottom-0 left-0 h-1/2 w-full bg-linear-to-t from-purple-500/20 to-transparent opacity-50 transition-opacity duration-700 group-hover:opacity-100" />
                                <div className="relative z-10 mb-6 size-[140px] overflow-hidden rounded-3xl border-2 border-primary/30 shadow-[0_0_30px_rgba(0,166,244,0.3)]">
                                    <img
                                        src="/my-photo-3.jpg"
                                        alt="Joseph Christ"
                                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                </div>
                                <h3 className="text-xl font-bold text-foreground">
                                    Joseph Christ NLOGA
                                </h3>
                                <p className="mb-4 font-medium text-primary">
                                    Solution Architect & UX Engineer
                                </p>
                                <p className="text-sm text-muted-foreground">
                                    Bridging the gap between aesthetic
                                    excellence and technical scalability.
                                </p>
                            </div>

                            {/* Card 3: Experience & Approach */}
                            <div className="group relative col-span-1 flex flex-col justify-center overflow-hidden rounded-[2.5rem] border border-border bg-card/80 p-8 shadow-lg shadow-foreground/5 backdrop-blur-xl transition-all hover:border-purple-500/30 lg:col-span-2 lg:row-span-1 dark:shadow-2xl dark:shadow-black/50">
                                <div className="absolute bottom-0 left-0 h-64 w-64 -translate-x-1/2 translate-y-1/2 rounded-full bg-purple-500/10 blur-[80px] transition-transform duration-700 group-hover:scale-150" />
                                <RevealElement>
                                    <h3 className="mb-4 text-2xl font-bold text-foreground lg:text-3xl">
                                        Architecture-First Approach
                                    </h3>
                                    <p className="leading-relaxed text-muted-foreground">
                                        With over 7 years of progressive
                                        experience, I contribute across the full
                                        product lifecycle. Proficient in
                                        Laravel, React, and Node.js. I
                                        prioritize database modeling and system
                                        design early to eliminate technical debt
                                        before it starts, ensuring
                                        high-performance digital solutions.
                                    </p>
                                </RevealElement>
                            </div>
                            <Link
                                href={`/${locale}/about`}
                                className="group mx-auto inline-flex w-fit items-center gap-2 rounded-full border border-border bg-foreground/5 px-5 py-2.5 text-sm font-medium text-foreground backdrop-blur-md transition-all hover:border-primary/50 hover:bg-primary/10 hover:text-primary lg:hidden"
                            >
                                {t('Read more')}{' '}
                                <BsArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </Link>
                        </div>
                    </div>
                </section>

                {/* My Stats */}
                <section className="relative z-10 flex flex-col items-center py-8 lg:py-16">
                    <div className="w-full max-w-6xl px-4">
                        <div className="grid w-full grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-6">
                            {myStats.map((stat) => (
                                <div
                                    key={stat.id}
                                    className="group relative overflow-hidden rounded-2xl border border-border bg-card/80 p-6 backdrop-blur-xl transition-all hover:-translate-y-1 hover:border-primary/30 hover:shadow-[0_10px_40px_-10px_rgba(0,166,244,0.2)]"
                                >
                                    <div className="absolute -top-10 -right-10 h-32 w-32 rounded-full bg-purple-500/10 blur-[40px] transition-all group-hover:bg-primary/20" />
                                    <div className="relative z-10 flex flex-col gap-2">
                                        <p className="bg-linear-to-r from-primary to-purple-500 bg-clip-text text-4xl font-bold text-transparent lg:text-5xl">
                                            <CountUp
                                                start={0}
                                                end={parseInt(stat.value)}
                                                duration={2}
                                                suffix={stat.value.replace(
                                                    /^[0-9]+/,
                                                    '',
                                                )}
                                                enableScrollSpy
                                                scrollSpyOnce
                                            />
                                        </p>
                                        <p className="text-sm font-medium text-muted-foreground">
                                            {stat.title}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* My Services */}
                <section className="relative z-10 flex flex-col items-center bg-card/30 py-16 lg:py-28">
                    <div className="w-full max-w-6xl px-4">
                        <div className="w-full cursor-default gap-12 lg:grid lg:grid-cols-12">
                            {/* Left col */}
                            <div className="col-span-5 mb-8 flex flex-col gap-4 lg:mt-12 lg:mb-0 lg:gap-6">
                                <div className="flex">
                                    <span className="flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold tracking-wide text-primary uppercase shadow-[0_0_15px_-3px_rgba(0,166,244,0.3)]">
                                        My Services
                                    </span>
                                </div>
                                <RevealElement>
                                    <h2 className="text-3xl font-bold text-foreground capitalize lg:text-5xl/snug">
                                        Specialized Services
                                    </h2>
                                </RevealElement>
                                <RevealElement>
                                    <p className="text-lg leading-relaxed text-muted-foreground">
                                        A holistic approach to digital product
                                        development, covering technical
                                        architecture, full-stack implementation,
                                        and UI/UX engineering.
                                    </p>
                                </RevealElement>
                            </div>
                            {/* Right col, Services */}
                            <div className="col-span-7">
                                <div className="grid gap-4 lg:grid-cols-2">
                                    {services.map((service) => (
                                        <ServiceCard
                                            key={service.id}
                                            service={service}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* CASE STUDIES */}
                <section
                    id="work"
                    className="relative z-10 flex flex-col items-center bg-card/30 lg:h-[calc(100vh-60px)]"
                >
                    <CaseStudies />
                </section>

                {/* Tools & Tech Stack */}
                <section className="relative z-10 flex flex-col items-center py-16 lg:py-28">
                    <div className="relative w-full space-y-12 overflow-hidden px-4">
                        <div className="mx-auto mb-12 flex w-full max-w-6xl flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
                            <RevealElement>
                                <div className="flex w-full flex-col items-start gap-4">
                                    <div className="flex">
                                        <span className="flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-3 py-1 text-xs font-semibold tracking-wide text-purple-500 uppercase shadow-[0_0_15px_-3px_rgba(124,58,237,0.3)]">
                                            Tools & Tech Stack
                                        </span>
                                    </div>
                                    <h2 className="text-3xl font-medium text-foreground lg:text-5xl/snug">
                                        My Arsenal
                                    </h2>
                                    <p className="max-w-xl text-muted-foreground">
                                        The modern frameworks, languages, and
                                        design tools I use to bring full-scale
                                        web applications to life.
                                    </p>
                                </div>
                            </RevealElement>
                            <Link
                                href={`/${locale}/about`}
                                className="group hidden items-center gap-2 rounded-full border border-border bg-foreground/5 px-5 py-2.5 text-sm font-medium text-foreground backdrop-blur-md transition-all hover:border-purple-500/50 hover:bg-purple-500/10 hover:text-purple-500 lg:flex"
                            >
                                Read more{' '}
                                <BsArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </Link>
                        </div>

                        <div className="hidden lg:block">
                            <InfiniteCarousel
                                items={tools.map((tool) => (
                                    <div
                                        key={tool.id}
                                        className="group relative flex w-48 cursor-pointer flex-col items-center gap-4 overflow-hidden rounded-3xl border border-border bg-card px-4 py-8 font-semibold text-muted-foreground shadow-xl transition-all hover:-translate-y-2 hover:border-purple-500/30 hover:shadow-[0_10px_30px_rgba(124,58,237,0.15)]"
                                    >
                                        <div className="absolute inset-0 bg-linear-to-b from-purple-500/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                                        <span className="relative z-10 text-5xl drop-shadow-[0_0_10px_rgba(124,58,237,0.5)] transition-transform group-hover:scale-110 group-hover:text-purple-500">
                                            {tool.icon}
                                        </span>
                                        <p className="relative z-10 transition-colors group-hover:text-foreground">
                                            {tool.title}
                                        </p>
                                    </div>
                                ))}
                            />
                        </div>
                        <div className="grid grid-cols-2 gap-4 lg:hidden">
                            {tools.map((tool) => (
                                <div
                                    key={tool.id}
                                    className="group relative flex cursor-pointer flex-col items-center gap-3 overflow-hidden rounded-2xl border border-border bg-card p-5 font-semibold text-muted-foreground shadow-md transition-all hover:border-purple-500/30"
                                >
                                    <div className="absolute inset-0 bg-linear-to-b from-purple-500/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                                    <span className="relative z-10 text-3xl text-purple-500 drop-shadow-[0_0_8px_rgba(124,58,237,0.5)]">
                                        {tool.icon}
                                    </span>
                                    <p className="relative z-10 text-sm text-muted-foreground group-hover:text-foreground">
                                        {tool.title}
                                    </p>
                                </div>
                            ))}
                            <div className="col-span-2 mt-4 flex justify-center">
                                <Link
                                    href={`/${locale}/about`}
                                    className="group flex items-center gap-2 rounded-full border border-border bg-foreground/5 px-5 py-2.5 text-sm font-medium text-foreground backdrop-blur-md transition-all hover:border-purple-500/50 hover:bg-purple-500/10 hover:text-purple-500"
                                >
                                    {t('Read more')}{' '}
                                    <BsArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CONTACT FORM */}
                <section className="relative z-10 flex flex-col items-center py-20 lg:py-32">
                    <div className="w-full max-w-5xl">
                        <div className="relative overflow-hidden rounded-[2.5rem] border border-border bg-card p-6 shadow-lg shadow-foreground/5 lg:p-16 dark:shadow-2xl dark:shadow-black/50">
                            {/* Ambient Glows */}
                            <div className="absolute -top-32 -left-32 h-64 w-64 rounded-full bg-primary/10 blur-[100px]" />
                            <div className="absolute -right-32 -bottom-32 h-64 w-64 rounded-full bg-purple-500/10 blur-[100px]" />

                            <div className="relative z-10 grid gap-12 lg:grid-cols-2 lg:gap-20">
                                {/* Left side text */}
                                <div className="flex flex-col items-start gap-6">
                                    <RevealElement>
                                        <div className="flex w-full flex-col items-start gap-4">
                                            <span className="flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold tracking-wide text-primary uppercase shadow-[0_0_15px_-3px_rgba(0,166,244,0.3)]">
                                                Contact
                                            </span>
                                            <h2 className="text-4xl font-bold text-foreground lg:text-5xl/tight">
                                                Let's build something{' '}
                                                <span className="bg-linear-to-r from-primary to-purple-500 bg-clip-text text-transparent">
                                                    amazing
                                                </span>{' '}
                                                together.
                                            </h2>
                                            <p className="text-lg leading-relaxed text-muted-foreground">
                                                Whether you have a fully formed
                                                idea or just a concept, I'm here
                                                to help turn it into a reality.
                                            </p>
                                        </div>
                                    </RevealElement>
                                </div>

                                {/* Right side form */}
                                <div className="rounded-3xl border border-border bg-card/80 p-6 shadow-md shadow-foreground/5 backdrop-blur-xl lg:p-8 dark:shadow-xl dark:shadow-black/50">
                                    <form
                                        onSubmit={submitContact}
                                        className="space-y-5"
                                    >
                                        {/* EMAIL */}
                                        <div className="space-y-1.5">
                                            <label className="text-sm font-medium text-muted-foreground">
                                                Email Address
                                            </label>
                                            <div className="relative">
                                                <BsEnvelope className="absolute inset-y-0 left-4 my-auto size-5 text-muted-foreground transition-colors peer-focus:text-primary" />
                                                <input
                                                    className="peer w-full rounded-xl border border-border bg-background py-3.5 pr-4 pl-12 text-sm text-foreground transition-all placeholder:text-muted-foreground/50 focus:border-primary/50 focus:bg-primary/5 focus:ring-4 focus:ring-primary/10 focus:outline-none"
                                                    placeholder="hello@example.com"
                                                    type="email"
                                                    value={
                                                        contactForm.data.email
                                                    }
                                                    onChange={(e) =>
                                                        contactForm.setData(
                                                            'email',
                                                            e.target.value,
                                                        )
                                                    }
                                                />
                                            </div>
                                            {contactForm.errors.email && (
                                                <p className="mt-1 text-xs text-red-400">
                                                    {contactForm.errors.email}
                                                </p>
                                            )}
                                        </div>

                                        {/* FULL NAME */}
                                        <div className="space-y-1.5">
                                            <label className="text-sm font-medium text-muted-foreground">
                                                Full Name
                                            </label>
                                            <div className="relative">
                                                <FiUser className="absolute inset-y-0 left-4 my-auto size-5 text-muted-foreground transition-colors peer-focus:text-primary" />
                                                <input
                                                    className="peer w-full rounded-xl border border-border bg-background py-3.5 pr-4 pl-12 text-sm text-foreground transition-all placeholder:text-muted-foreground/50 focus:border-primary/50 focus:bg-primary/5 focus:ring-4 focus:ring-primary/10 focus:outline-none"
                                                    placeholder="John Doe"
                                                    type="text"
                                                    value={
                                                        contactForm.data.name
                                                    }
                                                    onChange={(e) =>
                                                        contactForm.setData(
                                                            'name',
                                                            e.target.value,
                                                        )
                                                    }
                                                />
                                            </div>
                                            {contactForm.errors.name && (
                                                <p className="mt-1 text-xs text-red-400">
                                                    {contactForm.errors.name}
                                                </p>
                                            )}
                                        </div>

                                        {/* MESSAGE */}
                                        <div className="space-y-1.5">
                                            <label className="text-sm font-medium text-muted-foreground">
                                                Message
                                            </label>
                                            <div className="relative">
                                                <BsChatRightText className="absolute top-4 left-4 size-5 text-muted-foreground transition-colors peer-focus:text-primary" />
                                                <textarea
                                                    className="peer h-32 w-full resize-none rounded-xl border border-border bg-background py-3.5 pr-4 pl-12 text-sm text-foreground transition-all placeholder:text-muted-foreground/50 focus:border-primary/50 focus:bg-primary/5 focus:ring-4 focus:ring-primary/10 focus:outline-none"
                                                    placeholder="Tell me about your project..."
                                                    value={
                                                        contactForm.data.message
                                                    }
                                                    onChange={(e) =>
                                                        contactForm.setData(
                                                            'message',
                                                            e.target.value,
                                                        )
                                                    }
                                                ></textarea>
                                            </div>
                                            {contactForm.errors.message && (
                                                <p className="mt-1 text-xs text-red-400">
                                                    {contactForm.errors.message}
                                                </p>
                                            )}
                                        </div>

                                        <button
                                            type="submit"
                                            disabled={contactForm.processing}
                                            className="group relative flex h-12 w-full items-center justify-center overflow-hidden rounded-xl bg-linear-to-r from-primary to-purple-500 font-semibold text-white transition-all hover:scale-[1.02] hover:shadow-[0_0_30px_-5px_rgba(0,166,244,0.5)] disabled:pointer-events-none disabled:opacity-50"
                                        >
                                            <div className="absolute inset-0 bg-white/20 opacity-0 transition-opacity group-hover:opacity-100" />
                                            <span className="relative z-10">
                                                {contactForm.processing
                                                    ? 'Sending...'
                                                    : 'Send Message'}
                                            </span>
                                        </button>

                                        {showSuccess && (
                                            <div className="mt-4 rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-3 text-center text-sm font-medium text-emerald-400">
                                                ✓ Your message has been sent
                                                successfully!
                                            </div>
                                        )}

                                        <RevealElement>
                                            <div className="mt-4 w-full space-y-6">
                                                <div className="flex items-center gap-4 opacity-60">
                                                    <div className="h-px grow bg-border"></div>
                                                    <p className="text-xs font-semibold tracking-widest text-muted-foreground uppercase">
                                                        Or
                                                    </p>
                                                    <div className="h-px grow bg-border"></div>
                                                </div>
                                                <a
                                                    href={
                                                        'https://planner.adna.cards/appointments/bookable/user_1732892830_6N0Y1iShrk'
                                                    }
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="group flex h-14 items-center justify-center gap-3 rounded-xl border border-border bg-foreground/5 px-6 font-semibold text-foreground backdrop-blur-md transition-all hover:border-primary/50 hover:bg-primary/10 hover:text-primary"
                                                >
                                                    <LuCalendarCheck
                                                        className="text-primary"
                                                        size={22}
                                                    />
                                                    Book a discovery call
                                                </a>
                                            </div>
                                        </RevealElement>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}

Home.layout = (page: React.ReactNode) => <MainLayout children={page} />;
export default Home;
