import { useEffect, useState } from 'react';
import userImg from '../../src/assets/avatar.png';
import axios from '../api/axios';

// Define the type for your data
interface UserData {
  name: string;
  email: string;
  phone: string | number;
  registrationno: string | number;
}

const StudentCard = () => {
  const [data, setData] = useState<UserData>();

  const user = localStorage.getItem('user') || null;
  const userData = user ? JSON.parse(user) : null;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/user/profile/${userData?.user_id}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        });

        console.log('user data:', response.data);
        setData(response.data.user);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="col-span-12 bg-white shadow-default xl:col-span-4">
      <div className="scardbg flex h-auto flex-col items-center justify-center bg-cover bg-center bg-no-repeat py-36">
        <img
          src={
            userData?.image != ''
              ? `https://studentofpakistan.com/sopstudentnewbackend/public/userimage/${userData?.image}`
              : userImg
          }
          alt="user img"
          className="w-[100px]"
        />
        <h1 className="text-center text-[18px] text-black">{data?.name}</h1>
        <div className="my-3">
          <h1 className="text-center text-[18px] font-medium text-black">
            {data?.email}
          </h1>
          <hr className="my-1 h-[3px] bg-black" />
          <h1 className="text-center font-medium">{data?.registrationno}</h1>
        </div>
      </div>
    </div>
  );
};

export default StudentCard;
