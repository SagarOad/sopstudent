import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './Styles.css';

import SignIn from './pages/Authentication/SignIn';
import SignUp from './pages/Authentication/SignUp';
import NotificationPage from './pages/NotificationPage';
import MainPage from './pages/Dashboard/MainPage';
import FormElements from './pages/Form/FormElements';
import FormLayout from './pages/Form/FormLayout';
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import Tables from './pages/Tables';
import MySkills from './components/MySkills';
import MyDocuments from './components/MyDocuments';
import MyRecords from './components/MyRecords';
import MyExams from './components/MyExams';
import MyQuizes from './MyQuizes';
import UploadDocument from './components/UploadDocument';
import EducationHistory from './components/EducationHistory';
import StudentRegistration from './components/StudentRegistration';
import ProgramRegistration from './components/ProgramRegistration';
import Challan from './components/Challan';
import Verification from './components/Verification';
import ChooseSubjects from './components/ChooseSubjects';
import ChooseChapters from './components/ChooseChapters';
import StartQuiz from './components/StartQuiz';
import QuizPaper from './components/QuizPaper';
import Guide from './components/Guide';
import ProtectedRoutes from './components/protectedRoutes';
import RegistrationTabs from './components/RegistrationTabs';

import SamplePaper from './components/SamplePaper';
import Faq from './components/Faq';
import Contact from './components/Contact';
import LeaderBoard from './LeaderBoard';
import VerifyEmail from './components/VerifyEmail';
import VerifyOTP from './components/VerifyOTP';
import ReverseProtectedRoutes from './components/protectedRoutes/reverseProtection';
import ForgetPassword from './components/ForgetPassword';
import VerifyEmailForgetPassword from './components/VerifyEmailForgetPassword';
import ChangePassword from './components/ChangePassword';
import MyLearningMaterial from './components/MyLerningMaterial';
import WalletPage from './pages/WalletPage';
import StudentChallan from './pages/studentChallan';
import Cookies from 'js-cookie';
import { useAuthContext } from './hooks/useAuthContext';

const xorEncrypt = (data: string, key: string) => {
  const encryptedData = data.split('').map((char, i) => {
    const keyChar = key.charCodeAt(i % key.length);
    const encryptedChar = char.charCodeAt(0) ^ keyChar;
    return String.fromCharCode(encryptedChar);
  });
  return encryptedData.join('');
};
const xorDecrypt = (encryptedData: string, key: string) => {
  return xorEncrypt(encryptedData, key); // Since XOR is symmetric, encryption and decryption are the same
};

function App() {
  const { dispatch } = useAuthContext();

  React.useEffect(() => {
    const data = Cookies.get('%25%15M%250');
    if (data) {
      if (data) {
        const decryptedData = xorDecrypt(data, 'SpakistanOzindabadP');

        dispatch({ type: 'LOGIN', payload: JSON.parse(decryptedData) });
      }
    } else {
      dispatch({
        type: 'LOGOUT',
        payload: null,
      });
    }
  }, [dispatch]);

  const [loading, setLoading] = useState<boolean>(true);

  const preloader = document.getElementById('preloader');

  if (preloader) {
    setTimeout(() => {
      preloader.style.display = 'none';
      setLoading(false);
    }, 2000);
  }

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return loading ? (
    <p className=" text-center text-danger">Failed to lead app</p>
  ) : (
    <>
      <Routes>
        {/* <Route path="/" element={<ECommerce />} /> */}
        <Route path="/" element={<ProtectedRoutes Component={MainPage} />} />
        <Route
          path="/calendar"
          element={<ProtectedRoutes Component={NotificationPage} />}
        />
        <Route
          path="/wallet"
          element={<ProtectedRoutes Component={WalletPage} />}
        />

        <Route
          path="/profile"
          element={<ProtectedRoutes Component={Profile} />}
        />
        <Route
          path="/student-challan"
          element={<ProtectedRoutes Component={StudentChallan} />}
        />
        <Route
          path="/studentregistration"
          element={<ProtectedRoutes Component={StudentRegistration} />}
        />
        <Route
          path="/notifications-page"
          element={<ProtectedRoutes Component={NotificationPage} />}
        />
        <Route
          path="/myeducation/educationhistory"
          element={<ProtectedRoutes Component={EducationHistory} />}
        />

        <Route
          path="/myeducation/myskills"
          element={<ProtectedRoutes Component={MySkills} />}
        />
        <Route
          path="/myeducation/mydocuments"
          element={<ProtectedRoutes Component={MyDocuments} />}
        />
        <Route
          path="/myeducation/mylearningmaterial"
          element={<ProtectedRoutes Component={MyLearningMaterial} />}
        />
        <Route
          path="/myeducation/myrecords"
          element={<ProtectedRoutes Component={MyRecords} />}
        />
        <Route
          path="/myeducation/myexams"
          element={<ProtectedRoutes Component={MyExams} />}
        />
        <Route
          path="/myeducation/myquizes"
          element={<ProtectedRoutes Component={MyQuizes} />}
        />
        <Route
          path="/forms/form-elements"
          element={<ProtectedRoutes Component={FormElements} />}
        />
        <Route
          path="/forms/form-layout"
          element={<ProtectedRoutes Component={FormLayout} />}
        />
        <Route
          path="/tables"
          element={<ProtectedRoutes Component={Tables} />}
        />
        <Route
          path="/settings"
          element={<ProtectedRoutes Component={Settings} />}
        />
        <Route
          path="/documentupload"
          element={<ProtectedRoutes Component={UploadDocument} />}
        />
        <Route
          path="/programregistration"
          element={<ProtectedRoutes Component={ProgramRegistration} />}
        />
        <Route
          path="/payment"
          element={<ProtectedRoutes Component={Challan} />}
        />
        <Route
          path="/verification"
          element={<ProtectedRoutes Component={Verification} />}
        />

        <Route
          path="/choosesubject"
          element={<ProtectedRoutes Component={ChooseSubjects} />}
        />
        <Route
          path="/choosechapters"
          element={<ProtectedRoutes Component={ChooseChapters} />}
        />
        <Route
          path="/startquiz"
          element={<ProtectedRoutes Component={StartQuiz} />}
        />
        <Route
          path="/myquizes/quizpaper"
          element={<ProtectedRoutes Component={QuizPaper} />}
        />
        <Route
          path="/leaderboard"
          element={<ProtectedRoutes Component={LeaderBoard} />}
        />
        <Route
          path="/contact"
          element={<ProtectedRoutes Component={Contact} />}
        />
        <Route path="/faq" element={<ProtectedRoutes Component={Faq} />} />
        <Route
          path="/samplepaper"
          element={<ProtectedRoutes Component={SamplePaper} />}
        />
        <Route
          path="/registrationtabs"
          element={<ProtectedRoutes Component={RegistrationTabs} />}
        />

        {/* Reverse Protected Routes */}
        <Route
          path="/login"
          element={<ReverseProtectedRoutes Component={SignIn} />}
        />
        <Route
          path="/signup"
          element={<ReverseProtectedRoutes Component={SignUp} />}
        />
        <Route
          path="/email/verification"
          element={<ReverseProtectedRoutes Component={VerifyOTP} />}
        />
        <Route
          path="/forgetpassword"
          element={<ReverseProtectedRoutes Component={ForgetPassword} />}
        />
        <Route
          path="/forgetpassword/verifyemail"
          element={
            <ReverseProtectedRoutes Component={VerifyEmailForgetPassword} />
          }
        />
        <Route
          path="/updatepassword"
          element={<ReverseProtectedRoutes Component={ChangePassword} />}
        />
        <Route
          path="/OTP"
          element={<ReverseProtectedRoutes Component={VerifyEmail} />}
        />

        <Route path="/guide" element={<ProtectedRoutes Component={Guide} />} />

        {/* <Route path="/calendar" element={<NotificationPage />} /> */}
        {/* <Route path="/profile" element={<Profile />} /> */}
        {/* <Route path="/studentregistration" element={<StudentRegistration />} /> */}
        {/* <Route path="/notifications-page" element={<NotificationPage />} /> */}
        {/* <Route
          path="/myeducation/educationhistory"
          element={<EducationHistory />}
        /> */}
        {/* <Route path="/myeducation/myskills" element={<MySkills />} /> */}
        {/* <Route path="/myeducation/mydocuments" element={<MyDocuments />} /> */}
        {/* <Route path="/myeducation/myrecords" element={<MyRecords />} /> */}
        {/* <Route path="/myeducation/myexams" element={<MyExams />} /> */}
        {/* <Route path="/myeducation/myquizes" element={<MyQuizes />} /> */}
        {/* <Route path="/forms/form-elements" element={<FormElements />} /> */}
        {/* <Route path="/forms/form-layout" element={<FormLayout />} /> */}
        {/* <Route path="/tables" element={<Tables />} /> */}
        {/* <Route path="/settings" element={<Settings />} /> */}
        {/* <Route path="/documentupload" element={<UploadDocument />} /> */}
        {/* <Route path="/programregistration" element={<ProgramRegistration />} /> */}
        {/* <Route path="/payment" element={<Challan />} /> */}
        {/* <Route path="/verification" element={<Verification />} /> */}
        {/* <Route path="/certificateupload" element={<CertificateUpload />} /> */}
        {/* <Route path="/choosesubject" element={<ChooseSubjects />} /> */}
        {/* <Route path="/choosechapters" element={<ChooseChapters />} /> */}
        {/* <Route path="/startquiz" element={<StartQuiz />} /> */}
        {/* <Route path="/quizpaper" element={<QuizPaper />} /> */}
        {/* <Route path="/guide" element={<Guide />} /> */}
      </Routes>
    </>
  );
}

export default App;
