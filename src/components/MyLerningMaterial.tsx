import DefaultLayout from '../layout/DefaultLayout';
import Breadcrumb from './Breadcrumb';
import { useState, useEffect } from 'react';
import axios from '../api/axios';
import { ClassicSpinner } from 'react-spinners-kit';
import DocumentCard from './DocumentCard';

// Define the type for your data
interface RecordsData {
  lms_id: number;
  lms_title: string;
  lms_document: string;
  created_at: string;
  lms_extension: string;
  lmspath: string;
}

const MyLearningMaterial = () => {
  const [lmsData, setLMSData] = useState<RecordsData[]>([]);
  const [lmsPath, setLMSPath] = useState<string>('');
  const [loading, setLoading] = useState(true);

  const user = localStorage.getItem('user') || null;
  const userData = user ? JSON.parse(user) : null;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/studentlmslist`, {
          params: {
            userId: userData?.user_id,
          },
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        });
        setLoading(false);
        setLMSData(response.data.data);
        setLMSPath(response.data.lmspath);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <DefaultLayout>
      <Breadcrumb pageName="My Learning Material" />

      <div className="mx-3 bg-[#F4F4F4] dark:bg-[#292A33]">
        {loading ? (
          <div className="absolute flex h-full w-full items-center justify-center bg-white">
            <ClassicSpinner color="#04BE5B" />
          </div>
        ) : (
          <div className=" grid grid-cols-12">
            {lmsData &&
              lmsData.map((data) => (
                <div
                  className="col-span-2 m-5 max-xl:col-span-4"
                  key={data?.lms_id}
                >
                  <DocumentCard
                    title={data?.lms_title}
                    file={data?.lms_document}
                    date={data?.created_at}
                    extension={data?.lms_extension}
                    path={lmsPath}
                  />
                </div>
              ))}
          </div>
        )}
      </div>
    </DefaultLayout>
  );
};

export default MyLearningMaterial;
