import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import ProjectCard from './ProjectCard';

const CarruselProjects = ({ projects }) => {
  return (
    <section className="w-full py-8 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={16}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          breakpoints={{
            640: { slidesPerView: 1.5, spaceBetween: 16 },
            768: { slidesPerView: 2, spaceBetween: 24 },
            1024: { slidesPerView: 3, spaceBetween: 32 },
            1280: { slidesPerView: 4, spaceBetween: 40 },
          }}
          className="pb-10"
        >
          {projects.map((project) => (
            <SwiperSlide key={project.id} className="flex justify-center">
              <ProjectCard project={project} className="w-full" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default CarruselProjects;
