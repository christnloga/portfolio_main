import { motion } from 'motion/react';
import React from 'react';
import { GoDotFill } from 'react-icons/go';
import useMeasure from 'react-use-measure';

interface ServiceCardProps {
    service: {
        title: string;
        description: string;
        subTitle: string;
        icon: any;
        features: any;
    };
}

const ServiceCard = ({ service }: ServiceCardProps) => {
    const [ref, { height }] = useMeasure();

    return (
        <motion.div
            className="group relative z-10 flex flex-col overflow-hidden rounded-2xl border border-sky-500/10 bg-sky-800/10 shadow-2xl duration-150 hover:scale-101 hover:shadow-sky-500/40"
            animate={{ height }}
            transition={{ duration: 0.1 }}
        >
            <div
                ref={ref}
                className="flex flex-col items-start p-6 transition-[padding] duration-150 group-hover:p-4"
            >
                <div className="relative z-10">
                    {/* Icon */}
                    <div className="mb-7 flex size-12 shrink-0 overflow-hidden rounded-full border border-sky-400/20 bg-sky-500/10 text-sky-500">
                        {service.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white">
                        {service.title}
                    </h3>
                    <p className="mt-4 text-slate-300">
                        {service.description}{' '}
                        <span className="text-sky-300 duration-300 group-hover:opacity-0">
                            Read more.
                        </span>
                    </p>
                </div>
                {/* Sub-card */}
                <div className="h-0 w-full overflow-hidden group-hover:h-auto">
                    <div className="relative z-10 mt-4 w-full rounded-xl p-4 dark:bg-white/5">
                        <h3 className="text-lg font-bold text-white">
                            {service.subTitle}
                        </h3>
                        <ul className="mt-4 text-slate-300">
                            {service.features.map(
                                (feature: any, index: number) => (
                                    <li
                                        key={index}
                                        className="flex items-center gap-2"
                                    >
                                        <GoDotFill className="mt-0.5 shrink-0 text-sky-500" />
                                        <p>{feature}</p>
                                    </li>
                                ),
                            )}
                        </ul>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default ServiceCard;
