import Link from 'next/link';
import React from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
const path = [
  { uid: 2, name: 'Projects', id: 3, path: 'projects' },
  { uid: 3, name: 'About', id: 2, path: 'about' },
  { uid: 4, name: 'Contact', id: 3, path: 'contact' },
];

function Navbar() {
  const [nav, setNav] = React.useState(false);
  const [color, setColor] = React.useState('bg-transparent');
  const [textColor, setTextColor] = React.useState('text-white');

  const handleClick = () => {
    setNav(!nav);
  };
  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setColor('bg-white');
        setTextColor('black');
      } else {
        setColor('bg-transparent');
        setTextColor('white');
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className={`${color} fixed left-0 top-0 w-full z-10 ease-in duration-300`}
    >
      <div className='max-w-[1240px] m-auto flex justify-between items-center p-4'>
        <Link href='/'>
          <h1
            style={{ color: `${textColor}` }}
            className='font-bold text-2xl hover:text-gray-500'
          >
            &lt;
            <span style={{ color: '#00253E' }}>
              IanMitchard.com&nbsp;
            </span>
            &#47;&gt;
          </h1>
        </Link>
        <ul className='hidden sm:flex'>
          {path.map((value) => {
            return (
              <li
                key={value.uid}
                style={{ color: `${textColor}` }}
                className='p-4 hover:text-gray-500'
              >
                <Link href={value.path}>{value.name}</Link>
              </li>
            );
          })}
        </ul>
        {/* Mobile Button */}
        <div onClick={handleClick} className='block sm:hidden z-10'>
          {nav ? (
            <AiOutlineClose
              size={20}
              style={{ color: `${textColor}` }}
            />
          ) : (
            <AiOutlineMenu
              size={20}
              style={{ color: `${textColor}` }}
            />
          )}
        </div>
        <div
          className={
            nav
              ? 'sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300'
              : 'sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300'
          }
        >
          <ul>
            {path.map((value) => {
              return (
                <li
                  key={value.uid}
                  className='p-4 text-2xl hover:text-gray-500'
                >
                  <Link href={value.path}>{value.name}</Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
