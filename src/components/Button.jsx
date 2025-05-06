import clsx from "clsx";

const Button = ({ id, title, leftIcon, containerClass }) => {
  return (
    <button
      id={id}
      className={clsx(
        "group relative z-10 w-fit cursor-pointer overflow-hidden rounded-full bg-violet-50 px-4 sm:px-6 py-2 sm:py-2.5 text-black",
        containerClass
      )}
    >
      <div className="flex items-center gap-1.5 sm:gap-2">
        {leftIcon}
        <span className="relative inline-flex overflow-hidden font-general text-[0.55rem] sm:text-[0.65rem] md:text-xs uppercase">
          <div className="translate-y-0 skew-y-0 transition duration-500 group-hover:translate-y-[-160%] group-hover:skew-y-12">
            {title}
          </div>
          <div className="absolute translate-y-[164%] skew-y-12 transition duration-500 group-hover:translate-y-0 group-hover:skew-y-0">
            {title}
          </div>
        </span>
      </div>
    </button>
  );
};

export default Button;
