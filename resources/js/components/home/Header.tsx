import { motion, useScroll, useTransform } from 'motion/react';
import React from 'react';
import { AiOutlinePhone } from 'react-icons/ai';
import { BsGithub, BsTwitterX } from 'react-icons/bs';
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import RevealElement from '../RevealElement';

const Header = () => {
    const { scrollY } = useScroll();
    const scale = useTransform(scrollY, [0, 500], [1, 1.25]);

    return (
        <header className="relative px-1 pt-1 lg:pt-1.5">
            <div className="relative mb-5 overflow-hidden rounded-3xl border border-white/5 bg-[#0A1520]/80 pt-[88px] shadow-2xl backdrop-blur-xl lg:mb-10">
                {/* Ambient Glows */}
                <div className="pointer-events-none absolute -top-40 -left-40 h-96 w-96 rounded-full bg-[#00A6F4]/20 blur-[100px]" />
                <div className="pointer-events-none absolute top-40 right-10 h-[500px] w-[500px] rounded-full bg-[#7C3AED]/10 blur-[120px]" />

                {/* Subtle Grid Pattern */}
                <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]" />

                <div className="relative z-10 flex w-full justify-center">
                    <div className="flex lg:w-6xl">
                        <div className="grid-cols-12 px-4 lg:grid">
                            {/* Right col */}
                            <div className="col-span-6 flex flex-col gap-6 py-10 text-center lg:py-28 lg:text-left">
                                <div className="relative mx-auto size-[280px] overflow-hidden rounded-3xl border border-white/10 bg-sky-950 lg:hidden">
                                    <motion.img
                                        style={{ scale }}
                                        className="absolute top-8 scale-115 saturate-0"
                                        src="/my-photo-v2.png"
                                        alt=""
                                    />
                                    {/* <div className="absolute top-0 h-1/2 w-full bg-linear-to-b from-[#00A6F4]/40 to-transparent"></div> */}
                                    <div className="absolute bottom-0 h-1/2 w-full bg-linear-to-t from-[#081118] to-transparent"></div>
                                </div>

                                <div className="flex w-full justify-center lg:justify-start">
                                    <span className="flex items-center gap-2 rounded-full border border-[#00A6F4]/30 bg-[#00A6F4]/10 px-3 py-1 text-xs font-semibold tracking-wide text-[#00A6F4] uppercase shadow-[0_0_15px_-3px_rgba(0,166,244,0.3)]">
                                        <span className="relative flex h-2 w-2">
                                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#00A6F4] opacity-75"></span>
                                            <span className="relative inline-flex h-2 w-2 rounded-full bg-[#00A6F4]"></span>
                                        </span>
                                        Welcome to my domain
                                    </span>
                                </div>

                                <div className="flex flex-col gap-2">
                                    <RevealElement>
                                        <h1 className="text-5xl font-bold text-white lg:text-7xl/tight">
                                            I'm{' '}
                                            <span className="bg-linear-to-r from-[#00A6F4] to-[#7C3AED] bg-clip-text text-transparent">
                                                nloga
                                            </span>
                                        </h1>
                                        <h2 className="text-5xl font-bold text-white capitalize lg:text-7xl/tight">
                                            Joseph Christ
                                        </h2>
                                    </RevealElement>
                                    <RevealElement>
                                        <div className="mt-2">
                                            <h4 className="inline-block text-2xl font-semibold text-slate-300 lg:text-[28px]/snug">
                                                Solution Architect & UX Engineer
                                            </h4>
                                        </div>
                                    </RevealElement>
                                </div>
                                <RevealElement>
                                    <h4 className="max-w-lg text-lg text-slate-400">
                                        I partner with startups, growing
                                        businesses, and international teams to
                                        transform ideas into reliable,
                                        market-ready digital products.
                                    </h4>
                                </RevealElement>
                                <div className="mt-4 flex w-full justify-center gap-4 lg:justify-start">
                                    <a
                                        href={'#'}
                                        className="group relative flex h-14 items-center gap-2 overflow-hidden rounded-xl bg-linear-to-r from-[#00A6F4] to-[#7C3AED] px-8 font-semibold text-white transition-all hover:scale-105 hover:shadow-[0_0_40px_-10px_rgba(0,166,244,0.8)]"
                                    >
                                        <div className="absolute inset-0 bg-white/20 opacity-0 transition-opacity group-hover:opacity-100" />
                                        <AiOutlinePhone
                                            className="relative z-10 rotate-90"
                                            size={22}
                                        />
                                        <span className="relative z-10">
                                            Let's talk
                                        </span>
                                    </a>
                                    <a
                                        href={'#'}
                                        className="group flex h-14 items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-8 font-semibold text-white backdrop-blur-md transition-all hover:border-white/20 hover:bg-white/10 hover:text-[#00A6F4]"
                                    >
                                        See My Work
                                    </a>
                                </div>
                            </div>

                            {/* Left Col (photo) */}
                            <div className="relative col-span-6 hidden lg:block">
                                <div className="absolute left-1/2 h-full -translate-x-1/2 overflow-y-clip lg:-bottom-28">
                                    <div className="relative -bottom-[950px] flex items-center justify-center">
                                        <div className="absolute size-[calc(100%+500px*2.5)] rounded-full bg-[#00A6F4]/5 blur-[80px]"></div>
                                        <div className="absolute size-[calc(100%+440px*2.5)] rounded-full bg-[#0A1520] shadow-[inset_0_0_100px_rgba(0,166,244,0.2)]"></div>
                                    </div>
                                </div>
                                <div className="relative z-10 mt-10 flex flex-col lg:absolute lg:bottom-0 lg:mt-0">
                                    <motion.div
                                        style={{ scale }}
                                        className="relative w-full overflow-hidden rounded-3xl"
                                    >
                                        <img
                                            className="object-cover object-bottom saturate-0 transition-all duration-700 hover:saturate-100"
                                            src="/my-photo-v2.png"
                                            alt="Joseph Christ"
                                        />
                                    </motion.div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex w-full justify-center">
                <div className="flex lg:w-6xl">
                    <RevealElement>
                        <div className="flex items-center gap-4">
                            <a
                                target="_blank"
                                href="https://github.com/christnloga"
                                className="mb-11 flex size-10 shrink-0 overflow-hidden rounded-md transition-all duration-150 hover:bg-sky-300/5 hover:brightness-110 active:brightness-125"
                            >
                                <BsGithub
                                    className="m-auto text-[#00A6F4]"
                                    size={20}
                                />
                            </a>
                            <a
                                target="_blank"
                                href="https://web.facebook.com/christ.nloga/?_rdc=1&_rdr#"
                                className="mb-11 flex size-10 shrink-0 overflow-hidden rounded-md transition-all duration-150 hover:bg-[#00A6F4]/5 hover:brightness-110 active:brightness-125"
                            >
                                <FaFacebookF
                                    className="m-auto text-[#00A6F4]"
                                    size={20}
                                />
                            </a>
                            <a
                                target="_blank"
                                href="https://www.linkedin.com/in/nloga-joseph-christ-7b1651194?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                                className="mb-11 flex size-10 shrink-0 overflow-hidden rounded-md transition-all duration-150 hover:bg-[#00A6F4]/5 hover:brightness-110 active:brightness-125"
                            >
                                <FaLinkedinIn
                                    className="m-auto text-[#00A6F4]"
                                    size={20}
                                />
                            </a>
                            <a
                                target="_blank"
                                href="mailto:christ.nloga@gmail.com"
                                className="mb-11 flex size-10 shrink-0 overflow-hidden rounded-md transition-all duration-150 hover:bg-[#00A6F4]/5 hover:brightness-110 active:brightness-125"
                            >
                                <BsTwitterX
                                    className="m-auto text-[#00A6F4]"
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
        </header>
    );
};

export default Header;
