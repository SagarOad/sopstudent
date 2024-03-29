interface Props {
  title: string;
  path: string;
  img: any;
}

const SubjectCard = ({ title, img, path }: Props) => {
  return (
    <div className="col-span-12 flex h-[250px] items-center justify-center rounded-[16px] border-6 border-white bg-[#D9D9D9] p-6 px-5  pt-7.5 pb-5 hover:bg-green group-hover:text-white sm:px-7.5 xl:col-span-3">
      <div>
        <div className="mx-auto flex h-[100px] w-[100px] items-center justify-center rounded-full bg-white">
          <img
            src={`${path}${img}`}
            alt="subject image"
            width={50}
            height={50}
          />
        </div>
        <h1 className="group mt-2 text-center text-[20px] font-medium text-black">
          {title}
        </h1>
      </div>
    </div>
  );
};

export default SubjectCard;
