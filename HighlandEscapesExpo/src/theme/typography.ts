import { TextStyle } from 'react-native';

export const fontFamily = {
  regular: 'Manrope-Regular',
  medium: 'Manrope-Medium',
  semiBold: 'Manrope-SemiBold',
  bold: 'Manrope-Bold',
  extraBold: 'Manrope-ExtraBold',
};

export const fontSize = {
  xs: 10,
  sm: 12,
  base: 14,
  md: 16,
  lg: 18,
  xl: 20,
  '2xl': 24,
  '3xl': 28,
  '4xl': 32,
  '5xl': 36,
};

export const lineHeight = {
  tight: 1.1,
  snug: 1.25,
  normal: 1.5,
  relaxed: 1.625,
};

export const fontWeight = {
  regular: '400' as TextStyle['fontWeight'],
  medium: '500' as TextStyle['fontWeight'],
  semiBold: '600' as TextStyle['fontWeight'],
  bold: '700' as TextStyle['fontWeight'],
  extraBold: '800' as TextStyle['fontWeight'],
};

export const typography = {
  // Display/Hero text
  displayLarge: {
    fontSize: fontSize['5xl'],
    fontWeight: fontWeight.extraBold,
    lineHeight: fontSize['5xl'] * lineHeight.tight,
  } as TextStyle,

  displayMedium: {
    fontSize: fontSize['4xl'],
    fontWeight: fontWeight.extraBold,
    lineHeight: fontSize['4xl'] * lineHeight.tight,
  } as TextStyle,

  displaySmall: {
    fontSize: fontSize['3xl'],
    fontWeight: fontWeight.extraBold,
    lineHeight: fontSize['3xl'] * lineHeight.tight,
  } as TextStyle,

  // Headings
  h1: {
    fontSize: fontSize['3xl'],
    fontWeight: fontWeight.extraBold,
    lineHeight: fontSize['3xl'] * lineHeight.tight,
  } as TextStyle,

  h2: {
    fontSize: fontSize['2xl'],
    fontWeight: fontWeight.bold,
    lineHeight: fontSize['2xl'] * lineHeight.snug,
  } as TextStyle,

  h3: {
    fontSize: fontSize.xl,
    fontWeight: fontWeight.bold,
    lineHeight: fontSize.xl * lineHeight.snug,
  } as TextStyle,

  h4: {
    fontSize: fontSize.lg,
    fontWeight: fontWeight.bold,
    lineHeight: fontSize.lg * lineHeight.snug,
  } as TextStyle,

  // Body text
  bodyLarge: {
    fontSize: fontSize.md,
    fontWeight: fontWeight.medium,
    lineHeight: fontSize.md * lineHeight.relaxed,
  } as TextStyle,

  bodyMedium: {
    fontSize: fontSize.base,
    fontWeight: fontWeight.regular,
    lineHeight: fontSize.base * lineHeight.relaxed,
  } as TextStyle,

  bodySmall: {
    fontSize: fontSize.sm,
    fontWeight: fontWeight.regular,
    lineHeight: fontSize.sm * lineHeight.relaxed,
  } as TextStyle,

  // Labels
  labelLarge: {
    fontSize: fontSize.base,
    fontWeight: fontWeight.bold,
    lineHeight: fontSize.base * lineHeight.normal,
  } as TextStyle,

  labelMedium: {
    fontSize: fontSize.sm,
    fontWeight: fontWeight.semiBold,
    lineHeight: fontSize.sm * lineHeight.normal,
  } as TextStyle,

  labelSmall: {
    fontSize: fontSize.xs,
    fontWeight: fontWeight.semiBold,
    lineHeight: fontSize.xs * lineHeight.normal,
  } as TextStyle,

  // Button text
  buttonLarge: {
    fontSize: fontSize.md,
    fontWeight: fontWeight.bold,
    lineHeight: fontSize.md * lineHeight.normal,
  } as TextStyle,

  buttonMedium: {
    fontSize: fontSize.base,
    fontWeight: fontWeight.bold,
    lineHeight: fontSize.base * lineHeight.normal,
  } as TextStyle,

  buttonSmall: {
    fontSize: fontSize.sm,
    fontWeight: fontWeight.bold,
    lineHeight: fontSize.sm * lineHeight.normal,
  } as TextStyle,

  // Caption/Small text
  caption: {
    fontSize: fontSize.xs,
    fontWeight: fontWeight.medium,
    lineHeight: fontSize.xs * lineHeight.normal,
  } as TextStyle,
};

export type Typography = typeof typography;
