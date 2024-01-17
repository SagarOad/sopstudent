import Breadcrumb from '../components/Breadcrumb';
import DefaultLayout from '../layout/DefaultLayout';
import DocumentCard from './DocumentCard';
import { AiOutlineUpload } from 'react-icons/ai';
import { useEffect, useState } from 'react';
import axios from '../api/axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ClassicSpinner } from 'react-spinners-kit';

interface SkillsData {
  document_id: number;
  document_title: string;
  document_file: any;
  document_extension: string;
  document_expiredate: string;
}

const MyDocuments = () => {
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(true);

  const [expiry, setExpiry] = useState('');
  const [file, setFile] = useState<FileList | null>(null);
  const [title, setTitle] = useState(' ');

  const user = localStorage.getItem('user') || null;
  const userData = user ? JSON.parse(user) : null;

  const [data, setData] = useState<SkillsData[]>([]);
  const [docPath, setDocPath] = useState<string>('');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(`/documentlist`, {
        params: {
          userId: userData?.user_id,
        },
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      setLoading(false);
      setData(response.data.data);
      setDocPath(response.data.docpath);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    try {
      const formData = new FormData();

      // // Append form field values
      formData.append('document_title', title);
      if (file && file.length > 0) {
        formData.append('document_file', file[0]);
      }
      formData.append('document_expiredate', expiry);
      formData.append('userId', userData?.user_id);

      const response = await axios.post(`/savemydocument`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });

      console.log(response.data);
      setShowModal(false);
      toast.success('Added Successfully!');
      fetchData();
      // setSuccess(true);
    } catch (err) {
      console.log(err);
      toast.error('Faild!');
    }
  };

  return (
    <DefaultLayout>
      <Breadcrumb pageName="My Documents" />
      {loading ? (
        <div className="absolute flex h-full w-full items-center justify-center bg-white">
          <ClassicSpinner color="#04BE5B" />
        </div>
      ) : (
        <div className="bg-[#F4F4F4] p-4 dark:bg-[#292A33] md:p-6 2xl:p-10">
          <div className="flex justify-end">
            <button
              onClick={() => setShowModal(true)}
              className="mt-4 flex items-center justify-between rounded-lg bg-green px-10 py-4 text-[17px] font-medium text-white"
            >
              <AiOutlineUpload className="mr-2 text-[26px] font-bold" />
              Upload
            </button>
          </div>

          <div className=" grid grid-cols-12">
            {data.map((data) => (
              <div className="col-span-12 md:col-span-6 lg:col-span-2 m-1" key={data?.document_id}>
                <DocumentCard
                  title={data?.document_title}
                  file={data?.document_file}
                  date={data?.document_expiredate}
                  extension={data?.document_extension}
                  path={docPath}
                />
              </div>
            ))}
          </div>

          {showModal ? (
            <>
              <div className="fixed inset-0 z-[999999999999999999999999999] flex items-center justify-center overflow-y-auto overflow-x-hidden outline-none focus:outline-none">
                <div className="w-[62%] bg-white">
                  <div className="w-[100%] p-4 md:p-6 2xl:p-10">
                    <div className="p- col-span-12 bg-white xl:col-span-4">
                      <div className="py-4">
                        <h3 className="text-[22px] font-medium text-black">
                          DOCUMENT UPLOAD
                        </h3>
                      </div>
                      <form onSubmit={handleSubmit}>
                        <div className="p-2">
                          <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                            <div className="w-full xl:w-full">
                              <label className="block font-medium text-black dark:text-white">
                                Title
                              </label>
                              <div className="mt-2 flex items-center justify-between rounded-lg border-2 border-l-8 border-[#CCCCCC] border-l-red bg-white outline-none">
                                <input
                                  type="text"
                                  placeholder="Enter Title"
                                  className="w-full bg-transparent py-3 px-5 font-medium outline-none transition"
                                  onChange={(e) => setTitle(e.target.value)}
                                  required
                                />
                              </div>
                            </div>
                          </div>

                          <div className="mb-4.5">
                            <label className="block font-medium text-black dark:text-white">
                              Select Document{' '}
                              <span className="text-meta-1">*</span>
                            </label>

                            <input
                              type="file"
                              // accept=".pdf,.doc,.docx"
                              placeholder="Upload file here"
                              className="w-full rounded border-2 border-[#CCCCCC] bg-transparent py-3 px-5 font-medium outline-none transition disabled:cursor-default disabled:bg-whiter"
                              required
                              onChange={(e) => setFile(e.target.files)}
                            />
                          </div>

                          <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                            <div className="w-full xl:w-full">
                              <label className="block font-medium text-black dark:text-white">
                                Expiry
                              </label>
                              <div className="mt-2 flex items-center justify-between rounded-lg border-2 border-l-8 border-[#CCCCCC] border-l-red bg-white outline-none">
                                <input
                                  type="date"
                                  placeholder="Enter Expiry"
                                  className="w-full bg-transparent py-3 px-5 font-medium outline-none transition"
                                  required
                                  onChange={(e) => setExpiry(e.target.value)}
                                />
                              </div>
                            </div>
                          </div>

                          <div className="mt-[46px] flex justify-end">
                            <button
                              type="submit"
                              className="mr-3 rounded-lg bg-green py-4 px-12 text-[18px] text-white"
                            >
                              Upload
                            </button>

                            <button
                              onClick={() => setShowModal(false)}
                              className="rounded-lg bg-[#E72E2E] py-4 px-12 text-[18px] text-white"
                            >
                              Close
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              <div className="fixed inset-0 z-40 bg-black opacity-25"></div>
            </>
          ) : null}
          <ToastContainer />
        </div>
      )}
    </DefaultLayout>
  );
};

export default MyDocuments;
