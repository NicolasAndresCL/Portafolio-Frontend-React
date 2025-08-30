import { styled } from '@/stitches.config';

export const Card = styled('div', {
  backgroundColor: '$surface',
  borderRadius: '$lg',
  padding: '$4',
  border: '1px solid $border',
  boxShadow: '$soft',

  variants: {
    elevation: {
      none: { boxShadow: 'none' },
      soft: { boxShadow: '$soft' },
      strong: { boxShadow: '$strong' },
    },
    tone: {
      default: { backgroundColor: '$surface' },
      accent: { backgroundColor: '$syntaxFunction' },
      error: { backgroundColor: '$syntaxError' },
    },
  },
});
