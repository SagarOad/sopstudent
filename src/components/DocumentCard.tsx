import pdf from '../images/icon/pdf.png';
import doc from '../images/icon/doc.png';
import docx from '../images/icon/docx.png';
import document from '../images/icon/document.png';
import img from '../images/icon/img.jpg';
interface Props {
  title: string;
  date: string;
  extension: string;
  path: string;
  file: any;
}

const DocumentCard = ({ title, date, file, extension, path }: Props) => {
  return (
    <div
      className="h-45 cursor-pointer  rounded-sm border-4 border-[#00A651] bg-white p-4 pt-8 text-center  shadow-default dark:border-strokedark dark:bg-boxdark xl:col-span-4"
      onClick={() => window.open(`${path}${file}`)}
    >
      <div className="">
        <img
          className=" m-auto  h-[50px] object-contain object-top"
          src={
            extension === 'pdf'
              ? pdf
              : extension === 'doc'
              ? doc
              : extension === 'docx'
              ? docx
              : extension === 'png'
              ? img
              : extension === 'jpg'
              ? img
              : extension === 'jpeg'
              ? img
              : document
          }
        />
      </div>
      <h2 className="my-3 mb-0 text-[15px] font-medium text-[#000000] dark:text-white">
        {title}
      </h2>

      <div className="flex justify-center">
        <h2 className="m-0 p-0 text-[13px] text-[#252525]">{date}</h2>
      </div>
      {/* 
      <div className='flex justify-between mt-6'>
      <button className="mt-4 rounded-lg flex justify-center items-center bg-[#00A651] px-5 py-2 text-[17px] font-medium text-white">
          <FiEdit className="mr-2" />
          Edit
        </button>

        <button className="mt-4 rounded-lg bg-[#BE0404] flex justify-center items-center px-5 py-2 text-[17px] font-medium text-white">
          <RiDeleteBin5Line className="mr-2" />
          Delete
        </button>
      </div> */}
    </div>
  );
};

export default DocumentCard;
