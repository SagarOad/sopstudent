import DefaultLayout from '../../layout/DefaultLayout';
import ChartThree from '../../components/ChartThree';
import NotificationBar from '../../components/NotificationBar';
import SubjectCard from '../../components/SubjectCard';
import StudentCard from '../../components/StudentCard';
import Breadcrumb from '../../components/Breadcrumb';
import Subjects from '../../components/Subjects';
import Timer from '../../components/Timer';

const MainPage = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Dashboard" />
      <div className="p-3 dark:bg-[#292A33]">
        <div className="dashboard-banner flex h-[250px] items-center dark:border-strokedark rounded-sm border dark:bg-boxdark border-stroke bg-[#E9E9E9] p-4 md:p-7.5 shadow-default">
          <h1 className="md:text-[52px] text-[36px] leading-[50px] font-medium text-[#04BE5B]">
            <span className="student-text font-bold text-[#057835]">
              STUDENT
            </span>{' '}
            DASHBOARD
          </h1>
        </div>

        <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
          <StudentCard />
          <NotificationBar />
        </div>
        <div>
          <Subjects />
        </div>
        <div>
          <Timer />
        </div>
        <div className="">
          <ChartThree />
        </div>
      </div>
    </DefaultLayout>
  );
};

export default MainPage;
