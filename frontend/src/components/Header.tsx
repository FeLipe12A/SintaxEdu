import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  StyleProp,
  ViewStyle,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { router } from 'expo-router';
import { colors } from '@/constants/colors';
import { fontSizes, fontWeights } from '@/constants/typography';
import { IconButton } from '@/components/IconButton';
import { Logo } from '@/components/Logo';

export interface HeaderProps {
  title?: string;
  subtitle?: string;
  showBack?: boolean;
  onBack?: () => void;
  isBrand?: boolean;
  rightAction?: React.ReactNode;
  rightIcon?: 'more' | 'bookmark' | 'close';
  isBookmarked?: boolean;
  onRightPress?: () => void;
  style?: StyleProp<ViewStyle>;
  bordered?: boolean;
  transparent?: boolean;
}

export const Header: React.FC<HeaderProps> = ({
  title,
  subtitle,
  showBack = false,
  onBack,
  isBrand = false,
  rightAction,
  rightIcon,
  isBookmarked = false,
  onRightPress,
  style,
  bordered = false,
  transparent = false,
}) => {
  const insets = useSafeAreaInsets();

  const handleBack = () => {
    if (onBack) {
      onBack();
    } else {
      router.back();
    }
  };

  return (
    <View
      style={[
        styles.container,
        { paddingTop: Math.max(insets.top, 12) + 8 },
        bordered && styles.bordered,
        transparent ? styles.transparent : styles.solidBackground,
        style,
      ]}
    >
      <View style={styles.content}>
        {/* Lado Esquerdo */}
        <View style={styles.leftContainer}>
          {showBack && (
            <IconButton
              icon="chevron-back"
              variant="surface"
              size={40}
              iconSize={22}
              onPress={handleBack}
            />
          )}

          {isBrand && (
            <Logo size={32} showText={true} textPosition="right" />
          )}

          {!isBrand && !showBack && title && (
            <View>
              <Text style={styles.titleLeft}>{title}</Text>
              {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
            </View>
          )}
        </View>

        {/* Centro (Título quando há botão de voltar) */}
        {showBack && title && (
          <View style={styles.centerContainer} pointerEvents="none">
            <Text style={styles.titleCenter} numberOfLines={1}>
              {title}
            </Text>
            {subtitle && (
              <Text style={styles.subtitleCenter} numberOfLines={1}>
                {subtitle}
              </Text>
            )}
          </View>
        )}

        {/* Lado Direito */}
        <View style={styles.rightContainer}>
          {rightAction ? (
            rightAction
          ) : rightIcon === 'more' ? (
            <IconButton
              icon="ellipsis-vertical"
              variant="surface"
              size={40}
              iconSize={20}
              onPress={onRightPress || (() => {})}
            />
          ) : rightIcon === 'bookmark' ? (
            <IconButton
              icon={isBookmarked ? 'bookmark' : 'bookmark-outline'}
              variant="surface"
              size={40}
              iconSize={20}
              color={isBookmarked ? colors.primary : colors.textPrimary}
              active={isBookmarked}
              onPress={onRightPress || (() => {})}
            />
          ) : rightIcon === 'close' ? (
            <IconButton
              icon="close"
              variant="surface"
              size={40}
              iconSize={20}
              onPress={onRightPress || handleBack}
            />
          ) : null}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingBottom: 14,
  },
  solidBackground: {
    backgroundColor: colors.background,
  },
  transparent: {
    backgroundColor: 'transparent',
  },
  bordered: {
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    minHeight: 44,
  },
  leftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    zIndex: 2,
  },
  centerContainer: {
    position: 'absolute',
    left: 60,
    right: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleCenter: {
    fontSize: fontSizes.lg,
    fontWeight: fontWeights.bold,
    color: colors.textPrimary,
    textAlign: 'center',
  },
  subtitleCenter: {
    fontSize: fontSizes.xs,
    color: colors.textSecondary,
    marginTop: 2,
    textAlign: 'center',
  },
  titleLeft: {
    fontSize: fontSizes.xxl,
    fontWeight: fontWeights.bold,
    color: colors.textPrimary,
  },
  subtitle: {
    fontSize: fontSizes.sm,
    color: colors.textSecondary,
    marginTop: 2,
  },
  rightContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    minWidth: 40,
    zIndex: 2,
  },
});
