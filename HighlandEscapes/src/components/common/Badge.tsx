import React from 'react';
import { View, Text, StyleSheet, ViewStyle, TextStyle } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { colors } from '../../theme/colors';
import { borderRadius, spacing } from '../../theme/spacing';

type BadgeVariant =
  | 'primary'
  | 'success'
  | 'warning'
  | 'error'
  | 'info'
  | 'neutral';

interface BadgeProps {
  text: string;
  variant?: BadgeVariant;
  icon?: string;
  size?: 'small' | 'medium';
  style?: ViewStyle;
  textStyle?: TextStyle;
}

export const Badge: React.FC<BadgeProps> = ({
  text,
  variant = 'primary',
  icon,
  size = 'medium',
  style,
  textStyle,
}) => {
  const getBackgroundColor = (): string => {
    switch (variant) {
      case 'success':
        return colors.green100;
      case 'warning':
        return colors.amber100;
      case 'error':
        return colors.red100;
      case 'info':
        return colors.blue100;
      case 'neutral':
        return colors.slate200;
      default:
        return colors.primaryLight;
    }
  };

  const getTextColor = (): string => {
    switch (variant) {
      case 'success':
        return colors.green700;
      case 'warning':
        return colors.amber700;
      case 'error':
        return colors.red600;
      case 'info':
        return colors.blue700;
      case 'neutral':
        return colors.slate600;
      default:
        return colors.primary;
    }
  };

  const isSmall = size === 'small';

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: getBackgroundColor(),
          paddingHorizontal: isSmall ? spacing[2] : spacing[2.5],
          paddingVertical: isSmall ? spacing[0.5] : spacing[1],
        },
        style,
      ]}
    >
      {icon && (
        <Icon
          name={icon}
          size={isSmall ? 12 : 14}
          color={getTextColor()}
          style={{ marginRight: spacing[1] }}
        />
      )}
      <Text
        style={[
          styles.text,
          {
            color: getTextColor(),
            fontSize: isSmall ? 10 : 12,
          },
          textStyle,
        ]}
      >
        {text}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: borderRadius.full,
    alignSelf: 'flex-start',
  },
  text: {
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
});

export default Badge;
