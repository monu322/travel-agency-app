import React from 'react';
import { TouchableOpacity, StyleSheet, ViewStyle } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { colors } from '../../theme/colors';
import { borderRadius, shadows } from '../../theme/spacing';

interface IconButtonProps {
  icon: string;
  onPress: () => void;
  size?: 'small' | 'medium' | 'large';
  variant?: 'default' | 'primary' | 'light' | 'dark' | 'transparent';
  disabled?: boolean;
  style?: ViewStyle;
  iconColor?: string;
}

export const IconButton: React.FC<IconButtonProps> = ({
  icon,
  onPress,
  size = 'medium',
  variant = 'default',
  disabled = false,
  style,
  iconColor,
}) => {
  const getSize = (): number => {
    switch (size) {
      case 'small':
        return 32;
      case 'large':
        return 48;
      default:
        return 40;
    }
  };

  const getIconSize = (): number => {
    switch (size) {
      case 'small':
        return 18;
      case 'large':
        return 26;
      default:
        return 24;
    }
  };

  const getBackgroundStyle = (): ViewStyle => {
    switch (variant) {
      case 'primary':
        return {
          backgroundColor: colors.primary,
          ...shadows.primary,
        };
      case 'light':
        return {
          backgroundColor: colors.whiteOverlay20,
        };
      case 'dark':
        return {
          backgroundColor: colors.blackOverlay30,
        };
      case 'transparent':
        return {
          backgroundColor: colors.transparent,
        };
      default:
        return {
          backgroundColor: colors.surfaceLight,
          ...shadows.sm,
        };
    }
  };

  const getIconColor = (): string => {
    if (iconColor) return iconColor;
    switch (variant) {
      case 'primary':
        return colors.textWhite;
      case 'light':
      case 'dark':
        return colors.textWhite;
      default:
        return colors.textPrimary;
    }
  };

  const buttonSize = getSize();

  return (
    <TouchableOpacity
      style={[
        styles.container,
        getBackgroundStyle(),
        {
          width: buttonSize,
          height: buttonSize,
          borderRadius: buttonSize / 2,
          opacity: disabled ? 0.5 : 1,
        },
        style,
      ]}
      onPress={onPress}
      disabled={disabled}
      activeOpacity={0.7}
    >
      <Icon name={icon} size={getIconSize()} color={getIconColor()} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default IconButton;
