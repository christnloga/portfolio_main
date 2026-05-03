// import "./App.css";
import { useForm } from '@inertiajs/react';
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
import { BsChatRightText, BsEnvelope } from 'react-icons/bs';
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
    const { i18n } = useTranslation();
    const language = i18n.resolvedLanguage;

    console.log(language);

    const [activeService, setActiveService] = useState(1);

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

    const services = language === 'en' ? services_en : services_fr;

    const myStats = [
        {
            id: 1,
            title:
                language === 'en'
                    ? 'Years of Experience'
                    : "Années d'expérience",
            value: '08',
        },
        {
            id: 2,
            title:
                language === 'en' ? 'Projects Completed' : 'Projets réalisés',
            value: '20+',
        },
        {
            id: 3,
            title:
                language === 'en' ? 'Users Generated' : 'Utilisateurs générés',
            value: '30k+',
        },
        {
            id: 4,
            title: language === 'en' ? 'Happy Clients' : 'Clients satisfaits',
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
            {/* <Head title="Hello">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link
                    href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600"
                    rel="stylesheet"
                />
            </Head> */}
            <div className="overflow-x-hidden bg-[#081118]">
                <Header />

                {/* About Me */}
                <section className="relative z-10 flex flex-col items-center lg:mb-4 lg:py-28">
                    <div className="lg:w-6xl">
                        <div className="flex w-full flex-col gap-8 px-4">
                            {/* Profile */}
                            <div className="flex items-center gap-3">
                                <div className="size-[48px] shrink-0 overflow-hidden rounded-full border-2 border-[#00A6F4]">
                                    <img src="/my-photo-3.jpg" alt="" />
                                </div>
                                <div className="flex flex-col items-start">
                                    <p className="font-semibold text-white">
                                        Joseph Christ NLOGA{' '}
                                    </p>
                                    <p className="text-sm text-white/70">
                                        Solution Architect & UX Engineer
                                    </p>
                                </div>
                            </div>
                            <div className="flex flex-col gap-2">
                                <RevealElement>
                                    <h2 className="text-2xl font-bold text-white capitalize lg:text-4xl/snug">
                                        <span className="inline-block bg-linear-to-r from-[#00A6F4] to-[#7C3AED] bg-clip-text text-transparent">
                                            The Person You Need
                                        </span>{' '}
                                        To Transform Complex Ideas Into
                                        Scalable, Human-Centered Solutions.
                                    </h2>
                                </RevealElement>
                            </div>
                            <RevealElement>
                                <p className="text-lg text-slate-300">
                                    Behind every complex idea is a real human
                                    need. I specialize in breaking down
                                    intricate problems into clear, meaningful
                                    solutions that prioritize usability and
                                    impact. By combining design thinking with
                                    engineering expertise, I create products
                                    that are not only functional but genuinely
                                    valuable to the people they serve. The goal
                                    is simple: make complexity feel effortless.
                                </p>
                            </RevealElement>
                            <RevealElement>
                                <div className="border-l-2 border-slate-400 pl-4">
                                    <p className="text-sm text-slate-400">
                                        With over 7 years of progressive
                                        experience evolving from Graphic Design
                                        to Senior Full-Stack Engineering. I
                                        bridge the gap between aesthetic
                                        excellence and technical scalability,
                                        delivering intuitive, high-performance
                                        digital solutions. Proficient in
                                        Laravel, React, and Node.js, I
                                        contribute across the full product
                                        lifecycle—from user-centered design to
                                        robust implementation. I focus on
                                        “Architecture-First” approach.
                                        Prioritizing database modeling and
                                        system design early. I eliminate
                                        technical debt before it starts.
                                    </p>
                                </div>
                            </RevealElement>
                        </div>
                    </div>
                </section>

                {/* My Stats */}
                {/* <section className="relative z-10 flex flex-col items-center border-y border-slate-500/20 lg:mb-4 lg:py-28">
                    <div className="lg:w-6xl">
                        <div className="grid w-full gap-2 px-4 lg:grid-cols-4">
                            {myStats.map((stat) => (
                                <div className="rounded-2xl bg-[#0A1D26] p-4">
                                    <div className="flex items-center gap-4">
                                        <p className="inline-block bg-linear-to-r from-[#00A6F4] to-[#7C3AED] bg-clip-text text-6xl font-medium text-transparent">
                                            {stat.value}
                                        </p>
                                        <div>
                                            <p className="text-sm text-slate-300">
                                                {stat.title}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section> */}

                {/* My Stats 2 */}
                <section className="relative z-10 flex flex-col items-center border-y border-slate-500/20 py-8 lg:py-16">
                    <div className="lg:w-6xl">
                        <div className="grid w-full grid-cols-2 gap-2 px-4 lg:grid-cols-4 lg:gap-8">
                            {myStats.map((stat) => (
                                <div key={stat.id} className="">
                                    <div className="flex items-center gap-4">
                                        <p className="inline-block bg-linear-to-r from-[#00A6F4] to-[#7C3AED] bg-clip-text text-3xl font-medium text-transparent lg:text-6xl">
                                            {/* Count this number up */}
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
                                        <div>
                                            <p className="text-xs text-slate-300 lg:text-sm">
                                                {stat.title}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* My Services */}
                <section className="relative z-10 flex flex-col items-center bg-[#0C1821] lg:py-28">
                    <div className="lg:max-w-6xl">
                        <div className="w-full cursor-default gap-12 px-4 py-16 lg:grid lg:grid-cols-12 lg:px-0">
                            {/* Left col */}
                            <div className="col-span-5 mb-6 flex flex-col gap-4 lg:mt-12 lg:mb-0 lg:gap-6">
                                <div className="flex">
                                    <span className="flex rounded-md border border-slate-500/20 bg-[#0A1D26] px-2 py-1 text-xs font-medium text-[#00A6F4] uppercase">
                                        My Services
                                    </span>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <RevealElement>
                                        <h2 className="text-3xl font-medium text-white capitalize lg:text-5xl/snug">
                                            Specialized Services
                                        </h2>
                                    </RevealElement>
                                </div>
                                <RevealElement>
                                    <p className="text-slate-300">
                                        A holistic approach to digital product
                                        development, covering technical
                                        architecture, full-stack implementation,
                                        and UI/UX engineering.
                                    </p>
                                </RevealElement>
                            </div>
                            {/* Right col, Services */}
                            <div className="col-span-7">
                                <div className="grid gap-2 lg:grid-cols-2">
                                    {services.map((service) => (
                                        <ServiceCard
                                            key={service.id}
                                            service={service}
                                            activeService={activeService}
                                            setActiveService={setActiveService}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* CASE STUDIES */}
                <section className="relative z-10 flex flex-col items-center bg-[#0C1821] lg:h-[calc(100vh-60px)]">
                    <CaseStudies />
                </section>

                {/* Tools & Tech Stack */}
                <section className="py-28">
                    <div className="relative space-y-12 overflow-x-hidden px-4">
                        <RevealElement>
                            <div className="flex w-full flex-col items-center gap-4">
                                <div className="flex">
                                    <span className="flex rounded-md border border-slate-500/20 bg-[#0A1D26] px-2 py-1 text-xs font-medium text-[#00A6F4] uppercase">
                                        Tools & Tech Stack
                                    </span>
                                </div>
                                <h2 className="text-3xl font-medium text-white lg:text-5xl/snug">
                                    My Arsenal
                                </h2>
                                <p className="text text-center text-slate-400">
                                    The modern frameworks, languages, and design
                                    tools I use to bring full-scale web
                                    applications to life.
                                </p>
                            </div>
                        </RevealElement>
                        <div className="hidden lg:block">
                            <InfiniteCarousel
                                items={tools.map((tool) => (
                                    <div
                                        key={tool.id}
                                        className="flex w-48 cursor-pointer flex-col items-center gap-4 rounded-3xl border border-slate-300/50 px-4 py-8 font-semibold text-slate-300"
                                    >
                                        <span className="text-5xl">
                                            {tool.icon}
                                        </span>
                                        <p>{tool.title}</p>
                                    </div>
                                ))}
                            />
                        </div>
                        <div className="grid grid-cols-2 gap-4 lg:hidden">
                            {tools.map((tool) => (
                                <div
                                    key={tool.id}
                                    className="flex cursor-pointer flex-col items-center gap-2 rounded-3xl border border-slate-300/50 p-4 font-semibold text-slate-300"
                                >
                                    <span className="text-3xl">
                                        {tool.icon}
                                    </span>
                                    <p className="text-sm text-slate-400">
                                        {tool.title}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CONTACT FORM */}
                <section className="relative z-10 flex flex-col items-center py-28">
                    <div className="lg:max-w-6xl">
                        <div className="relative grid w-full rounded-3xl px-4 py-8 lg:grid-cols-12">
                            <div className="col-span-3" />
                            <div className="col-span-6 flex w-full flex-col gap-3 space-y-4 text-left">
                                <RevealElement>
                                    <div className="flex w-full flex-col items-center gap-4">
                                        <div className="flex">
                                            <span className="flex rounded-md border border-slate-500/20 bg-[#0A1D26] px-2 py-1 text-xs font-medium text-[#00A6F4] uppercase">
                                                Contact
                                            </span>
                                        </div>
                                        <h2 className="text-2xl font-medium text-white lg:text-5xl/snug">
                                            Get In Touch With Me
                                        </h2>
                                        <p className="text text-center text-slate-400">
                                            Send a message so we can talk about
                                            your project.
                                        </p>
                                    </div>
                                </RevealElement>
                                <form onSubmit={submitContact} className="relative space-y-3">
                                    <div>
                                        <div className="space-y-3">
                                            {/* EMAIL */}
                                            <div className="relative block">
                                                <BsEnvelope className="absolute inset-y-0 left-0 my-auto ml-4 flex size-[20px] items-center opacity-50" />
                                                <input
                                                    className="w-full rounded-lg border border-slate-500/30 bg-[#0C1821] py-3 pr-3 pl-12 text-sm text-slate-300 placeholder:text-slate-600 focus:border-[#00A6F4]/50 focus:outline-none"
                                                    placeholder="Your email"
                                                    type="email"
                                                    value={contactForm.data.email}
                                                    onChange={(e) => contactForm.setData('email', e.target.value)}
                                                />
                                                {contactForm.errors.email && (
                                                    <p className="mt-1 text-xs text-red-400">{contactForm.errors.email}</p>
                                                )}
                                            </div>

                                            {/* FULL NAME */}
                                            <div className="relative block">
                                                <FiUser className="absolute inset-y-0 left-0 my-auto ml-4 flex size-[20px] items-center opacity-50" />
                                                <input
                                                    className="w-full rounded-lg border border-slate-500/30 bg-[#0C1821] py-3 pr-3 pl-12 text-sm text-slate-300 placeholder:text-slate-600 focus:border-[#00A6F4]/50 focus:outline-none"
                                                    placeholder="Full name"
                                                    type="text"
                                                    value={contactForm.data.name}
                                                    onChange={(e) => contactForm.setData('name', e.target.value)}
                                                />
                                                {contactForm.errors.name && (
                                                    <p className="mt-1 text-xs text-red-400">{contactForm.errors.name}</p>
                                                )}
                                            </div>

                                            {/* MESSAGE */}
                                            <div className="relative block">
                                                <BsChatRightText className="absolute top-4 left-0 my-auto ml-4 flex size-[20px] items-center opacity-50" />
                                                <textarea
                                                    className="h-28 w-full appearance-none rounded-lg border border-slate-500/30 bg-[#0C1821] py-3 pr-3 pl-12 text-sm text-slate-300 placeholder:text-slate-600 focus:border-[#00A6F4]/50 focus:outline-none"
                                                    placeholder="Your message..."
                                                    value={contactForm.data.message}
                                                    onChange={(e) => contactForm.setData('message', e.target.value)}
                                                ></textarea>
                                                {contactForm.errors.message && (
                                                    <p className="mt-1 text-xs text-red-400">{contactForm.errors.message}</p>
                                                )}
                                            </div>
                                        </div>
                                        <button
                                            type="submit"
                                            disabled={contactForm.processing}
                                            className={
                                                'mt-8 flex h-10 w-full items-center justify-center gap-2 rounded-lg bg-[#00A6F4] px-4 font-medium text-white transition-all duration-150 hover:brightness-110 active:brightness-70 disabled:opacity-50 dark:text-black'
                                            }
                                        >
                                            {contactForm.processing ? 'Sending...' : 'Send Message'}
                                        </button>
                                        {showSuccess && (
                                            <div className="mt-4 rounded-lg border border-emerald-500/30 bg-emerald-500/10 p-3 text-center text-sm text-emerald-400">
                                                ✓ Your message has been sent successfully!
                                            </div>
                                        )}
                                    </div>
                                </form>
                                <RevealElement>
                                    <div className="relative space-y-6">
                                        <div className="flex w-full items-center gap-2 opacity-50">
                                            <div className="h-px grow bg-white"></div>
                                            <p>OR</p>
                                            <div className="h-px grow bg-white"></div>
                                        </div>
                                        <a
                                            href={'#'}
                                            className={
                                                'flex h-10 items-center justify-center gap-2 rounded-lg bg-[#1A323F] px-4 font-medium text-black capitalize transition-all duration-150 hover:brightness-125 active:brightness-70 dark:text-white'
                                            }
                                        >
                                            <LuCalendarCheck size={20} />
                                            Book a call with me
                                        </a>
                                    </div>
                                </RevealElement>
                            </div>
                            <div className="col-span-3" />
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}

Home.layout = (page: React.ReactNode) => <MainLayout children={page} />;
export default Home;
