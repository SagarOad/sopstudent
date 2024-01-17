import * as React from 'react';
import Slider from 'react-slick';
import axios from '../api/axios';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

const GallerySlide = () => {
  const [galleryImgs, setGalleryImgs] = React.useState([]);
  const [galleryImgsPath, setGalleryImgsPath] = React.useState('');

  const user = localStorage.getItem('user') || null;
  const userData = user ? JSON.parse(user) : null;

  React.useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`/listOfAlbums`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
          params: {
            id: userData?.user_id,
          },
        });
        setGalleryImgs(response?.data?.Albums);
        setGalleryImgsPath(response?.data?.imagePath);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchUserData();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };

  return (
    // <div className='justify-center items-center w-44'>
    //       <Slider className=' w-full flex' autoplay centerMode={true} rows={2} slidesToShow={3} slidesToScroll={3} speed={500} infinite dots>
    //         <div className='bg-red w-full'>
    //         {galleryImgs &&
    //           galleryImgs.map((item) => (
    //               <img
    //                 src={`${galleryImgsPath}${item?.coverId}/${item?.coverImage}`}
    //                 alt="Slide 1"
    //                 className='w-full z-50'
    //               />

    //             ))}

    //             </div>

    // {/* <div className='w-full'>
    //           <img src="https://epe.brightspotcdn.com/53/66/b17323e84e668e02e25d5b4a7a93/teacher-students-classroom.jpg" alt="Slide 1" className='w-full'/>
    //         </div>

    // <div className='w-full'>
    //           <img src="https://epe.brightspotcdn.com/53/66/b17323e84e668e02e25d5b4a7a93/teacher-students-classroom.jpg" alt="Slide 2" className='w-full'/>
    //         </div> */}

    //         {/* <div>
    //           <img src="https://epe.brightspotcdn.com/53/66/b17323e84e668e02e25d5b4a7a93/teacher-students-classroom.jpg" alt="Slide 2" />
    //         </div>
    //         <div>
    //           <img src="https://assets-homepages-learning.3plearning.net/wp-content/uploads/2020/06/blog-20-student-engagement-strategies-captivating-classroom.png" alt="Slide 3" />
    //         </div> */}
    //       </Slider>
    // </div>

    <>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        {galleryImgs &&
          galleryImgs.map((item, ind) => (
            <SwiperSlide key={item?.coverId}>
              <img
                key={item?.coverId}
                src={`${galleryImgsPath}${item?.coverId}/${item?.coverImage}`}
                alt={`Slide ${ind}`}
              />
            </SwiperSlide>
          ))}
      </Swiper>
    </>
  );
};

export default GallerySlide;
