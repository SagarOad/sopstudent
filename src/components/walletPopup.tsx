import { useState, useEffect } from 'react';
import axios from '../api/axios';
import { Link } from 'react-router-dom';

// Define the type for your data
interface NotificationData {
  id: number;
  title: string;
  slug: string;
  url: string;
}

const WalletPopup = () => {
  const [data, setData] = useState<NotificationData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/notifications`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        });

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
    <div>
      <div className="notifyPopupContainer flex h-[150px] w-[250px] max-w-full flex-col justify-between  overflow-scroll rounded-sm border-4 bg-white p-2 shadow-default dark:bg-black">
        <div>
          <h4 className="font-medium text-black-2 dark:text-white">My Wallet</h4>
          <div>
            <h5 className=" mt-4 font-semibold text-black-2 dark:text-white">Rs: 15000/-</h5>
          </div>
        </div>
        <div>
          <button
            type="button"
            className="rounded-xl bg-green py-2 px-12 text-[16px] text-white"
          >
            <Link to="/wallet">Add Money</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default WalletPopup;
