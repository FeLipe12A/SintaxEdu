import React from 'react';
import { Text, TextProps, StyleSheet, TextStyle, StyleProp } from 'react-native';
import { colors } from '@/constants/colors';
import { fontSizes, fontWeights, lineHeights, fontFamily, mathFontFamily } from '@/constants/typography';

export type TypographyVariant =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'body'
  | 'bodyBold'
  | 'bodySmall'
  | 'caption'
  | 'label'
  | 'math'
  | 'link';

export interface AppTextProps extends TextProps {
  variant?: TypographyVariant;
  color?: string;
  weight?: keyof typeof fontWeights;
  align?: TextStyle['textAlign'];
  style?: StyleProp<TextStyle>;
  children: React.ReactNode;
}

export const AppText: React.FC<AppTextProps> = ({
  variant = 'body',
  color,
  weight,
  align,
  style,
  children,
  ...props
}) => {
  const variantStyle = styles[variant];
  const customStyle: TextStyle = {};

  if (color) customStyle.color = color;
  if (weight) customStyle.fontWeight = fontWeights[weight];
  if (align) customStyle.textAlign = align;

  return (
    <Text style={[styles.base, variantStyle, customStyle, style]} {...props}>
      {children}
    </Text>
  );
};

export const Heading: React.FC<Omit<AppTextProps, 'variant'> & { level?: 1 | 2 | 3 }> = ({
  level = 1,
  ...props
}) => {
  const variant: TypographyVariant = level === 1 ? 'h1' : level === 2 ? 'h2' : 'h3';
  return <AppText variant={variant} {...props} />;
};

export const BodyText: React.FC<Omit<AppTextProps, 'variant'>> = (props) => (
  <AppText variant="body" {...props} />
);

export const CaptionText: React.FC<Omit<AppTextProps, 'variant'>> = (props) => (
  <AppText variant="caption" {...props} />
);

export const LabelText: React.FC<Omit<AppTextProps, 'variant'>> = (props) => (
  <AppText variant="label" {...props} />
);

export const MathText: React.FC<Omit<AppTextProps, 'variant'>> = (props) => (
  <AppText variant="math" {...props} />
);

const styles = StyleSheet.create({
  base: {
    fontFamily,
    color: colors.textPrimary,
  },
  h1: {
    fontSize: fontSizes.display,
    lineHeight: lineHeights.display,
    fontWeight: fontWeights.bold,
    color: colors.textPrimary,
    letterSpacing: -0.5,
  },
  h2: {
    fontSize: fontSizes.xl,
    lineHeight: lineHeights.xl,
    fontWeight: fontWeights.bold,
    color: colors.textPrimary,
    letterSpacing: -0.3,
  },
  h3: {
    fontSize: fontSizes.lg,
    lineHeight: lineHeights.lg,
    fontWeight: fontWeights.semibold,
    color: colors.textPrimary,
  },
  body: {
    fontSize: fontSizes.md,
    lineHeight: lineHeights.md,
    fontWeight: fontWeights.regular,
    color: colors.textSecondary,
  },
  bodyBold: {
    fontSize: fontSizes.md,
    lineHeight: lineHeights.md,
    fontWeight: fontWeights.semibold,
    color: colors.textPrimary,
  },
  bodySmall: {
    fontSize: fontSizes.sm,
    lineHeight: lineHeights.sm,
    fontWeight: fontWeights.regular,
    color: colors.textSecondary,
  },
  caption: {
    fontSize: fontSizes.xs,
    lineHeight: lineHeights.xs,
    fontWeight: fontWeights.medium,
    color: colors.textMuted,
  },
  label: {
    fontSize: fontSizes.xs,
    lineHeight: lineHeights.xs,
    fontWeight: fontWeights.semibold,
    color: colors.textMuted,
    textTransform: 'uppercase',
    letterSpacing: 0.8,
  },
  math: {
    fontFamily: mathFontFamily,
    fontSize: fontSizes.xl,
    lineHeight: lineHeights.xl,
    fontWeight: fontWeights.medium,
    color: colors.textPrimary,
    letterSpacing: 0.5,
  },
  link: {
    fontSize: fontSizes.sm,
    lineHeight: lineHeights.sm,
    fontWeight: fontWeights.semibold,
    color: colors.primary,
  },
});
