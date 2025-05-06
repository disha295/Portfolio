import clsx from "clsx";

const Button = ({ id, title, leftIcon, containerClass, href }) => {
  const baseClasses = clsx(
    "group relative z-10 w-fit cursor-pointer overflow-hidden rounded-full bg-violet-50 px-5 sm:px-7 py-2.5 sm:py-3 text-black",
    containerClass
  );

  const content = (
    <div className="flex items-center gap-2">
      {leftIcon}
      <span className="relative inline-flex overflow-hidden font-general text-[0.6rem] sm:text-xs uppercase">
        <div className="translate-y-0 skew-y-0 transition duration-500 group-hover:-translate-y-[160%] group-hover:skew-y-12">
          {title}
        </div>
        <div className="absolute translate-y-[164%] skew-y-12 transition duration-500 group-hover:translate-y-0 group-hover:skew-y-0">
          {title}
        </div>
      </span>
    </div>
  );

  return href ? (
    <a
      id={id}
      href={href}
      className={baseClasses}
      target="_blank"
      rel="noopener noreferrer"
    >
      {content}
    </a>
  ) : (
    <button id={id} className={baseClasses}>
      {content}
    </button>
  );
};

export default Button;
