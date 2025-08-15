import React from 'react';
import Slider from 'react-slick';
import ProjectCard from './ProjectCard'; // tu componente actual

const CarruselProjects = ({ projects }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 }
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1 }
      }
    ]
  };

  return (
    <div className="w-full px-4 py-8 bg-transparent from-slate-900 to-black">
       
      <Slider {...settings}>
        {projects.map((project) => (
          <div key={project.id} className="px-2">
            <ProjectCard project={project} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CarruselProjects;
