import { useNavigate } from 'react-router-dom';

interface Props {
  img: string;
  standard: string;
  subjects: string;
  chapter: string;
  quizes: string;
  id: number;
  exam: number;
}

const Classes = ({
  img,
  standard,
  subjects,
  chapter,
  quizes,
  id,
  exam,
}: Props) => {
  const navigate = useNavigate();

  const handleClick = (id: number) => {
    navigate(`/myquizes/quizpaper?id=${id}`);
  };
  return (
    <>
      {exam === 1 ? (
        <div className="col-span-6 flex h-[200px] items-center justify-center rounded-sm border border-stroke bg-[#00A651] pb-4 shadow-default  xl:col-span-4">
          <div className=" flex flex-col items-center justify-center">
            <img className="w-[80px] rounded-full bg-[#ea476f]" src={img} />
            <div>
              <h1 className="mt-4 text-[30px] text-white">{standard}</h1>
              <h1 className="mt-4 text-[24px] text-black">{subjects}</h1>
              <h1 className="mt-4 text-[24px] text-black">{chapter}</h1>
              <h1 className="mt-4 text-[24px] text-black">{quizes}</h1>
            </div>
          </div>
        </div>
      ) : (
        <div
          onClick={() => handleClick(id)}
          className=" flex h-[200px] items-center justify-center rounded-sm border border-stroke pb-4 shadow-default  xl:col-span-4"
        >
          <div className=" flex flex-col items-center justify-center">
            <img className="w-[80px] rounded-full bg-[#ea476f]" src={img} />
            <div>
              <h1 className="mt-4 text-[15px] text-black dark:text-white">
                {standard}
              </h1>
              <h1 className="mt-4 text-[24px] text-black">{subjects}</h1>
              <h1 className="mt-4 text-[24px] text-black">{chapter}</h1>
              <h1 className="mt-4 text-[24px] text-black">{quizes}</h1>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Classes;
