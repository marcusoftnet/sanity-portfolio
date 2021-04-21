import BlockContent from '@sanity/block-content-to-react';
import imageUrlBuilder from '@sanity/image-url';
import { useEffect, useState } from 'react';
import authorBg from '../author-bg.jpg';
import santityClient from '../sanityClient';

const builder = imageUrlBuilder(santityClient);
const urlFor = (source) => builder.image(source);

const AboutComponent = () => {
  const [author, setAuthor] = useState(null);
  useEffect(() => {
    santityClient
      .fetch(
        `*[_type == "author"]{
          name,
          bio,
          "authorImage": image.asset->url,
        }`
      )
      .then((data) => setAuthor(data[0]))
      .catch(console.error);
  }, []);

  if (!author) return <div>Loading ...</div>;

  return (
    <main className='relative'>
      <img src={authorBg} alt='Lovely sunset' className='absolute w-full' />
      <div className='p-10 lg:pt-48 container mx-auto relative'>
        <section className='bg-green-800 rounded-lg shadow-2xl flex p-20'>
          <img
            className='rounded w-32 h-32 lg:w-64 lg:h-64 mr-8'
            src={urlFor(author.authorImage).url()}
            alt={author.name}
          />
          <div className='text-lg flex flex-col justify-center'>
            <h1 className='cursive text-5xl lg:text-6xl text-green-300 mb-4'>
              Hey there, I'm{' '}
              <span className='text-green-100'>{author.name}</span>
            </h1>
            <div className='prose lg:prose-xl text-white'>
              <BlockContent
                blocks={author.bio}
                projectId='2oxsztrq'
                dataset='production'
              />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default AboutComponent;
