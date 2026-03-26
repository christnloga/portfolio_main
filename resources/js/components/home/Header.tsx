import { useScroll } from 'framer-motion';
import React from 'react';
import RevealElement from '../RevealElement';
import { Button } from '../ui/button';

const Header = () => {
    useScroll();
    return (
        <header className="bg-sky-[#0C242F] relative mt-6 lg:mt-20 lg:mb-10">
            <div className="border-y border-dashed border-sky-200/10">
                <div className="">
                    <div className="flex w-full justify-center border-y border-dashed border-sky-200/10">
                        <div className="flex border-x border-dashed border-sky-200/10 lg:max-w-6xl">
                            <div className="border-r border-dashed border-sky-200/10 bg-sky-300/20 px-4"></div>
                            <div className="grid-cols-2 gap-8 lg:grid">
                                <RevealElement>
                                    <h2 className="text-shadow text-5xl/snug font-bold text-white capitalize">
                                        Senior Full‑Stack Engineer & UX/UI
                                        Designer
                                    </h2>
                                </RevealElement>
                            </div>
                        </div>
                    </div>
                    <div className="flex w-full justify-center border-y border-dashed border-sky-200/10">
                        <div className="flex border-x border-dashed border-sky-200/10 lg:max-w-6xl">
                            <div className="border-r border-dashed border-sky-200/10 bg-sky-300/20 px-4"></div>
                            <div className="grid-cols-2 gap-8 lg:grid">
                                <RevealElement>
                                    <h2 className="text-shadow text-lg text-slate-300">
                                        I design and engineer high‑quality
                                        digital products that scale — combining
                                        strategy, design excellence, and robust
                                        software architecture.
                                    </h2>
                                </RevealElement>
                            </div>
                        </div>
                    </div>
                    <div className="flex h-full w-full justify-center border-y border-dashed border-sky-200/10">
                        <div className="flex border-x border-dashed border-sky-200/10 lg:w-6xl">
                            <div className="border-r border-dashed border-sky-200/10 bg-sky-300/20 px-4"></div>
                            {/* <a
                                href={'#'}
                                className={
                                    'flex h-10 items-center rounded-full bg-sky-500 px-4 font-semibold text-white transition-all duration-150 hover:border hover:bg-white/10 hover:text-white active:brightness-90 dark:text-zinc-700'
                                }
                            >
                                Download CV
                            </a> */}
                            <Button
                                variant={'default'}
                                size={'lg'}
                                className="bg-sky-500"
                            >
                                Download my CV
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
