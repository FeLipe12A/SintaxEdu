import React from 'react';
import { View, Text, StyleSheet, ViewStyle, StyleProp } from 'react-native';
import { Image } from 'expo-image';
import { colors } from '@/constants/colors';
import { fontSizes, fontWeights } from '@/constants/typography';

const logoAsset = require('@/assets/images/logo.png');

export type LogoSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | number;

export interface LogoProps {
  size?: LogoSize;
  showText?: boolean;
  textPosition?: 'bottom' | 'right';
  style?: StyleProp<ViewStyle>;
}

export const Logo: React.FC<LogoProps> = ({
  size = 'md',
  showText = true,
  textPosition = 'bottom',
  style,
}) => {
  const getDimension = (s: LogoSize): number => {
    if (typeof s === 'number') return s;
    switch (s) {
      case 'xs':
        return 28;
      case 'sm':
        return 40;
      case 'md':
        return 64;
      case 'lg':
        return 88;
      case 'xl':
        return 112;
      default:
        return 64;
    }
  };

  const dimension = getDimension(size);
  const isRow = textPosition === 'right';

  return (
    <View style={[styles.wrapper, isRow && styles.wrapperRow, style]}>
      {/* Imagem Oficial da Logo */}
      <Image
        source={logoAsset}
        style={{
          width: dimension,
          height: dimension,
          borderRadius: dimension * 0.22,
        }}
        contentFit="contain"
        transition={200}
      />

      {/* Tipografia da Marca SintaxEdu */}
      {showText && (
        <View style={[styles.textContainer, isRow ? styles.textRowInline : styles.textRowBottom]}>
          <Text
            style={[
              styles.brandSintax,
              dimension <= 36 && styles.textXs,
              dimension <= 48 && dimension > 36 && styles.textSm,
              dimension >= 88 && styles.textLg,
            ]}
          >
            Sintax
          </Text>
          <Text
            style={[
              styles.brandEdu,
              dimension <= 36 && styles.textXs,
              dimension <= 48 && dimension > 36 && styles.textSm,
              dimension >= 88 && styles.textLg,
            ]}
          >
            Edu
          </Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  wrapperRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textRowBottom: {
    marginTop: 10,
  },
  textRowInline: {
    marginLeft: 8,
  },
  brandSintax: {
    fontSize: fontSizes.xxl,
    fontWeight: fontWeights.bold,
    color: colors.textPrimary,
    letterSpacing: -0.5,
  },
  brandEdu: {
    fontSize: fontSizes.xxl,
    fontWeight: fontWeights.bold,
    color: colors.primary,
    letterSpacing: -0.5,
  },
  textXs: {
    fontSize: fontSizes.lg,
  },
  textSm: {
    fontSize: fontSizes.xl,
  },
  textLg: {
    fontSize: fontSizes.display + 2,
  },
});
