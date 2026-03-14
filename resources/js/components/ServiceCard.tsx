import { motion } from "motion/react";
import React from "react";
import { LuCheck } from "react-icons/lu";
import useMeasure from "react-use-measure";

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
      className="relative z-10 flex flex-col overflow-hidden group bg-zinc-800 border border-sky-300/20 rounded-2xl shadow-2xl duration-150 hover:shadow-sky-300/40 hover:scale-101"
      animate={{ height }}
      transition={{ duration: 0.1 }}
    >
      <div
        ref={ref}
        className="p-6 transition-[padding] duration-150 group-hover:p-4 flex flex-col items-start"
      >
        <div className="relative z-10">
          {/* Icon */}
          <div className="flex shrink-0 mb-7 size-12 rounded-full bg-zinc-700 text-sky-300 border-2 border-sky-300/20 overflow-hidden">
            {service.icon}
          </div>
          <h3 className="text-xl font-bold text-white">{service.title}</h3>
          <p className="text-slate-300 mt-4">
            {service.description}{" "}
            <span className="text-sky-300 group-hover:opacity-0 duration-300">
              Read more.
            </span>
          </p>
        </div>
        {/* Sub-card */}
        <div className="group-hover:h-auto h-0 w-full overflow-hidden">
          <div className="relative z-10 w-full rounded-xl dark:bg-white/5 p-4 mt-4">
            <h3 className="text-lg font-bold text-white">{service.subTitle}</h3>
            <ul className="text-slate-300 mt-4">
              {service.features.map((feature: any, index: number) => (
                <li key={index} className="flex items-center gap-2">
                  <LuCheck className="size-4 shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
