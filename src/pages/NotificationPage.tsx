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

const NotificationPage = () => {
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

  const handleClick = (url: string | URL | undefined) => {
    window.open(url, '_blank');
  };

  return (
    <DefaultLayout>
      <Breadcrumb pageName="My Notifications" />

      {loading ? (
        <div className="absolute flex h-full w-full items-center justify-center">
          <ClassicSpinner color="#04BE5B" />
        </div>
      ) : (
        <div className="w-full max-w-full rounded-sm p-4 shadow-default dark:border-strokedark dark:bg-boxdark md:p-6 2xl:p-10">
          {data.map((notification) => (
            <div
              key={notification.id}
              className="col-span-12 my-2 rounded-sm border border-stroke bg-white p-5 shadow-default dark:border-strokedark dark:bg-boxdark xl:col-span-8"
              // onClick={() => handleClick(notification?.url)}
            >
              <div>
                <div className="flex flex-col">
                  <div className="flex border-b border-stroke dark:border-strokedark">
                    <div className="gap-03 flex items-center p-2.5 xl:p-5">
                      <div className="flex-shrink-0">
                        {/* <MdNotificationsActive className="text-[40px] text-[#00A651]" /> */}
                      </div>
                    </div>

                    <div className="grid-cols-10 p-2.5 xl:p-5">
                      <h2 className="text-[20px] font-bold text-black dark:text-white">
                        {notification.title}
                      </h2>
                      <p className="mt-1 text-[18px] text-black dark:text-white">
                        <div
                          dangerouslySetInnerHTML={{
                            __html: notification.description,
                          }}
                        />
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </DefaultLayout>
  );
};

export default NotificationPage;
