// import "./App.css";
import { Head } from '@inertiajs/react';
import { useTranslation } from 'react-i18next';
import { BsEnvelopeAtFill } from 'react-icons/bs';
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import { IoLogoWhatsapp } from 'react-icons/io';
import { LuGitPullRequestArrow } from 'react-icons/lu';
import { MdDesignServices } from 'react-icons/md';
import { TbBlocks } from 'react-icons/tb';
import RevealElement from '../components/RevealElement';
import ServiceCard from '../components/ServiceCard';
import Testimanial from '../components/Testimanial';
import MainLayout from '../layouts/MainLayout';
import Header from '@/components/home/Header';

function Home() {
    const { i18n } = useTranslation();
    const language = i18n.resolvedLanguage;

    console.log(language);

    const services_en = [
        {
            id: 1,
            title: 'End‑to‑End Product Development',
            description:
                'I deliver complete digital products — from early concept to production — with a strong focus on business value, usability, and long‑term scalability.',
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
            title: 'UX/UI Design for Web & Mobile Applications',
            description:
                'I design interfaces that are clear, intuitive, and conversion‑focused, informed by real user needs and modern design principles.',
            subTitle: 'Deliverables:',
            icon: <MdDesignServices className="m-auto" size={30} />,
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
                'I build fast, maintainable, and visually refined user interfaces using modern frameworks and performance‑driven best practices.',
            subTitle: 'Core technologies:',
            icon: <MdDesignServices className="m-auto" size={30} />,
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
                'I architect secure and scalable backend systems that power real‑world applications and support growth.',
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
            title: 'Design UX/UI pour applications web et mobiles',
            description:
                'Je conçois des interfaces claires, intuitives et axées sur la conversion, basées sur les besoins réels des utilisateurs et les principes de design modernes.',
            subTitle: 'Livrables :',
            icon: <MdDesignServices className="m-auto" size={30} />,
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
            icon: <MdDesignServices className="m-auto" size={30} />,
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

    return (
        <>
            <Head title="Welcome">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link
                    href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600"
                    rel="stylesheet"
                />
            </Head>
            <div className="overflow-x-hidden">
                <Header />
                <section className="relative z-10 flex flex-col items-center py-28 lg:mb-4">
                    <div className="lg:max-w-6xl">
                        <div className="flex w-full flex-col gap-3 p-6">
                            <h2 className="text-4xl font-bold text-white">
                                What I do
                            </h2>
                            {/* <p className="text-white/70">{t("sectionDesc1")}</p> */}
                            {/* <p className="text-white/70">
              With over 6 years of professional experience in full‑stack
              JavaScript and PHP (Laravel) and 5+ years in UX/UI design, I
              partner with startups, growing businesses, and international teams
              to transform ideas into reliable, market‑ready digital products.
            </p> */}
                        </div>
                        <div className="grid w-full cursor-default grid-cols-2 gap-6 bg-gray-950/5 px-4 py-16">
                            {/* Card */}
                            {services.map((service) => (
                                <ServiceCard
                                    key={service.id}
                                    service={service}
                                />
                            ))}
                        </div>
                    </div>
                </section>

                <section className="relative z-10 flex flex-col items-center bg-zinc-900 lg:h-[calc(100vh-60px)]">
                    <Testimanial />
                </section>

                <section className="relative z-10">
                    <div className="grid lg:grid-cols-3">
                        <div></div>
                        <div className="flex w-full flex-col gap-3 p-6 text-left">
                            <RevealElement>
                                <h2 className="text-2xl font-bold text-white">
                                    Why work with me?
                                </h2>
                            </RevealElement>
                            <RevealElement>
                                <p className="text-white/70">
                                    I collaborate closely with founders, product
                                    managers, and engineering teams to deliver
                                    designs and technical solutions that make
                                    complete sense for your business and users.
                                    Whether you're building a new platform from
                                    scratch or optimizing an existing one, I
                                    ensure the final product looks great and
                                    works flawlessly.
                                </p>
                            </RevealElement>
                            <RevealElement>
                                <div className="mt-2 flex items-center gap-4">
                                    <a
                                        target="_blank"
                                        href="mailto:christ.nloga@gmail.com"
                                        className="mb-11 flex size-10 shrink-0 overflow-hidden rounded-full border-2 border-sky-300 bg-sky-300/5 transition-all duration-150 hover:brightness-110 active:brightness-125"
                                    >
                                        <BsEnvelopeAtFill
                                            className="m-auto text-sky-300"
                                            size={20}
                                        />
                                    </a>
                                    <a
                                        target="_blank"
                                        href="https://wa.me/237680643244"
                                        className="mb-11 flex size-10 shrink-0 overflow-hidden rounded-full border-2 border-sky-300 bg-sky-300/5 transition-all duration-150 hover:brightness-110 active:brightness-125"
                                    >
                                        <IoLogoWhatsapp
                                            className="m-auto text-sky-300"
                                            size={20}
                                        />
                                    </a>
                                    {/* <div className="relative h-8 w-[2px] shrink-0 bg-sky-300 rounded"></div> */}
                                    <a
                                        target="_blank"
                                        href="https://www.linkedin.com/in/nloga-joseph-christ-7b1651194?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                                        className="mb-11 flex size-10 shrink-0 overflow-hidden rounded-full border-2 border-sky-300 bg-sky-300/5 transition-all duration-150 hover:brightness-110 active:brightness-125"
                                    >
                                        <FaLinkedinIn
                                            className="m-auto text-sky-300"
                                            size={20}
                                        />
                                    </a>
                                    <a
                                        target="_blank"
                                        href="https://web.facebook.com/christ.nloga/?_rdc=1&_rdr#"
                                        className="mb-11 flex size-10 shrink-0 overflow-hidden rounded-full border-2 border-sky-300 bg-sky-300/5 transition-all duration-150 hover:brightness-110 active:brightness-125"
                                    >
                                        <FaFacebookF
                                            className="m-auto text-sky-300"
                                            size={20}
                                        />
                                    </a>
                                    {/* <a target='_blank' href='https://x.com/_nloga?t=Y_tI_pkTsMRq0zljqk66Kg&s=08' className="flex hover:brightness-110 active:brightness-125 shrink-0 size-10 rounded-full mb-11 bg-zinc-700 border-2 border-zinc-600 overflow-hidden">
                                    <BsTwitterX className='m-auto text-sky-300' size={20} />
                                </a> */}
                                </div>
                            </RevealElement>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}

Home.layout = (page: React.ReactNode) => <MainLayout children={page} />;
export default Home;
