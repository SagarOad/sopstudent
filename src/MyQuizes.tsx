import DefaultLayout from './layout/DefaultLayout';
import Breadcrumb from './components/Breadcrumb';
import Classes from './components/Classes';
import { useEffect, useState } from 'react';
import axios from './api/axios';
import image from './images/product/Frame.png';
import { ClassicSpinner } from 'react-spinners-kit';

// Define the type for your data
interface QuizData {
  exam_id: number;
  exam_name: string;
  total_exams: number;
  total_questions: number;
  image: string;
  exam_slug: string;
  examfinish: number;
}

const MyQuizes = () => {
  const [data, setData] = useState<QuizData[]>([]);
  const user = localStorage.getItem('user') || null;
  const userData = user ? JSON.parse(user) : null;
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/studentexamlist`, {
          params: {
            userId: userData?.user_id,
          },
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        });
        setLoading(false);
        setData(response.data?.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <DefaultLayout>
      <Breadcrumb pageName="My Quizes" />
      {loading ? (
        <div className="absolute flex h-full w-full items-center justify-center bg-white">
          <ClassicSpinner color="#04BE5B" />
        </div>
      ) : (
        <div className="p-4 md:p-6 2xl:p-10">
          <div className="mt-4 grid grid-flow-col grid-rows-1 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-4">
            {data.map((quiz) => (
              <Classes
                key={quiz.exam_id}
                img={image}
                standard={quiz.exam_name}
                subjects=""
                chapter=""
                quizes=""
                id={quiz.exam_id}
                exam={quiz.examfinish}
              />
            ))}
          </div>
          {/* <div className="flex items-center justify-center">
          <NavLink
            to="/choosesubject"
            className={`mt-4 items-center justify-center bg-[#00A651] px-5 py-2 text-[17px] font-medium text-white
          ${
            pathname.includes('choosesubject') && 'bg-graydark dark:bg-meta-4'
          }`}
          >
            Next
          </NavLink>
        </div> */}
        </div>
      )}
    </DefaultLayout>
  );
};

export default MyQuizes;
