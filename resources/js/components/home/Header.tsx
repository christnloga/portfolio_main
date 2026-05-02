import { motion, useScroll, useTransform } from 'framer-motion';
import React from 'react';
import { AiOutlinePhone } from 'react-icons/ai';
import { BsGithub, BsTwitterX } from 'react-icons/bs';
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import RevealElement from '../RevealElement';

const Header = () => {
    const { scrollY } = useScroll();
    const scale = useTransform(scrollY, [0, 500], [1, 1.25]);

    return (
        <header className="relative px-1 pt-[88px] lg:pt-1.5">
            <div className="mb-5 overflow-hidden rounded-sm bg-[#0C242F] lg:mt-20 lg:mb-10">
                <div className="flex w-full justify-center">
                    <div className="flex lg:max-w-6xl">
                        <div className="grid-cols-12 px-4 lg:grid">
                            {/* Right col */}
                            <div className="col-span-6 flex flex-col gap-6 py-10 text-center lg:py-28 lg:text-left">
                                <div className="relative mx-auto size-[280px] overflow-hidden rounded-3xl lg:hidden">
                                    <motion.img
                                        style={{ scale }}
                                        className="contain object-cover object-bottom"
                                        src="/my-photo-2.jpg"
                                        alt=""
                                    />
                                    <div className="to-ransparent absolute top-0 h-1/2 w-full bg-linear-to-b from-[#00A6F4]/60"></div>
                                    <div className="to-ransparent absolute bottom-0 h-1/2 w-full bg-linear-to-t from-black/90"></div>
                                </div>
                                <div className="flex w-full justify-center lg:justify-start">
                                    <span className="flex rounded-md bg-[#1A323F] px-2 py-1 text-xs font-medium text-[#00A6F4] uppercase">
                                        Welcome to my domain
                                    </span>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <RevealElement>
                                        <h1 className="text-5xl font-bold text-white lg:text-6xl/snug">
                                            I'm{' '}
                                            <span className="text-[#00A6F4]">
                                                nloga
                                            </span>
                                        </h1>
                                        <h2 className="text-5xl font-bold text-white capitalize lg:text-6xl/snug">
                                            Joseph Christ
                                        </h2>
                                    </RevealElement>
                                    <RevealElement>
                                        <div className="relative">
                                            {/* <div className="absolute h-full w-full bg-[#00A6F4] bg-linear-to-r to-[#7C3AED] mask-l-from-7"></div> */}
                                            <h4 className="inline-block bg-linear-to-r from-[#00A6F4] to-[#7C3AED] bg-clip-text text-3xl font-bold text-transparent lg:text-[32px]/snug">
                                                Solution Architect & UX Engineer
                                            </h4>
                                        </div>
                                    </RevealElement>
                                </div>
                                <RevealElement>
                                    <h4 className="text-slate-400">
                                        I partner with startups, growing
                                        businesses, and international teams to
                                        transform ideas into reliable,
                                        market-ready digital products.
                                    </h4>
                                </RevealElement>
                                <div className="flex w-full justify-center gap-2 lg:justify-start">
                                    <a
                                        href={'#'}
                                        className={
                                            'flex h-12 items-center gap-2 rounded-lg bg-[#00A6F4] bg-linear-to-r to-[#7C3AED] px-4 font-semibold text-white capitalize transition-all duration-150 hover:brightness-125 active:brightness-70 dark:text-black'
                                        }
                                    >
                                        <AiOutlinePhone
                                            className="rotate-90"
                                            size={24}
                                        />
                                        Let's talk
                                    </a>
                                    <a
                                        href={'#'}
                                        className={
                                            'flex h-12 items-center gap-2 rounded-lg bg-[#1A323F] px-4 font-semibold text-[#00A6F4] capitalize transition-all duration-150 hover:brightness-125 active:brightness-70'
                                        }
                                    >
                                        See My Work
                                    </a>
                                </div>
                            </div>
                            {/* Left Col (photo) */}
                            <div className="relative col-span-6 hidden lg:block">
                                <div className="absolute left-1/2 h-full -translate-x-1/2 overflow-y-clip lg:-bottom-28">
                                    <div className="relative -bottom-[950px] flex items-center justify-center">
                                        <div className="absolute size-[calc(100%+500px*2.5)] rounded-full bg-black/20"></div>
                                        <div className="absolute size-[calc(100%+440px*2.5)] rounded-full bg-[#0C242F]"></div>
                                    </div>
                                </div>
                                <div className="relative z-10 mt-10 flex flex-col lg:absolute lg:bottom-0 lg:mt-0">
                                    {/* Photo 0 */}
                                    <motion.div
                                        style={{ scale }}
                                        className="relative w-full overflow-hidden rounded-3xl"
                                    >
                                        <img
                                            className="object-cover object-bottom saturate-0"
                                            src="/my-photo-v2.png"
                                            alt=""
                                        />
                                        <div className="to-ransparent absolute top-0 h-full w-full bg-linear-to-r from-[#0C242F] opacity-20 mix-blend-overlay"></div>
                                        {/* <div className="to-ransparent absolute bottom-0 h-1/2 w-full bg-linear-to-t from-black/90 mix-blend-screen"></div> */}
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
