import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import SkillCard from './SkillCard';

const SkillsCarousel = ({ skills }) => {
  return (
    <section className="w-full py-8 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={24}
          slidesPerView={2}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            480: { slidesPerView: 3, spaceBetween: 24 },
            768: { slidesPerView: 4, spaceBetween: 32 },
            1024: { slidesPerView: 5, spaceBetween: 32 },
          }}
          className="pb-10"
        >
          {skills.map((skill, index) => (
            <SwiperSlide key={index} className="flex justify-center">
              <SkillCard skill={skill} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default SkillsCarousel;
