import ArrowUpRight from "@/assets/icons/arrow-up-right.svg";
export const Footer = () => {
  const footerLinks = [
    {
      title: "Youtube",
      href: "#",
    },
    {
      title: "Medium",
      href: "#",
    },
    {
      title: "Github",
      href: "#",
    },
    {
      title: "LinkedIn",
      href: "#",
    },
  ];

  return (
    <footer className='relative -z-10 overflow-x-clip'>
      <div className='absolute h-[400px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 bg-cyan-300/30 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)] -z-10'></div>
      <div className='container'>
        <div className='border-t border-white/15 py-6 text-sm flex flex-col md:flex-row md:justify-between gap-8 items-center'>
          <div className='text-white/40 text-xs'>
            &copy; 2024. All Rights Reserved
          </div>
          <nav className='flex flex-col md:flex-row items-end gap-6 '>
            {footerLinks.map((link) => (
              <a
                href=''
                key={link.title}
                className='inline-flex items-center gap-1.5'
              >
                <span>{link.title}</span>
                <ArrowUpRight className='size-4 ' />
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};
