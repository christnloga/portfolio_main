import { Link, usePage } from '@inertiajs/react';
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
    const { props } = usePage();
    const locale = (props as any).locale || 'fr';

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
                    <header className="relative overflow-x-hidden px-1 pt-1.5">
                        <div className="absolute h-full w-full bg-radial from-[#081118]">
                            <img
                                className="h-full w-full object-cover opacity-90"
                                src="/hero-grid.png"
                                alt=""
                            />
                        </div>
                        <div className="absolute h-full w-full bg-radial from-[#081118] to-[#081118]/90" />
                        <div className="relative z-20 py-28 lg:mt-20">
                            <div className="flex w-full justify-center">
                                <div className="flex lg:max-w-6xl">
                                    <div className="flex flex-col items-center gap-6 px-4 lg:gap-12">
                                        <div className="flex">
                                            <span className="flex rounded-md bg-[#1A323F] px-2 py-1 text-xs font-medium text-[#00A6F4] uppercase">
                                                Applications Open • 25 Seats
                                                Only
                                            </span>
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <RevealElement>
                                                <h1 className="text-center text-4xl font-bold text-white lg:text-6xl/snug">
                                                    Build Real Tech Products{' '}
                                                    <br /> Become Top{' '}
                                                    <span className="inline-block bg-linear-to-r from-[#00A6F4] to-[#7C3AED] bg-clip-text text-transparent">
                                                        1%
                                                    </span>{' '}
                                                    in 6 Months
                                                </h1>
                                            </RevealElement>
                                        </div>
                                        <RevealElement>
                                            <p className="mx-auto text-center text-slate-400 lg:w-2/3">
                                                NJC (Now Just Create) is a
                                                selective 6-month fellowship for
                                                ambitious graduates ready to
                                                master UX, engineering thinking,
                                                and real-world product
                                                development.
                                            </p>
                                        </RevealElement>
                                        <div className="flex w-full flex-col justify-center gap-2 lg:flex-row">
                                            <Link
                                                href={apply.url()}
                                                className={
                                                    'flex h-12 items-center justify-center gap-2 rounded-lg bg-[#00A6F4] bg-linear-to-r to-[#7C3AED] px-4 text-sm font-medium text-white transition-all duration-150 hover:brightness-125 active:brightness-70 dark:text-black'
                                                }
                                            >
                                                <UserPlus size={24} />
                                                Apply Now
                                            </Link>
                                            <a
                                                href={'#program'}
                                                className={
                                                    'flex h-12 items-center justify-center gap-2 rounded-lg bg-[#1A323F] px-4 text-sm font-medium text-black transition-all duration-150 hover:brightness-125 active:brightness-70 dark:text-white'
                                                }
                                            >
                                                See Program Structure
                                            </a>
                                        </div>
                                        <RevealElement>
                                            <p className="inline-block bg-linear-to-r from-[#00A6F4] to-[#7C3AED] bg-clip-text text-center text-transparent">
                                                6 Months • Real Projects • Demo
                                                Day
                                            </p>
                                        </RevealElement>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </header>
                    {/* WHAT IS NFC */}
                    <section className="bg-[#0C1821] py-28">
                        <div className="">
                            <div className="flex w-full justify-center">
                                <div className="flex lg:max-w-6xl">
                                    <div className="flex flex-col items-center gap-4 px-4 lg:gap-12">
                                        {/* <div className="flex">
                                            <span className="flex rounded-md bg-[#1A323F] px-2 py-1 text-xs font-medium text-[#00A6F4] uppercase">
                                                Not a Bootcamp
                                            </span>
                                        </div> */}
                                        <div className="flex flex-col">
                                            <RevealElement>
                                                <h2 className="text-center text-3xl font-semibold text-white lg:text-5xl/snug">
                                                    Not a Bootcamp
                                                </h2>
                                            </RevealElement>
                                            <RevealElement>
                                                <h2 className="text-center text-3xl font-semibold text-white lg:text-5xl/snug">
                                                    A Product Fellowship
                                                </h2>
                                            </RevealElement>
                                        </div>
                                        <RevealElement>
                                            <p className="mx-auto text-center text-slate-400 lg:w-2/3">
                                                Bridging the gap between
                                                academic theory and high-impact
                                                product engineering.
                                            </p>
                                        </RevealElement>

                                        {/* Grid */}
                                        <div className="grid gap-8 lg:grid-cols-3">
                                            {/* Card 1 */}
                                            <div className="rounded-4xl bg-[#00A6F4] bg-linear-to-r to-[#7C3AED] p-px">
                                                <div className="h-full rounded-4xl bg-[#0A1D26] p-8">
                                                    <div className="flex flex-col items-start gap-6">
                                                        <div className="relative mb-4 flex shrink-0 overflow-hidden transition-all duration-150">
                                                            <HiOutlineLightBulb
                                                                className="m-auto text-[#00A6F4]"
                                                                size={40}
                                                            />
                                                            <div className="absolute size-full bg-[#00A6F4] bg-linear-to-r to-[#7C3AED] mix-blend-darken" />
                                                        </div>
                                                        <div className="space-y-4">
                                                            <h4 className="text-xl font-semibold text-white">
                                                                Think Different
                                                            </h4>
                                                            <p className="text-sm opacity-70">
                                                                "Think Beyond
                                                                the Ticket."
                                                                Learn to
                                                                architect
                                                                solutions that
                                                                solve business
                                                                problems, moving
                                                                from 'coder' to
                                                                'product
                                                                engineer.'
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* Card 2 */}
                                            <div className="rounded-4xl bg-[#00A6F4] bg-linear-to-r to-[#7C3AED] p-px">
                                                <div className="h-full rounded-4xl bg-[#0A1D26] p-8">
                                                    <div className="flex flex-col items-start gap-6">
                                                        <div className="relative mb-4 flex shrink-0 overflow-hidden transition-all duration-150">
                                                            <RiApps2AiLine
                                                                className="m-auto text-[#00A6F4]"
                                                                size={40}
                                                            />
                                                            <div className="absolute size-full bg-[#00A6F4] bg-linear-to-r to-[#7C3AED] mix-blend-darken" />
                                                        </div>
                                                        <div className="space-y-4">
                                                            <h4 className="text-xl font-semibold text-white">
                                                                Build Real
                                                                Solutions
                                                            </h4>
                                                            <p className="text-sm opacity-70">
                                                                "Local Problems,
                                                                Global
                                                                Standards." Join
                                                                a team building
                                                                production-ready
                                                                systems that
                                                                tackle
                                                                real-world
                                                                challenges in
                                                                our local
                                                                ecosystem.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* Card 3 */}
                                            <div className="rounded-4xl bg-[#00A6F4] bg-linear-to-r to-[#7C3AED] p-px">
                                                <div className="rounded-4xl bg-[#0A1D26] p-8">
                                                    <div className="flex flex-col items-start gap-6">
                                                        <div className="relative mb-4 flex shrink-0 overflow-hidden transition-all duration-150">
                                                            <GiFallingStar
                                                                className="m-auto -rotate-90 text-[#00A6F4]"
                                                                size={40}
                                                            />
                                                            <div className="absolute size-full bg-[#00A6F4] bg-linear-to-r to-[#7C3AED] mix-blend-darken" />
                                                        </div>
                                                        <div className="space-y-4">
                                                            <h4 className="text-xl font-semibold text-white">
                                                                Become Elite
                                                            </h4>
                                                            <p className="text-sm opacity-70">
                                                                "Join the Top
                                                                1%." Master the
                                                                intersection of
                                                                system logic and
                                                                visual polish to
                                                                stand out as a
                                                                premier talent
                                                                in the national
                                                                tech landscape.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="relative overflow-hidden bg-[#0C1821] py-28">
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
                    <section className="relative z-10 flex flex-col items-center lg:py-28">
                        <div className="flex w-full justify-center">
                            <div className="flex lg:max-w-6xl">
                                <div className="w-full cursor-default gap-12 px-4 py-16 lg:grid lg:grid-cols-12">
                                    <div className="col-span-5 mb-6 flex flex-col gap-4 lg:mt-12 lg:mb-0 lg:gap-6">
                                        {/* <div className="flex">
                                            <span className="flex rounded-md bg-[#1A323F] px-2 py-1 text-xs font-medium text-[#00A6F4] uppercase">
                                                Not a Bootcamp
                                            </span>
                                        </div> */}
                                        <div className="flex flex-col">
                                            <RevealElement>
                                                <h2 className="text-center text-3xl font-semibold text-white lg:text-left lg:text-5xl/snug">
                                                    What You Will Learn
                                                </h2>
                                            </RevealElement>
                                        </div>
                                        <RevealElement>
                                            <p className="text-center text-slate-400 lg:text-left">
                                                A holistic curriculum designed
                                                to turn developers into product
                                                engineers who can lead projects
                                                from concept to deployment.
                                            </p>
                                        </RevealElement>
                                    </div>

                                    {/* Grid */}
                                    <div className="col-span-7 grid gap-2 lg:grid-cols-2">
                                        {/* Card 1 */}
                                        <div className="rounded-4xl bg-[#00A6F4]/0 bg-linear-to-r to-[#7C3AED]/0 p-px">
                                            <div className="h-full rounded-4xl border border-slate-500/20 bg-[#0A1D26] p-8">
                                                <div className="flex items-start gap-6">
                                                    <span className="mb-4 flex shrink-0 overflow-hidden transition-all duration-150">
                                                        <BrainIcon
                                                            className="m-auto text-[#00A6F4]"
                                                            size={40}
                                                        />
                                                    </span>
                                                    <div className="space-y-4">
                                                        <h4 className="text-xl font-semibold text-white">
                                                            Product Thinking
                                                        </h4>
                                                        <p className="text-sm opacity-70">
                                                            Bridge the gap
                                                            between business
                                                            goals and user
                                                            needs.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Card 2 */}
                                        <div className="rounded-4xl bg-[#00A6F4]/0 bg-linear-to-r to-[#7C3AED]/0 p-px">
                                            <div className="h-full rounded-4xl border border-slate-500/20 bg-[#0A1D26] p-8">
                                                <div className="flex items-start gap-6">
                                                    <span className="mb-4 flex shrink-0 overflow-hidden transition-all duration-150">
                                                        <MdOutlineDesignServices
                                                            className="m-auto text-[#00A6F4]"
                                                            size={40}
                                                        />
                                                    </span>
                                                    <div className="space-y-4">
                                                        <h4 className="text-xl font-semibold text-white">
                                                            UX/UI Mastery
                                                        </h4>
                                                        <p className="text-sm opacity-70">
                                                            Design interfaces
                                                            that are intuitive,
                                                            accessible, and
                                                            high-converting.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Card 3 */}
                                        <div className="rounded-4xl bg-[#00A6F4]/0 bg-linear-to-r to-[#7C3AED]/0 p-px">
                                            <div className="h-full rounded-4xl border border-slate-500/20 bg-[#0A1D26] p-8">
                                                <div className="flex items-start gap-6">
                                                    <span className="mb-4 flex shrink-0 overflow-hidden transition-all duration-150">
                                                        <LuBlocks
                                                            className="m-auto -rotate-90 text-[#00A6F4]"
                                                            size={40}
                                                        />
                                                    </span>
                                                    <div className="space-y-4">
                                                        <h4 className="text-xl font-semibold text-white">
                                                            System Architecture
                                                        </h4>
                                                        <p className="text-sm opacity-70">
                                                            Think scalable from
                                                            day one
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Card 4 */}
                                        <div className="rounded-4xl bg-[#00A6F4]/0 bg-linear-to-r to-[#7C3AED]/0 p-px">
                                            <div className="rounded-4xl border border-slate-500/20 bg-[#0A1D26] p-8">
                                                <div className="flex items-start gap-6">
                                                    <span className="mb-4 flex shrink-0 overflow-hidden transition-all duration-150">
                                                        <GoRocket
                                                            className="m-auto text-[#00A6F4]"
                                                            size={40}
                                                        />
                                                    </span>
                                                    <div className="space-y-4">
                                                        <h4 className="text-xl font-semibold text-white">
                                                            Execution
                                                        </h4>
                                                        <p className="text-sm opacity-70">
                                                            Master the workflow
                                                            of shipping
                                                            production-ready
                                                            code with
                                                            confidence.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* PROGRAM STRUCTURE */}
                    <section id="program" className="bg-[#0C1821] py-28">
                        <div className="flex w-full justify-center">
                            <div className="flex lg:max-w-6xl">
                                <div className="flex flex-col items-center gap-6 px-4 lg:gap-6">
                                    {/* <div className="flex">
                                            <span className="flex rounded-md bg-[#1A323F] px-2 py-1 text-xs font-medium text-[#00A6F4] uppercase">
                                                Not a Bootcamp
                                            </span>
                                        </div> */}
                                    <div className="flex flex-col">
                                        <RevealElement>
                                            <h2 className="text-center text-3xl font-semibold text-white lg:text-5xl/snug">
                                                6 Months Structured for
                                                Excellence
                                            </h2>
                                        </RevealElement>
                                    </div>
                                    <RevealElement>
                                        <p className="mx-auto text-center text-slate-400 lg:w-2/3">
                                            A phased roadmap designed to take
                                            you from foundational theory to a
                                            production-ready launch.
                                        </p>
                                    </RevealElement>
                                </div>
                            </div>
                        </div>
                        <div className="mt-20 flex w-full justify-center">
                            <div className="flex lg:w-6xl">
                                {/* Grid */}
                                <div className="mb-6 grid w-full gap-8 lg:grid-cols-3">
                                    {/* Card 1 */}
                                    <div className="flex flex-col items-start gap-6">
                                        <div className="space-y-4">
                                            <div className="">
                                                <h4 className="text-xl font-semibold text-white">
                                                    Phase 1 : Foundation
                                                </h4>
                                                <p className="text-slate-400">
                                                    Month 1-2
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Card 2 */}
                                    <div className="flex flex-col items-start gap-6">
                                        <div className="space-y-4">
                                            <div className="">
                                                <h4 className="text-xl font-semibold text-white">
                                                    Phase 2 : Build
                                                </h4>
                                                <p className="text-slate-400">
                                                    Month 3-4
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Card 3 */}
                                    <div className="flex flex-col items-start gap-6">
                                        <div className="space-y-4">
                                            <div className="">
                                                <h4 className="text-xl font-semibold text-white">
                                                    Phase 3 : Refinement &
                                                    Launch
                                                </h4>
                                                <p className="text-slate-400">
                                                    Month 5-6
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="relative">
                            {/* Fade edges */}
                            <div className="pointer-events-none absolute inset-0 z-10 bg-linear-to-r from-white via-transparent to-white dark:from-[#0C1821] dark:to-[#0C1821]" />
                            <div className="relative z-10 flex w-full justify-center">
                                <div className="flex lg:w-6xl">
                                    {/* Grid */}
                                    <div className="grid w-full gap-8 lg:grid-cols-3">
                                        {/* Dot 1 */}
                                        <div className="flex size-8 items-center justify-center rounded-full border border-slate-300 bg-[#0C1821]">
                                            <GoDotFill
                                                size={16}
                                                className="shrink-0"
                                            />
                                        </div>
                                        {/* Dot 2 */}
                                        <div className="flex size-8 items-center justify-center rounded-full border border-slate-300 bg-[#0C1821]">
                                            <GoDotFill
                                                size={16}
                                                className="shrink-0"
                                            />
                                        </div>
                                        {/* Dot 3 */}
                                        <div className="relative flex size-8 items-center justify-center rounded-full border border-slate-300 bg-[#0C1821]">
                                            <BsStarFill
                                                size={14}
                                                className="shrink-0"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="absolute top-1/2 h-px w-full border border-dashed border-slate-500"></div>
                        </div>
                        <div className="flex w-full justify-center">
                            <div className="flex lg:w-6xl">
                                {/* Grid */}
                                <div className="mt-2 grid gap-8 lg:grid-cols-3">
                                    {/* Card 1 */}
                                    <div className="flex flex-col items-start gap-6">
                                        <div className="space-y-4">
                                            <ul className="mt-4 text-slate-300">
                                                <li className="flex gap-2">
                                                    <GoDotFill
                                                        size={12}
                                                        className="mt-[4px] shrink-0"
                                                    />
                                                    <p className="text-sm">
                                                        UX & Design Strategy
                                                    </p>
                                                </li>
                                                <li className="flex gap-2">
                                                    <GoDotFill
                                                        size={12}
                                                        className="mt-[4px] shrink-0"
                                                    />
                                                    <p className="text-sm">
                                                        Product Problem Solving
                                                    </p>
                                                </li>
                                                <li className="flex gap-2">
                                                    <GoDotFill
                                                        size={12}
                                                        className="mt-[4px] shrink-0"
                                                    />
                                                    <p className="text-sm">
                                                        Product fundamentals
                                                    </p>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    {/* Card 2 */}
                                    <div className="flex flex-col items-start gap-6">
                                        <div className="space-y-4">
                                            <ul className="mt-4 text-slate-300">
                                                <li className="flex gap-2">
                                                    <GoDotFill
                                                        size={12}
                                                        className="mt-[4px] shrink-0"
                                                    />
                                                    <p className="text-sm">
                                                        Team collaboration
                                                    </p>
                                                </li>
                                                <li className="flex gap-2">
                                                    <GoDotFill
                                                        size={12}
                                                        className="mt-[4px] shrink-0"
                                                    />
                                                    <p className="text-sm">
                                                        Full-Stack
                                                        Implementation
                                                    </p>
                                                </li>
                                                <li className="flex gap-2">
                                                    <GoDotFill
                                                        size={12}
                                                        className="mt-[4px] shrink-0"
                                                    />
                                                    <p className="text-sm">
                                                        Agile Sprints &
                                                        Critiques
                                                    </p>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    {/* Card 3 */}
                                    <div className="flex flex-col items-start gap-6">
                                        <div className="space-y-4">
                                            <ul className="mt-4 text-slate-300">
                                                <li className="flex gap-2">
                                                    <GoDotFill
                                                        size={12}
                                                        className="mt-[4px] shrink-0"
                                                    />
                                                    <p className="text-sm">
                                                        MVP Polish & Stress
                                                        Testing
                                                    </p>
                                                </li>
                                                <li className="flex gap-2">
                                                    <GoDotFill
                                                        size={12}
                                                        className="mt-[4px] shrink-0"
                                                    />
                                                    <p className="text-sm">
                                                        Strategic Pitch
                                                        Preparation
                                                    </p>
                                                </li>
                                                <li className="flex gap-2">
                                                    <GoDotFill
                                                        size={12}
                                                        className="mt-[4px] shrink-0"
                                                    />
                                                    <p className="text-sm">
                                                        The Demo Day: Pitching
                                                        your product to a panel
                                                        of industry leaders and
                                                        potential employers.
                                                    </p>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* TEAM EXPERIENCE */}
                    <section className="bg-[#0C1821] pt-28">
                        <div className="flex w-full justify-center">
                            <div className="flex lg:max-w-6xl">
                                <div className="flex flex-col items-center gap-6 px-4 lg:gap-6">
                                    <div className="flex">
                                        <span className="flex rounded-md bg-[#1A323F] px-2 py-1 text-xs font-medium text-[#00A6F4] uppercase">
                                            Team experience
                                        </span>
                                    </div>
                                    <div className="flex flex-col">
                                        <RevealElement>
                                            <h2 className="text-center text-3xl font-semibold text-white lg:text-5xl/snug">
                                                Work Like a Real Product Team
                                            </h2>
                                        </RevealElement>
                                    </div>
                                    <RevealElement>
                                        <p className="mx-auto text-center text-slate-400 lg:w-2/3">
                                            You will be placed in a team of 3-5
                                            members to simulate real startup
                                            environments.
                                        </p>
                                    </RevealElement>
                                </div>
                            </div>
                        </div>
                        <div className="relative z-30 mt-2 flex w-full justify-center lg:mt-20">
                            <div className="mx-4 flex flex-col lg:w-6xl">
                                <TeamIllustration className="relative z-10 mx-auto -mb-[59px] w-full lg:-mb-2" />
                                <div className="flex w-full flex-col rounded-3xl border border-slate-500/20 bg-[#0A1D26] px-4 py-12 lg:items-center">
                                    <RevealElement>
                                        <h2 className="text-xl font-medium text-white lg:text-3xl/snug">
                                            What You will Build
                                        </h2>
                                    </RevealElement>
                                    <div className="mt-8 flex flex-col gap-2 lg:flex-row">
                                        <div className="flex items-center gap-2 px-6">
                                            <BsCheckCircle />
                                            <p>Logistics platform</p>
                                        </div>
                                        <div className="flex items-center gap-2 border-slate-500/20 px-6 lg:border-x">
                                            <BsCheckCircle />
                                            <p>Fintech solution</p>
                                        </div>
                                        <div className="flex items-center gap-2 px-6">
                                            <BsCheckCircle />
                                            <p>Health tech system</p>
                                        </div>
                                        <div className="flex items-center gap-2 border-slate-500/20 px-6 lg:border-l">
                                            <BsCheckCircle />
                                            <p>Marketplace</p>
                                        </div>
                                    </div>
                                </div>
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
