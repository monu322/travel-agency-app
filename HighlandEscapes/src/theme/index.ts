export { colors } from './colors';
export { typography, fontFamily, fontSize, fontWeight, lineHeight } from './typography';
export { spacing, borderRadius, shadows } from './spacing';

// Theme object for easy access
import { colors } from './colors';
import { typography, fontFamily, fontSize, fontWeight } from './typography';
import { spacing, borderRadius, shadows } from './spacing';

export const theme = {
  colors,
  typography,
  fontFamily,
  fontSize,
  fontWeight,
  spacing,
  borderRadius,
  shadows,
};

export type Theme = typeof theme;
