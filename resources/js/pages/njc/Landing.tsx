import { Link } from '@inertiajs/react';
import {
    ArrowRight,
    BrainIcon,
    ChevronDown,
    DotIcon,
    UserPlus,
} from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { BsCheckCircle, BsCheckCircleFill, BsStarFill } from 'react-icons/bs';
import { GiFallingStar } from 'react-icons/gi';
import { GoDotFill, GoRocket } from 'react-icons/go';
import { HiOutlineLightBulb } from 'react-icons/hi2';
import { LuBlocks } from 'react-icons/lu';
import { MdOutlineDesignServices } from 'react-icons/md';
import { RiApps2AiLine } from 'react-icons/ri';
import NJCLogo from '@/components/njc-logo';
import RevealElement from '@/components/RevealElement';
import TeamIllustration from '@/components/TeamIllustration';
import { useGlobal } from '@/contexts/GlobalContext';
import MainLayout from '@/layouts/MainLayout';
import { apply } from '@/routes/page/njc';

const Landing = () => {


    const { setNavbarLight } = useGlobal();
    const [logoLoading, setLogoLoading] = useState(false);
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    const faqData = [
        {
            question: 'Is this program free or paid?',
            answer: 'The NJC Fellowship is entirely scholarship-based. For the selected 25 fellows, the 6-month program is completely free.',
        },
        {
            question: 'Do I need prior experience?',
            answer: "We expect you to have a solid technical or design foundation. While you don't need a formal job history, you must show us what you've built.",
        },
        {
            question: 'Is it remote or physical?',
            answer: "It's a hybrid experience. While some work can be done remotely, physical presence at our hub in Cameroon is mandatory for key sprints and collaborative building.",
        },
        {
            question: 'What happens after the program?',
            answer: "Our goal is placement or creation. You'll either be matched with high-growth partners or supported in launching the product you built as a standalone venture.",
        },
    ];

    useEffect(() => {
        setNavbarLight(true);
    }, [setNavbarLight]);

    setTimeout(() => {
        return setLogoLoading(false);
    }, 3000);

    return (
        <>
            {logoLoading ? (
                <div className="absolute z-50 flex h-screen w-full items-center justify-center bg-[#081118] text-white">
                    <NJCLogo className="animate-pulse" />
                </div>
            ) : (
                <>
                    <header className="relative flex min-h-[90vh] items-center overflow-hidden bg-[#081118] px-4 pt-20 pb-32">
                        {/* Futuristic Background Elements */}
                        <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
                            {/* Grid pattern with overlay */}
                            <div className="absolute inset-0 bg-[url('/hero-grid.png')] bg-cover bg-center opacity-30 mix-blend-overlay"></div>
                            <div className="absolute inset-0 bg-radial from-transparent to-[#081118] opacity-80" />

                            {/* Ambient Glows */}
                            <div
                                className="absolute top-1/4 left-1/4 h-[400px] w-[400px] animate-pulse rounded-full bg-[#00A6F4]/15 mix-blend-screen blur-[100px] sm:h-[600px] sm:w-[600px] sm:blur-[150px]"
                                style={{ animationDuration: '4s' }}
                            ></div>
                            <div
                                className="absolute right-1/4 bottom-1/4 h-[400px] w-[400px] animate-pulse rounded-full bg-[#7C3AED]/15 mix-blend-screen blur-[100px] sm:h-[600px] sm:w-[600px] sm:blur-[150px]"
                                style={{
                                    animationDuration: '5s',
                                    animationDelay: '1s',
                                }}
                            ></div>

                            {/* Core central light */}
                            <div className="absolute top-1/2 left-1/2 h-[300px] w-[80vw] max-w-[1000px] -translate-x-1/2 -translate-y-1/2 rounded-[100%] bg-gradient-to-r from-[#00A6F4]/10 via-[#7C3AED]/10 to-[#00A6F4]/10 blur-[80px]"></div>
                        </div>

                        <div className="relative z-20 mx-auto w-full max-w-7xl">
                            <div className="flex flex-col items-center space-y-10 text-center">
                                {/* Futuristic Badge */}
                                <RevealElement>
                                    <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 shadow-[0_0_30px_rgba(0,166,244,0.15)] backdrop-blur-md">
                                        <span className="relative flex h-2 w-2">
                                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#00A6F4] opacity-75"></span>
                                            <span className="relative inline-flex h-2 w-2 rounded-full bg-[#00A6F4]"></span>
                                        </span>
                                        <span className="text-xs font-bold tracking-[0.2em] text-[#00A6F4] uppercase">
                                            Applications Open • 25 Seats Only
                                        </span>
                                    </div>
                                </RevealElement>

                                {/* Hero Typography */}
                                <RevealElement>
                                    <h1 className="text-5xl leading-[1.05] font-extrabold tracking-tight text-white md:text-7xl lg:text-[6rem]">
                                        Build Real Tech Products{' '}
                                        <br className="hidden md:block" />
                                        Become Top{' '}
                                        <span className="relative mt-2 inline-block md:mt-0">
                                            <span className="absolute -inset-2 bg-gradient-to-r from-[#00A6F4] to-[#7C3AED] opacity-50 blur-xl"></span>
                                            <span className="relative bg-gradient-to-r from-[#00A6F4] to-[#7C3AED] bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(124,58,237,0.5)]">
                                                1%
                                            </span>
                                        </span>{' '}
                                        in 6 Months
                                    </h1>
                                </RevealElement>

                                <RevealElement>
                                    <p className="mx-auto max-w-3xl text-lg leading-relaxed font-light text-slate-300 md:text-xl">
                                        NJC (Now Just Create) is a selective
                                        6-month fellowship for ambitious
                                        graduates ready to master UX,
                                        engineering thinking, and real-world
                                        product development.
                                    </p>
                                </RevealElement>

                                {/* Action Area */}
                                <RevealElement>
                                    <div className="mt-6 flex flex-col items-center gap-8">
                                        <div className="flex w-full flex-col items-center justify-center gap-4 sm:flex-row">
                                            <Link
                                                href={apply.url()}
                                                className="group relative flex h-14 w-full min-w-[200px] items-center justify-center gap-2 overflow-hidden rounded-xl bg-white px-8 text-sm font-bold text-black shadow-[0_0_40px_rgba(255,255,255,0.15)] transition-transform hover:scale-[1.02] active:scale-95 sm:w-auto"
                                            >
                                                <div className="absolute inset-0 bg-gradient-to-r from-[#00A6F4]/10 to-[#7C3AED]/10 opacity-0 transition-opacity group-hover:opacity-100"></div>
                                                <UserPlus
                                                    size={20}
                                                    className="relative z-10"
                                                />
                                                <span className="relative z-10">
                                                    Apply Now
                                                </span>
                                                <ArrowRight
                                                    size={16}
                                                    className="relative z-10 ml-1 transition-transform group-hover:translate-x-1"
                                                />
                                            </Link>

                                            <a
                                                href="#program"
                                                className="flex h-14 w-full min-w-[200px] items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-8 text-sm font-medium text-white backdrop-blur-sm transition-all hover:border-white/20 hover:bg-white/10 active:scale-95 sm:w-auto"
                                            >
                                                See Program Structure
                                            </a>
                                        </div>

                                        <div className="flex items-center gap-4 text-xs font-medium tracking-[0.15em] text-slate-400 uppercase">
                                            <span>6 Months</span>
                                            <span className="h-1 w-1 rounded-full bg-slate-600"></span>
                                            <span>Real Projects</span>
                                            <span className="h-1 w-1 rounded-full bg-slate-600"></span>
                                            <span>Demo Day</span>
                                        </div>
                                    </div>
                                </RevealElement>
                            </div>
                        </div>

                        {/* Seamless transition to next section */}
                        <div className="pointer-events-none absolute bottom-0 left-0 h-40 w-full bg-gradient-to-t from-[#081118] to-transparent"></div>
                    </header>
                    {/* WHAT IS NJC */}
                    <section className="relative overflow-hidden bg-[#081118] py-24 lg:py-32">
                        {/* Subtle background glow */}
                        <div className="pointer-events-none absolute top-1/2 left-1/2 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#00A6F4]/5 blur-[120px]"></div>

                        <div className="relative z-10 flex w-full justify-center">
                            <div className="flex w-full max-w-7xl flex-col gap-16 px-4">
                                <div className="flex flex-col items-center gap-6">
                                    <div className="flex flex-col items-center text-center">
                                        <RevealElement>
                                            <h2 className="text-2xl font-semibold text-slate-500 line-through decoration-slate-600 lg:text-4xl">
                                                Not a Bootcamp
                                            </h2>
                                        </RevealElement>
                                        <RevealElement delay={100}>
                                            <h2 className="mt-2 text-4xl font-extrabold tracking-tight text-white lg:text-6xl">
                                                A{' '}
                                                <span className="bg-gradient-to-r from-[#00A6F4] to-[#7C3AED] bg-clip-text text-transparent">
                                                    Product Fellowship
                                                </span>
                                            </h2>
                                        </RevealElement>
                                    </div>
                                    <RevealElement delay={200}>
                                        <p className="mx-auto max-w-2xl text-center text-lg leading-relaxed text-slate-400">
                                            Bridging the gap between academic
                                            theory and high-impact product
                                            engineering.
                                        </p>
                                    </RevealElement>
                                </div>

                                {/* Grid */}
                                <div className="grid gap-6 md:grid-cols-3">
                                    {/* Card 1 */}
                                    <RevealElement delay={100}>
                                        <div className="group relative h-full rounded-3xl bg-gradient-to-b from-white/10 to-white/5 p-px shadow-2xl shadow-black transition-transform duration-300 hover:-translate-y-2">
                                            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#00A6F4]/20 to-transparent opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100"></div>
                                            <div className="relative flex h-full flex-col items-start overflow-hidden rounded-3xl bg-[#0A1520] p-8">
                                                <div className="absolute -top-10 -right-10 h-32 w-32 rounded-full bg-[#00A6F4]/10 blur-2xl transition-all duration-500 group-hover:scale-150 group-hover:bg-[#00A6F4]/30"></div>
                                                <div className="mb-8 inline-flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 p-4 shadow-[0_0_15px_rgba(0,166,244,0.1)] transition-all group-hover:shadow-[0_0_25px_rgba(0,166,244,0.3)]">
                                                    <HiOutlineLightBulb
                                                        className="text-[#00A6F4]"
                                                        size={32}
                                                    />
                                                </div>
                                                <h4 className="mb-4 text-2xl font-bold tracking-tight text-white">
                                                    Think Different
                                                </h4>
                                                <p className="text-sm leading-relaxed text-slate-400 lg:text-base">
                                                    "Think Beyond the Ticket."
                                                    Learn to architect solutions
                                                    that solve business
                                                    problems, moving from
                                                    'coder' to 'product
                                                    engineer.'
                                                </p>
                                            </div>
                                        </div>
                                    </RevealElement>

                                    {/* Card 2 */}
                                    <RevealElement delay={200}>
                                        <div className="group relative h-full rounded-3xl bg-gradient-to-b from-white/10 to-white/5 p-px shadow-2xl shadow-black transition-transform duration-300 hover:-translate-y-2">
                                            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#7C3AED]/20 to-transparent opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100"></div>
                                            <div className="relative flex h-full flex-col items-start overflow-hidden rounded-3xl bg-[#0A1520] p-8">
                                                <div className="absolute -top-10 -right-10 h-32 w-32 rounded-full bg-[#7C3AED]/10 blur-2xl transition-all duration-500 group-hover:scale-150 group-hover:bg-[#7C3AED]/30"></div>
                                                <div className="mb-8 inline-flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 p-4 shadow-[0_0_15px_rgba(124,58,237,0.1)] transition-all group-hover:shadow-[0_0_25px_rgba(124,58,237,0.3)]">
                                                    <RiApps2AiLine
                                                        className="text-[#7C3AED]"
                                                        size={32}
                                                    />
                                                </div>
                                                <h4 className="mb-4 text-2xl font-bold tracking-tight text-white">
                                                    Build Real Solutions
                                                </h4>
                                                <p className="text-sm leading-relaxed text-slate-400 lg:text-base">
                                                    "Local Problems, Global
                                                    Standards." Join a team
                                                    building production-ready
                                                    systems that tackle
                                                    real-world challenges.
                                                </p>
                                            </div>
                                        </div>
                                    </RevealElement>

                                    {/* Card 3 */}
                                    <RevealElement delay={300}>
                                        <div className="group relative h-full rounded-3xl bg-gradient-to-b from-white/10 to-white/5 p-px shadow-2xl shadow-black transition-transform duration-300 hover:-translate-y-2">
                                            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#00A6F4]/20 to-transparent opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100"></div>
                                            <div className="relative flex h-full flex-col items-start overflow-hidden rounded-3xl bg-[#0A1520] p-8">
                                                <div className="absolute -top-10 -right-10 h-32 w-32 rounded-full bg-[#00A6F4]/10 blur-2xl transition-all duration-500 group-hover:scale-150 group-hover:bg-[#00A6F4]/30"></div>
                                                <div className="mb-8 inline-flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 p-4 shadow-[0_0_15px_rgba(0,166,244,0.1)] transition-all group-hover:shadow-[0_0_25px_rgba(0,166,244,0.3)]">
                                                    <GiFallingStar
                                                        className="-rotate-90 text-[#00A6F4]"
                                                        size={32}
                                                    />
                                                </div>
                                                <h4 className="mb-4 text-2xl font-bold tracking-tight text-white">
                                                    Become Elite
                                                </h4>
                                                <p className="text-sm leading-relaxed text-slate-400 lg:text-base">
                                                    "Join the Top 1%." Master
                                                    the intersection of system
                                                    logic and visual polish to
                                                    stand out as a premier
                                                    talent.
                                                </p>
                                            </div>
                                        </div>
                                    </RevealElement>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="relative overflow-hidden bg-[#081118] py-28">
                        {/* Background Spotlight */}
                        <div className="absolute top-1/2 left-0 z-0 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#00A6F4]/10 blur-[120px]"></div>

                        <div className="relative z-10 flex w-full justify-center">
                            <div className="flex w-full lg:max-w-6xl">
                                <div className="grid w-full gap-12 px-4 lg:grid-cols-2 lg:items-center lg:gap-24">
                                    <RevealElement>
                                        <div className="space-y-6">
                                            <h2 className="text-4xl font-bold tracking-tight text-white lg:text-7xl">
                                                The Gap <br />
                                                <span className="bg-linear-to-r from-[#00A6F4] to-[#7C3AED] bg-clip-text text-transparent">
                                                    Is Real.
                                                </span>
                                            </h2>
                                            <div className="h-1 w-20 bg-[#00A6F4]"></div>
                                        </div>
                                    </RevealElement>

                                    <div className="space-y-8">
                                        <RevealElement delay={200}>
                                            <p className="text-xl leading-relaxed text-slate-300 lg:text-2xl">
                                                Tech is moving fast, but the gap
                                                between{' '}
                                                <span className="text-white italic">
                                                    "knowing how to code"
                                                </span>{' '}
                                                and{' '}
                                                <span className="font-semibold text-white italic">
                                                    "building world-class
                                                    solutions"
                                                </span>{' '}
                                                is wide.
                                            </p>
                                        </RevealElement>

                                        <RevealElement delay={400}>
                                            <p className="text-lg leading-relaxed text-slate-400">
                                                NJC exists to bridge that gap.
                                                We are grooming the 25
                                                specialists who will put our
                                                tech scene on the map alongside
                                                the giants of Nigeria and Kenya.
                                            </p>
                                        </RevealElement>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* WHAT YOU WILL LEARN */}
                    <section className="relative z-10 flex flex-col items-center overflow-hidden bg-[#081118] py-24 lg:py-32">
                        {/* Subtle background glow */}
                        <div className="pointer-events-none absolute top-1/3 right-0 h-[600px] w-[600px] translate-x-1/3 rounded-full bg-[#7C3AED]/5 blur-[150px]"></div>

                        <div className="relative z-10 flex w-full justify-center">
                            <div className="flex w-full max-w-7xl">
                                <div className="w-full gap-16 px-4 lg:grid lg:grid-cols-12 lg:items-start">
                                    <div className="col-span-5 mb-12 flex flex-col gap-6 lg:sticky lg:top-32 lg:mb-0">
                                        <RevealElement>
                                            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 shadow-sm backdrop-blur-md">
                                                <span className="h-2 w-2 animate-pulse rounded-full bg-[#7C3AED]"></span>
                                                <span className="text-xs font-bold tracking-widest text-[#7C3AED] uppercase">
                                                    Curriculum
                                                </span>
                                            </div>
                                        </RevealElement>

                                        <RevealElement delay={100}>
                                            <h2 className="text-4xl font-extrabold tracking-tight text-white lg:text-6xl/tight">
                                                What You Will{' '}
                                                <span className="bg-linear-to-r from-[#00A6F4] to-[#7C3AED] bg-clip-text text-transparent">
                                                    Learn
                                                </span>
                                            </h2>
                                        </RevealElement>

                                        <RevealElement delay={200}>
                                            <p className="text-lg leading-relaxed text-slate-400">
                                                A holistic curriculum designed
                                                to turn developers into product
                                                engineers who can lead projects
                                                from concept to deployment.
                                            </p>
                                        </RevealElement>
                                    </div>

                                    {/* Grid */}
                                    <div className="col-span-7 grid gap-6 sm:grid-cols-2">
                                        {/* Card 1 */}
                                        <RevealElement delay={100}>
                                            <div className="group relative h-full rounded-3xl bg-gradient-to-b from-white/10 to-white/5 p-px shadow-xl shadow-black/50 transition-all duration-300 hover:-translate-y-2">
                                                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#00A6F4]/10 to-transparent opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100"></div>
                                                <div className="relative h-full overflow-hidden rounded-3xl bg-[#0A1520] p-8">
                                                    <div className="absolute -top-8 -right-8 h-24 w-24 rounded-full bg-[#00A6F4]/10 blur-2xl transition-all duration-500 group-hover:scale-150 group-hover:bg-[#00A6F4]/20"></div>
                                                    <div className="mb-6 inline-flex rounded-2xl border border-white/10 bg-white/5 p-3 shadow-[0_0_15px_rgba(0,166,244,0.1)] transition-all group-hover:shadow-[0_0_20px_rgba(0,166,244,0.2)]">
                                                        <BrainIcon
                                                            className="text-[#00A6F4]"
                                                            size={28}
                                                        />
                                                    </div>
                                                    <h4 className="mb-3 text-xl font-bold text-white">
                                                        Product Thinking
                                                    </h4>
                                                    <p className="text-sm leading-relaxed text-slate-400">
                                                        Bridge the gap between
                                                        business goals and user
                                                        needs to build what
                                                        actually matters.
                                                    </p>
                                                </div>
                                            </div>
                                        </RevealElement>

                                        {/* Card 2 */}
                                        <RevealElement delay={200}>
                                            <div className="group relative h-full rounded-3xl bg-gradient-to-b from-white/10 to-white/5 p-px shadow-xl shadow-black/50 transition-all duration-300 hover:-translate-y-2 sm:mt-12">
                                                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#7C3AED]/10 to-transparent opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100"></div>
                                                <div className="relative h-full overflow-hidden rounded-3xl bg-[#0A1520] p-8">
                                                    <div className="absolute -top-8 -right-8 h-24 w-24 rounded-full bg-[#7C3AED]/10 blur-2xl transition-all duration-500 group-hover:scale-150 group-hover:bg-[#7C3AED]/20"></div>
                                                    <div className="mb-6 inline-flex rounded-2xl border border-white/10 bg-white/5 p-3 shadow-[0_0_15px_rgba(124,58,237,0.1)] transition-all group-hover:shadow-[0_0_20px_rgba(124,58,237,0.2)]">
                                                        <MdOutlineDesignServices
                                                            className="text-[#7C3AED]"
                                                            size={28}
                                                        />
                                                    </div>
                                                    <h4 className="mb-3 text-xl font-bold text-white">
                                                        UX/UI Mastery
                                                    </h4>
                                                    <p className="text-sm leading-relaxed text-slate-400">
                                                        Design interfaces that
                                                        are intuitive,
                                                        accessible, and
                                                        high-converting with
                                                        pixel-perfect precision.
                                                    </p>
                                                </div>
                                            </div>
                                        </RevealElement>

                                        {/* Card 3 */}
                                        <RevealElement delay={300}>
                                            <div className="group relative h-full rounded-3xl bg-gradient-to-b from-white/10 to-white/5 p-px shadow-xl shadow-black/50 transition-all duration-300 hover:-translate-y-2">
                                                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#00A6F4]/10 to-transparent opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100"></div>
                                                <div className="relative h-full overflow-hidden rounded-3xl bg-[#0A1520] p-8">
                                                    <div className="absolute -top-8 -right-8 h-24 w-24 rounded-full bg-[#00A6F4]/10 blur-2xl transition-all duration-500 group-hover:scale-150 group-hover:bg-[#00A6F4]/20"></div>
                                                    <div className="mb-6 inline-flex rounded-2xl border border-white/10 bg-white/5 p-3 shadow-[0_0_15px_rgba(0,166,244,0.1)] transition-all group-hover:shadow-[0_0_20px_rgba(0,166,244,0.2)]">
                                                        <LuBlocks
                                                            className="-rotate-90 text-[#00A6F4]"
                                                            size={28}
                                                        />
                                                    </div>
                                                    <h4 className="mb-3 text-xl font-bold text-white">
                                                        System Architecture
                                                    </h4>
                                                    <p className="text-sm leading-relaxed text-slate-400">
                                                        Think scalable from day
                                                        one. Build robust
                                                        foundations that can
                                                        handle real-world
                                                        traffic.
                                                    </p>
                                                </div>
                                            </div>
                                        </RevealElement>

                                        {/* Card 4 */}
                                        <RevealElement delay={400}>
                                            <div className="group relative h-full rounded-3xl bg-gradient-to-b from-white/10 to-white/5 p-px shadow-xl shadow-black/50 transition-all duration-300 hover:-translate-y-2 sm:mt-12">
                                                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#7C3AED]/10 to-transparent opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100"></div>
                                                <div className="relative h-full overflow-hidden rounded-3xl bg-[#0A1520] p-8">
                                                    <div className="absolute -top-8 -right-8 h-24 w-24 rounded-full bg-[#7C3AED]/10 blur-2xl transition-all duration-500 group-hover:scale-150 group-hover:bg-[#7C3AED]/20"></div>
                                                    <div className="mb-6 inline-flex rounded-2xl border border-white/10 bg-white/5 p-3 shadow-[0_0_15px_rgba(124,58,237,0.1)] transition-all group-hover:shadow-[0_0_20px_rgba(124,58,237,0.2)]">
                                                        <GoRocket
                                                            className="text-[#7C3AED]"
                                                            size={28}
                                                        />
                                                    </div>
                                                    <h4 className="mb-3 text-xl font-bold text-white">
                                                        Execution
                                                    </h4>
                                                    <p className="text-sm leading-relaxed text-slate-400">
                                                        Master the workflow of
                                                        shipping
                                                        production-ready code
                                                        with confidence and
                                                        speed.
                                                    </p>
                                                </div>
                                            </div>
                                        </RevealElement>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* PROGRAM STRUCTURE */}
                    <section
                        id="program"
                        className="relative overflow-hidden bg-[#081118] py-24 lg:py-32"
                    >
                        {/* Subtle background glow */}
                        <div className="pointer-events-none absolute top-1/2 left-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#00A6F4]/5 blur-[150px]"></div>

                        <div className="relative z-10 flex w-full justify-center">
                            <div className="flex w-full max-w-7xl flex-col px-4">
                                <div className="flex flex-col items-center gap-6">
                                    <RevealElement>
                                        <h2 className="text-center text-4xl font-extrabold tracking-tight text-white lg:text-6xl/tight">
                                            6 Months Structured for{' '}
                                            <span className="bg-gradient-to-r from-[#00A6F4] to-[#7C3AED] bg-clip-text text-transparent">
                                                Excellence
                                            </span>
                                        </h2>
                                    </RevealElement>

                                    <RevealElement delay={100}>
                                        <p className="mx-auto max-w-2xl text-center text-lg leading-relaxed text-slate-400">
                                            A phased roadmap designed to take
                                            you from foundational theory to a
                                            production-ready launch.
                                        </p>
                                    </RevealElement>
                                </div>
                            </div>
                        </div>

                        {/* Desktop Timeline */}
                        <div className="relative z-10 mt-20 hidden lg:block">
                            <div className="flex w-full justify-center">
                                <div className="flex lg:w-6xl">
                                    <div className="mb-8 grid w-full gap-8 lg:grid-cols-3">
                                        <RevealElement delay={100}>
                                            <div className="flex flex-col items-center gap-2 text-center">
                                                <h4 className="text-xl font-bold text-white">
                                                    Phase 1 : Foundation
                                                </h4>
                                                <p className="font-medium tracking-wide text-[#00A6F4]">
                                                    Month 1-2
                                                </p>
                                            </div>
                                        </RevealElement>
                                        <RevealElement delay={200}>
                                            <div className="flex flex-col items-center gap-2 text-center">
                                                <h4 className="text-xl font-bold text-white">
                                                    Phase 2 : Build
                                                </h4>
                                                <p className="font-medium tracking-wide text-[#00A6F4]">
                                                    Month 3-4
                                                </p>
                                            </div>
                                        </RevealElement>
                                        <RevealElement delay={300}>
                                            <div className="flex flex-col items-center gap-2 text-center">
                                                <h4 className="text-xl font-bold text-white">
                                                    Phase 3 : Launch
                                                </h4>
                                                <p className="font-medium tracking-wide text-[#7C3AED]">
                                                    Month 5-6
                                                </p>
                                            </div>
                                        </RevealElement>
                                    </div>
                                </div>
                            </div>

                            <div className="relative">
                                {/* Fade edges */}
                                <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-r from-[#081118] via-transparent to-[#081118]" />
                                <div className="relative z-10 flex w-full justify-center">
                                    <div className="flex lg:w-6xl">
                                        <div className="grid w-full justify-items-center gap-8 lg:grid-cols-3">
                                            {/* Dot 1 */}
                                            <RevealElement delay={150}>
                                                <div className="flex size-10 items-center justify-center rounded-full border border-[#00A6F4]/30 bg-[#081118] shadow-[0_0_15px_rgba(0,166,244,0.3)]">
                                                    <GoDotFill
                                                        size={20}
                                                        className="text-[#00A6F4]"
                                                    />
                                                </div>
                                            </RevealElement>
                                            {/* Dot 2 */}
                                            <RevealElement delay={250}>
                                                <div className="flex size-10 items-center justify-center rounded-full border border-[#00A6F4]/30 bg-[#081118] shadow-[0_0_15px_rgba(0,166,244,0.3)]">
                                                    <GoDotFill
                                                        size={20}
                                                        className="text-[#00A6F4]"
                                                    />
                                                </div>
                                            </RevealElement>
                                            {/* Dot 3 */}
                                            <RevealElement delay={350}>
                                                <div className="flex size-10 items-center justify-center rounded-full border border-[#7C3AED]/50 bg-[#081118] shadow-[0_0_20px_rgba(124,58,237,0.4)]">
                                                    <BsStarFill
                                                        size={18}
                                                        className="text-[#7C3AED]"
                                                    />
                                                </div>
                                            </RevealElement>
                                        </div>
                                    </div>
                                </div>
                                <div className="absolute top-1/2 h-px w-full border-t border-dashed border-white/20"></div>
                            </div>

                            <div className="mt-10 flex w-full justify-center">
                                <div className="flex lg:w-6xl">
                                    <div className="grid w-full justify-items-center gap-8 lg:grid-cols-3">
                                        <RevealElement delay={100}>
                                            <ul className="w-full max-w-[250px] space-y-4 text-slate-300">
                                                <li className="flex gap-3">
                                                    <GoDotFill
                                                        size={14}
                                                        className="mt-1 shrink-0 text-[#00A6F4]"
                                                    />
                                                    <p className="leading-relaxed">
                                                        UX & Design Strategy
                                                    </p>
                                                </li>
                                                <li className="flex gap-3">
                                                    <GoDotFill
                                                        size={14}
                                                        className="mt-1 shrink-0 text-[#00A6F4]"
                                                    />
                                                    <p className="leading-relaxed">
                                                        Product Problem Solving
                                                    </p>
                                                </li>
                                                <li className="flex gap-3">
                                                    <GoDotFill
                                                        size={14}
                                                        className="mt-1 shrink-0 text-[#00A6F4]"
                                                    />
                                                    <p className="leading-relaxed">
                                                        Product Fundamentals
                                                    </p>
                                                </li>
                                            </ul>
                                        </RevealElement>
                                        <RevealElement delay={200}>
                                            <ul className="w-full max-w-[250px] space-y-4 text-slate-300">
                                                <li className="flex gap-3">
                                                    <GoDotFill
                                                        size={14}
                                                        className="mt-1 shrink-0 text-[#00A6F4]"
                                                    />
                                                    <p className="leading-relaxed">
                                                        Team Collaboration
                                                    </p>
                                                </li>
                                                <li className="flex gap-3">
                                                    <GoDotFill
                                                        size={14}
                                                        className="mt-1 shrink-0 text-[#00A6F4]"
                                                    />
                                                    <p className="leading-relaxed">
                                                        Full-Stack
                                                        Implementation
                                                    </p>
                                                </li>
                                                <li className="flex gap-3">
                                                    <GoDotFill
                                                        size={14}
                                                        className="mt-1 shrink-0 text-[#00A6F4]"
                                                    />
                                                    <p className="leading-relaxed">
                                                        Agile Sprints &
                                                        Critiques
                                                    </p>
                                                </li>
                                            </ul>
                                        </RevealElement>
                                        <RevealElement delay={300}>
                                            <ul className="w-full max-w-[250px] space-y-4 text-slate-300">
                                                <li className="flex gap-3">
                                                    <GoDotFill
                                                        size={14}
                                                        className="mt-1 shrink-0 text-[#7C3AED]"
                                                    />
                                                    <p className="leading-relaxed">
                                                        MVP Polish & Stress
                                                        Testing
                                                    </p>
                                                </li>
                                                <li className="flex gap-3">
                                                    <GoDotFill
                                                        size={14}
                                                        className="mt-1 shrink-0 text-[#7C3AED]"
                                                    />
                                                    <p className="leading-relaxed">
                                                        Strategic Pitch
                                                        Preparation
                                                    </p>
                                                </li>
                                                <li className="flex gap-3">
                                                    <BsStarFill
                                                        size={14}
                                                        className="mt-1.5 shrink-0 text-[#7C3AED]"
                                                    />
                                                    <p className="leading-relaxed">
                                                        The Demo Day
                                                    </p>
                                                </li>
                                            </ul>
                                        </RevealElement>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Mobile Timeline */}
                        <div className="relative z-10 mx-auto mt-16 block max-w-lg px-4 lg:hidden">
                            <div className="relative ml-4 space-y-12 border-l border-dashed border-white/20 pl-8">
                                <RevealElement delay={100}>
                                    <div className="relative">
                                        <div className="absolute top-0 -left-[49px] flex size-8 items-center justify-center rounded-full border border-[#00A6F4]/30 bg-[#081118] shadow-[0_0_15px_rgba(0,166,244,0.3)]">
                                            <GoDotFill
                                                size={16}
                                                className="text-[#00A6F4]"
                                            />
                                        </div>
                                        <h4 className="mb-1 text-xl font-bold text-white">
                                            Phase 1 : Foundation
                                        </h4>
                                        <p className="mb-6 font-medium tracking-wide text-[#00A6F4]">
                                            Month 1-2
                                        </p>
                                        <ul className="space-y-4 text-slate-300">
                                            <li className="flex gap-3">
                                                <GoDotFill
                                                    size={14}
                                                    className="mt-1 shrink-0 text-slate-500"
                                                />
                                                <p className="leading-relaxed">
                                                    UX & Design Strategy
                                                </p>
                                            </li>
                                            <li className="flex gap-3">
                                                <GoDotFill
                                                    size={14}
                                                    className="mt-1 shrink-0 text-slate-500"
                                                />
                                                <p className="leading-relaxed">
                                                    Product Problem Solving
                                                </p>
                                            </li>
                                            <li className="flex gap-3">
                                                <GoDotFill
                                                    size={14}
                                                    className="mt-1 shrink-0 text-slate-500"
                                                />
                                                <p className="leading-relaxed">
                                                    Product Fundamentals
                                                </p>
                                            </li>
                                        </ul>
                                    </div>
                                </RevealElement>
                                <RevealElement delay={200}>
                                    <div className="relative">
                                        <div className="absolute top-0 -left-[49px] flex size-8 items-center justify-center rounded-full border border-[#00A6F4]/30 bg-[#081118] shadow-[0_0_15px_rgba(0,166,244,0.3)]">
                                            <GoDotFill
                                                size={16}
                                                className="text-[#00A6F4]"
                                            />
                                        </div>
                                        <h4 className="mb-1 text-xl font-bold text-white">
                                            Phase 2 : Build
                                        </h4>
                                        <p className="mb-6 font-medium tracking-wide text-[#00A6F4]">
                                            Month 3-4
                                        </p>
                                        <ul className="space-y-4 text-slate-300">
                                            <li className="flex gap-3">
                                                <GoDotFill
                                                    size={14}
                                                    className="mt-1 shrink-0 text-slate-500"
                                                />
                                                <p className="leading-relaxed">
                                                    Team Collaboration
                                                </p>
                                            </li>
                                            <li className="flex gap-3">
                                                <GoDotFill
                                                    size={14}
                                                    className="mt-1 shrink-0 text-slate-500"
                                                />
                                                <p className="leading-relaxed">
                                                    Full-Stack Implementation
                                                </p>
                                            </li>
                                            <li className="flex gap-3">
                                                <GoDotFill
                                                    size={14}
                                                    className="mt-1 shrink-0 text-slate-500"
                                                />
                                                <p className="leading-relaxed">
                                                    Agile Sprints & Critiques
                                                </p>
                                            </li>
                                        </ul>
                                    </div>
                                </RevealElement>
                                <RevealElement delay={300}>
                                    <div className="relative">
                                        <div className="absolute top-0 -left-[49px] flex size-8 items-center justify-center rounded-full border border-[#7C3AED]/50 bg-[#081118] shadow-[0_0_20px_rgba(124,58,237,0.4)]">
                                            <BsStarFill
                                                size={14}
                                                className="text-[#7C3AED]"
                                            />
                                        </div>
                                        <h4 className="mb-1 text-xl font-bold text-white">
                                            Phase 3 : Launch
                                        </h4>
                                        <p className="mb-6 font-medium tracking-wide text-[#7C3AED]">
                                            Month 5-6
                                        </p>
                                        <ul className="space-y-4 text-slate-300">
                                            <li className="flex gap-3">
                                                <GoDotFill
                                                    size={14}
                                                    className="mt-1 shrink-0 text-slate-500"
                                                />
                                                <p className="leading-relaxed">
                                                    MVP Polish & Stress Testing
                                                </p>
                                            </li>
                                            <li className="flex gap-3">
                                                <GoDotFill
                                                    size={14}
                                                    className="mt-1 shrink-0 text-slate-500"
                                                />
                                                <p className="leading-relaxed">
                                                    Strategic Pitch Preparation
                                                </p>
                                            </li>
                                            <li className="flex gap-3">
                                                <BsStarFill
                                                    size={14}
                                                    className="mt-1.5 shrink-0 text-[#7C3AED]"
                                                />
                                                <p className="leading-relaxed">
                                                    The Demo Day: Pitching your
                                                    product to industry leaders.
                                                </p>
                                            </li>
                                        </ul>
                                    </div>
                                </RevealElement>
                            </div>
                        </div>
                    </section>
                    {/* TEAM EXPERIENCE */}
                    <section className="relative overflow-hidden bg-[#0C1821] pt-28 pb-12 lg:pb-20">
                        {/* Subtle background glow */}
                        <div className="pointer-events-none absolute top-1/2 left-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#7C3AED]/5 blur-[150px]"></div>

                        <div className="relative z-10 flex w-full justify-center">
                            <div className="flex lg:max-w-6xl">
                                <div className="flex flex-col items-center gap-6 px-4 lg:gap-6">
                                    <RevealElement>
                                        <div className="inline-flex items-center gap-2 rounded-full border border-[#7C3AED]/30 bg-[#7C3AED]/10 px-4 py-1.5 shadow-[0_0_15px_rgba(124,58,237,0.15)]">
                                            <span className="text-xs font-bold tracking-widest text-[#7C3AED] uppercase">
                                                Team experience
                                            </span>
                                        </div>
                                    </RevealElement>
                                    <div className="flex flex-col">
                                        <RevealElement delay={100}>
                                            <h2 className="text-center text-4xl font-extrabold tracking-tight text-white lg:text-5xl/snug">
                                                Work Like a Real{' '}
                                                <span className="bg-linear-to-r from-[#00A6F4] to-[#7C3AED] bg-clip-text text-transparent">
                                                    Product Team
                                                </span>
                                            </h2>
                                        </RevealElement>
                                    </div>
                                    <RevealElement delay={200}>
                                        <p className="mx-auto max-w-2xl text-center text-lg leading-relaxed text-slate-400">
                                            You will be placed in a cross-functional team of 3-5
                                            members to simulate high-stakes startup
                                            environments.
                                        </p>
                                    </RevealElement>
                                </div>
                            </div>
                        </div>

                        <div className="relative z-30 mt-12 flex w-full justify-center lg:mt-20">
                            <div className="mx-4 flex flex-col lg:w-6xl">
                                <RevealElement delay={300}>
                                    <TeamIllustration className="relative z-10 mx-auto -mb-[59px] w-full lg:-mb-2" />
                                </RevealElement>
                                
                                <RevealElement delay={400}>
                                    <div className="group relative flex w-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-linear-to-b from-white/5 to-transparent p-px shadow-2xl backdrop-blur-md lg:items-center">
                                        <div className="absolute inset-0 bg-linear-to-br from-[#00A6F4]/5 via-transparent to-[#7C3AED]/5 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100"></div>
                                        <div className="relative flex w-full flex-col rounded-3xl bg-[#0A1D26]/80 px-6 py-12 lg:items-center">
                                            <h2 className="text-2xl font-bold text-white lg:text-3xl">
                                                What You will Build
                                            </h2>
                                            <div className="mt-10 flex flex-col gap-6 lg:flex-row lg:gap-0 lg:divide-x lg:divide-white/10">
                                                <div className="flex items-center gap-3 px-6 transition-transform hover:-translate-y-1">
                                                    <BsCheckCircle className="size-5 shrink-0 text-[#00A6F4] shadow-[0_0_10px_rgba(0,166,244,0.3)] rounded-full" />
                                                    <p className="font-medium text-slate-300">Logistics platform</p>
                                                </div>
                                                <div className="flex items-center gap-3 px-6 transition-transform hover:-translate-y-1">
                                                    <BsCheckCircle className="size-5 shrink-0 text-[#00A6F4] shadow-[0_0_10px_rgba(0,166,244,0.3)] rounded-full" />
                                                    <p className="font-medium text-slate-300">Fintech solution</p>
                                                </div>
                                                <div className="flex items-center gap-3 px-6 transition-transform hover:-translate-y-1">
                                                    <BsCheckCircle className="size-5 shrink-0 text-[#7C3AED] shadow-[0_0_10px_rgba(124,58,237,0.3)] rounded-full" />
                                                    <p className="font-medium text-slate-300">Health tech system</p>
                                                </div>
                                                <div className="flex items-center gap-3 px-6 transition-transform hover:-translate-y-1">
                                                    <BsCheckCircle className="size-5 shrink-0 text-[#7C3AED] shadow-[0_0_10px_rgba(124,58,237,0.3)] rounded-full" />
                                                    <p className="font-medium text-slate-300">Marketplace</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </RevealElement>
                            </div>
                        </div>
                    </section>
                    {/* DEMO DAY SECTION */}
                    <section className="relative z-10 flex flex-col items-center bg-[#0C1821] lg:py-28">
                        <div className="flex w-full justify-center">
                            <div className="flex lg:max-w-6xl">
                                <div className="w-full cursor-default gap-12 px-4 py-16 lg:grid lg:grid-cols-12">
                                    <div className="col-span-6 mb-6 flex flex-col gap-4 lg:mt-12 lg:mb-0 lg:gap-6">
                                        <div className="flex items-center justify-center">
                                            <span className="flex rounded-md bg-[#1A323F] px-2 py-1 text-xs font-medium text-[#00A6F4] uppercase">
                                                The Grand Finale
                                            </span>
                                        </div>
                                        <RevealElement>
                                            <h2 className="text-center text-3xl font-semibold text-white lg:text-left lg:text-5xl/snug">
                                                The Demo Day
                                            </h2>
                                        </RevealElement>
                                        <RevealElement>
                                            <p className="text-center text-slate-400 lg:text-left">
                                                This isn't just a demo; it is a
                                                high-stakes pitch event where
                                                industry leaders, big firms, and
                                                potential employers are invited
                                                to see what "the best in the
                                                country" looks like.
                                            </p>
                                        </RevealElement>
                                        <p className="text-center text-slate-400 lg:text-left">
                                            Present your product to:
                                        </p>

                                        <div className="flex gap-4">
                                            <div className="flex items-center gap-2">
                                                {/* <DotIcon className="text-green-400" /> */}
                                                <p>Companies</p>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <DotIcon className="text-green-400" />
                                                <p>Recruiters</p>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <DotIcon className="text-green-400" />
                                                <p>Founders</p>
                                            </div>
                                        </div>
                                        <p className="inline-block bg-linear-to-r from-[#00A6F4] to-[#7C3AED] bg-clip-text font-semibold text-transparent">
                                            This is where opportunities begin.
                                        </p>
                                    </div>

                                    {/* Card 1 */}
                                    <div className="col-span-6 rounded-4xl bg-[#00A6F4]/0 bg-linear-to-r to-[#7C3AED]/0 p-px">
                                        <div className="h-full rounded-4xl bg-[#0A1D26] p-8"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <div className="relative bg-[#0C1821] py-4">
                        {/* Fade edges */}
                        <div className="pointer-events-none absolute inset-0 z-10 bg-linear-to-r from-white via-transparent to-white dark:from-[#0C1821] dark:to-[#0C1821]" />
                        <div className="absolute top-1/2 h-px w-full border border-slate-500/20"></div>
                    </div>
                    {/* WHO SHOULD APPLY & SELECTION PROCESS */}
                    <section className="relative z-10 flex flex-col items-center bg-[#0C1821] lg:py-28">
                        <div className="absolute top-1/2 left-1/2 z-0 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#00A6F4] opacity-50 blur-3xl"></div>
                        <div className="flex w-full justify-center">
                            <div className="flex lg:max-w-6xl">
                                <div className="relative z-10 w-full cursor-default gap-12 px-4 py-16 lg:grid lg:grid-cols-12 lg:px-0">
                                    <div className="col-span-12 lg:col-span-6">
                                        <div className="flex h-full flex-col gap-6 rounded-4xl border border-slate-500/20 bg-[#0A1D26]/80 p-8 backdrop-blur-lg lg:p-10">
                                            <div className="space-y-4">
                                                <h2 className="text-3xl font-bold text-white lg:text-4xl">
                                                    Who Should Apply
                                                </h2>
                                                <p className="max-w-md text-slate-400">
                                                    The NJC Fellowship is a
                                                    high-intensity environment
                                                    for builders. We are looking
                                                    for those who live to
                                                    create.
                                                </p>
                                            </div>

                                            <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:gap-4">
                                                {[
                                                    {
                                                        title: 'Passionate Builders',
                                                        desc: "Developers & designers who don't just code, but create products.",
                                                        icon: (
                                                            <GoRocket
                                                                size={20}
                                                            />
                                                        ),
                                                    },
                                                    {
                                                        title: 'Technical Talent',
                                                        desc: 'Top talent in Cameroon looking to compete at a global scale.',
                                                        icon: (
                                                            <BrainIcon
                                                                size={20}
                                                            />
                                                        ),
                                                    },
                                                    {
                                                        title: 'Impact Driven',
                                                        desc: 'Individuals ready to build high-impact products from scratch.',
                                                        icon: (
                                                            <BsStarFill
                                                                size={20}
                                                            />
                                                        ),
                                                    },
                                                    {
                                                        title: 'Full Commitment',
                                                        desc: 'Ready for 6 months of intense, full-time learning and building.',
                                                        icon: (
                                                            <BsCheckCircleFill
                                                                size={20}
                                                            />
                                                        ),
                                                    },
                                                ].map((item, i) => (
                                                    <div
                                                        key={i}
                                                        className="group relative rounded-2xl border border-slate-500/10 bg-slate-900/30 p-5 transition-all hover:border-[#00A6F4]/30 hover:bg-slate-900/50"
                                                    >
                                                        <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-[#00A6F4]/10 text-[#00A6F4] transition-transform group-hover:scale-110">
                                                            {item.icon}
                                                        </div>
                                                        <h4 className="mb-1 font-semibold text-white">
                                                            {item.title}
                                                        </h4>
                                                        <p className="text-xs leading-relaxed text-slate-400">
                                                            {item.desc}
                                                        </p>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-span-12 mt-8 lg:col-span-6 lg:mt-0">
                                        <div className="h-full rounded-4xl border border-slate-500/20 bg-[#0A1D26]/80 p-8 backdrop-blur-lg lg:p-10">
                                            <div className="mb-10 space-y-4">
                                                <h2 className="text-3xl font-bold text-white lg:text-4xl">
                                                    Selection Process
                                                </h2>
                                                <p className="max-w-md text-slate-400">
                                                    A multi-stage process
                                                    designed to find the most
                                                    committed and capable
                                                    builders.
                                                </p>
                                            </div>

                                            <div className="relative space-y-8">
                                                {/* Vertical Line for Desktop Timeline */}
                                                <div className="absolute top-2 left-6 h-[calc(100%-1.5rem)] w-px border-l border-dashed border-slate-500/30 lg:left-7"></div>

                                                {[
                                                    {
                                                        step: '01',
                                                        title: 'Apply Online',
                                                        desc: 'Submit your application and portfolio. Tell us about your craft.',
                                                    },
                                                    {
                                                        step: '02',
                                                        title: 'Review Phase',
                                                        desc: 'Our lead engineers and designers evaluate your technical potential.',
                                                    },
                                                    {
                                                        step: '03',
                                                        title: 'The Deep Dive',
                                                        desc: 'A structured technical interview focusing on your problem-solving.',
                                                    },
                                                    {
                                                        step: '04',
                                                        title: 'Final Selection',
                                                        desc: ' Induction into the 2026 Batch and project matching.',
                                                    },
                                                ].map((item, i) => (
                                                    <div
                                                        key={i}
                                                        className="relative flex items-start gap-6 lg:gap-8"
                                                    >
                                                        <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-slate-500/20 bg-white text-lg font-bold text-[#0A1D26] lg:h-14 lg:w-14">
                                                            {item.step}
                                                        </div>
                                                        <div className="pt-1">
                                                            <h4 className="text-lg font-semibold text-white">
                                                                {item.title}
                                                            </h4>
                                                            <p className="mt-1 text-sm text-slate-400">
                                                                {item.desc}
                                                            </p>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* FAQ */}
                    <section className="relative z-10 bg-[#0C1821] py-28">
                        <div className="flex w-full justify-center">
                            <div className="flex w-full lg:max-w-4xl">
                                <div className="w-full px-4">
                                    <RevealElement>
                                        <div className="mb-16 text-center">
                                            <h2 className="text-3xl font-bold text-white lg:text-5xl">
                                                Common Questions
                                            </h2>
                                            <p className="mt-4 text-slate-400">
                                                Everything you need to know
                                                about the NJC Fellowship.
                                            </p>
                                        </div>
                                    </RevealElement>

                                    <div className="space-y-4">
                                        {faqData.map((faq, index) => (
                                            <RevealElement
                                                key={index}
                                                delay={index * 100}
                                            >
                                                <div
                                                    className={`overflow-hidden rounded-2xl border transition-all duration-300 ${
                                                        openFaq === index
                                                            ? 'border-[#00A6F4]/50 bg-[#0A1D26]'
                                                            : 'border-slate-500/20 bg-[#0A1D26]/40 hover:border-slate-500/40'
                                                    }`}
                                                >
                                                    <button
                                                        onClick={() =>
                                                            setOpenFaq(
                                                                openFaq ===
                                                                    index
                                                                    ? null
                                                                    : index,
                                                            )
                                                        }
                                                        className="flex w-full items-center justify-between p-6 text-left"
                                                    >
                                                        <span className="text-lg font-semibold text-white">
                                                            {faq.question}
                                                        </span>
                                                        <ChevronDown
                                                            className={`text-[#00A6F4] transition-transform duration-300 ${
                                                                openFaq ===
                                                                index
                                                                    ? 'rotate-180'
                                                                    : ''
                                                            }`}
                                                            size={20}
                                                        />
                                                    </button>
                                                    <div
                                                        className={`transition-all duration-300 ease-in-out ${
                                                            openFaq === index
                                                                ? 'max-h-48 opacity-100'
                                                                : 'max-h-0 opacity-0'
                                                        }`}
                                                    >
                                                        <div className="border-t border-slate-500/10 p-6 pt-0 text-slate-400">
                                                            {faq.answer}
                                                        </div>
                                                    </div>
                                                </div>
                                            </RevealElement>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* FINAL CALL TO ACTION */}
                    <section className="relative overflow-hidden bg-[#0C1821] py-28">
                        {/* Background Glow */}
                        <div className="absolute top-1/2 left-1/2 z-0 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#00A6F4] opacity-20 blur-3xl"></div>

                        <div className="relative z-10 flex w-full justify-center">
                            <div className="flex lg:max-w-4xl">
                                <div className="flex flex-col items-center gap-8 rounded-4xl border border-slate-500/20 bg-[#0A1D26]/50 px-6 py-16 text-center backdrop-blur-xl lg:px-20 lg:py-24">
                                    <div className="flex">
                                        <RevealElement>
                                            <span className="flex rounded-md bg-[#1A323F] px-3 py-1 text-xs font-semibold tracking-wider text-[#00A6F4] uppercase">
                                                Induction 2026
                                            </span>
                                        </RevealElement>
                                    </div>

                                    <div className="space-y-4">
                                        <RevealElement>
                                            <h2 className="text-4xl font-bold text-white lg:text-6xl">
                                                Ready to Build the Future?
                                            </h2>
                                        </RevealElement>
                                        <RevealElement>
                                            <p className="mx-auto max-w-2xl text-lg text-slate-400">
                                                Join a selective cohort of
                                                engineers and designers. Master
                                                the craft of shipping
                                                world-class products and launch
                                                your career into the top 1%.
                                            </p>
                                        </RevealElement>
                                    </div>

                                    <RevealElement>
                                        <div className="flex w-full flex-col justify-center gap-4 sm:flex-row">
                                            <Link
                                                href={apply.url()}
                                                className="group flex h-14 items-center justify-center gap-2 rounded-xl bg-[#00A6F4] bg-linear-to-r from-[#00A6F4] to-[#7C3AED] px-8 text-base font-bold text-white transition-all duration-300 hover:brightness-110 active:scale-95"
                                            >
                                                <UserPlus size={20} />
                                                Start Your Application
                                            </Link>
                                            <a
                                                href="#program"
                                                className="group flex h-14 items-center justify-center gap-2 rounded-xl border border-slate-500/30 bg-slate-900/50 px-8 text-base font-semibold text-white transition-all duration-300 hover:border-slate-500 hover:bg-slate-900 active:scale-95"
                                            >
                                                Explore Program
                                                <ArrowRight
                                                    size={20}
                                                    className="transition-transform group-hover:translate-x-1"
                                                />
                                            </a>
                                        </div>
                                    </RevealElement>
                                </div>
                            </div>
                        </div>
                    </section>
                </>
            )}
        </>
    );
};

Landing.layout = (page: React.ReactNode) => <MainLayout children={page} />;
export default Landing;
