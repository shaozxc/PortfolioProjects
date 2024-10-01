import { twMerge } from "tailwind-merge";
import StarIcon from "../assets/icons/star2.svg";
export const CardTitle = ({
  title,
  description,
  className,
}: {
  title: string;
  description: string;
  className?: string;
}) => {
  return (
    <div
      className={twMerge(
        "flex flex-col mt-2 gap-2 p-6 md:py-8 md:px-10",
        className
      )}
    >
      <div className='inline-flex items-center gap-2'>
        <StarIcon className='size-9 text-cyan-400' />
        <h3 className='font-serif text-3xl'>{title}</h3>
      </div>
      <p className='text-sm md:text-base lg:text-lg max-w-xs text-white/60'>
        {description}
      </p>
    </div>
  );
};
