import React from 'react';
import { Flex } from '@radix-ui/themes';
import { styled } from '@/stitches.config';
import BasicMenu from './BasicMenu';

// 🎨 Estilos con tokens VSCode Dark+
const Section = styled('section', {
  width: '100%',
  paddingTop: '2.5rem',
  display: 'flex',
  justifyContent: 'center',
  backgroundColor: '$background',
});

const Container = styled('div', {
  width: '100%',
  maxWidth: '96rem',
  padding: '0 $4',
  position: 'relative',
});


const HeroCard = styled('div', {
  position: 'relative',
  overflow: 'visible',
  margin: '0 auto',
  borderRadius: '$xl',
  backgroundColor: '$surface',
  border: '1px solid $border',
  boxShadow: '$strong',
}); 

const ContentWrapper = styled(Flex, {
  position: 'relative',
  zIndex: 1,
  padding: '$5',
  gap: '$6',
  flexDirection: 'column',
  alignItems: 'center',
  '@bp2': {
    flexDirection: 'row',
    alignItems: 'stretch',
  },
});

const TextBlock = styled('div', {
  maxWidth: '40rem',
  margin: '0 auto',
  textAlign: 'center',
  '@bp2': {
    textAlign: 'left',
    margin: 0,
  },
});

const AvatarCard = styled('div', {
  backgroundColor: '$panel',
  padding: '$4',
  borderRadius: '$xl',
  boxShadow: '$soft',
  width: '100%',
  maxWidth: '20rem',
  textAlign: 'center',
  border: '1px solid $border',
});

const AvatarImage = styled('img', {
  borderRadius: '9999px',
  width: '8rem',
  height: '8rem',
  objectFit: 'cover',
  border: '4px solid $accent',
  boxShadow: '0 0 10px rgba(0,0,0,0.2)',
  margin: '0 auto',
});

const DownloadLink = styled('a', {
  fontWeight: 'bold',
  fontSize: '$base',
  color: '$accent',
  textDecoration: 'none',
  transition: 'transform 0.2s ease, color 0.2s ease',
  '&:hover': {
    color: '$accentHover',
    transform: 'scale(1.05)',
  },
});

const Title = styled('h1', {
  fontSize: '$xl',
  fontWeight: 'bold',
  fontFamily: '$mono',
  color: '$syntaxFunction',
  lineHeight: 1.3,
});

const Subtitle = styled('p', {
  fontSize: '$base',
  fontFamily: '$body',
  color: '$syntaxString',
  marginTop: '$2',
});

const Role = styled('p', {
  fontSize: '$sm',
  fontFamily: '$mono',
  color: '$syntaxKeyword',
  marginTop: '$2',
});

const Description = styled('p', {
  fontSize: '$sm',
  fontFamily: '$body',
  color: '$syntaxComment',
  marginTop: '$2',
});

export default function TituloCard() {
  return (
    <Section>
      <Container>
        <HeroCard>
          

          <ContentWrapper>
            <TextBlock>
              <Title>
                Portafolio de <br />Nicolás Andrés Cano Leal
              </Title>
              <Subtitle>
                Desarrollador Backend Python con experiencia en la construcción de APIs robustas y escalables.
              </Subtitle>
              <Flex gap="3" mt="3" justify="center" wrap="wrap">
                <BasicMenu />
                <DownloadLink href="/NicolasCano_BackendDeveloper_CV.pdf" download>
                  Descargar CV →
                </DownloadLink>
              </Flex>
            </TextBlock>

            <AvatarCard>
              <AvatarImage src="/public/perfil-foto-nc.png" alt="Foto de Nicolás Cano" />
              <Title style={{ fontSize: '1.25rem' }}>Nicolás Cano</Title>
              <Role>Backend & Data Engineering</Role>
              <Description>
                Arquitectura modular, escalabilidad y documentación impecable.
              </Description>
            </AvatarCard>
          </ContentWrapper>
        </HeroCard>
      </Container>
    </Section>
  );
}
