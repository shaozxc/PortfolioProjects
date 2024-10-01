import ArrowUpRight from "@/assets/icons/arrow-up-right.svg";
export const ContactSection = () => {
  return (
    <div className='pb-28 -mt-12 '>
      <div className='container'>
        <div className='bg-gradient-to-r from-sky-400 to-indigo-400 text-gray-900 py-8 px-10 rounded-3xl text-center'>
          <h2 className='font-serif text-2xl md:text-3xl '>
            Let's Create Something Amazing Together!
          </h2>
          <p className='text-sm md:text-base mt-2'>
            Are you ready to bring your project to life?
            Contact me so we can further discuss how we can
            make your dreams come true!
          </p>
          <button className='  text-white bg-gray-900 inline-flex items-center px-8 h-12 rounded-2xl gap-2 mt-6'>
            <span className='font-semibold'>
              Contact Me
            </span>
            <ArrowUpRight className='size-4' />
          </button>
        </div>
      </div>
    </div>
  );
};
