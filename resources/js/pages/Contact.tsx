import { Head, useForm } from '@inertiajs/react';
import { motion } from 'motion/react';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
    BsChatRightText,
    BsEnvelope,
    BsGithub,
    BsLinkedin,
    BsTwitterX,
} from 'react-icons/bs';
import { FiMail, FiMapPin, FiUser } from 'react-icons/fi';
import { LuCalendarCheck, LuSend } from 'react-icons/lu';
import { store as contactStore } from '@/actions/App/Http/Controllers/ContactController';
import RevealElement from '@/components/RevealElement';
import { useGlobal } from '@/contexts/GlobalContext';
import MainLayout from '@/layouts/MainLayout';
import { cn } from '@/lib/utils';

const Contact = () => {
    const { t } = useTranslation();
    const { setNavbarLight } = useGlobal();

    const [showSuccess, setShowSuccess] = useState(false);

    const contactForm = useForm({
        name: '',
        email: '',
        message: '',
    });

    useEffect(() => {
        setNavbarLight(true);
    }, [setNavbarLight]);

    const handleSubmit = (e: React.FormEvent) => {
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

    const contactDetails = [
        {
            icon: <FiMail className="size-6" />,
            label: 'Email',
            value: 'christ.nloga@gmail.com',
            link: 'mailto:christ.nloga@gmail.com',
            color: 'text-[#00A6F4]',
            bg: 'bg-[#00A6F4]/10',
            border: 'border-[#00A6F4]/20',
        },
        {
            icon: <FiMapPin className="size-6" />,
            label: 'Location',
            value: 'Cameroon / Remote',
            link: null,
            color: 'text-[#7C3AED]',
            bg: 'bg-[#7C3AED]/10',
            border: 'border-[#7C3AED]/20',
        },
    ];

    const socialLinks = [
        {
            icon: <BsGithub size={20} />,
            link: 'https://github.com/christnloga',
            label: 'GitHub',
        },
        {
            icon: <BsLinkedin size={20} />,
            link: 'https://www.linkedin.com/in/nloga-joseph-christ-7b1651194',
            label: 'LinkedIn',
        },
        {
            icon: <BsTwitterX size={20} />,
            link: 'https://x.com/_nloga',
            label: 'Twitter',
        },
    ];

    return (
        <>
            <Head title={t('Contact Me')} />

            <div className="min-h-screen bg-[#081118] text-slate-200 selection:bg-[#00A6F4]/30">
                {/* Background Ambient Effects */}
                <div className="pointer-events-none fixed inset-0 overflow-hidden">
                    <div className="absolute -top-[10%] -left-[10%] h-[40%] w-[40%] rounded-full bg-[#00A6F4]/5 blur-[120px]" />
                    <div className="absolute -right-[10%] -bottom-[10%] h-[40%] w-[40%] rounded-full bg-[#7C3AED]/5 blur-[120px]" />
                </div>

                <main className="relative z-10 mx-auto max-w-7xl px-4 pt-32 pb-24 lg:px-8">
                    {/* Header Section */}
                    <div className="mb-16 text-center lg:mb-24">
                        <RevealElement>
                            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#00A6F4]/30 bg-[#00A6F4]/10 px-4 py-1.5 text-xs font-bold tracking-[0.2em] text-[#00A6F4] uppercase">
                                <span className="relative flex h-2 w-2">
                                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#00A6F4] opacity-75"></span>
                                    <span className="relative inline-flex h-2 w-2 rounded-full bg-[#00A6F4]"></span>
                                </span>
                                Get in touch
                            </span>
                        </RevealElement>
                        <RevealElement delay={100}>
                            <h1 className="mt-6 text-5xl font-black tracking-tight text-white lg:text-7xl">
                                Let's build your next <br />
                                <span className="bg-linear-to-r from-[#00A6F4] via-[#7C3AED] to-[#00A6F4] bg-clip-text text-transparent">
                                    big idea
                                </span>
                            </h1>
                        </RevealElement>
                        <RevealElement delay={200}>
                            <p className="mx-auto mt-8 max-w-2xl text-lg text-slate-400">
                                Have a project in mind or just want to say
                                hello? I'm always open to discussing new
                                opportunities and creative collaborations.
                            </p>
                        </RevealElement>
                    </div>

                    <div className="grid gap-8 lg:grid-cols-12 lg:gap-12">
                        {/* Contact Info Sidebar */}
                        <div className="space-y-8 lg:col-span-4">
                            <div className="space-y-6">
                                {contactDetails.map((detail, i) => (
                                    <RevealElement
                                        key={i}
                                        delay={300 + i * 100}
                                    >
                                        <div
                                            className={cn(
                                                'group relative overflow-hidden rounded-3xl border border-white/5 bg-[#0C1821] p-6 shadow-xl transition-all duration-300 hover:border-white/10',
                                                detail.link &&
                                                    'cursor-pointer hover:bg-white/5',
                                            )}
                                        >
                                            <div className="relative z-10 flex items-center gap-5">
                                                <div
                                                    className={cn(
                                                        'flex size-14 shrink-0 items-center justify-center rounded-2xl border',
                                                        detail.bg,
                                                        detail.color,
                                                        detail.border,
                                                    )}
                                                >
                                                    {detail.icon}
                                                </div>
                                                <div>
                                                    <p className="text-xs font-bold tracking-widest text-slate-500 uppercase">
                                                        {detail.label}
                                                    </p>
                                                    {detail.link ? (
                                                        <a
                                                            href={detail.link}
                                                            className="text-lg font-semibold text-white transition-colors group-hover:text-[#00A6F4]"
                                                        >
                                                            {detail.value}
                                                        </a>
                                                    ) : (
                                                        <p className="text-lg font-semibold text-white">
                                                            {detail.value}
                                                        </p>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </RevealElement>
                                ))}
                            </div>

                            <RevealElement delay={500}>
                                <div className="rounded-3xl border border-white/5 bg-linear-to-br from-[#0C1821] to-[#081118] p-8">
                                    <h3 className="mb-6 text-xl font-bold text-white">
                                        Follow my journey
                                    </h3>
                                    <div className="flex gap-4">
                                        {socialLinks.map((social, i) => (
                                            <a
                                                key={i}
                                                href={social.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex size-12 items-center justify-center rounded-xl border border-white/5 bg-white/5 text-slate-400 transition-all hover:border-[#00A6F4]/50 hover:bg-[#00A6F4]/10 hover:text-[#00A6F4] hover:shadow-[0_0_20px_rgba(0,166,244,0.2)]"
                                                aria-label={social.label}
                                            >
                                                {social.icon}
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </RevealElement>

                            <RevealElement delay={600}>
                                <div className="group relative overflow-hidden rounded-3xl border border-[#00A6F4]/20 bg-[#00A6F4]/5 p-8 transition-all hover:border-[#00A6F4]/40">
                                    <div className="absolute -top-12 -right-12 size-32 rounded-full bg-[#00A6F4]/10 blur-2xl" />
                                    <h3 className="relative z-10 mb-4 text-xl font-bold text-white">
                                        Need a faster start?
                                    </h3>
                                    <p className="relative z-10 mb-6 text-sm leading-relaxed text-slate-400">
                                        Book a 15-minute discovery call to
                                        discuss your project requirements and
                                        see how we can work together.
                                    </p>
                                    <a
                                        href="#"
                                        className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-bold text-black transition-all hover:scale-105 active:scale-95"
                                    >
                                        <LuCalendarCheck size={18} />
                                        Schedule Call
                                    </a>
                                </div>
                            </RevealElement>
                        </div>

                        {/* Contact Form */}
                        <div className="lg:col-span-8">
                            <RevealElement delay={400}>
                                <div className="rounded-[2.5rem] border border-white/5 bg-[#0A1520]/80 p-8 shadow-2xl backdrop-blur-xl lg:p-12">
                                    <form
                                        onSubmit={handleSubmit}
                                        className="space-y-6"
                                    >
                                        <div className="grid gap-6 md:grid-cols-2">
                                            {/* Name */}
                                            <div className="space-y-2">
                                                <label className="text-sm font-semibold text-slate-400">
                                                    Full Name
                                                </label>
                                                <div className="relative">
                                                    <FiUser className="absolute top-1/2 left-4 size-5 -translate-y-1/2 text-slate-500 transition-colors group-focus-within:text-[#00A6F4]" />
                                                    <input
                                                        type="text"
                                                        placeholder="John Doe"
                                                        className="w-full rounded-2xl border border-white/10 bg-[#0C1821] py-4 pr-4 pl-12 text-white transition-all focus:border-[#00A6F4]/50 focus:bg-[#00A6F4]/5 focus:ring-4 focus:ring-[#00A6F4]/10 focus:outline-none"
                                                        value={
                                                            contactForm.data
                                                                .name
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
                                                    <p className="text-xs text-red-400">
                                                        {
                                                            contactForm.errors
                                                                .name
                                                        }
                                                    </p>
                                                )}
                                            </div>

                                            {/* Email */}
                                            <div className="space-y-2">
                                                <label className="text-sm font-semibold text-slate-400">
                                                    Email Address
                                                </label>
                                                <div className="relative">
                                                    <BsEnvelope className="absolute top-1/2 left-4 size-5 -translate-y-1/2 text-slate-500 transition-colors group-focus-within:text-[#00A6F4]" />
                                                    <input
                                                        type="email"
                                                        placeholder="hello@example.com"
                                                        className="w-full rounded-2xl border border-white/10 bg-[#0C1821] py-4 pr-4 pl-12 text-white transition-all focus:border-[#00A6F4]/50 focus:bg-[#00A6F4]/5 focus:ring-4 focus:ring-[#00A6F4]/10 focus:outline-none"
                                                        value={
                                                            contactForm.data
                                                                .email
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
                                                    <p className="text-xs text-red-400">
                                                        {
                                                            contactForm.errors
                                                                .email
                                                        }
                                                    </p>
                                                )}
                                            </div>
                                        </div>

                                        {/* Message */}
                                        <div className="space-y-2">
                                            <label className="text-sm font-semibold text-slate-400">
                                                Your Message
                                            </label>
                                            <div className="relative">
                                                <BsChatRightText className="absolute top-5 left-4 size-5 text-slate-500 transition-colors group-focus-within:text-[#00A6F4]" />
                                                <textarea
                                                    rows={6}
                                                    placeholder="Tell me about your project, goals, or just say hi..."
                                                    className="w-full resize-none rounded-2xl border border-white/10 bg-[#0C1821] py-4 pr-4 pl-12 text-white transition-all focus:border-[#00A6F4]/50 focus:bg-[#00A6F4]/5 focus:ring-4 focus:ring-[#00A6F4]/10 focus:outline-none"
                                                    value={
                                                        contactForm.data.message
                                                    }
                                                    onChange={(e) =>
                                                        contactForm.setData(
                                                            'message',
                                                            e.target.value,
                                                        )
                                                    }
                                                />
                                            </div>
                                            {contactForm.errors.message && (
                                                <p className="text-xs text-red-400">
                                                    {contactForm.errors.message}
                                                </p>
                                            )}
                                        </div>

                                        <button
                                            type="submit"
                                            disabled={contactForm.processing}
                                            className="group relative flex h-16 w-full items-center justify-center gap-3 overflow-hidden rounded-2xl bg-linear-to-r from-[#00A6F4] to-[#7C3AED] text-lg font-bold text-white transition-all hover:scale-[1.01] hover:shadow-[0_0_40px_-10px_rgba(0,166,244,0.6)] active:scale-95 disabled:pointer-events-none disabled:opacity-50"
                                        >
                                            <div className="absolute inset-0 bg-white/20 opacity-0 transition-opacity group-hover:opacity-100" />
                                            {contactForm.processing ? (
                                                <span className="flex items-center gap-2">
                                                    <svg
                                                        className="h-5 w-5 animate-spin text-white"
                                                        viewBox="0 0 24 24"
                                                    >
                                                        <circle
                                                            className="opacity-25"
                                                            cx="12"
                                                            cy="12"
                                                            r="10"
                                                            stroke="currentColor"
                                                            strokeWidth="4"
                                                            fill="none"
                                                        />
                                                        <path
                                                            className="opacity-75"
                                                            fill="currentColor"
                                                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                                        />
                                                    </svg>
                                                    Sending...
                                                </span>
                                            ) : (
                                                <>
                                                    <LuSend size={20} />
                                                    Send Message
                                                </>
                                            )}
                                        </button>

                                        {showSuccess && (
                                            <motion.div
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                className="rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-4 text-center text-sm font-medium text-emerald-400"
                                            >
                                                ✓{' '}
                                                {t(
                                                    'Your message has been sent successfully!',
                                                )}
                                            </motion.div>
                                        )}
                                    </form>
                                </div>
                            </RevealElement>
                        </div>
                    </div>
                </main>
            </div>
        </>
    );
};

Contact.layout = (page: React.ReactNode) => <MainLayout children={page} />;
export default Contact;
