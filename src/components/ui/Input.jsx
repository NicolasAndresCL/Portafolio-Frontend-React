import { styled } from '@/stitches.config';

export const Input = styled('input', {
  width: '100%',
  padding: '$2 $3',
  borderRadius: '$md',
  backgroundColor: '$panel',
  color: '$text',
  border: '1px solid $border',
  fontSize: '$sm',
  fontFamily: '$mono',
  outline: 'none',
  transition: 'border-color 0.2s ease, box-shadow 0.2s ease',

  '&::placeholder': {
    color: '$muted',
  },

  '&:focus': {
    borderColor: '$accent',
    boxShadow: '0 0 0 2px $colors$accent',
  },

  variants: {
    state: {
      error: {
        borderColor: '$syntaxError',
        boxShadow: '0 0 0 2px $colors$syntaxError',
      },
      success: {
        borderColor: '$success',
        boxShadow: '0 0 0 2px $colors$success',
      },
    },
  },
});
