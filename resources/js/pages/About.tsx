import { Head, Link } from '@inertiajs/react';
import React, { useEffect } from 'react';
import { BiLogoReact } from 'react-icons/bi';
import {
    BsArrowLeft,
    BsBriefcase,
    BsCalendar3,
    BsChevronRight,
    BsCpu,
    BsGlobe,
    BsLayers,
    BsLightning,
    BsTerminal,
} from 'react-icons/bs';
import { SiLaravel } from 'react-icons/si';
import { useGlobal } from '@/contexts/GlobalContext';
import RevealElement from '../components/RevealElement';
import MainLayout from '../layouts/MainLayout';
import { useTranslation } from 'react-i18next';

// --- Types ---
interface Experience {
    role: string;
    company: string;
    period: string;
    type: string;
    description: string[];
}

interface TechCategory {
    title: string;
    icon: React.ReactNode;
    skills: string[];
}

// --- Data ---
const experiences: Experience[] = [
    {
        role: 'Co-Founder',
        company: 'ADNA.CARDS',
        period: 'Mar. 2023 - Present',
        type: 'Full-time',
        description: [
            'Led product development for a team of 3 full-stack developers and 1 UX/UI designer.',
            'Designed the end-to-end app system architecture and core infrastructure for scalability.',
            'Implemented the UX/UI strategy to ensure a seamless user experience.',
            'Conceptualized and implemented key product features, overseeing the transition from design to production-ready code.',
        ],
    },
    {
        role: 'Chief Technology Officer (CTO)',
        company: 'Altechs Engineering Sarl',
        period: 'May 2024 - Nov. 2025',
        type: 'Full-time',
        description: [
            'Coordinated a cross-functional team of 14 employees across design, dev, and management.',
            'Managed recruitment and onboarding to scale operations.',
            'Mentored 30 interns, strengthening technical and professional competencies.',
            'Established a collaborative, high-performance culture through effective leadership and feedback.',
        ],
    },
    {
        role: 'Sr. Product Designer & Solution Architect',
        company: 'Altechs Engineering Sarl',
        period: 'Jan. 2023 - May 2024',
        type: 'Part-time',
        description: [
            'Led the development of the Cameroon Bar Association Digital Ecosystem.',
            'Modernized administrative management for legal professionals via Web, Desktop, and Mobile.',
            'Developed core modules including the management suite and lawyer portals.',
            'Managed the full design cycle, including system logic, infrastructure, and high-fidelity UX/UI.',
        ],
    },
    {
        role: 'Product Designer & App Developer',
        company: 'Altechs Engineering Sarl',
        period: 'Sep. 2020 - Jan. 2023',
        type: 'Full-time',
        description: [
            'Established product branding for diverse client projects like SITRACEL S.A and B.I.A Pay.',
            'Developed a membership management app for a transport association to automate contribution tracking.',
            'Successfully trained and followed up with 13 academic interns.',
        ],
    },
    {
        role: 'Co-Founder & UI/UX Designer',
        company: 'Cybex.Ai',
        period: 'Feb. 2019 - Sep. 2020',
        type: 'Full-time',
        description: [
            'Built and grew the startup with 4 co-founders, driving product development and operations.',
            'Designed the corporate identity of the startup and built the website.',
            'Co-designed and implemented a management app for the Cameroon Volleyball Federation.',
        ],
    },
    {
        role: 'Graphic Designer & Web Developer',
        company: 'Freelance',
        period: '2018 - 2019',
        type: 'Full-time',
        description: [
            'Created comprehensive corporate identities, logos, and web platforms for various small businesses.',
            'Key projects included Nkonny Design, OMIRAI, and Groupement Des Transporteurs Terrestre du Cameroon.',
        ],
    },
];

const techStack: TechCategory[] = [
    {
        title: 'Frontend',
        icon: <BiLogoReact className="size-5" />,
        skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
    },
    {
        title: 'Backend',
        icon: <SiLaravel className="size-5" />,
        skills: ['Laravel', 'Node.js', 'Express.js', 'Livewire/Volt', 'PHP'],
    },
    {
        title: 'Cross-Platform',
        icon: <BsCpu className="size-5" />,
        skills: ['React Native', 'Expo', 'Tauri'],
    },
    {
        title: 'DevOps & DB',
        icon: <BsTerminal className="size-5" />,
        skills: ['PostgreSQL', 'MySQL', 'Docker', 'Git'],
    },
];

const masteryTools = [
    'Figma',
    'Protopie',
    'Adobe Creative Suite',
    'Notion',
    'Obsidian',
    'Postman',
    'Gemini',
];

// --- Component ---
const About = () => {
    const { t } = useTranslation();
    const { setNavbarLight } = useGlobal();

    useEffect(() => {
        setNavbarLight(false);
    }, [setNavbarLight]);

    return (
        <>
            <Head title={t('À propos')} />
            <div className="min-h-screen overflow-x-hidden bg-[#081118] text-slate-200 selection:bg-[#00A6F4]/30">
                {/* Fixed ambient orbs */}
                <div className="pointer-events-none fixed inset-0 overflow-hidden">
                    <div className="absolute -top-[10%] -left-[10%] h-[40%] w-[40%] rounded-full bg-[#00A6F4]/8 blur-[120px]" />
                    <div className="absolute -right-[10%] -bottom-[10%] h-[40%] w-[40%] rounded-full bg-[#7C3AED]/8 blur-[120px]" />
                </div>

                <main className="relative z-10 mx-auto max-w-6xl px-4 pt-32 pb-24 lg:px-6">
                    {/* Back Link */}
                    <RevealElement>
                        <Link
                            href="/"
                            className="group mb-12 inline-flex items-center gap-2 text-sm font-medium text-slate-400 transition-colors hover:text-[#00A6F4]"
                        >
                            <BsArrowLeft className="size-4 transition-transform group-hover:-translate-x-1" />
                            Back to Home
                        </Link>
                    </RevealElement>

                    {/* Hero Section */}
                    <section className="mb-28">
                        <RevealElement>
                            <p className="mb-4 text-sm font-semibold tracking-widest text-[#00A6F4] uppercase">
                                Product Designer & Solution Architect
                            </p>
                        </RevealElement>
                        <RevealElement>
                            <h1 className="mb-8 text-5xl leading-tight font-bold text-white lg:text-7xl">
                                <span className="bg-linear-to-r from-white to-slate-500 bg-clip-text text-transparent">
                                    Joseph Christ Nloga
                                </span>
                            </h1>
                        </RevealElement>
                        <RevealElement>
                            <p className="max-w-3xl text-xl leading-relaxed text-slate-400">
                                A Solution Architect & UX Engineer with 7+ years
                                of experience. I specialize in building
                                scalable, full-stack applications using Laravel,
                                React, and Node.js while maintaining a
                                designer's eye for excellence.
                            </p>
                        </RevealElement>
                    </section>

                    {/* Tech Stack Grid */}
                    <section className="mb-28">
                        <RevealElement>
                            <div className="mb-12 flex items-center gap-3">
                                <BsLightning className="size-5 text-[#00A6F4]" />
                                <h3 className="text-2xl font-bold text-white">
                                    Technical Ecosystem
                                </h3>
                            </div>
                        </RevealElement>
                        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 lg:gap-6">
                            {techStack.map((cat, i) => (
                                <RevealElement key={i}>
                                    <div className="group h-full rounded-2xl border border-white/5 bg-[#0C1821] p-6 shadow-xl backdrop-blur-md transition-all duration-500 hover:-translate-y-1 hover:border-[#00A6F4]/30 hover:shadow-[0_10px_40px_-10px_rgba(0,166,244,0.15)]">
                                        <div className="mb-4 text-[#00A6F4] transition-transform group-hover:scale-110">
                                            {cat.icon}
                                        </div>
                                        <h4 className="mb-4 text-lg font-semibold text-white">
                                            {cat.title}
                                        </h4>
                                        <div className="flex flex-wrap gap-2">
                                            {cat.skills.map((skill) => (
                                                <span
                                                    key={skill}
                                                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-300"
                                                >
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </RevealElement>
                            ))}
                        </div>
                    </section>

                    {/* Experience Timeline */}
                    <section className="mb-28">
                        <RevealElement>
                            <div className="mb-12 flex items-center gap-3">
                                <BsBriefcase className="size-5 text-[#7C3AED]" />
                                <h3 className="text-2xl font-bold text-white">
                                    Professional Journey
                                </h3>
                            </div>
                        </RevealElement>
                        <div className="space-y-8">
                            {experiences.map((exp, i) => (
                                <RevealElement key={i}>
                                    <div className="group relative border-l border-white/10 pl-8">
                                        {/* Timeline dot */}
                                        <div className="absolute top-0 -left-[5px] size-2.5 rounded-full bg-[#00A6F4] shadow-[0_0_10px_#00A6F4] transition-transform group-hover:scale-150" />

                                        <div className="rounded-2xl border border-white/5 bg-[#0C1821] p-8 shadow-xl transition-all duration-500 hover:border-[#00A6F4]/20 hover:bg-[#0C1821]/80">
                                            <div className="mb-6 flex flex-col justify-between gap-4 md:flex-row">
                                                <div>
                                                    <h4 className="text-xl font-bold text-white transition-colors group-hover:text-[#00A6F4]">
                                                        {exp.role}
                                                    </h4>
                                                    <div className="mt-1 flex items-center gap-2 font-medium text-slate-300">
                                                        <BsBriefcase className="size-4 text-[#00A6F4]" />
                                                        <span>
                                                            {exp.company}
                                                        </span>
                                                        <span className="rounded-md border border-white/10 px-2 py-0.5 text-xs text-slate-500">
                                                            {exp.type}
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="flex flex-col md:items-end">
                                                    <div className="flex items-center gap-2 font-mono text-sm text-[#00A6F4]/80">
                                                        <BsCalendar3 className="size-4" />
                                                        {exp.period}
                                                    </div>
                                                </div>
                                            </div>

                                            <ul className="space-y-3">
                                                {exp.description.map(
                                                    (item, idx) => (
                                                        <li
                                                            key={idx}
                                                            className="group/item flex gap-3 text-[15px] leading-relaxed text-slate-400"
                                                        >
                                                            <div className="mt-1.5">
                                                                <BsChevronRight className="size-3.5 text-[#00A6F4] opacity-50 transition-all group-hover/item:translate-x-1 group-hover/item:opacity-100" />
                                                            </div>
                                                            <span className="transition-colors group-hover/item:text-slate-200">
                                                                {item}
                                                            </span>
                                                        </li>
                                                    ),
                                                )}
                                            </ul>
                                        </div>
                                    </div>
                                </RevealElement>
                            ))}
                        </div>
                    </section>

                    {/* Mastery Tools & Mentorship */}
                    <section className="grid grid-cols-1 gap-6 md:grid-cols-2">
                        <RevealElement>
                            <div className="h-full rounded-3xl border border-[#00A6F4]/20 bg-linear-to-br from-[#00A6F4]/10 to-transparent p-8 shadow-xl">
                                <h3 className="mb-4 flex items-center gap-2 text-xl font-bold text-white">
                                    <BsLayers className="size-5 text-[#00A6F4]" />
                                    Mastery Tools
                                </h3>
                                <p className="mb-6 text-sm leading-relaxed text-slate-400">
                                    Leveraging the best of design and
                                    productivity to accelerate product
                                    lifecycles.
                                </p>
                                <div className="flex flex-wrap gap-3">
                                    {masteryTools.map((tool) => (
                                        <span
                                            key={tool}
                                            className="rounded-full border border-[#00A6F4]/20 bg-[#00A6F4]/5 px-3 py-1 text-xs font-medium text-[#00A6F4]/80"
                                        >
                                            {tool}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </RevealElement>
                        <RevealElement>
                            <div className="h-full rounded-3xl border border-[#7C3AED]/20 bg-linear-to-br from-[#7C3AED]/10 to-transparent p-8 shadow-xl">
                                <h3 className="mb-4 flex items-center gap-2 text-xl font-bold text-white">
                                    <BsGlobe className="size-5 text-[#7C3AED]" />
                                    Mentorship & Impact
                                </h3>
                                <p className="text-sm leading-relaxed text-slate-400">
                                    Founded the{' '}
                                    <strong className="font-semibold text-white">
                                        Now Just Create (NJC)
                                    </strong>{' '}
                                    initiative, mentoring 25+ graduates annually
                                    in solution architecture and UX design to
                                    bridge the talent gap in the African tech
                                    scene.
                                </p>
                            </div>
                        </RevealElement>
                    </section>
                </main>
            </div>
        </>
    );
};

About.layout = (page: React.ReactNode) => <MainLayout children={page} />;
export default About;
