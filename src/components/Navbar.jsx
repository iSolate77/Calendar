import { useState, useRef, useEffect } from 'react';

export default function Navbar({ children }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [displayOpen, setDisplayOpen] = useState(false);
  const [selectedElements, setSelectedElements] = useState([]);
  const menuButtonRef = useRef(null);
  const displayButtonRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (menuOpen && !menuButtonRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
      if (displayOpen && !displayButtonRef.current.contains(event.target) && !displayButtonRef.current.nextSibling.contains(event.target)) {
        setDisplayOpen(false);
      }
    };
    document.addEventListener('click', handleOutsideClick);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [menuOpen, displayOpen]);

  const handleElementToggle = (event) => {
    const elementId = event.target.dataset.elementId;
    const isSelected = selectedElements.includes(elementId);

    if (isSelected) {
      setSelectedElements(selectedElements.filter((id) => id !== elementId));
    } else {
      setSelectedElements([...selectedElements, elementId]);
    }
  };

  return (
    <div className='bg-gradient-to-r from-green-700 to-green-500 w-screen p-3 text-white flex justify-between mb-3'>
      <div className='font-extrabold text-2xl'>
        <a href='/'>Foundation Year Calendar</a>
      </div>
      <div>
        <button onClick={() => setDisplayOpen(!displayOpen)} ref={displayButtonRef} className='mr-2'>
          Display
        </button>
        {displayOpen && (
          <div className='absolute top-12 right-24 bg-gray-100 w-46 shadow-xl rounded-md py-2'>
            <ul className='text-gray-700 text-sm font-semibold'>
              <li className='px-2 py-1 hover:bg-gray-300 cursor-pointer'>
                <label className='inline-flex items-center'>
                  <input
                    type='checkbox'
                    className='form-checkbox'
                    data-element-id='1'
                    checked={selectedElements.includes('1')}
                    onChange={handleElementToggle}
                  />
                  <span className='ml-2'>English Syllabus</span>
                </label>
              </li>
              <li className='px-2 py-1 hover:bg-gray-300 cursor-pointer'>
                <label className='inline-flex items-center'>
                  <input
                    type='checkbox'
                    className='form-checkbox'
                    data-element-id='2'
                    checked={selectedElements.includes('2')}
                    onChange={handleElementToggle}
                  />
                  <span className='ml-2'>SS Syllabus</span>
                </label>
              </li>
              <li className='px-2 py-1 hover:bg-gray-300 cursor-pointer'>
                <label className='inline-flex items-center'>
                  <input
                    type='checkbox'
                    className='form-checkbox'
                    data-element-id='3'
                    checked={selectedElements.includes('3')}
                    onChange={handleElementToggle}
                  />
                  <span className='ml-2'>TW Syllabus</span>
                </label>
              </li>
              <li className='px-2 py-1 hover:bg-gray-300 cursor-pointer'>
                <label className='inline-flex items-center'>
                  <input
                    type='checkbox'
                    className='form-checkbox'
                    data-element-id='4'
                    checked={selectedElements.includes('4')}
                    onChange={handleElementToggle}
                  />
                  <span className='ml-2'>MT Syllabus</span>
                </label>
              </li>
              <li className='px-2 py-1 hover:bg-gray-300 cursor-pointer'>
                <label className='inline-flex items-center'>
                  <input
                    type='checkbox'
                    className='form-checkbox'
                    data-element-id='5'
                    checked={selectedElements.includes('5')}
                    onChange={handleElementToggle}
                  />
                  <span className='ml-2'>Timetable</span>
                </label>
              </li>
              <li className='px-2 py-1 hover:bg-gray-300 cursor-pointer'>
                <label className='inline-flex items-center'>
                  <input
                    type='checkbox'
                    className='form-checkbox'
                    data-element-id='6'
                    checked={selectedElements.includes('6')}
                    onChange={handleElementToggle}
                  />
                  <span className='ml-2'>Exams</span>
                </label>
              </li>
            </ul>
          </div>
        )}
        <button onClick={() => setMenuOpen(!menuOpen)} ref={menuButtonRef}>
          Menu
        </button>
        {menuOpen && (
          <div className='absolute top-12 right-0 bg-gray-100 w-28 shadow-xl rounded-md py-2'>
            <ul className='text-gray-700 text-sm font-semibold'>
              <li className='px-2 py-1 hover:bg-gray-300 cursor-pointer'>
                <a href='login'>Login</a>
              </li>
              <span className='px-2 py-1 hover:bg-gray-300 cursor-pointer'>
                {children}
              </span>
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}
