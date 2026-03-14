interface TestimonialCardProps {
  title: string;
  image: string;
  selected: boolean;
  onClick: () => void;
}

const TestimonialCard = ({
  title,
  image,
  selected,
  onClick,
}: TestimonialCardProps) => {
  return (
    <div
      onClick={onClick}
      className={
        "relative flex flex-col shrink-0 overflow-hidden rounded-xl cursor-pointer transition-all duration-500 ease-in-out p-2 bg-zinc-800 " +
        (selected
          ? "lg:w-[380px] w-[320px] opacity-100 scale-100 shadow-2xl shadow-sky-300/10"
          : "lg:w-[380px] w-[280px] opacity-40 scale-90 grayscale hover:opacity-100")
      }
    >
      <div className="lg:h-[280px] h-[260px] w-full bg-zinc-800 overflow-hidden rounded-lg">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover duration-500 hover:scale-110"
        />
      </div>
      {/* <div className="py-4 px-2 bg-zinc-800/80 backdrop-blur-sm border-t border-white/5 flex flex-col gap-2 h-[100px]">
        <h3 className="text-xl font-bold text-white leading-tight">{title}</h3>
        <p className="text-sky-300 text-sm font-medium uppercase tracking-wide">
          {category}
        </p>
      </div> */}
    </div>
  );
};

export default TestimonialCard;
