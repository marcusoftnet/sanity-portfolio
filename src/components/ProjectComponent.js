import { useEffect, useState } from 'react';
import santityClient from '../sanityClient';

const ProjectComponent = () => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    santityClient
      .fetch(
        `*[_type=="project"]{
      title,
      date,
      place,
      description,
      projecttype,
      link,
      tags
    }`
      )
      .then(setProjects)
      .catch(console.error);
  }, []);

  return (
    <main className='bg-green-100 min-h-screen p-12'>
      <section className='container mx-auto'>
        <h1 className='text-5xl flex justify-center cursive'>Projects</h1>
        <h2 className='text-lg text-gray-600 flex justify-center mb-12'>
          Welcome to my projects page
        </h2>
        <section className='grid grid-cols-2 gap-8'>
          {projects.map((project, index) => (
            <article className='relative rounded-lg shadow-xl bg-white p-16'>
              <h3 className='text-gray-800 text-3xl font-bold mb-2 hover:text-red-700'>
                <a
                  href={project.link}
                  alt={project.title}
                  target='_blank'
                  rel='noopener norefrer noreferrer'
                >
                  {project.title}
                </a>
              </h3>
              <div className='text-gray-500 text-xs space-x-4'>
                <span>
                  <strong className='font-bold'>Finished on</strong>:{' '}
                  {new Date(project.date).toLocaleDateString()}
                </span>
                <span>
                  <strong className='font-bold'>Company</strong>:{' '}
                  {project.place}
                </span>
                <span>
                  <strong className='font-bold'>Type</strong>:{' '}
                  {project.projecttype}
                </span>
                <p className='my-6 text-lg text-gray-700 leading-relaxed'>
                  {project.description}
                </p>
                <div className='inline-flex justify-center'>
                  <a
                    href={project.link}
                    alt={project.title}
                    target='_blank'
                    rel='noopener norefrer noreferrer'
                    className='text-red-500 font-bold hover:underline hover:text-red-400 text-xl'
                  >
                    View the Project{' '}
                    <span
                      className='text-2xl'
                      role='img'
                      aria-label='right pointer'
                    >
                      👉
                    </span>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </section>
      </section>
    </main>
  );
};

export default ProjectComponent;
