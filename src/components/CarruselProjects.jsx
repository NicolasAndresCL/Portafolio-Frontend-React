import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import ProjectCard from './ProjectCard';

const CarruselProjects = ({ projects }) => {
  return (
    <div className="w-full px-4 py-8">
      <div className="max-w-6xl mx-auto">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={16} // Espaciado reducido para pantallas pequeñas
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          breakpoints={{
            640: { slidesPerView: 1.5, spaceBetween: 16 }, // Tablets pequeñas
            768: { slidesPerView: 2, spaceBetween: 24 }, // Tablets medianas
            1024: { slidesPerView: 3, spaceBetween: 32 }, // Laptops
            1280: { slidesPerView: 4, spaceBetween: 40 }, // Pantallas grandes
          }}
          className="pb-10"
        >
          {projects.map((project) => (
            <SwiperSlide key={project.id}>
              <ProjectCard project={project} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default CarruselProjects;