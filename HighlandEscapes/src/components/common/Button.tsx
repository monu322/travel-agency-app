import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ViewStyle,
  TextStyle,
  ActivityIndicator,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { colors } from '../../theme/colors';
import { borderRadius, shadows } from '../../theme/spacing';

interface ButtonProps {
  title: string;
  onPress: () => void;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'small' | 'medium' | 'large';
  icon?: string;
  iconPosition?: 'left' | 'right';
  disabled?: boolean;
  loading?: boolean;
  fullWidth?: boolean;
  style?: ViewStyle;
  textStyle?: TextStyle;
}

export const Button: React.FC<ButtonProps> = ({
  title,
  onPress,
  variant = 'primary',
  size = 'medium',
  icon,
  iconPosition = 'right',
  disabled = false,
  loading = false,
  fullWidth = false,
  style,
  textStyle,
}) => {
  const getButtonStyle = (): ViewStyle => {
    const baseStyle: ViewStyle = {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: borderRadius.lg,
    };

    // Size styles
    switch (size) {
      case 'small':
        baseStyle.height = 40;
        baseStyle.paddingHorizontal = 16;
        break;
      case 'large':
        baseStyle.height = 56;
        baseStyle.paddingHorizontal = 24;
        break;
      default:
        baseStyle.height = 48;
        baseStyle.paddingHorizontal = 20;
    }

    // Variant styles
    switch (variant) {
      case 'secondary':
        baseStyle.backgroundColor = colors.slate200;
        break;
      case 'outline':
        baseStyle.backgroundColor = colors.transparent;
        baseStyle.borderWidth = 1;
        baseStyle.borderColor = colors.slate200;
        break;
      case 'ghost':
        baseStyle.backgroundColor = colors.transparent;
        break;
      default:
        baseStyle.backgroundColor = colors.primary;
        Object.assign(baseStyle, shadows.primary);
    }

    if (disabled) {
      baseStyle.opacity = 0.5;
    }

    if (fullWidth) {
      baseStyle.width = '100%';
    }

    return baseStyle;
  };

  const getTextStyle = (): TextStyle => {
    const baseStyle: TextStyle = {
      fontWeight: '700',
    };

    // Size styles
    switch (size) {
      case 'small':
        baseStyle.fontSize = 14;
        break;
      case 'large':
        baseStyle.fontSize = 17;
        break;
      default:
        baseStyle.fontSize = 15;
    }

    // Variant styles
    switch (variant) {
      case 'secondary':
        baseStyle.color = colors.textPrimary;
        break;
      case 'outline':
        baseStyle.color = colors.textPrimary;
        break;
      case 'ghost':
        baseStyle.color = colors.primary;
        break;
      default:
        baseStyle.color = colors.textWhite;
    }

    return baseStyle;
  };

  const getIconColor = (): string => {
    switch (variant) {
      case 'secondary':
      case 'outline':
        return colors.textPrimary;
      case 'ghost':
        return colors.primary;
      default:
        return colors.textWhite;
    }
  };

  const iconSize = size === 'small' ? 18 : size === 'large' ? 22 : 20;

  return (
    <TouchableOpacity
      style={[getButtonStyle(), style]}
      onPress={onPress}
      disabled={disabled || loading}
      activeOpacity={0.8}
    >
      {loading ? (
        <ActivityIndicator color={getIconColor()} />
      ) : (
        <>
          {icon && iconPosition === 'left' && (
            <Icon
              name={icon}
              size={iconSize}
              color={getIconColor()}
              style={{ marginRight: 8 }}
            />
          )}
          <Text style={[getTextStyle(), textStyle]}>{title}</Text>
          {icon && iconPosition === 'right' && (
            <Icon
              name={icon}
              size={iconSize}
              color={getIconColor()}
              style={{ marginLeft: 8 }}
            />
          )}
        </>
      )}
    </TouchableOpacity>
  );
};

export default Button;
