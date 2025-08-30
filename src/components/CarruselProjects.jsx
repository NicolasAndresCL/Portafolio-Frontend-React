import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { styled } from '@/stitches.config';
import ProjectCard from './ProjectCard';

// 🎨 Estilos con tokens VSCode Dark+
const Section = styled('section', {
  width: '100%',
  backgroundColor: '$background',
  padding: '$5 $3',
});

const Container = styled('div', {
  maxWidth: '96rem',
  margin: '0 auto',
});

const SlideWrapper = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  paddingBottom: '$6',
});

const SwiperStyled = styled(Swiper, {
  paddingBottom: '$6',

  '.swiper-button-next, .swiper-button-prev': {
    color: '$syntaxFunction',
    transition: 'color 0.3s ease',
    '&:hover': {
      color: '$accentHover',
    },
  },

  '.swiper-pagination-bullet': {
    backgroundColor: '$muted',
    opacity: 0.6,
  },

  '.swiper-pagination-bullet-active': {
    backgroundColor: '$syntaxFunction',
    opacity: 1,
  },
});

export default function CarruselProjects({ projects }) {
  return (
    <Section>
      <Container>
        <SwiperStyled
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
        >
          {projects.map((project) => (
            <SwiperSlide key={project.id}>
              <SlideWrapper>
                <ProjectCard project={project} />
              </SlideWrapper>
            </SwiperSlide>
          ))}
        </SwiperStyled>
      </Container>
    </Section>
  );
}
