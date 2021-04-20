import { NavLink } from 'react-router-dom';
import { SocialIcon } from 'react-social-icons';

const NavBarComponent = () => {
  const socialIconStyle = { height: 35, width: 35 };
  const navLinkStyle =
    'inline-flex items-center py-6 px-3 mr-4 text-red-100 hover:text-green-800 tracking-widest';
  return (
    <header className='bg-red-600'>
      <div className='container mx-auto flex justify-between'>
        <nav className='flex'>
          <NavLink
            to='/'
            exact
            activeClassName='text-white'
            className={`${navLinkStyle} text-4xl font-bold cursive`}
          >
            Marcus
          </NavLink>
          <NavLink
            to='/posts'
            activeClassName='text-red-100 bg-red-700'
            className={navLinkStyle}
          >
            Blog posts
          </NavLink>
          <NavLink
            to='/projects'
            activeClassName='text-red-100 bg-red-700'
            className={navLinkStyle}
          >
            Projects
          </NavLink>
          <NavLink
            to='/about'
            activeClassName='text-red-100 bg-red-700'
            className={navLinkStyle}
          >
            About me
          </NavLink>
        </nav>
        <div className='inline-flex py-3 px-3 my-6'>
          <SocialIcon
            url='https://twitter.com/marcusoftnet'
            className='mr-4'
            target='_blank'
            fgColor='#fff'
            style={socialIconStyle}
          />
          <SocialIcon
            url='https://www.linkedin.com/in/marcusoftnet/'
            className='mr-4'
            target='_blank'
            fgColor='#fff'
            style={socialIconStyle}
          />
          <SocialIcon
            url='https://github.com/marcusoftnet'
            className='mr-4'
            target='_blank'
            fgColor='#fff'
            style={socialIconStyle}
          />
        </div>
      </div>
    </header>
  );
};

export default NavBarComponent;
