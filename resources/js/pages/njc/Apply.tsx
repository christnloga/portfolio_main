import { Head, useForm, usePage } from '@inertiajs/react';
import React, { useState } from 'react';
import MainLayout from '@/layouts/MainLayout';
import { store as applyStore } from '@/routes/apply';

// 1. Define the shape of our form data
interface ApplicationForm {
    name: string;
    email: string;
    phone: string;
    city: string;
    university: string;
    graduation_year: string;
    portfolio_url: string;
    github_url: string;
    discipline: string;
    stack: string;
    mindset_answer_1: string;
    mindset_answer_2: string;
    mindset_answer_3: string;
}

const Apply = () => {
    const { props } = usePage();
    const locale = (props as any).locale || 'fr';



    const [step, setStep] = useState<number>(1);
    const totalSteps: number = 3;

    // 2. Pass the interface to Inertia's generic useForm hook
    const { data, setData, post, processing, errors } =
        useForm<ApplicationForm>({
            name: '',
            email: '',
            phone: '',
            city: '',
            university: '',
            graduation_year: '',
            portfolio_url: '',
            github_url: '',
            discipline: '',
            stack: '',
            mindset_answer_1: '',
            mindset_answer_2: '',
            mindset_answer_3: '',
        });

    const nextStep = (): void =>
        setStep((prev) => Math.min(prev + 1, totalSteps));
    const prevStep = (): void => setStep((prev) => Math.max(prev - 1, 1));

    // 3. Type the form submission event
    const submit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        post(applyStore.url({ locale }));
    };

    return (
        <div className="min-h-screen px-1 font-sans sm:px-4 lg:px-8">
            <Head title="Apply for NJC 2026" />

            <div className="mx-auto max-w-6xl overflow-hidden pt-20">
                <div className="grid-cols-12 lg:grid">
                    <div className="col-span-4"></div>
                    <div className="col-span-8">
                        {/* Header & Progress Indicator */}
                        <div className="mt-4 rounded-2xl bg-slate-900/50 px-4 py-4 text-white">
                            <h2 className="text-2xl font-bold tracking-tight">
                                Now Just Create (NJC)
                            </h2>
                            <p className="mt-1 text-sm text-slate-400">
                                2026 Batch Application
                            </p>

                            {/* Progress Bar */}
                            <div className="mt-6 flex items-center gap-2">
                                {[1, 2, 3].map((s) => (
                                    <div
                                        key={s}
                                        className={`h-2 flex-1 rounded-full transition-colors duration-300 ${step >= s ? 'bg-[#00A6F4]' : 'bg-slate-700'}`}
                                    />
                                ))}
                            </div>
                            <div className="mt-2 text-xs font-medium tracking-wider text-slate-400 uppercase">
                                Step {step} of {totalSteps}:{' '}
                                {step === 1
                                    ? 'The Foundation'
                                    : step === 2
                                      ? 'The Craft'
                                      : 'The Mindset'}
                            </div>
                        </div>

                        {/* Form Body */}
                        <div className="p-4">
                            <form onSubmit={submit}>
                                {/* STEP 1: The Foundation */}
                                {step === 1 && (
                                    <div className="animate-fade-in-up space-y-6">
                                        <h3 className="text-xl font-semibold text-gray-400">
                                            The Foundation
                                        </h3>
                                        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                                            <div>
                                                <label className="block text-sm font-medium text-gray-300">
                                                    Full Name
                                                </label>
                                                <input
                                                    type="text"
                                                    value={data.name}
                                                    onChange={(e) =>
                                                        setData(
                                                            'name',
                                                            e.target.value,
                                                        )
                                                    }
                                                    required
                                                    className="mt-1 w-full rounded-lg border border-slate-500/30 bg-[#0C1821] py-3 pr-3 pl-4 text-sm text-slate-600 focus:outline-none"
                                                />
                                                {errors.name && (
                                                    <div className="mt-1 text-xs text-red-500">
                                                        {errors.name}
                                                    </div>
                                                )}
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-gray-300">
                                                    Email Address
                                                </label>
                                                <input
                                                    type="email"
                                                    value={data.email}
                                                    onChange={(e) =>
                                                        setData(
                                                            'email',
                                                            e.target.value,
                                                        )
                                                    }
                                                    required
                                                    className="mt-1 w-full rounded-lg border border-slate-500/30 bg-[#0C1821] py-3 pr-3 pl-4 text-sm text-slate-600 focus:outline-none"
                                                />
                                                {errors.email && (
                                                    <div className="mt-1 text-xs text-red-500">
                                                        {errors.email}
                                                    </div>
                                                )}
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-gray-300">
                                                    WhatsApp Number
                                                </label>
                                                <input
                                                    type="tel"
                                                    value={data.phone}
                                                    onChange={(e) =>
                                                        setData(
                                                            'phone',
                                                            e.target.value,
                                                        )
                                                    }
                                                    required
                                                    className="mt-1 w-full rounded-lg border border-slate-500/30 bg-[#0C1821] py-3 pr-3 pl-4 text-sm text-slate-600 focus:outline-none"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-gray-300">
                                                    Current City
                                                </label>
                                                <input
                                                    type="text"
                                                    value={data.city}
                                                    onChange={(e) =>
                                                        setData(
                                                            'city',
                                                            e.target.value,
                                                        )
                                                    }
                                                    required
                                                    className="mt-1 w-full rounded-lg border border-slate-500/30 bg-[#0C1821] py-3 pr-3 pl-4 text-sm text-slate-600 focus:outline-none"
                                                />
                                            </div>
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-300">
                                                University
                                            </label>
                                            <input
                                                type="text"
                                                value={data.university}
                                                onChange={(e) =>
                                                    setData(
                                                        'university',
                                                        e.target.value,
                                                    )
                                                }
                                                required
                                                className="mt-1 w-full rounded-lg border border-slate-500/30 bg-[#0C1821] py-3 pr-3 pl-4 text-sm text-slate-600 focus:outline-none"
                                            />
                                        </div>
                                        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                                            <div>
                                                <label className="block text-sm font-medium text-gray-300">
                                                    Degree
                                                </label>
                                                <input
                                                    type="text"
                                                    value={data.university}
                                                    onChange={(e) =>
                                                        setData(
                                                            'university',
                                                            e.target.value,
                                                        )
                                                    }
                                                    required
                                                    className="mt-1 w-full rounded-lg border border-slate-500/30 bg-[#0C1821] py-3 pr-3 pl-4 text-sm text-slate-600 focus:outline-none"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-gray-300">
                                                    Graduation Year
                                                </label>
                                                <input
                                                    type="number"
                                                    min="2020"
                                                    max="2026"
                                                    value={data.graduation_year}
                                                    onChange={(e) =>
                                                        setData(
                                                            'graduation_year',
                                                            e.target.value,
                                                        )
                                                    }
                                                    required
                                                    className="mt-1 w-full rounded-lg border border-slate-500/30 bg-[#0C1821] py-3 pr-3 pl-4 text-sm text-slate-600 focus:outline-none"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {/* STEP 2: The Craft */}
                                {step === 2 && (
                                    <div className="animate-fade-in-up space-y-6">
                                        <h3 className="text-xl font-semibold text-gray-400">
                                            The Craft
                                        </h3>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-300">
                                                Primary Discipline
                                            </label>
                                            <select
                                                value={data.discipline}
                                                onChange={(e) =>
                                                    setData(
                                                        'discipline',
                                                        e.target.value,
                                                    )
                                                }
                                                required
                                                className="mt-1 w-full rounded-lg border border-slate-500/30 bg-[#0C1821] py-3 pr-3 pl-4 text-sm text-slate-600 focus:outline-none"
                                            >
                                                <option value="" disabled>
                                                    Select your focus...
                                                </option>
                                                <option value="ux_ui">
                                                    UX/UI Design
                                                </option>
                                                <option value="frontend">
                                                    Frontend Development
                                                </option>
                                                <option value="backend">
                                                    Backend Development
                                                </option>
                                                <option value="fullstack">
                                                    Full-Stack Development
                                                </option>
                                            </select>
                                            {errors.discipline && (
                                                <div className="mt-1 text-xs text-red-500">
                                                    {errors.discipline}
                                                </div>
                                            )}
                                        </div>
                                        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                                            <div>
                                                <label className="block text-sm font-medium text-gray-300">
                                                    Portfolio URL (Optional)
                                                </label>
                                                <input
                                                    type="url"
                                                    placeholder="https://"
                                                    value={data.portfolio_url}
                                                    onChange={(e) =>
                                                        setData(
                                                            'portfolio_url',
                                                            e.target.value,
                                                        )
                                                    }
                                                    className="mt-1 w-full rounded-lg border border-slate-500/30 bg-[#0C1821] py-3 pr-3 pl-4 text-sm text-slate-600 focus:outline-none"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-gray-300">
                                                    GitHub URL (Optional)
                                                </label>
                                                <input
                                                    type="url"
                                                    placeholder="https://"
                                                    value={data.github_url}
                                                    onChange={(e) =>
                                                        setData(
                                                            'github_url',
                                                            e.target.value,
                                                        )
                                                    }
                                                    className="mt-1 w-full rounded-lg border border-slate-500/30 bg-[#0C1821] py-3 pr-3 pl-4 text-sm text-slate-600 focus:outline-none"
                                                />
                                            </div>
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-300">
                                                The Stack
                                            </label>
                                            <p className="mb-2 text-xs text-gray-500">
                                                List the tools, frameworks, and
                                                languages you are comfortable
                                                with.
                                            </p>
                                            <textarea
                                                rows={2}
                                                value={data.stack}
                                                onChange={(e) =>
                                                    setData(
                                                        'stack',
                                                        e.target.value,
                                                    )
                                                }
                                                required
                                                className="mt-1 h-28 w-full appearance-none rounded-lg border border-slate-500/30 bg-[#0C1821] py-3 pr-3 pl-12 text-sm text-slate-600 focus:outline-none"
                                                placeholder="e.g., React, Node.js, Figma, Laravel..."
                                            ></textarea>
                                        </div>
                                    </div>
                                )}

                                {/* STEP 3: The Mindset */}
                                {step === 3 && (
                                    <div className="animate-fade-in-up space-y-6">
                                        <h3 className="text-xl font-semibold text-gray-400">
                                            The Mindset
                                        </h3>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-300">
                                                1. Why do you want to be one of
                                                the 25? What makes your approach
                                                to problem-solving unique?
                                            </label>
                                            <textarea
                                                rows={4}
                                                value={data.mindset_answer_2}
                                                onChange={(e) =>
                                                    setData(
                                                        'mindset_answer_2',
                                                        e.target.value,
                                                    )
                                                }
                                                required
                                                className="mt-1 h-28 w-full appearance-none rounded-lg border border-slate-500/30 bg-[#0C1821] py-3 pr-3 pl-12 text-sm text-slate-600 focus:outline-none"
                                            ></textarea>
                                            {errors.mindset_answer_2 && (
                                                <div className="mt-1 text-xs text-red-500">
                                                    {errors.mindset_answer_2}
                                                </div>
                                            )}
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-300">
                                                2. Identify one "broken" digital
                                                experience in a major firm or
                                                service in Cameroon. How would
                                                you architect a solution to fix
                                                it?
                                            </label>
                                            <p className="mb-2 text-xs text-gray-500">
                                                Think like a Solution Architect.
                                                Max 300 words.
                                            </p>
                                            <textarea
                                                rows={4}
                                                value={data.mindset_answer_1}
                                                onChange={(e) =>
                                                    setData(
                                                        'mindset_answer_1',
                                                        e.target.value,
                                                    )
                                                }
                                                required
                                                className="mt-1 h-28 w-full appearance-none rounded-lg border border-slate-500/30 bg-[#0C1821] py-3 pr-3 pl-12 text-sm text-slate-600 focus:outline-none"
                                            ></textarea>
                                            {errors.mindset_answer_1 && (
                                                <div className="mt-1 text-xs text-red-500">
                                                    {errors.mindset_answer_1}
                                                </div>
                                            )}
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-300">
                                                3. Tell us about something you
                                                built or tried to build.
                                            </label>
                                            <textarea
                                                rows={4}
                                                value={data.mindset_answer_3}
                                                onChange={(e) =>
                                                    setData(
                                                        'mindset_answer_3',
                                                        e.target.value,
                                                    )
                                                }
                                                required
                                                className="mt-1 h-28 w-full appearance-none rounded-lg border border-slate-500/30 bg-[#0C1821] py-3 pr-3 pl-12 text-sm text-slate-600 focus:outline-none"
                                            ></textarea>
                                            {errors.mindset_answer_3 && (
                                                <div className="mt-1 text-xs text-red-500">
                                                    {errors.mindset_answer_3}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                )}

                                {/* Navigation Footer */}
                                <div className="mt-10 flex items-center justify-between border-t border-gray-200/20 pt-6">
                                    <button
                                        type="button"
                                        onClick={prevStep}
                                        disabled={step === 1 || processing}
                                        className={`rounded-md px-5 py-2 text-sm font-medium transition-colors ${step === 1 ? 'cursor-not-allowed text-slate-700' : 'text-gray-400 hover:bg-[#1A323F]'}`}
                                    >
                                        Back
                                    </button>

                                    {step < totalSteps ? (
                                        <button
                                            type="button"
                                            onClick={nextStep}
                                            className="rounded-md bg-[#1A323F] px-6 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-slate-800"
                                        >
                                            Continue
                                        </button>
                                    ) : (
                                        <button
                                            type="submit"
                                            disabled={processing}
                                            className="flex items-center gap-2 rounded-md bg-[#00A6F4] px-8 py-2 text-sm font-medium text-black shadow-sm transition-colors hover:opacity-90 disabled:opacity-70"
                                        >
                                            {processing && (
                                                <svg
                                                    className="h-4 w-4 animate-spin text-white"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <circle
                                                        className="opacity-25"
                                                        cx="12"
                                                        cy="12"
                                                        r="10"
                                                        stroke="currentColor"
                                                        strokeWidth="4"
                                                    ></circle>
                                                    <path
                                                        className="opacity-75"
                                                        fill="currentColor"
                                                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                                    ></path>
                                                </svg>
                                            )}
                                            Submit Application
                                        </button>
                                    )}
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

Apply.layout = (page: React.ReactNode) => <MainLayout children={page} />;
export default Apply;
