import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Logo from '../../src/images/logo/image 2.jpg';
import { useEffect, useState } from 'react';
import axios from '../api/axios';

interface UserData {
  name: string;
  email: string;
  phone: string | number;
  registrationno: string | number;
}

const StudentChallan = () => {
  const [data, setData] = useState<UserData>();

  const getIdFromURL = () => {
    const queryParams = new URLSearchParams(window.location.search);

    return queryParams.get('id');
  };
  const id = getIdFromURL();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/user/profile/${id}`, {
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
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2} px={5} sx={{ marginTop: 2 }}>
          <Grid
            // sx={{ padding: '0px !important' }}
            item
            lg={4}
            md={4}
            sm={4}
            xs={4}
          >
            <div className=" border-2 text-center text-black-2">
              <h4 className="  pt-2 pb-2 text-[14px] font-medium text-black-2">
                Bank Challan
              </h4>
              <div className="flex items-center justify-start px-5">
                <img
                  className=" h-[25px] w-[30px] object-contain"
                  src={Logo}
                  alt="logo"
                  srcSet=""
                />
                <h3 className=" ml-10 text-[14px]  font-semibold uppercase text-black-2 ">
                  Students of pakistan
                </h3>
              </div>
              <h4 className=" text-[14px] font-medium text-black-2">
                Alpha-2021
              </h4>
              <h4 className=" py-1 text-[14px] font-medium capitalize text-black-2">
                national tax number SOP-2316942-7
              </h4>
              <h4 className="pb-1 pt-3 text-[14px] font-semibold capitalize text-black-2">
                MCB Bank Limited
              </h4>
              <h4 className=" text-[11px] font-medium capitalize text-black-2">
                F-6 super market branch islamabad, branch code 1028
              </h4>
              <h4 className=" border-b-2 px-3 pb-2 text-[13px] font-medium capitalize text-black-2">
                IBAN# PK54MUCB0402217501008852
              </h4>
              <div className="flex items-center justify-start px-2 pb-2 pt-3">
                <h4 className="w-[50%] text-start text-[13px] font-semibold capitalize text-black-2">
                  name of student:
                </h4>
                <h4 className="w-[50%] text-start text-[13px] font-medium capitalize text-black-2">
                  {data?.name}
                </h4>
              </div>
              <div className="flex items-center justify-start px-2 pb-2">
                <h4 className="w-[50%] text-start text-[13px] font-semibold capitalize text-black-2">
                  Phone Number:
                </h4>
                <h4 className="w-[50%] text-start text-[13px] font-medium capitalize text-black-2">
                  {data?.phone}
                </h4>
              </div>
              <div className="flex items-center justify-start px-2 pb-2">
                <h4 className="w-[50%] text-start text-[13px] font-semibold capitalize text-black-2">
                  ID:
                </h4>
                <h4 className="w-[50%] text-start text-[13px] font-medium capitalize text-black-2">
                  {data?.registrationno}
                </h4>
              </div>
              <div className="flex items-center justify-start border-b-2 px-2 pb-2 text-black-2">
                <h4 className="w-[50%] text-start text-[13px] font-semibold capitalize text-black-2">
                  Program:
                </h4>
                <h4 className="w-[50%] text-start  text-[13px] font-medium capitalize text-black-2">
                  Alpha-21
                </h4>
              </div>
              <h4 className="pt-3 font-medium text-black-2">
                Details of Deposit
              </h4>
              <div className="flex items-center justify-start px-2 pt-2">
                <h4 className="w-[60%] text-start text-[12px] font-semibold capitalize text-black-2">
                  1. Tuition Fee
                </h4>
                <h4 className="w-[40%] text-start text-[12px] font-medium capitalize text-black-2">
                  Rs.2000 /-
                </h4>
              </div>
              <div className="flex items-center justify-start border-b-2 px-2 pb-2">
                <h4 className="w-[60%] text-start text-[12px] font-semibold capitalize text-black-2">
                  2. Learning Material Fee
                </h4>
                <h4 className="w-[40%]  text-start text-[12px] font-medium capitalize text-black-2">
                  Rs.500 /-
                </h4>
              </div>
              <h4 className="pt-2 pl-1 text-start text-[12px] font-medium text-black-2">
                <span className=" font-semibold">
                  Total amount (in words) Rupees:
                </span>
                Two Thousand, Five Hundred
              </h4>
              <h4 className="pl-1 pt-2 text-start text-[12px] font-semibold">
                By Cash/P.O No.{' '}
                <span className=" border-b pr-[160px] font-light text-black-2"></span>{' '}
                Drawn on
                <span className=" border-b pr-[200px] font-light text-black-2"></span>{' '}
                Branch
              </h4>
              <div className="flex items-center justify-between px-2 pt-10">
                <h4 className=" text-[11px] font-semibold capitalize text-black-2">
                  signature of bank officer
                </h4>
                <h4 className="  text-[11px] font-semibold capitalize text-black-2">
                  signature of depositer
                </h4>
              </div>
            </div>
          </Grid>
          <Grid
            // sx={{ padding: '0px !important' }}
            item
            lg={4}
            md={4}
            sm={4}
            xs={4}
          >
            <div className=" border-2 text-center text-black-2">
              <h4 className="  pt-2 pb-2 text-[14px] font-medium text-black-2">
                Bank Challan
              </h4>
              <div className="flex items-center justify-start px-5">
                <img
                  className=" h-[25px] w-[30px] object-contain"
                  src={Logo}
                  alt="logo"
                  srcSet=""
                />
                <h3 className=" ml-10 text-[14px]  font-semibold uppercase text-black-2 ">
                  Students of pakistan
                </h3>
              </div>
              <h4 className=" text-[14px] font-medium text-black-2">
                Alpha-2021
              </h4>
              <h4 className=" py-1 text-[14px] font-medium capitalize text-black-2">
                national tax number SOP-2316942-7
              </h4>
              <h4 className="pb-1 pt-3 text-[14px] font-semibold capitalize text-black-2">
                MCB Bank Limited
              </h4>
              <h4 className=" text-[11px] font-medium capitalize text-black-2">
                F-6 super market branch islamabad, branch code 1028
              </h4>
              <h4 className=" border-b-2 px-3 pb-2 text-[13px] font-medium capitalize text-black-2">
                IBAN# PK54MUCB0402217501008852
              </h4>
              <div className="flex items-center justify-start px-2 pb-2 pt-3">
                <h4 className="w-[50%] text-start text-[13px] font-semibold capitalize text-black-2">
                  name of student:
                </h4>
                <h4 className="w-[50%] text-start text-[13px] font-medium capitalize text-black-2">
                  {data?.name}
                </h4>
              </div>
              <div className="flex items-center justify-start px-2 pb-2">
                <h4 className="w-[50%] text-start text-[13px] font-semibold capitalize text-black-2">
                  Phone Number:
                </h4>
                <h4 className="w-[50%] text-start text-[13px] font-medium capitalize text-black-2">
                  {data?.phone}
                </h4>
              </div>
              <div className="flex items-center justify-start px-2 pb-2">
                <h4 className="w-[50%] text-start text-[13px] font-semibold capitalize text-black-2">
                  ID:
                </h4>
                <h4 className="w-[50%] text-start text-[13px] font-medium capitalize text-black-2">
                  {data?.registrationno}
                </h4>
              </div>
              <div className="flex items-center justify-start border-b-2 px-2 pb-2 text-black-2">
                <h4 className="w-[50%] text-start text-[13px] font-semibold capitalize text-black-2">
                  Program:
                </h4>
                <h4 className="w-[50%] text-start  text-[13px] font-medium capitalize text-black-2">
                  Alpha-21
                </h4>
              </div>
              <h4 className="pt-3 font-medium text-black-2">
                Details of Deposit
              </h4>
              <div className="flex items-center justify-start px-2 pt-2">
                <h4 className="w-[60%] text-start text-[12px] font-semibold capitalize text-black-2">
                  1. Tuition Fee
                </h4>
                <h4 className="w-[40%] text-start text-[12px] font-medium capitalize text-black-2">
                  Rs.2000 /-
                </h4>
              </div>
              <div className="flex items-center justify-start border-b-2 px-2 pb-2">
                <h4 className="w-[60%] text-start text-[12px] font-semibold capitalize text-black-2">
                  2. Learning Material Fee
                </h4>
                <h4 className="w-[40%]  text-start text-[12px] font-medium capitalize text-black-2">
                  Rs.500 /-
                </h4>
              </div>
              <h4 className="pt-2 pl-1 text-start text-[12px] font-medium text-black-2">
                <span className=" font-semibold">
                  Total amount (in words) Rupees:
                </span>
                Two Thousand, Five Hundred
              </h4>
              <h4 className="pl-1 pt-2 text-start text-[12px] font-semibold">
                By Cash/P.O No.{' '}
                <span className=" border-b pr-[160px] font-light text-black-2"></span>{' '}
                Drawn on
                <span className=" border-b pr-[200px] font-light text-black-2"></span>{' '}
                Branch
              </h4>
              <div className="flex items-center justify-between px-2 pt-10">
                <h4 className=" text-[11px] font-semibold capitalize text-black-2">
                  signature of bank officer
                </h4>
                <h4 className="  text-[11px] font-semibold capitalize text-black-2">
                  signature of depositer
                </h4>
              </div>
            </div>
          </Grid>
          <Grid
            // sx={{ padding: '0px !important' }}
            item
            lg={4}
            md={4}
            sm={4}
            xs={4}
          >
            <div className=" border-2 text-center text-black-2">
              <h4 className="  pt-2 pb-2 text-[14px] font-medium text-black-2">
                Bank Challan
              </h4>
              <div className="flex items-center justify-start px-5">
                <img
                  className=" h-[25px] w-[30px] object-contain"
                  src={Logo}
                  alt="logo"
                  srcSet=""
                />
                <h3 className=" ml-10 text-[14px]  font-semibold uppercase text-black-2 ">
                  Students of pakistan
                </h3>
              </div>
              <h4 className=" text-[14px] font-medium text-black-2">
                Alpha-2021
              </h4>
              <h4 className=" py-1 text-[14px] font-medium capitalize text-black-2">
                national tax number SOP-2316942-7
              </h4>
              <h4 className="pb-1 pt-3 text-[14px] font-semibold capitalize text-black-2">
                MCB Bank Limited
              </h4>
              <h4 className=" text-[11px] font-medium capitalize text-black-2">
                F-6 super market branch islamabad, branch code 1028
              </h4>
              <h4 className=" border-b-2 px-3 pb-2 text-[13px] font-medium capitalize text-black-2">
                IBAN# PK54MUCB0402217501008852
              </h4>
              <div className="flex items-center justify-start px-2 pb-2 pt-3">
                <h4 className="w-[50%] text-start text-[13px] font-semibold capitalize text-black-2">
                  name of student:
                </h4>
                <h4 className="w-[50%] text-start text-[13px] font-medium capitalize text-black-2">
                  {data?.name}
                </h4>
              </div>
              <div className="flex items-center justify-start px-2 pb-2">
                <h4 className="w-[50%] text-start text-[13px] font-semibold capitalize text-black-2">
                  Phone Number:
                </h4>
                <h4 className="w-[50%] text-start text-[13px] font-medium capitalize text-black-2">
                  {data?.phone}
                </h4>
              </div>
              <div className="flex items-center justify-start px-2 pb-2">
                <h4 className="w-[50%] text-start text-[13px] font-semibold capitalize text-black-2">
                  ID:
                </h4>
                <h4 className="w-[50%] text-start text-[13px] font-medium capitalize text-black-2">
                  {data?.registrationno}
                </h4>
              </div>
              <div className="flex items-center justify-start border-b-2 px-2 pb-2 text-black-2">
                <h4 className="w-[50%] text-start text-[13px] font-semibold capitalize text-black-2">
                  Program:
                </h4>
                <h4 className="w-[50%] text-start  text-[13px] font-medium capitalize text-black-2">
                  Alpha-21
                </h4>
              </div>
              <h4 className="pt-3 font-medium text-black-2">
                Details of Deposit
              </h4>
              <div className="flex items-center justify-start px-2 pt-2">
                <h4 className="w-[60%] text-start text-[12px] font-semibold capitalize text-black-2">
                  1. Tuition Fee
                </h4>
                <h4 className="w-[40%] text-start text-[12px] font-medium capitalize text-black-2">
                  Rs.2000 /-
                </h4>
              </div>
              <div className="flex items-center justify-start border-b-2 px-2 pb-2">
                <h4 className="w-[60%] text-start text-[12px] font-semibold capitalize text-black-2">
                  2. Learning Material Fee
                </h4>
                <h4 className="w-[40%]  text-start text-[12px] font-medium capitalize text-black-2">
                  Rs.500 /-
                </h4>
              </div>
              <h4 className="pt-2 pl-1 text-start text-[12px] font-medium text-black-2">
                <span className=" font-semibold">
                  Total amount (in words) Rupees:
                </span>
                Two Thousand, Five Hundred
              </h4>
              <h4 className="pl-1 pt-2 text-start text-[12px] font-semibold">
                By Cash/P.O No.{' '}
                <span className=" border-b pr-[160px] font-light text-black-2"></span>{' '}
                Drawn on
                <span className=" border-b pr-[200px] font-light text-black-2"></span>{' '}
                Branch
              </h4>
              <div className="flex items-center justify-between px-2 pt-10">
                <h4 className=" text-[11px] font-semibold capitalize text-black-2">
                  signature of bank officer
                </h4>
                <h4 className="  text-[11px] font-semibold capitalize text-black-2">
                  signature of depositer
                </h4>
              </div>
            </div>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default StudentChallan;
