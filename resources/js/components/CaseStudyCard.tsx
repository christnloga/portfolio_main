interface CaseStudyCardProps {
    title: string;
    image: string;
    category: string;
    slug: string;
    selected: boolean;
    onClick: () => void;
}

const CaseStudyCard = ({
    title,
    image,
    category,
    selected,
    onClick,
}: CaseStudyCardProps) => {
    return (
        <div
            onClick={onClick}
            className={
                'relative flex h-[260px] shrink-0 cursor-pointer flex-col overflow-hidden rounded-4xl border border-slate-500/20 bg-[#0A1D26] p-2 transition-all duration-500 ease-in-out lg:h-[340px] ' +
                (selected
                    ? 'w-[340px] scale-100 opacity-100 shadow-2xl shadow-sky-300/10 lg:w-[540px]'
                    : 'w-[340px] scale-90 opacity-40 grayscale hover:opacity-100 lg:w-[540px]')
            }
        >
            <div className="h-full w-full overflow-hidden rounded-3xl bg-[#0A1D26]">
                <img
                    src={image}
                    alt={title}
                    className="h-full w-full object-cover duration-500 hover:scale-110"
                />
            </div>
            <div
                className={
                    'absolute bottom-0 z-10 flex w-full gap-2 px-2 py-4 ' +
                    (selected
                        ? 'translate-y-0 opacity-100 duration-500'
                        : 'translate-y-10 opacity-0 duration-500')
                }
            >
                <span className="flex rounded-xl border border-slate-500/20 bg-[#0A1D26] px-2 py-1 text-xs font-medium text-[#00A6F4] uppercase">
                    {title}
                </span>
                <span className="flex rounded-xl border border-slate-500/20 bg-[#0A1D26] px-2 py-1 text-xs font-medium text-[#00A6F4] uppercase">
                    {category}
                </span>
            </div>
        </div>
    );
};

export default CaseStudyCard;
