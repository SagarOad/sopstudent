// import DefaultLayout from '../../layout/DefaultLayout';
import ChartThree from '../../components/ChartThree';
// import NotificationBar from '../../components/NotificationBar';
// import StudentCard from '../../components/StudentCard';
// import Breadcrumb from '../../components/Breadcrumb';
// import Subjects from '../../components/Subjects';
import GallerySlide from '../../components/GallerySlide';
import Timer from '../../components/Timer';
import useColorMode from '../../hooks/useColorMode';
import Sidebar from '../../components/DashboardSidebar';
import { FaWallet } from 'react-icons/fa';
import { IoMdSettings } from 'react-icons/io';
import { BsCameraFill } from 'react-icons/bs';
import { useState, useEffect } from 'react';
import axios from '../../api/axios';
import { NavLink } from 'react-router-dom';
import WalletPopup from '../../components/walletPopup';

interface UsernData {
  id: number;
  title: string;
  email: string;
  registrationno: string;
  phone: string;
  date: string;
  name: string;
  image: string;
  cover_image: string;
  address: string;
  province: string;
  father_name: string;
  district: string;
}

const MainPage = () => {
  const [colorMode, setColorMode] = useColorMode();

  const [userDetails, setUserDetails] = useState<UsernData>();

  const user = localStorage.getItem('user') || null;
  const userData = user ? JSON.parse(user) : null;

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`/user/profile/${userData?.user_id}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        });
        setUserDetails(response?.data.user);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchUserData();
  }, []);

  interface SubjectData {
    id: number;
    subject_title: string;
    date: string;
    subject_image: string;
  }

  const [data, setData] = useState<SubjectData[]>([]);
  const [path, setPath] = useState<string>('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/studentsubjectlist`, {
          params: {
            user_id: userData?.user_id,
          },
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        });

        setData(response.data?.data);
        setPath(response.data?.subjectpath);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div>
        <div className="sticky top-0 z-99 flex items-center justify-between bg-white px-8 py-2 shadow-4 dark:bg-[#292A33]">
          <div className="bg-white">
            <img
              src="https://studentofpakistan.com/images/sop.png"
              className=" w-[60px]"
            />
          </div>
          <div className="flex items-center justify-center">
            <div className="mx-2 xl:mx-6">
              <div className="relative">
                <label
                  className={`relative m-0 block h-7.5 w-14 rounded-full ${
                    colorMode === 'dark'
                      ? 'bg-primary'
                      : 'border-2 border-[#04BE5B] bg-white'
                  }`}
                >
                  <input
                    type="checkbox"
                    onChange={() => {
                      if (typeof setColorMode === 'function') {
                        setColorMode(colorMode === 'light' ? 'dark' : 'light');
                      }
                    }}
                    className="dur absolute top-0 z-50 m-0 h-full w-full cursor-pointer opacity-0"
                  />
                  <span
                    className={`absolute top-1/2 left-[3px] flex h-6 w-6 -translate-y-1/2 translate-x-0 items-center justify-center rounded-full bg-white shadow-switcher duration-75 ease-linear ${
                      colorMode === 'dark' && '!right-[3px] !translate-x-full'
                    }`}
                  >
                    <span className="dark:hidden">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7.99992 12.6666C10.5772 12.6666 12.6666 10.5772 12.6666 7.99992C12.6666 5.42259 10.5772 3.33325 7.99992 3.33325C5.42259 3.33325 3.33325 5.42259 3.33325 7.99992C3.33325 10.5772 5.42259 12.6666 7.99992 12.6666Z"
                          fill="#969AA1"
                        />
                        <path
                          d="M8.00008 15.3067C7.63341 15.3067 7.33342 15.0334 7.33342 14.6667V14.6134C7.33342 14.2467 7.63341 13.9467 8.00008 13.9467C8.36675 13.9467 8.66675 14.2467 8.66675 14.6134C8.66675 14.9801 8.36675 15.3067 8.00008 15.3067ZM12.7601 13.4267C12.5867 13.4267 12.4201 13.3601 12.2867 13.2334L12.2001 13.1467C11.9401 12.8867 11.9401 12.4667 12.2001 12.2067C12.4601 11.9467 12.8801 11.9467 13.1401 12.2067L13.2267 12.2934C13.4867 12.5534 13.4867 12.9734 13.2267 13.2334C13.1001 13.3601 12.9334 13.4267 12.7601 13.4267ZM3.24008 13.4267C3.06675 13.4267 2.90008 13.3601 2.76675 13.2334C2.50675 12.9734 2.50675 12.5534 2.76675 12.2934L2.85342 12.2067C3.11342 11.9467 3.53341 11.9467 3.79341 12.2067C4.05341 12.4667 4.05341 12.8867 3.79341 13.1467L3.70675 13.2334C3.58008 13.3601 3.40675 13.4267 3.24008 13.4267ZM14.6667 8.66675H14.6134C14.2467 8.66675 13.9467 8.36675 13.9467 8.00008C13.9467 7.63341 14.2467 7.33342 14.6134 7.33342C14.9801 7.33342 15.3067 7.63341 15.3067 8.00008C15.3067 8.36675 15.0334 8.66675 14.6667 8.66675ZM1.38675 8.66675H1.33341C0.966748 8.66675 0.666748 8.36675 0.666748 8.00008C0.666748 7.63341 0.966748 7.33342 1.33341 7.33342C1.70008 7.33342 2.02675 7.63341 2.02675 8.00008C2.02675 8.36675 1.75341 8.66675 1.38675 8.66675ZM12.6734 3.99341C12.5001 3.99341 12.3334 3.92675 12.2001 3.80008C11.9401 3.54008 11.9401 3.12008 12.2001 2.86008L12.2867 2.77341C12.5467 2.51341 12.9667 2.51341 13.2267 2.77341C13.4867 3.03341 13.4867 3.45341 13.2267 3.71341L13.1401 3.80008C13.0134 3.92675 12.8467 3.99341 12.6734 3.99341ZM3.32675 3.99341C3.15341 3.99341 2.98675 3.92675 2.85342 3.80008L2.76675 3.70675C2.50675 3.44675 2.50675 3.02675 2.76675 2.76675C3.02675 2.50675 3.44675 2.50675 3.70675 2.76675L3.79341 2.85342C4.05341 3.11342 4.05341 3.53341 3.79341 3.79341C3.66675 3.92675 3.49341 3.99341 3.32675 3.99341ZM8.00008 2.02675C7.63341 2.02675 7.33342 1.75341 7.33342 1.38675V1.33341C7.33342 0.966748 7.63341 0.666748 8.00008 0.666748C8.36675 0.666748 8.66675 0.966748 8.66675 1.33341C8.66675 1.70008 8.36675 2.02675 8.00008 2.02675Z"
                          fill="#969AA1"
                        />
                      </svg>
                    </span>
                    <span className="hidden dark:inline-block">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M14.3533 10.62C14.2466 10.44 13.9466 10.16 13.1999 10.2933C12.7866 10.3667 12.3666 10.4 11.9466 10.38C10.3933 10.3133 8.98659 9.6 8.00659 8.5C7.13993 7.53333 6.60659 6.27333 6.59993 4.91333C6.59993 4.15333 6.74659 3.42 7.04659 2.72666C7.33993 2.05333 7.13326 1.7 6.98659 1.55333C6.83326 1.4 6.47326 1.18666 5.76659 1.48C3.03993 2.62666 1.35326 5.36 1.55326 8.28666C1.75326 11.04 3.68659 13.3933 6.24659 14.28C6.85993 14.4933 7.50659 14.62 8.17326 14.6467C8.27993 14.6533 8.38659 14.66 8.49326 14.66C10.7266 14.66 12.8199 13.6067 14.1399 11.8133C14.5866 11.1933 14.4666 10.8 14.3533 10.62Z"
                          fill="#969AA1"
                        />
                      </svg>
                    </span>
                  </span>
                </label>
              </div>
            </div>

            <div className="mx-2 xl:mx-6">
              <div className="tooltip relative">
                <NavLink to="">
                  <FaWallet className="text-[18px] text-[#04BE5B] xl:text-[28px]" />
                </NavLink>
                <div className="tooltiptext wallet">
                  <WalletPopup />
                </div>
              </div>
            </div>

            <div className="mx-2 xl:mx-6">
              <NavLink to="/profile">
                <IoMdSettings className="text-[18px] text-[#04BE5B] xl:text-[28px]" />
              </NavLink>
            </div>
          </div>
        </div>

        <div className="px-6 pt-6 pb-12 dark:bg-[#292A33]">
          <div className="grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-4">
            <div className="col-span-12 h-[360px] rounded-[16px] bg-[#F3F3F3] shadow-6 dark:bg-boxdark xl:col-span-3">
              <div className="rounded-t-[16px] bg-green py-6">
                <h1 className="text-center text-[16px] leading-[30px] text-white md:text-[22px]">
                  Personal Details
                </h1>
              </div>
              <div className="py-3">
                <div className="mb-2 px-6">
                  <div className="flex justify-between border-b-2 py-2">
                    <div className="mr-2 flex items-center justify-center text-[38px]">
                      <h1 className="w-[50px] text-[14px] font-bold text-black dark:text-white md:text-[16px]">
                        Name:
                      </h1>
                    </div>
                    <div>
                      <p className="mt-1 text-[13px] font-bold text-black dark:text-white md:text-[16px]">
                        {userDetails?.name}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mb-2 px-6">
                  <div className="flex justify-between border-b-2 py-2">
                    <div className="mr-2 flex items-center justify-center text-[38px]">
                      <h1 className="w-[50px] text-[14px] font-bold text-black dark:text-white md:text-[16px]">
                        Email:
                      </h1>
                    </div>
                    <div>
                      <p className="mt-1 text-[13px] font-bold text-black dark:text-white md:text-[16px]">
                        {userDetails?.email}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mb-2 px-6">
                  <div className="flex justify-between border-b-2 py-2">
                    <div className="mr-2 flex items-center justify-center text-[38px]">
                      <h1 className="w-[50px] text-[14px] font-bold text-black dark:text-white md:text-[16px]">
                        CNIC:
                      </h1>
                    </div>
                    <div>
                      <p className="mt-1 text-[13px] font-bold text-black dark:text-white md:text-[16px]">
                        xxxxx-xxxxxxxx-x
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mb-2 px-6">
                  <div className="flex justify-between border-b-2 py-2">
                    <div className="mr-2 flex items-center justify-center text-[38px]">
                      <h1 className="w-[50px] text-[14px] font-bold text-black dark:text-white md:text-[16px]">
                        Cell:
                      </h1>
                    </div>
                    <div>
                      <p className="mt-1 text-[13px] font-bold text-black dark:text-white md:text-[16px]">
                        {userDetails?.phone}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mb-2 px-6">
                  <div className="flex justify-between py-2">
                    <div className="mr-2 flex items-center justify-center text-[38px]">
                      <h1 className="w-[140px] text-[14px] font-bold text-black dark:text-white md:text-[16px]">
                        Registration No:
                      </h1>
                    </div>
                    <div>
                      <p className="mt-1 text-[13px] font-bold text-black dark:text-white md:text-[16px]">
                        {userDetails?.registrationno}
                      </p>
                    </div>
                  </div>
                </div>

                {/* <div className="mb-2 px-6">
          <div className="flex justify-between py-2">
            <div className="mr-2 flex items-center justify-center text-[38px]">
              <h1 className="w-[50px] text-[14px] font-bold dark:text-white text-black md:text-[16px]">
                Class:
              </h1>
            </div>
            <div>
              <p className="mt-1 text-[13px] font-bold text-black dark:text-white md:text-[16px]">
                xx
              </p>
            </div>
          </div>
        </div> */}
              </div>
            </div>

            <div className="relative col-span-12 h-[360px] rounded-[16px] bg-[#F3F3F3] p-6 px-5 pt-7.5 pb-5 shadow-6 dark:bg-boxdark sm:px-7.5 xl:col-span-6">
              {userDetails?.cover_image ? (
                <img
                  src={`https://studentofpakistan.com/sopstudentnewbackend/public/userimage/${userDetails?.cover_image}`}
                  className="absolute top-0 left-0 h-[250px] w-[100%] rounded-t-[16px] object-cover"
                />
              ) : (
                <img
                  src="https://img.freepik.com/free-photo/smiling-students-with-backpacks_1098-1220.jpg"
                  className="absolute top-0 left-0 h-[250px] w-[100%] rounded-t-[16px] object-cover"
                />
              )}

              <div className="relative top-18 flex flex-col items-center justify-center">
                <div className="relative flex h-[200px] w-[200px] items-center justify-center rounded-full bg-white shadow-6">
                  {userDetails?.image ? (
                    <img
                      src={`https://studentofpakistan.com/sopstudentnewbackend/public/userimage/${userDetails?.image}`}
                      className="w-[100px]"
                    />
                  ) : (
                    <img
                      src="https://studentofpakistan.com/images/sop.png"
                      className="w-[100px]"
                    />
                  )}
                </div>
                <h1 className=" mt-3 text-[26px] font-bold text-black dark:text-white">
                  {userDetails?.name}
                </h1>
              </div>
              {/* <a className=" cursor-pointer">
                <BsCameraFill className="absolute top-3 left-6 text-[36px] text-[#04BE5B]" />
              </a> */}
            </div>

            <div className="col-span-12 competition-subjects h-[360px] rounded-[16px] bg-[#F3F3F3] shadow-6 dark:bg-boxdark xl:col-span-3">
              <div className="rounded-t-[16px] bg-green py-6">
                <h1 className="text-center text-[16px] leading-[30px] text-white md:text-[22px]">
                  Subjects For SOP Competition
                </h1>
              </div>
              <div className="h-[248px] overflow-y-scroll">
                <div className="my-6 grid grid-cols-12">
                  {data?.map((sub) => (
                    <div className="col-span-6 mx-auto flex flex-col items-center justify-center">
                      <div className="flex h-[100px] w-[100px] items-center justify-center rounded-full bg-white">
                        <img
                          src={`${path}${sub.subject_image}`}
                          className="mx-auto w-[80px]"
                        />
                      </div>
                      <h1 className="text-[14px] font-bold text-black dark:text-white md:text-[16px]">
                        {sub?.subject_title}
                      </h1>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-4">
            <div className="col-span-12 h-[360px] rounded-[16px] bg-[#F3F3F3] shadow-6 dark:bg-boxdark xl:col-span-3">
              <div className="rounded-t-[16px] bg-green py-6">
                <h1 className="text-center text-[16px] leading-[30px] text-white md:text-[22px]">
                  Objectives
                </h1>
              </div>
              <div className="p-6">
                <p className="text-[13px] font-bold text-black dark:text-white md:text-[16px]">
                  Hello! i am Student of class x, Lorem Ipsum is simply dummy
                  text of the printing and typesetting industry. Lorem Ipsum has
                  been the industry's standard dummy text ever since the 1500s,
                  when an unknown printer took a galley of type and scrambled it
                  to make a type specimen
                  book....................................
                </p>
              </div>
            </div>
            <div className="col-span-12 h-[360px] rounded-[16px] bg-[#F3F3F3] shadow-6 dark:bg-boxdark xl:col-span-6">
              <div className="rounded-t-[16px] bg-green py-6">
                <h1 className="text-center text-[16px] leading-[30px] text-white md:text-[22px]">
                  Notifications
                </h1>
              </div>
              <div className="px-6">
                <div className="mb-2 mt-6 flex">
                  <div className="mr-2 flex items-center justify-center text-[38px]">
                    {/* <MdNotifications className="text-[38px] text-green md:text-[48px]" /> */}
                  </div>
                  <div>
                    <h1 className="w-[165px] dark:text-white text-[14px] font-bold text-black md:text-[16px]">
                      IMPORTANT NOTICE
                    </h1>
                    <p className="mt-1 text-[13px] text-black dark:text-white md:text-[16px]">
                      Dear Student, Learning material can be uploaded on Monday,
                      Sorry for inconvenience
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-12 h-[360px] mb-6 rounded-[16px] bg-[#F3F3F3] shadow-6 dark:bg-boxdark xl:col-span-3">
              <div className="rounded-t-[16px] bg-green py-6">
                <h1 className="text-center text-[16px] leading-[30px] text-white md:text-[22px]">
                  My Navigation
                </h1>
              </div>

              {/* Navigation */}
              <div className="px-6 py-2">
                <Sidebar />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-4">
            <div className="col-span-12 h-auto rounded-[16px] bg-[#F3F3F3] shadow-6 dark:bg-boxdark xl:col-span-3">
              <div className="rounded-t-[16px] bg-green py-6">
                <h1 className="text-center text-[16px] leading-[30px] text-white md:text-[22px]">
                  Last Date of Student Registration
                </h1>
              </div>
              <div className="p-6">
                <Timer />
              </div>
            </div>
            <div className="relative col-span-12 h-auto rounded-[16px] bg-[#F3F3F3] shadow-6 dark:bg-boxdark xl:col-span-6">
              <div className="rounded-t-[16px] bg-green py-6">
                <h1 className="text-center text-[16px] leading-[30px] text-white md:text-[22px]">
                  RESULT ANALYSIS
                </h1>
              </div>
              <div className="p-6">
                <ChartThree />
              </div>
            </div>
            <div className="col-span-12 h-auto rounded-[16px] shadow-6 dark:bg-boxdark xl:col-span-3">
              <div className="rounded-t-[16px] bg-green py-6">
                <h1 className="text-center text-[16px] leading-[30px] text-white md:text-[22px]">
                  SOP Gallery
                </h1>
              </div>
              <div className="flex w-full items-center justify-center p-6">
                <GallerySlide />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
    // <DefaultLayout>
    //   <Breadcrumb pageName="Dashboard" />
    //   <div className="p-3 dark:bg-[#292A33]">
    //     <div className="dashboard-banner flex  items-center rounded-sm border border-stroke bg-[#E9E9E9] p-4 shadow-default dark:border-strokedark dark:bg-boxdark md:p-7.5">
    //       <h1 className="text-[36px] font-medium leading-[50px] text-[#04BE5B] md:text-[34px]">
    //         <span className="student-text font-bold text-[#057835]">
    //           STUDENT
    //         </span>{' '}
    //         DASHBOARD
    //       </h1>
    //     </div>

    //     <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
    //       <StudentCard />
    //       <NotificationBar />
    //     </div>
    //     <div>
    //       <Subjects />
    //     </div>
    //     <div>
    //       <Timer />
    //     </div>
    //     <div className="">
    //       <ChartThree />
    //     </div>
    //   </div>
    // </DefaultLayout>
  );
};

export default MainPage;
