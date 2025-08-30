import { styled } from '@/stitches.config';

export const Button = styled('button', {
  fontFamily: '$mono',
  fontWeight: '600',
  fontSize: '$base',
  padding: '$2 $4',
  borderRadius: '$md',
  cursor: 'pointer',
  border: 'none',
  transition: 'background-color 0.2s ease, transform 0.2s ease',
  boxShadow: '$soft',

  '&:hover': {
    transform: 'scale(1.02)',
  },

  variants: {
    variant: {
      primary: {
        backgroundColor: '$syntaxFunction',
        color: 'white',
        '&:hover': { backgroundColor: '$accentHover' },
      },
      ghost: {
        backgroundColor: 'transparent',
        border: '1px solid $border',
        color: '$text',
        '&:hover': { backgroundColor: '$panel' },
      },
      danger: {
        backgroundColor: '$syntaxError',
        color: 'white',
        '&:hover': { backgroundColor: '#d43c3c' },
      },
    },
  },
});
