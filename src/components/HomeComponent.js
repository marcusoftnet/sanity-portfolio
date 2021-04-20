import image from '../cover.jpg';

const HomeComponent = () => {
  return (
    <main>
      <img
        src={image}
        alt='A sunset'
        className='absolute object-cover w-full h-full'
      />
      <section className='relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8'>
        <h1 className='text-6xl text-green-600 font-bold cursive leading-none lg:leading-snug home-name'>
          Hi, I'm Marcus!
        </h1>
      </section>
    </main>
  );
};

export default HomeComponent;
