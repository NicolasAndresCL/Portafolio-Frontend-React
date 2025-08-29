import { extendTheme } from '@chakra-ui/react';

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
};

const colors = {
  brand: {
    50: '#fef3c7',
    100: '#fde68a',
    300: '#fbbf24',
    500: '#f97316',
    700: '#c2410c',
    900: '#78350f',
  },
  slate: {
    900: '#0F172A',
    800: '#1E293B',
    700: '#334155',
    600: '#475569',
    400: '#94A3B8',
    50: '#F8FAFC',
  },
};

const fonts = {
  heading: `'Inter', sans-serif`,
  body: `'Inter', sans-serif`,
};

const shadows = {
  card: '0 4px 12px rgba(0, 0, 0, 0.15)',
  cardHover: '0 6px 16px rgba(0, 0, 0, 0.25)',
};

const breakpoints = {
  sm: '30em',   // 480px
  md: '48em',   // 768px
  lg: '62em',   // 992px
  xl: '80em',   // 1280px
  '2xl': '96em' // 1536px
};

const components = {
  Button: {
    baseStyle: {
      fontWeight: 'medium',
      borderRadius: 'md',
    },
    variants: {
      solid: {
        bg: 'brand.500',
        color: 'white',
        _hover: { bg: 'brand.700' },
      },
      outline: {
        borderColor: 'brand.500',
        color: 'brand.500',
        _hover: { bg: 'brand.50' },
      },
    },
  },
  Heading: {
    baseStyle: {
      fontWeight: 'bold',
      letterSpacing: '-0.02em',
    },
  },
};

const theme = extendTheme({
  config,
  colors,
  fonts,
  shadows,
  breakpoints,
  components,
});

export default theme;
