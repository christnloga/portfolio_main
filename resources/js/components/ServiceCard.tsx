import { Minus, Plus } from 'lucide-react';
import { motion } from 'motion/react';
import React from 'react';
import type { Dispatch, SetStateAction } from 'react';
import { GoDotFill } from 'react-icons/go';
import useMeasure from 'react-use-measure';

interface ServiceCardProps {
    service: {
        id: number;
        title: string;
        description: string;
        subTitle: string;
        icon: any;
        features: any;
    };
    activeService: number;
    setActiveService: Dispatch<SetStateAction<number>>;
}

const ServiceCard = ({
    service,
    activeService,
    setActiveService,
}: ServiceCardProps) => {
    const [ref, { height }] = useMeasure();

    return (
        <motion.div className="group relative h-full rounded-4xl bg-[#00A6F4]/0 bg-linear-to-r to-[#7C3AED]/0 p-px duration-150 hover:-rotate-5">
            <div className="rounded-4xl border border-slate-500/20 bg-[#0A1D26] p-8 group-hover:bg-[#00A6F4]/10 lg:h-full">
                <div className="relative flex h-full flex-col items-start gap-6">
                    <span className="mb-4 flex shrink-0 overflow-hidden text-[#00A6F4] transition-all duration-150 group-hover:hidden">
                        {service.icon}
                    </span>
                    {/* Main face */}
                    <div className="space-y-4 transition-all duration-150 group-hover:hidden group-hover:opacity-0">
                        <h4 className="text-lg font-semibold text-white">
                            {service.title}
                        </h4>
                        <p className="text-sm text-slate-400">
                            {service.description}
                        </p>
                    </div>
                    {/* Back face */}
                    <div className="hidden space-y-4 group-hover:block group-hover:opacity-100">
                        <h4 className="text-lg font-semibold text-white">
                            {service.subTitle}
                        </h4>
                        <ul className="mt-4 text-slate-300">
                            {service.features.map(
                                (feature: any, index: number) => (
                                    <li key={index} className="flex gap-2">
                                        <GoDotFill
                                            size={14}
                                            className="mt-[1.7px] shrink-0 text-[#00A6F4]"
                                        />
                                        <p className="text-sm text-slate-400">
                                            {feature}
                                        </p>
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
