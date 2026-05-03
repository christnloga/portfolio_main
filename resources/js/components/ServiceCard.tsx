import { motion } from 'motion/react';
import React from 'react';
import { GoDotFill } from 'react-icons/go';

interface ServiceCardProps {
    service: {
        id: number;
        title: string;
        description: string;
        subTitle: string;
        icon: any;
        features: any;
    };
}

const ServiceCard = ({ service }: ServiceCardProps) => {
    return (
        <motion.div className="group relative h-full min-h-[360px] perspective-[1000px]">
            <div className="relative grid h-full w-full rounded-4xl border border-white/5 bg-[#0C1821] shadow-xl transition-all duration-700 transform-3d group-hover:transform-[rotateY(180deg)]">
                
                {/* Front Face */}
                <div className="col-start-1 row-start-1 relative overflow-hidden rounded-4xl bg-linear-to-br from-[#0C1821] to-[#0A1520] p-8 backface-hidden">
                    <div className="absolute -left-10 -top-10 h-32 w-32 rounded-full bg-[#00A6F4]/20 blur-2xl" />
                    
                    <div className="relative flex h-full flex-col items-start gap-6">
                        <span className="mb-4 flex shrink-0 overflow-hidden text-[#00A6F4] drop-shadow-[0_0_15px_rgba(0,166,244,0.5)]">
                            {service.icon}
                        </span>
                        <div className="space-y-4">
                            <h4 className="text-xl font-bold text-white">
                                {service.title}
                            </h4>
                            <p className="text-sm leading-relaxed text-slate-400">
                                {service.description}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Back Face */}
                <div className="col-start-1 row-start-1 relative overflow-hidden rounded-4xl border border-[#00A6F4]/30 bg-linear-to-bl from-[#0C1821] to-[#0A1520] p-8 shadow-[inset_0_0_30px_rgba(0,166,244,0.05)] backface-hidden transform-[rotateY(180deg)]">
                    <div className="absolute -bottom-10 -right-10 h-32 w-32 rounded-full bg-[#7C3AED]/20 blur-2xl" />
                    
                    <div className="relative flex h-full flex-col items-start gap-6">
                        <div className="space-y-4">
                            <h4 className="text-lg font-bold text-white">
                                {service.subTitle}
                            </h4>
                            <ul className="mt-4 space-y-3 text-slate-300">
                                {service.features.map((feature: any, index: number) => (
                                    <li key={index} className="flex gap-3">
                                        <GoDotFill
                                            size={16}
                                            className="mt-1 shrink-0 text-[#00A6F4] drop-shadow-[0_0_8px_rgba(0,166,244,0.8)]"
                                        />
                                        <p className="text-sm font-medium text-slate-300">
                                            {feature}
                                        </p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default ServiceCard;
