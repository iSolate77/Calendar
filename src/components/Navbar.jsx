import { useState, useRef, useEffect } from 'react';

export default function Navbar({ children }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownButtonRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (dropdownOpen && !dropdownButtonRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener('click', handleOutsideClick);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [dropdownOpen]);

  return (
    <div className='bg-green-700 w-screen p-5 text-white flex justify-between mb-3'>
      <div className='font-extrabold text-2xl'><a href='/'>Foundation Year Calendar</a></div>
      <div>
        <button onClick={() => setDropdownOpen(!dropdownOpen)} ref={dropdownButtonRef}>Menu</button>
        {dropdownOpen && (
          <div className='absolute top-14 right-0 bg-gray-100 w-28 shadow-xl rounded-md py-2'>
            <ul className='text-gray-700 text-sm font-semibold'>
              <li className='px-2 py-1 hover:bg-gray-300 cursor-pointer'><a href='login'>login</a></li>
              <span className='px-2 py-1 hover:bg-gray-300 cursor-pointer'>{children}</span>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
