import SubjectCard from './SubjectCard';
// import SubjectsData from '../SubjectsData';
import { useEffect, useState } from 'react';
import axios from '../api/axios';

// Define the type for your data
interface SubjectData {
  id: number;
  subject_title: string;
  date: string;
  subject_image: string;
}

const Subjects = () => {
  const [data, setData] = useState<SubjectData[]>([]);
  const [path, setPath] = useState<string>('');
  const user = localStorage.getItem('user') || null;
  const userData = user ? JSON.parse(user) : null;

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
    <div className="mt-12">
      <div className="bg-green py-6">
        <h1 className="text-center text-[22px] font-medium leading-[32px] text-white dark:text-white md:text-[28px]">
          SUBJECTS FOR SOP COMPETETION
        </h1>
      </div>
      <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-4">
        {data?.map((sub) => (
          <SubjectCard
            key={sub.id}
            title={sub.subject_title}
            img={sub.subject_image}
            path={path}
          />
        ))}
      </div>
      {/* <Timer /> */}
    </div>
  );
};

export default Subjects;
