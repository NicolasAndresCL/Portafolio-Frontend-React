import React from "react";
import Slider from "react-slick";
import SkillCard from "./SkillCard";

const SkillsCarousel = ({ skills }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 2,
    arrows: true,
    responsive: [
      {
        breakpoint: 1280, // pantallas grandes
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768, // pantallas medianas
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480, // móviles
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <div className="w-full px-4 py-8 bg-transparent from-cyan-900 to-black">
      
      <Slider {...settings}>
        {skills.map((skill, index) => (
          <div key={index} className="px-2">
            <SkillCard skill={skill} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SkillsCarousel;
