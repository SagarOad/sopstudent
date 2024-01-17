import { NavLink, useLocation } from 'react-router-dom';
import { BsFillArrowRightSquareFill } from 'react-icons/bs';
import { AiFillHome } from 'react-icons/ai';

interface BreadcrumbProps {
  pageName: string;
}
const Breadcrumb = ({ pageName }: BreadcrumbProps) => {
  const location = useLocation();
  const { pathname } = location;

  return (
    <div className="sticky top-0 z-99 hidden w-full flex-col gap-3 border bg-[#292A33] p-4 px-3 drop-shadow-1 dark:border-strokedark dark:drop-shadow-none sm:flex-row  sm:items-center sm:justify-between md:p-6 lg:block 2xl:p-6">
      {/* <h2 className="text-title-md2 font-thin text-white">
        Student Profile Management
      </h2> */}

      <div className="mt-3 flex items-center justify-between">
        <h2 className="flex text-title-md2 font-thin text-[#FFE00C]">
          <span className="mr-2 flex text-green">
            <AiFillHome className="mr-2" />
            {/* SOP /{' '} */}
          </span>
          {pageName}
        </h2>

        {/* <div>
          <NavLink
            to="/login"
            className={`flex items-center justify-center  px-5 py-2 text-[17px] font-medium text-white
          ${pathname.includes('login') && 'bg-graydark dark:bg-meta-4'}`}
          >
            <BsFillArrowRightSquareFill className="rounded-lg bg-white text-[34px] text-[#00A651]" />
          </NavLink>
        </div> */}
      </div>
    </div>
  );
};

export default Breadcrumb;
