import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ActivityIndicator,
  View,
  ViewStyle,
  TextStyle,
  StyleProp,
} from 'react-native';
import { colors } from '@/constants/colors';
import { fontSizes, fontWeights } from '@/constants/typography';

export type ButtonVariant =
  | 'primary'    // Verde esmeralda (#10B981) - Entrar na Conta, Continuar, Concluído
  | 'cyan'       // Azul claro da marca (#38BDF8) - Finalizar Cadastro, Nova Operação
  | 'purple'     // Roxo claro (#818CF8) - Síntese IA
  | 'dark'       // Cinza ardósia (#1E293B) com borda - Salvar, Histórico, Copiar
  | 'outline'    // Fundo transparente com borda
  | 'danger'     // Botão de perigo / Sair da conta
  | 'ghost';     // Fundo transparente sem borda

export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps {
  title: string;
  onPress: () => void;
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  loading?: boolean;
  disabled?: boolean;
  fullWidth?: boolean;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  activeOpacity?: number;
}

export const Button: React.FC<ButtonProps> = ({
  title,
  onPress,
  variant = 'primary',
  size = 'md',
  icon,
  iconPosition = 'left',
  loading = false,
  disabled = false,
  fullWidth = true,
  style,
  textStyle,
  activeOpacity = 0.8,
}) => {
  const containerStyle = [
    styles.base,
    styles[size],
    variantStyles[variant].container,
    fullWidth && styles.fullWidth,
    disabled && styles.disabledContainer,
    style,
  ];

  const labelStyle = [
    styles.baseText,
    styles[`${size}Text` as keyof typeof styles],
    variantStyles[variant].text,
    disabled && styles.disabledText,
    textStyle,
  ];

  const spinnerColor = variantStyles[variant].spinnerColor;

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled || loading}
      activeOpacity={activeOpacity}
      style={containerStyle}
    >
      {loading ? (
        <ActivityIndicator color={spinnerColor} size="small" />
      ) : (
        <View style={styles.contentRow}>
          {icon && iconPosition === 'left' && (
            <View style={styles.iconLeft}>{icon}</View>
          )}
          <Text style={labelStyle}>{title}</Text>
          {icon && iconPosition === 'right' && (
            <View style={styles.iconRight}>{icon}</View>
          )}
        </View>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  base: {
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  fullWidth: {
    width: '100%',
  },
  contentRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconLeft: {
    marginRight: 8,
  },
  iconRight: {
    marginLeft: 8,
  },
  baseText: {
    fontWeight: fontWeights.semibold,
    textAlign: 'center',
  },
  // Tamanhos
  sm: {
    height: 38,
    paddingHorizontal: 14,
    borderRadius: 10,
  },
  smText: {
    fontSize: fontSizes.sm,
  },
  md: {
    height: 48,
    paddingHorizontal: 20,
    borderRadius: 12,
  },
  mdText: {
    fontSize: fontSizes.md,
  },
  lg: {
    height: 54,
    paddingHorizontal: 24,
    borderRadius: 14,
  },
  lgText: {
    fontSize: fontSizes.lg,
  },
  // Desabilitado
  disabledContainer: {
    opacity: 0.5,
  },
  disabledText: {
    opacity: 0.7,
  },
});

const variantStyles: Record<
  ButtonVariant,
  { container: ViewStyle; text: TextStyle; spinnerColor: string }
> = {
  primary: {
    container: {
      backgroundColor: colors.accentGreen,
    },
    text: {
      color: '#FFFFFF',
      fontWeight: fontWeights.bold,
    },
    spinnerColor: '#FFFFFF',
  },
  cyan: {
    container: {
      backgroundColor: colors.primary,
    },
    text: {
      color: colors.backgroundDark,
      fontWeight: fontWeights.bold,
    },
    spinnerColor: colors.backgroundDark,
  },
  purple: {
    container: {
      backgroundColor: colors.secondary,
    },
    text: {
      color: colors.backgroundDark,
      fontWeight: fontWeights.bold,
    },
    spinnerColor: colors.backgroundDark,
  },
  dark: {
    container: {
      backgroundColor: colors.backgroundCard,
      borderWidth: 1,
      borderColor: colors.border,
    },
    text: {
      color: colors.textPrimary,
    },
    spinnerColor: colors.textPrimary,
  },
  outline: {
    container: {
      backgroundColor: 'transparent',
      borderWidth: 1,
      borderColor: colors.primary,
    },
    text: {
      color: colors.primary,
    },
    spinnerColor: colors.primary,
  },
  danger: {
    container: {
      backgroundColor: 'transparent',
      borderWidth: 1,
      borderColor: 'rgba(239, 68, 68, 0.25)',
    },
    text: {
      color: colors.error,
    },
    spinnerColor: colors.error,
  },
  ghost: {
    container: {
      backgroundColor: 'transparent',
    },
    text: {
      color: colors.primary,
    },
    spinnerColor: colors.primary,
  },
};
