export const TechIcon = ({
  component,
}: {
  component: React.ElementType;
}) => {
  const Component = component;

  return (
    <>
      <Component className='size-12 fill-[url(#tech-icon-gradient)]' />
      <svg className='size-0 '>
        <linearGradient id='tech-icon-gradient'>
          <stop offset='0%' stopColor='rgb(99 102 241)' />
          <stop offset='100%' stopColor='rgb(56 189 248)' />
        </linearGradient>
      </svg>
    </>
  );
};
