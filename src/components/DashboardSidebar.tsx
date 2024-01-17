import React, { useEffect, useRef, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
// import Logo from '../images/logo/image 2.jpg';
// import SidebarLinkGroup from './SidebarLinkGroup';
// import userImg from '../assets/Rectangle 16.png';
import icon from '../assets/icon1.png';

interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (arg: boolean) => void;
}

const Sidebar = ({ sidebarOpen, setSidebarOpen }: SidebarProps) => {
  const location = useLocation();
  const { pathname } = location;

  const trigger = useRef<any>(null);
  const sidebar = useRef<any>(null);

  const storedSidebarExpanded = localStorage.getItem('sidebar-expanded');
  const [sidebarExpanded, setSidebarExpanded] = useState(
    storedSidebarExpanded === null ? false : storedSidebarExpanded === 'true'
  );

  const [page, setPage] = useState(false);

  useEffect(() => {
    const currentPath = window.location.pathname;
    if (currentPath === '/') {
      setPage(false);
    } else if (currentPath !== '/') {
      setPage(true);
    }
  }, []);

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }: MouseEvent) => {
      if (!sidebar.current || !trigger.current) return;
      if (
        !sidebarOpen ||
        sidebar.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setSidebarOpen(false);
    };
    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }: KeyboardEvent) => {
      if (!sidebarOpen || keyCode !== 27) return;
      setSidebarOpen(false);
    };
    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  });

  useEffect(() => {
    localStorage.setItem('sidebar-expanded', sidebarExpanded.toString());
    if (sidebarExpanded) {
      document.querySelector('body')?.classList.add('sidebar-expanded');
    } else {
      document.querySelector('body')?.classList.remove('sidebar-expanded');
    }
  }, [sidebarExpanded]);

  return (
    <aside
      ref={sidebar}
      className={`z-9999 flex   flex-col overflow-y-hidden   p-2 duration-300 ease-linear lg:static lg:translate-x-0 
     
      
      `}
    >
      {/* <!-- SIDEBAR HEADER --> */}

      {/* <!-- SIDEBAR HEADER --> */}

      <div className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear">
        {/* <!-- Sidebar Menu --> */}
        <nav className="">
          {/* <!-- Menu Group --> */}
          <div>
            <ul className="h-[248px] space-y-2 overflow-y-scroll">
              {page && (
                <li>
                  <NavLink
                    to="/mainpage"
                    className={`group relative flex items-center gap-2.5 py-1 font-medium  text-black duration-300 ease-in-out hover:text-white dark:text-white  ${
                      pathname.includes('mainpage') && ' '
                    }`}
                  >
                    <img src={icon} alt="img" className="mr-5" />
                    Dashboard
                  </NavLink>
                </li>
              )}

              <li className="p-2 hover:bg-[#4A4A4A] ">
                <NavLink
                  to="/contact"
                  className={`group relative flex items-center gap-2.5 py-1 font-medium  text-black duration-300 ease-in-out hover:text-white dark:text-white  ${
                    pathname.includes('/contact') && 'bg-[#4A4A4A] text-white'
                  }`}
                >
                  <img src={icon} alt="img" className="mr-5" />
                  Contact
                </NavLink>
              </li>

              <li className="p-2 hover:bg-[#4A4A4A] ">
                <NavLink
                  to="/faq"
                  className={`group relative flex items-center gap-2.5 py-1 font-medium  text-black duration-300 ease-in-out hover:text-white dark:text-white  ${
                    pathname.includes('/faq') && 'bg-[#4A4A4A] text-white'
                  }`}
                >
                  <img src={icon} alt="img" className="mr-5" />
                  FAQs
                </NavLink>
              </li>


              <li className="p-2 hover:bg-[#4A4A4A] ">
                <NavLink
                  to="/leaderboard"
                  className={`group relative flex items-center gap-2.5 py-1 font-medium  text-black duration-300 ease-in-out hover:text-white dark:text-white  ${
                    pathname.includes('/leaderboard') &&
                    'bg-[#4A4A4A] text-white'
                  }`}
                >
                  <img src={icon} alt="img" className="mr-5" />
                  Leaderboard
                </NavLink>
              </li>

              <li className="p-2 hover:bg-[#4A4A4A] ">
                <NavLink
                  to="/profile"
                  className={`group relative flex items-center gap-2.5 py-1 font-medium  text-black duration-300 ease-in-out hover:text-white dark:text-white  ${
                    pathname.includes('profile') && 'bg-[#4A4A4A] text-white '
                  }`}
                >
                  <img src={icon} alt="img" className="mr-5" />
                  My Profile
                </NavLink>
              </li>

              <li className="p-2 hover:bg-[#4A4A4A] ">
                <NavLink
                  to="/myeducation/educationhistory"
                  className={`group relative flex items-center gap-2.5 py-1 font-medium  text-black duration-300 ease-in-out hover:text-white dark:text-white  ${
                    pathname.includes('educationhistory') &&
                    'bg-[#4A4A4A] text-white'
                  }`}
                >
                  <img src={icon} alt="img" className="mr-5" />
                  My Education
                </NavLink>
              </li>

              <li className="p-2 hover:bg-[#4A4A4A] ">
                <NavLink
                  to="/notifications-page"
                  className={`group relative flex items-center gap-2.5 py-1 font-medium  text-black duration-300 ease-in-out hover:text-white dark:text-white  ${
                    pathname.includes('notifications-page') &&
                    'bg-[#4A4A4A] text-white'
                  }`}
                >
                  <img src={icon} alt="img" className="mr-5" />
                  My Notifications
                </NavLink>
              </li>

              <li className="p-2 hover:bg-[#4A4A4A] ">
                <NavLink
                  to="/myeducation/myskills"
                  className={`group relative flex items-center gap-2.5 py-1 font-medium  text-black duration-300 ease-in-out hover:text-white dark:text-white  ${
                    pathname.includes('myskills') && 'bg-[#4A4A4A] text-white'
                  }`}
                >
                  <img src={icon} alt="img" className="mr-5" />
                  My Skills and Certificates
                </NavLink>
              </li>

              <li className="p-2 hover:bg-[#4A4A4A] ">
                <NavLink
                  to="/myeducation/mydocuments"
                  className={`group relative flex items-center gap-2.5 py-1 font-medium  text-black duration-300 ease-in-out hover:text-white dark:text-white  ${
                    pathname.includes('mydocuments') &&
                    'bg-[#4A4A4A] text-white'
                  }`}
                >
                  <img src={icon} alt="img" className="mr-5" />
                  My Documents
                </NavLink>
              </li>

              <li className="p-2 hover:bg-[#4A4A4A] ">
                <NavLink
                  to="/myeducation/myrecords"
                  className={`group relative flex items-center gap-2.5 py-1 font-medium  text-black duration-300 ease-in-out hover:text-white dark:text-white  ${
                    pathname.includes('myrecords') && 'bg-[#4A4A4A] text-white'
                  }`}
                >
                  <img src={icon} alt="img" className="mr-5" />
                  My Records
                </NavLink>
              </li>
              {/* <li>
                <NavLink
                  to="/myeducation/myexams"
                  className={`group relative flex items-center gap-2.5  py-6 px-6 font-medium text-black dark:text-white duration-300 ease-in-out hover:bg-[#4A4A4A] hover:text-white dark:border-b  ${
                    pathname.includes('myexams') && 'bg-[#4A4A4A] text-white'
                  }`}
                >
                  <img src={icon} alt="img" className='mr-5' />
                  My Exams
                </NavLink>
              </li> */}
              <li className="p-2 hover:bg-[#4A4A4A] ">
                <NavLink
                  to="/myeducation/myquizes"
                  className={`group relative flex items-center gap-2.5 py-1 font-medium  text-black duration-300 ease-in-out hover:text-white dark:text-white  ${
                    pathname.includes('myquizes') && 'bg-[#4A4A4A] text-white'
                  }`}
                >
                  <img src={icon} alt="img" className="mr-5" />
                  My Quizes
                </NavLink>
              </li>
              {/* <!-- Menu Item My Education --> */}

              {/* <!-- Menu Item Profile --> */}

              {/* <!-- Menu Item Forms --> */}

              {/* <!-- Menu Item Forms --> */}

              {/* <!-- Menu Item Tables --> */}

              {/* <!-- Menu Item Tables --> */}

              {/* <!-- Menu Item Settings --> */}
              <li className="p-2 hover:bg-[#4A4A4A] ">
                <NavLink
                  to="/registrationtabs"
                  className={`group relative flex items-center gap-2.5 py-1 font-medium  text-black duration-300 ease-in-out hover:text-white dark:text-white  ${
                    pathname.includes('registrationtabs') &&
                    'bg-[#4A4A4A] text-white '
                  }`}
                >
                  <img src={icon} alt="img" className="mr-5" />
                  Program Registration
                </NavLink>
              </li>
              <li className="p-2 hover:bg-[#4A4A4A] ">
                <NavLink
                  to="/samplepaper"
                  className={`group relative flex items-center gap-2.5 py-1 font-medium  text-black duration-300 ease-in-out hover:text-white dark:text-white  ${
                    pathname.includes('/samplepaper') &&
                    'bg-[#4A4A4A] text-white'
                  }`}
                >
                  <img src={icon} alt="img" className="mr-5" />
                  Sample paper
                </NavLink>
              </li>

              
              {/* <!-- Menu Item Settings --> */}
            </ul>
          </div>
        </nav>
        {/* <!-- Sidebar Menu --> */}
      </div>
    </aside>
  );
};

export default Sidebar;
