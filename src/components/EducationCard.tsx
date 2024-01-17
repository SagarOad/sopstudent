import React, { useState } from 'react';
import { FaRegEdit } from 'react-icons/fa';
import { MdOutlineDelete } from 'react-icons/md';
import { ToastContainer, toast } from 'react-toastify';
import axios from '../api/axios';
interface Props {
  id: string | number;
  heading: string;
  title1: string;
  title2: string;
  title3: string;
  title4: string;
  title5: string;
}

const EducationCard = ({
  id,
  heading,
  title1,
  title2,
  title3,
  title4,
  title5,
}: Props) => {
  return (
    <React.Fragment>
      <div className="p-7.5 text-center text-[20px] font-bold text-black dark:text-white">
        <h3 className="my-3">Result: {title1}</h3>
        <h3 className="my-3">Obtained Marks: {title2}</h3>
        <h3 className="my-3">Passing Year: {title3}</h3>
        <h3 className="my-3">Result Type: {title5}</h3>
      </div>

      <ToastContainer />
    </React.Fragment>
  );
};

export default EducationCard;
