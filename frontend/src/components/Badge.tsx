import React from 'react';
import { View, Text, StyleSheet, ViewStyle, StyleProp } from 'react-native';
import { colors } from '@/constants/colors';
import { fontSizes, fontWeights } from '@/constants/typography';

export type BadgeVariant =
  | 'primary'   // Azul
  | 'purple'    // Roxo
  | 'green'     // Verde
  | 'warning'   // Âmbar/Laranja
  | 'muted'     // Cinza
  | 'outline';  // Borda sutil

export interface BadgeProps {
  label: string;
  variant?: BadgeVariant;
  icon?: React.ReactNode;
  style?: StyleProp<ViewStyle>;
}

export const Badge: React.FC<BadgeProps> = ({
  label,
  variant = 'muted',
  icon,
  style,
}) => {
  return (
    <View style={[styles.base, variantStyles[variant].container, style]}>
      {icon && <View style={styles.icon}>{icon}</View>}
      <Text style={[styles.text, variantStyles[variant].text]}>{label}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  base: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
    alignSelf: 'flex-start',
  },
  icon: {
    marginRight: 4,
  },
  text: {
    fontSize: fontSizes.xs,
    fontWeight: fontWeights.semibold,
  },
});

const variantStyles: Record<BadgeVariant, { container: ViewStyle; text: { color: string } }> = {
  primary: {
    container: { backgroundColor: colors.primaryMuted },
    text: { color: colors.primary },
  },
  purple: {
    container: { backgroundColor: colors.secondaryMuted },
    text: { color: colors.secondary },
  },
  green: {
    container: { backgroundColor: colors.accentGreenMuted },
    text: { color: colors.accentGreen },
  },
  warning: {
    container: { backgroundColor: 'rgba(245, 158, 11, 0.15)' },
    text: { color: colors.warning },
  },
  muted: {
    container: { backgroundColor: '#243247' },
    text: { color: colors.textSecondary },
  },
  outline: {
    container: {
      backgroundColor: 'transparent',
      borderWidth: 1,
      borderColor: colors.border,
    },
    text: { color: colors.textSecondary },
  },
};
