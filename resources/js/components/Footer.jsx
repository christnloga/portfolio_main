import { BsEnvelope, BsTwitterX } from 'react-icons/bs'
import { FaFacebookF } from "react-icons/fa";
import { BiLogoLinkedin, BiPhone } from "react-icons/bi";
import { PiEnvelope } from "react-icons/pi";
// import dayjs from 'dayjs';

const Footer = () => {
    return (
        <footer className="py-6 px-6">
            <p className="text-zinc-400 text-left">© 2026 — Christ Nloga</p>
        </footer>
    );
    return (
        <footer className="relative z-10 py-8 border-t border-t-gray-500/10 lg:py-14">
            <div className="flex w-full">
                <div className="w-full px-4 mx-auto lg:px-0 lg:max-w-6xl">
                    {/* TOP */}
                    <div className="grid grid-cols-1 gap-y-10 lg:gap-y-0 lg:grid-cols-3 gap-x-8 lg:gap-x-10">
                        <div className='space-y-3'>
                            <img className="relative w-20 lg:w-[200px]" src="/images/logo-full.png" alt="Logo MS Expert" />
                            {/* <p className="text-sm text-gray-500 lg:text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.</p> */}
                        </div>
                        <div className='space-y-3'>
                            <h3 className="text-sm font-bold text-gray-600 uppercase">Liens utils</h3>
                            <div className="flex flex-col space-y-3 text-sm text-gray-500 lg:text-sm">
                                <a className="duration-150 hover:text-primary-300" href='/'>Accueil</a>
                                <a className="duration-150 hover:text-primary-300" href='/creation-entreprise'>Création d’entreprise</a>
                                <a className="duration-150 hover:text-primary-300" href='/suivi-comptable'>Suivi comptable</a>
                                <a className="duration-150 hover:text-primary-300" href='/blog'>Blog</a>
                            </div>
                        </div>
                        <div className='space-y-6'>
                            <h3 className="text-sm font-bold text-gray-600 uppercase">Retrouvez-nous sur</h3>
                            <div className="flex gap-3 w-fit">
                                <a href={'#'} className="flex items-center justify-center text-xs font-medium duration-300 rounded-lg size-8 hover:bg-primary-300 hover:text-white group lg:text-base text-primary-300 bg-primary-300/10">
                                    <FaFacebookF size={21} />
                                </a>
                                <a href={'#'} className="flex items-center justify-center text-xs font-medium duration-300 rounded-lg size-8 hover:bg-primary-300 hover:text-white group lg:text-base text-primary-300 bg-primary-300/10">
                                    <BiLogoLinkedin size={24} />
                                </a>
                                <a href={'#'} className="flex items-center justify-center text-xs font-medium duration-300 rounded-lg size-8 hover:bg-primary-300 hover:text-white group lg:text-base text-primary-300 bg-primary-300/10">
                                    <BsTwitterX size={20} />
                                </a>
                            </div>
                            <div className="flex flex-col space-y-1 text-sm text-gray-500 lg:text-sm">
                                <a className="flex items-center gap-2 text-gray-800 duration-150 hover:text-primary-300" href='tel:+32467607116'><BiPhone className='text-primary-300' size={24} /> +32 467 607 116</a>
                                <a className="flex items-center gap-2 text-gray-800 duration-150 hover:text-primary-300" href='mailto:contact@msexpert.be'><PiEnvelope className='text-primary-300' size={24} /> contact@msexpert.be</a>
                            </div>
                        </div>
                    </div>
                    {/* BOTTOM */}
                    <hr className='my-10' />
                    <div className="flex flex-col justify-between space-y-4 lg:items-center lg:flex-row lg:space-y-0">
                        {/* <p className="text-sm text-gray-500">© {dayjs().format('YYYY')} <span className='font-semibold'>msexpert</span>. Tous droits réservés.</p> */}
                        <p className="text-zinc-400 text-left">© 2026 — Christ Nloga</p>
                        <div className="flex flex-col gap-4 text-sm text-gray-500 lg:gap-6 lg:flex-row lg:space-x-10">
                            <a className="duration-150 hover:text-primary-300" href={'#'}>Politique de confidentialité</a>
                            <a className="duration-150 hover:text-primary-300" href={'#'}>Conditions d'utilisation</a>
                            <a className="duration-150 hover:text-primary-300" href={'#'}>Mentions légales</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer