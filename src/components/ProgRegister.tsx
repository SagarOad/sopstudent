import banner from '../assets/GroupRegi.png';
import axios from '../api/axios';
import { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface RegistrationData {
  id: number;
  title: string;
  date: string;
  name: string;
  image: string;
}

const ProgRegister = ({ setActiveTab }: any) => {
  const [programData, setProgramData] = useState<RegistrationData[]>([]);
  const [batchData, setBatchData] = useState<RegistrationData[]>([]);
  const [provinceData, setProvinceData] = useState<RegistrationData[]>([]);
  const [destrictData, setDestrictData] = useState<RegistrationData[]>([]);
  const [gradeData, setGradeData] = useState<RegistrationData[]>([]);

  const [province, setProvince] = useState(' ');
  const [district, setDistrict] = useState(' ');
  const [email, setEmail] = useState(' ');
  const [program, setProgram] = useState(' ');
  const [batch, setBatch] = useState(' ');
  const [grade, setGrade] = useState(' ');

  const user = localStorage.getItem('user') || null;
  const userData = user ? JSON.parse(user) : null;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/get-grade`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        });

        setGradeData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/studentprogramlist`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        });

        setProgramData(response?.data?.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/get-province`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        });

        setProvinceData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleProvinceChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setProvince(e.target.value);
    if (province) {
      const fetchDestrict = async () => {
        try {
          const response = await axios.get(`/get-district`, {
            params: {
              provinceId: e.target.value,
            },
            headers: {
              Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
          });

          setDestrictData(response.data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };

      fetchDestrict();
    }
  };
  const handleProgramChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setProgram(e.target.value);

    if (program) {
      const fetchDestrict = async () => {
        try {
          const response = await axios.get(`/studentbatchlist`, {
            params: {
              programId: e.target.value,
            },
            headers: {
              Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
          });

          setBatchData(response?.data?.data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };

      fetchDestrict();
    }
  };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    try {
      const formData = new FormData();

      // // Append form field values

      formData.append('email', email);
      formData.append('districtId', district);
      formData.append('programId', program);
      formData.append('provinceId', province);
      formData.append('batchId', batch);
      formData.append('user_id', userData?.user_id);
      formData.append('gradeId', grade);

      const response = await axios.post(`/program-registration`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      setActiveTab(1);
      console.log(response.data);
      toast.success('Registration successful!');

      // setSuccess(true);
    } catch (err: any) {
      console.log(err);
      toast.error(
        err?.response?.data ||
          err?.data ||
          err?.response ||
          'Registration failed.'
      );
    }
  };

  return (
    <div className="block p-6 lg:flex">
      <div className="w-[100%] rounded-lg bg-[#0F5F5F5] p-0 dark:bg-boxdark md:mb-6 md:p-7">
        <form onSubmit={handleSubmit} className="flex flex-col  justify-center">
          <select
            className="my-1 rounded-lg border-2 border-[#cfcfcf] bg-white px-4 py-4 text-[#000000] dark:bg-boxdark"
            placeholder=""
            onChange={handleProgramChange}
            required
          >
            <option value={''}>Select Program</option>
            {programData &&
              programData?.map((item) => {
                return (
                  <option key={item.id} value={item.id}>
                    {item.name}
                  </option>
                );
              })}
          </select>
          <select
            className="my-1 rounded-lg border-2 border-[#cfcfcf] bg-white px-4 py-4 text-[#000000] dark:bg-boxdark"
            placeholder=""
            required
            onChange={(e) => setBatch(e.target.value)}
          >
            <option value={''}>Select Batch</option>

            {batchData &&
              batchData?.map((item) => {
                return (
                  <option key={item.id} value={item.id}>
                    {item.name}
                  </option>
                );
              })}
          </select>
          <select
            className="my-1 rounded-lg border-2 border-[#cfcfcf] bg-white px-4 py-4 text-[#000000] dark:bg-boxdark"
            placeholder=""
            value={province}
            required
            onChange={handleProvinceChange}
          >
            <option value={''}>Select Provice</option>

            {provinceData &&
              provinceData?.map((item) => {
                return (
                  <option key={item.id} value={item.id}>
                    {item.name}
                  </option>
                );
              })}
          </select>
          <select
            className="my-1 rounded-lg border-2 border-[#cfcfcf] bg-white px-4 py-4 text-[#000000] dark:bg-boxdark"
            placeholder=""
            required
            onChange={(e) => setDistrict(e.target.value)}
          >
            {destrictData &&
              destrictData?.map((item) => {
                return (
                  <option key={item.id} value={item.id}>
                    {item.name}
                  </option>
                );
              })}
          </select>
          <select
            className="my-1 rounded-lg border-2 border-[#cfcfcf] bg-white px-4 py-4 text-[#000000] dark:bg-boxdark"
            placeholder=""
            required
            onChange={(e) => setGrade(e.target.value)}
          >
            {gradeData &&
              gradeData?.map((item) => {
                return (
                  <option key={item.id} value={item.id}>
                    {item.name}
                  </option>
                );
              })}
          </select>
          <div className="mt-1 flex items-center justify-between rounded-lg border-2 bg-white outline-none dark:bg-boxdark">
            <input
              type="email"
              name="name"
              placeholder="Enter your Email Address"
              className="w-full bg-transparent py-3 px-5 font-medium outline-none transition"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex items-center justify-center">
            <button
              type="submit"
              className="mx-auto mt-3 rounded-lg  bg-[#04BE5B] py-4 px-12 text-white"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
      <div className="w-[100%]">
        <img className="mx-auto" src={banner} alt="Banner" />
      </div>
      <ToastContainer />
    </div>
  );
};

export default ProgRegister;
