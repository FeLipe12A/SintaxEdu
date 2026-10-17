import React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  ViewStyle,
  StyleProp,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '@/constants/colors';

export type IconButtonVariant = 'surface' | 'ghost' | 'primary' | 'circle';

export interface IconButtonProps {
  icon: keyof typeof Ionicons.glyphMap;
  onPress: () => void;
  size?: number;
  iconSize?: number;
  color?: string;
  variant?: IconButtonVariant;
  style?: StyleProp<ViewStyle>;
  disabled?: boolean;
  active?: boolean;
  activeColor?: string;
}

export const IconButton: React.FC<IconButtonProps> = ({
  icon,
  onPress,
  size = 42,
  iconSize = 22,
  color,
  variant = 'surface',
  style,
  disabled = false,
  active = false,
  activeColor = colors.primary,
}) => {
  const iconColor = active
    ? activeColor
    : color || (variant === 'ghost' ? colors.textSecondary : colors.textPrimary);

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      activeOpacity={0.7}
      style={[
        styles.base,
        { width: size, height: size, borderRadius: variant === 'circle' ? size / 2 : 12 },
        styles[variant],
        active && styles.activeState,
        style,
      ]}
    >
      <Ionicons name={icon} size={iconSize} color={iconColor} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  base: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  surface: {
    backgroundColor: colors.backgroundCard,
    borderWidth: 1,
    borderColor: colors.border,
  },
  circle: {
    backgroundColor: colors.backgroundCard,
    borderWidth: 1,
    borderColor: colors.border,
  },
  ghost: {
    backgroundColor: 'transparent',
  },
  primary: {
    backgroundColor: colors.primary,
  },
  activeState: {
    borderColor: colors.primary,
    backgroundColor: colors.primaryMuted,
  },
});
