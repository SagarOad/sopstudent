import { Key, SetStateAction, useState } from 'react';
import { ClassicSpinner } from 'react-spinners-kit';
import Classes from './Classes';
import image from '../images/product/Frame.png';


interface Props {
  exam_id: number;
  exam_name: string;
  total_exams: number;
  total_questions: number;
  image: string;
  exam_slug: string;
  examfinish: number;
}

const ExamAccordion = (exam: { exam: any }) => {
  const [selected, setSelected] = useState(null);
  const data = exam.exam;

  console.log(data," --------------");
  

  const toggle = (i: SetStateAction<null>) => {
    if (selected == i) {
      return setSelected(null);
    }

    setSelected(i);
  };
  return (
    <div>
      <div className="accordion px-[12px]">

        <div className="p-4 md:p-6 2xl:p-10">
          <div className="mt-4 grid grid-flow-col grid-rows-1 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-4">
            {data?.map((quiz: { exam_id: any; exam_name: string; examfinish: number; }) => (
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
      </div>
    </div>
  );
};

export default ExamAccordion;
