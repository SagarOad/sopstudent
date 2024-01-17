import { useEffect, useState } from 'react';
import Breadcrumb from '../components/Breadcrumb';
import DefaultLayout from '../layout/DefaultLayout';
// import { MdNotificationsActive } from 'react-icons/md';
import axios from '../api/axios';
import { ClassicSpinner } from 'react-spinners-kit';

// Define the type for your data
interface NotificationData {
  id: number;
  title: string;
  slug: string;
  url: string;
  description: string;
}

const WalletPage = () => {
  const [data, setData] = useState<NotificationData[]>([]);
  const [loading, setLoading] = useState(true);

  const user = localStorage.getItem('user') || null;
  const userData = user ? JSON.parse(user) : null;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/notifications`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
          params: {
            userId: userData.user_id,
          },
        });
        setLoading(false);

        setData(response.data.records);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  // const handleClick = (url: string | URL | undefined) => {
  //   window.open(url, '_blank');
  // };

  return (
    <DefaultLayout>
      <Breadcrumb pageName="My Wallet" />

      {loading ? (
        <div className="absolute flex h-full w-full items-center justify-center">
          <ClassicSpinner color="#04BE5B" />
        </div>
      ) : (
        <div className="w-full z-999999 max-w-full rounded-sm p-4  dark:border-strokedark dark:bg-boxdark md:p-6 2xl:p-10">
          <div>
            <h4 className=" text-center text-2xl font-semibold text-[#000000]">
              Add Money To Wallet
            </h4>
            {/* <form> */}
            <div className="mb-2 mt-5 grid grid-cols-2 gap-4">
              <div className="mt-1 outline-none dark:bg-boxdark">
                <label className="text-black-2" htmlFor="programName">
                  Title
                </label>
                <input
                  required
                  type="text"
                  name="name"
                  id="programName"
                  placeholder="Enter Title"
                  className="mt-1 w-full rounded-lg  border-2 bg-transparent bg-white py-3 px-5 font-medium outline-none transition dark:bg-boxdark"
                // onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mt-1 outline-none dark:bg-boxdark">
                <label className="text-black-2" htmlFor="programName">
                  Amount
                </label>
                <input
                  required
                  type="number"
                  name="name"
                  id="programName"
                  placeholder="Enter Amount"
                  className="mt-1 w-full rounded-lg  border-2 bg-transparent bg-white py-3 px-5 font-medium outline-none transition dark:bg-boxdark"
                // onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
            <div className="mt-6 text-center">
              <button

                className="rounded-xl bg-green py-2 px-12 text-[16px] text-white"
              >
                Submit
              </button>
            </div>
            {/* </form> */}
          </div>
          <div className="mt-10">
            <h4 className=" text-center text-2xl font-semibold text-[#000000]">
              Payment History
            </h4>
            <div>
              <div className="mt-10">
                <div className="grid grid-cols-12 rounded-lg px-5 py-4 shadow-2">
                  <div className=" col-span-3 font-medium text-[#000000]">
                    1
                  </div>
                  <div className=" col-span-5 font-medium text-[#000000]">
                    Title
                  </div>
                  <div className=" col-span-4 font-medium text-[#000000]">
                    Rs: 15000/-
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </DefaultLayout>
  );
};

export default WalletPage;
