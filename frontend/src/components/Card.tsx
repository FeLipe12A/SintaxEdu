import React from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  ViewStyle,
  StyleProp,
} from 'react-native';
import { colors } from '@/constants/colors';

export interface CardProps {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  onPress?: () => void;
  bordered?: boolean;
  variant?: 'default' | 'subtle' | 'highlight';
}

export const Card: React.FC<CardProps> = ({
  children,
  style,
  onPress,
  bordered = true,
  variant = 'default',
}) => {
  const cardStyle = [
    styles.base,
    variantStyles[variant],
    bordered && styles.bordered,
    style,
  ];

  if (onPress) {
    return (
      <TouchableOpacity
        onPress={onPress}
        activeOpacity={0.85}
        style={cardStyle}
      >
        {children}
      </TouchableOpacity>
    );
  }

  return <View style={cardStyle}>{children}</View>;
};

const styles = StyleSheet.create({
  base: {
    borderRadius: 16,
    padding: 16,
  },
  bordered: {
    borderWidth: 1,
    borderColor: colors.border,
  },
});

const variantStyles: Record<'default' | 'subtle' | 'highlight', ViewStyle> = {
  default: {
    backgroundColor: colors.backgroundCard,
  },
  subtle: {
    backgroundColor: colors.backgroundInput,
  },
  highlight: {
    backgroundColor: colors.backgroundCard,
    borderWidth: 1.5,
    borderColor: colors.primary,
  },
};
