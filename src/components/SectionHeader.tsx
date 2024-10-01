export const SectionHeader = ({
  gradientTitle,
  mainTitle,
  description,
}: {
  gradientTitle: string;
  mainTitle: string;
  description: string;
}) => {
  return (
    <div>
      <div className='flex justify-center'>
        <p className='uppercase font-semibold tracking-widest bg-gradient-to-r from-cyan-300 to-indigo-400 inline-block bg-clip-text text-transparent'>
          {gradientTitle}
        </p>
      </div>
      <h2 className='font-serif text-3xl md:text-5xl text-center mt-6'>
        {mainTitle}
      </h2>
      <p className='text-center text-white-500/60 mt-4 md:text-lg lg:text-xl max-w-md mx-auto'>
        {description}
      </p>
    </div>
  );
};
