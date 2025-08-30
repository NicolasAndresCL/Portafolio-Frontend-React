import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { styled } from '@/stitches.config';
import SkillCard from './SkillCard';

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

export default function SkillsCarousel({ skills }) {
  return (
    <Section>
      <Container>
        <SwiperStyled
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
        >
          {skills.map((skill, index) => (
            <SwiperSlide key={index}>
              <SlideWrapper>
                <SkillCard skill={skill} />
              </SlideWrapper>
            </SwiperSlide>
          ))}
        </SwiperStyled>
      </Container>
    </Section>
  );
}
